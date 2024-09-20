import {
    createTopicRequest,
    createTopicResponse,
    createTopicBadRequestResponse,
    accessDeniedResponse,
    getTopicsSuccessResponse,
    getTopicSuccessResponse,
    updateTopicResponse
} from "../schemas/schema.js";

const getTopic = {
    tags: ["Topic"],
    description: "This API return topic.",
    "parameters": [
        {
            "name": "topicId",
            "in": "path",
            "required": true,
            "description": "Topic Id",
            "schema": {
                "type": "string"
            },
            "example": ""
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
                        example: getTopicSuccessResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const getTopics = {
    tags: ["Topic"],
    description: "This API return active topic list.",
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: getTopicsSuccessResponse,
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const createTopic = {
    tags: ["Topic"],
    description: "This API creates new topic.",
    requestBody: {
        content: {
            "application/json": {
                schema: createTopicRequest,
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
                        example: createTopicResponse,
                    },
                },
            },
        },
        ...createTopicBadRequestResponse,
        ...accessDeniedResponse

    },
};

const updateTopic = {
    tags: ["Topic"],
    description: "This API updates the topic.",
    "parameters": [
        {
            "name": "topicId",
            "in": "path",
            "required": true,
            "description": "Topic Id",
            "schema": {
                "type": "string"
            },
            "example": ""
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: createTopicRequest,
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
                        example: updateTopicResponse,
                    },
                },
            },
        },
        ...createTopicBadRequestResponse,
        ...accessDeniedResponse

    },
};


export const topicRoute = {
    "/api/v1/topic/": {
        post: createTopic,
    },
    "/api/v1/topic/{topicId}/": {
        put: updateTopic,
    },
    "/api/v1/topic": {
        get: getTopics,
    },
    "/api/v1/topic/{topicId}": {
        get: getTopic,
    },
};

export default topicRoute;