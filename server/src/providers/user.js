import { UserModel } from "../models/model.js";

const create = async (payload) => {
  try {
    const result = await UserModel.create(payload);
    return result;
  } catch (error) {
    throw error;
  }
};

const findOneAndUpdate = async (query, payload) => {
  try {
    const result = await UserModel.findOneAndUpdate(query, payload, {
      new: true,
    }).lean();
    return result;
  } catch (error) {
    throw error;
  }
};

const find = async (query) => {
  try {
    const result = await UserModel.find(query).lean();
    return result;
  } catch (error) {
    throw error;
  }
};
const findOne = async (query) => {
  try {
    const result = await UserModel.findOne(query).lean();
    return result;
  } catch (error) {
    throw error;
  }
};

export const countDocuments = async (query) => {
  try {
    const result = await UserModel.countDocuments(query).lean();
    return result;
  } catch (error) {
    throw error;
  }
};

export const UserProvider = {
  create,
  findOneAndUpdate,
  find,
  findOne,
  countDocuments,
}