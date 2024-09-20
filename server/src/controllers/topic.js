import httpResponseMessages from "../constants/httpResponseMessages.js";
import { TopicProvider } from "../providers/provider.js";

const create = async (request, response) => {
    try {
        const { user: requestUser } = request;
        let payload = { ...request.body, createdBy: requestUser._id };
        let topic = await TopicProvider.create(payload);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.CREATE_SUCCESS,
            data: topic
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
        const { topicId } = request.params;
        let payload = { ...request.body };
        let topic = await TopicProvider.findOneAndUpdate({ _id: topicId }, payload);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.UPDATE_SUCCESS,
            data: topic
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};
const getTopics = async (request, response) => {
    try {
        let query = { isActive: true };
        let topics = await TopicProvider.find(query);
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
const getTopic = async (request, response) => {
    try {
        const { topicId } = request.params;
        let query = { isActive: true, _id: topicId };

        let topic = await TopicProvider.findOne(query);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.FETCH_SUCCESS,
            data: topic
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error?.message || httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

export const TopicController = {
    create,
    getTopics,
    getTopic,
    update
}