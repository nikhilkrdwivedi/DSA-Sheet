import { ProgressModel } from "../models/model.js";

const create = async (payload) => {
    try {
        const result = await ProgressModel.create(payload);
        return result;
    } catch (error) {
        throw error;
    }
};

const findOneAndUpdate = async (query, payload) => {
    try {
        const result = await ProgressModel.findOneAndUpdate(query, payload, {
            new: true,
        });
        return result;
    } catch (error) {
        throw error;
    }
};
const updateMany = async (filter, update, options = {}) => {
    try {
        const result = await ProgressModel.updateMany(filter, update, options).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const updateOne = async (filter, update, options = {}) => {
    try {
        const result = await ProgressModel.updateOne(filter, update, options);
        return result;
    } catch (error) {
        throw error;
    }
};

const find = async (query, options = { populate: "" }) => {
    try {
        const result = await ProgressModel.find(query).populate(options.populate).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const findOne = async (query) => {
    try {
        const result = await ProgressModel.findOne(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

const countDocuments = async (query) => {
    try {
        const result = await ProgressModel.countDocuments(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

export const ProgressProvider = {
    create,
    findOneAndUpdate,
    find,
    findOne,
    countDocuments,
    updateMany,
    updateOne,
}