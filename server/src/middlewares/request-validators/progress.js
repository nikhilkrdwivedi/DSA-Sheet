
import joi from "joi";
import { error } from "./response.js";

const createRequestSchema = {
    type: joi.string().trim().valid("chapter", "problem").required(),
    problem:  joi.string().trim().optional(),
    chapter:  joi.string().trim().optional(),
    isCompleted:  joi.boolean().required(),
};

export const createProgressValidation = (
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

export const updateProgressValidation = (
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
 

export default {
    createProgressValidation,
    updateProgressValidation,
};