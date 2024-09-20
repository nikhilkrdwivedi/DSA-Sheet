import {
    createProgressRequest,
    createProgressResponse,
    accessDeniedResponse,
    getProgressResponse
} from "../schemas/schema.js";

const getProgressByTopicId = {
    tags: ["Progress"],
    description: "This is GET API. This returns the user progress chapter and problem wise.",
    "parameters": [
        {
            "name": "topicId",
            "in": "path",
            "required": true,
            "description": "Topic Id",
            "schema": {
                "type": "string"
            },
            "example": "66ebaf74d33530ab23aa4436"
        }
    ],
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: getProgressResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse,
    },
};


const createProgress = {
    tags: ["Progress"],
    description: "This API creates new problem.",
    requestBody: {
        content: {
            "application/json": {
                schema: createProgressRequest,
            },
        },
    },
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data]",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: createProgressResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse

    },
};




export const progressRoute = {
    "/api/v1/progress/": {
        post: createProgress,
    },
    "/api/v1/progress/topic/{topicId}": {
        get: getProgressByTopicId,
    },

};

export default progressRoute;