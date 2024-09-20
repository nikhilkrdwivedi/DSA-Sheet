import { TopicModel } from "../models/model.js";

const create = async (payload) => {
    try {
        const result = await TopicModel.create(payload);
        return result;
    } catch (error) {
        throw error;
    }
};

const findOneAndUpdate = async (query, payload) => {
    try {
        const result = await TopicModel.findOneAndUpdate(query, payload, {
            new: true,
        });
        return result;
    } catch (error) {
        throw error;
    }
};
const updateMany = async (filter, update, options = {}) => {
    try {
        const result = await TopicModel.updateMany(filter, update, options).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const find = async (query, options = { sort: { createdAt: 1 } }) => {
    try {
        const result = await TopicModel.find(query).sort(options.sort).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const findOne = async (query) => {
    try {
        const result = await TopicModel.findOne(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

const countDocuments = async (query) => {
    try {
        const result = await TopicModel.countDocuments(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

export const TopicProvider = {
    create,
    findOneAndUpdate,
    find,
    findOne,
    countDocuments,
    updateMany,
}