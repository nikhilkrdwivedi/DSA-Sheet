import { ChapterModel } from "../models/model.js";

const create = async (payload) => {
    try {
        const result = await ChapterModel.create(payload);
        return result;
    } catch (error) {
        throw error;
    }
};

const findOneAndUpdate = async (query, payload) => {
    try {
        const result = await ChapterModel.findOneAndUpdate(query, payload, {
            new: true,
        });
        return result;
    } catch (error) {
        throw error;
    }
};
const updateMany = async (filter, update, options={}) => {
    try {
        const result = await ChapterModel.updateMany(filter,update, options).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const find = async (query, options={populate :""}) => {
    try {
        const result = await ChapterModel.find(query).populate(options.populate).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const findOne = async (query) => {
    try {
        const result = await ChapterModel.findOne(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

const countDocuments = async (query) => {
    try {
        const result = await ChapterModel.countDocuments(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

export const ChapterProvider = {
    create,
    findOneAndUpdate,
    find,
    findOne,
    countDocuments,
    updateMany,
}