import { ProblemModel } from "../models/model.js";

const create = async (payload) => {
    try {
        const result = await ProblemModel.create(payload);
        return result;
    } catch (error) {
        throw error;
    }
};
const updateMany = async (filter, update, options={}) => {
    try {
        const result = await ProblemModel.updateMany(filter,update, options).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const findOneAndUpdate = async (query, payload) => {
    try {
        const result = await ProblemModel.findOneAndUpdate(query, payload, {
            new: true,
        });
        return result;
    } catch (error) {
        throw error;
    }
};

const find = async (query) => {
    try {
        const result = await ProblemModel.find(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};
const findOne = async (query) => {
    try {
        const result = await ProblemModel.findOne(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

const countDocuments = async (query) => {
    try {
        const result = await ProblemModel.countDocuments(query).lean();
        return result;
    } catch (error) {
        throw error;
    }
};

export const ProblemProvider = {
    create,
    findOneAndUpdate,
    find,
    findOne,
    countDocuments,
    updateMany,
}