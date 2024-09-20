import {
    createProblemRequest,
    createProblemResponse,
    createProblemBadRequestResponse,
    accessDeniedResponse,
    getProblemsSuccessResponse,
    getProblemSuccessResponse
} from "../schemas/schema.js";

const getProblem = {
    tags: ["Problem"],
    description: "This is API return problem based on given problem id.",
    "parameters": [
        {
            "name": "problemId",
            "in": "path",
            "required": true,
            "description": "Problem Id",
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
                        example: getProblemSuccessResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const getProblems = {
    tags: ["Problem"],
    description: "This API return active problem list.",
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: getProblemsSuccessResponse,
                },
            },
        },
        ...accessDeniedResponse,
    },
};

const createProblem = {
    tags: ["Problem"],
    description: "This API creates new problem.",
    requestBody: {
        content: {
            "application/json": {
                schema: createProblemRequest,
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
                        example: createProblemResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse

    },
};

const updateProblem = {
    tags: ["Problem"],
    description: "This API updates the problem.",
    "parameters": [
        {
            "name": "problemId",
            "in": "path",
            "required": true,
            "description": "Problem Id",
            "schema": {
                "type": "string"
            },
            "example": ""
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: createProblemRequest,
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
                        example: createProblemResponse,
                    },
                },
            },
        },
        ...accessDeniedResponse

    },
};


export const problemRoute = {
    "/api/v1/problem/": {
        post: createProblem,
    },
    "/api/v1/problem/{problemId}/": {
        put: updateProblem,
    },
    "/api/v1/problem": {
        get: getProblems,
    },
    "/api/v1/problem/{problemId}": {
        get: getProblem,
    },
};

export default problemRoute;