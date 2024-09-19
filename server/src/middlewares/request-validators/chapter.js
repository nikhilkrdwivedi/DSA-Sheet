
import joi from "joi";
import { error } from "./response.js";

const createRequestSchema = {
    title: joi.string().trim().required(),
    level: joi.string().trim().valid('easy', 'medium', 'hard').optional(),
    tags: joi.array().items(joi.string()).optional(),
    topics: joi.array().items(joi.string()).optional(),
    problems: joi.array().items(joi.string()).optional(),
    resources: joi.object({
        video: joi.array().items(
            joi.object({
                index: joi.number().optional(),
                url: joi.string().optional(),
                source: joi.string().optional(),
                title: joi.string().optional(),
            })),
        blogs: joi.array().items(
            joi.object({
                index: joi.number().optional(),
                url: joi.string().optional(),
                source: joi.string().optional(),
                title: joi.string().optional(),
            })),
    }).required()
};
const updateRequestSchema = {
    ...createRequestSchema,
    title: joi.string().trim().optional(),
};
const chapterIdParamRequestSchema = {
    chapterId: joi.string().min(24).trim().required()
};

export const createChapterValidation = (
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

export const updateChapterValidation = (
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
export const validateChapterIdParams = (
    request,
    response,
    next
) => {
    const requestParamsSchema = joi.object(chapterIdParamRequestSchema);
    const requestParamsValidation = requestParamsSchema.validate(request.params);
    if (requestParamsValidation.error) {
        return error(requestParamsValidation.error, response);
    } else {
        next();
    }
};

export default {
    createChapterValidation,
    updateChapterValidation,
    validateChapterIdParams,
};