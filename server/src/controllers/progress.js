import httpResponseMessages from "../constants/httpResponseMessages.js";
import { ProgressProvider, TopicProvider } from "../providers/provider.js";

const create = async (request, response) => {
    try {
        const { user: requestUser, body } = request;
        let update = { ...body, createdBy: requestUser._id };
        let filter = { [body.type]: body[body.type], createdBy: requestUser._id };
        await ProgressProvider.updateOne(filter, update, { upsert: true, new: true });

        return response.status(200).json({
            success: true,
            message: httpResponseMessages.CREATE_SUCCESS,
            data: body
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const getProgressByTopicId = async (request, response) => {
    try {
        const { topicId } = request.params;
        const { user: requestUser, } = request;

        let query = { isActive: true, topics: { $in: [topicId] }, createdBy: requestUser?._id };
        const { chapters = [], problems = [] } = await TopicProvider.findOne({ isActive: true, _id: { $in: [topicId] } });

        const baseQuery = { isActive: true, isCompleted: true, createdBy: requestUser?._id, }

        let chapterWiseProgress = [], problemWiseProgress = [];
        // this can be done using aggregation - [PENDING DEV]
        if (chapters?.length) {
            chapterWiseProgress = await ProgressProvider.find({ ...baseQuery, chapter: { $in: chapters } });
        }
        if (problems?.length) {
            problemWiseProgress = await ProgressProvider.find({ ...baseQuery, problem: { $in: problems } });
        }

        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: {
                problem: problemWiseProgress.map(item => item.problem),
                chapter: chapterWiseProgress.map(item => item.chapter),
            }
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
export const ProgressController = {
    create,
    getProgressByTopicId
}