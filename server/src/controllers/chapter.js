import httpResponseMessages from "../constants/httpResponseMessages.js";
import { ChapterProvider, TopicProvider, ProblemProvider } from "../providers/provider.js";

const create = async (request, response) => {
    try {
        const { user: requestUser, body } = request;
        let payload = { ...body, createdBy: requestUser._id };
        let chapter = await ChapterProvider.create(payload);
        const bulkOperations = []
        if (body?.topics?.length) {
            bulkOperations.push(
                TopicProvider.updateMany({ _id: { $in: body.topics } }, { $push: { chapters: chapter._id } }, { multi: true })
            )
        }
        if (body?.problems?.length) {
            bulkOperations.push(
                ProblemProvider.updateMany({ _id: { $in: body.problems } }, { $push: { chapters: chapter._id } }, { multi: true })
            )
        }
        if (bulkOperations.length) {
            await Promise.all(bulkOperations);
        }
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.CREATE_SUCCESS,
            data: chapter
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
const update = async (request, response) => {
    try {
        const { user: requestUser } = request;
        const { chapterId } = request.params;
        let payload = { ...request.body };
        let chapter = await ChapterProvider.findOneAndUpdate({ _id: chapterId }, payload);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.UPDATE_SUCCESS,
            data: chapter
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
const getChapters = async (request, response) => {
    try {
        let query = { isActive: true };
        let topics = await ChapterProvider.find(query);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: topics
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
const getChapter = async (request, response) => {
    try {
        const { chapterId } = request.params;
        let query = { isActive: true, _id: chapterId };
        let chapter = await ChapterProvider.findOne(query);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: chapter
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const getChaptersByTopicId = async (request, response) => {
    try {
        const { topicId } = request.params;
        let query = { isActive: true, topics: { $in: [topicId] } };
        let chapters = await ChapterProvider.find(query, { populate: "problems" });
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: chapters
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
export const ChapterController = {
    create,
    getChapters,
    getChapter,
    update,
    getChaptersByTopicId
}