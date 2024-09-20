import httpResponseMessages from "../constants/httpResponseMessages.js";
import { ChapterProvider, ProblemProvider, TopicProvider } from "../providers/provider.js";

const create = async (request, response) => {
    try {
        const { user: requestUser, body } = request;
        let payload = { ...body, createdBy: requestUser._id };
        let problem = await ProblemProvider.create(payload);
        const bulkOperations = []
        if (body?.topics?.length) {
            bulkOperations.push(
                TopicProvider.updateMany({ _id: { $in: body.topics } }, { $push: { problems: problem._id } }, { multi: true })
            )
        }
        if (body?.chapters?.length) {
            bulkOperations.push(
                ChapterProvider.updateMany({ _id: { $in: body.chapters } }, { $push: { problems: problem._id } }, { multi: true })
            )
        }
        if (bulkOperations.length) {
            await Promise.all(bulkOperations);
        }
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.CREATE_SUCCESS,
            data: problem
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
        const { problemId } = request.params;
        let payload = { ...request.body };
        let problem = await ProblemProvider.findOneAndUpdate({ _id: problemId }, payload);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.UPDATE_SUCCESS,
            data: problem
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
const getProblems = async (request, response) => {
    try {
        let query = { isActive: true };
        let topics = await ProblemProvider.find(query);
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
const getProblem = async (request, response) => {
    try {
        const { problemId } = request.params;
        let query = { isActive: true, _id: problemId };
        let problem = await ProblemProvider.findOne(query);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: problem
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const getProblemsByTopicId = async (request, response) => {
    try {
        const { topicId } = request.params;
        let query = { isActive: true, topics: { $in: [topicId] } };
        let problems = await ProblemProvider.find(query);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: problems
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
export const ProblemController = {
    create,
    getProblems,
    getProblem,
    update,
    getProblemsByTopicId
}