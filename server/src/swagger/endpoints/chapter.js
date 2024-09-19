import {
    createChapterRequest,
    createChapterResponse,
    createChapterBadRequestResponse,
    accessDeniedResponse,
    getChaptersSuccessResponse,
    getChapterSuccessResponse
} from "../schemas/schema.js";

const getChapter = {
    tags: ["Chapter"],
    description: "This is GET API. You can validate token of logged in users",
    "parameters": [
        {
            "name": "chapterId",
            "in": "path",
            "required": true,
            "description": "Chapter  Id",
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
                        example: getChapterSuccessResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const getChapters = {
    tags: ["Chapter"],
    description: "This API return active chapter list.",
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: getChaptersSuccessResponse,
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const createChapter = {
    tags: ["Chapter"],
    description: "This API creates new chapter.",
    requestBody: {
        content: {
            "application/json": {
                schema: createChapterRequest,
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
                        example: createChapterResponse,
                    },
                },
            },
        },
        ...createChapterBadRequestResponse,
        ...accessDeniedResponse

    },
};

const updateChapter = {
    tags: ["Chapter"],
    description: "This API updates the chapter.",
    "parameters": [
        {
            "name": "chapterId",
            "in": "path",
            "required": true,
            "description": "Chapter  Id",
            "schema": {
                "type": "string"
            },
            "example": ""
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: createChapterRequest,
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
                        example: createChapterResponse,
                    },
                },
            },
        },
        ...createChapterBadRequestResponse,
        ...accessDeniedResponse

    },
};


export const chapterRoute = {
    "/api/v1/chapter/": {
        post: createChapter,
    },
    "/api/v1/chapter/{chapterId}/": {
        put: updateChapter,
    },
    "/api/v1/chapter": {
        get: getChapters,
    },
    "/api/v1/chapter/{chapterId}": {
        get: getChapter,
    },
};

export default chapterRoute;