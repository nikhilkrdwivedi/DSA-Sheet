
import joi from "joi";
import { error } from "./response.js";

const createRequestSchema = {
    title: joi.string().trim().required(),
    description: joi.string().trim().optional(),
    tags: joi.array().items(joi.string()).optional(),
    chapters: joi.array().items(joi.string()).optional(),
    problems: joi.array().items(joi.string()).optional(),
};
const updateRequestSchema = {
    ...createRequestSchema,
    title: joi.string().trim().optional(),
};
const topicIdParamRequestSchema = {
    topicId: joi.string().min(24).trim().required()
};
export const createTopicValidation = (
    request,
    response,
    next
) => {
    const requestBodySchema = joi.object(createRequestSchema);
    const requestBodyValidation = requestBodySchema.validate(request.body);
    if (requestBodyValidation.error) {
        return error(requestBodyValidation.error, response);
    } else {
        next();
    }
};

export const updateTopicValidation = (
    request,
    response,
    next
) => {
    const requestBodySchema = joi.object(updateRequestSchema);
    const requestBodyValidation = requestBodySchema.validate(request.body);
    if (requestBodyValidation.error) {
        return error(requestBodyValidation.error, response);
    } else {
        next();
    }
};
export const validateTopicIdParams = (
    request,
    response,
    next
) => {
    const requestParamsSchema = joi.object(topicIdParamRequestSchema);
    const requestParamsValidation = requestParamsSchema.validate(request.params);
    if (requestParamsValidation.error) {
        return error(requestParamsValidation.error, response);
    } else {
        next();
    }
};
export default {
    createTopicValidation,
    updateTopicValidation,
    validateTopicIdParams,
};