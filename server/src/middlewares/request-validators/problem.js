
import joi from "joi";
import { error } from "./response.js";

const createRequestSchema = {
    title: joi.string().trim().required(),
    url: joi.string().trim().required(),
    source: joi.string().trim().optional(),
    note: joi.string().trim().optional(),
    level: joi.string().trim().valid('easy', 'medium', 'hard').optional(),
    tags: joi.array().items(joi.string()).optional(),
    topics: joi.array().items(joi.string()).optional(),
    chapters: joi.array().items(joi.string()).optional(),

};
const updateRequestSchema = {
    ...createRequestSchema,
    title: joi.string().trim().optional(),
};
const problemIdParamRequestSchema = {
    problemId: joi.string().min(24).trim().required()
};
const topicIdParamRequestSchema = {
    topicId: joi.string().min(24).trim().required()
};
export const createProblemValidation = (
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

export const updateProblemValidation = (
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
export const validateProblemIdParams = (
    request,
    response,
    next
) => {
    const requestParamsSchema = joi.object(problemIdParamRequestSchema);
    const requestParamsValidation = requestParamsSchema.validate(request.params);
    if (requestParamsValidation.error) {
        return error(requestParamsValidation.error, response);
    } else {
        next();
    }
};

export default {
    createProblemValidation,
    updateProblemValidation,
    validateProblemIdParams,
};