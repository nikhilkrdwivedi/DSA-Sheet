import {
    loginUserRequestBody,
    logoutSuccess,
    registerNewUserRequestBody,
    registerNewUserSuccess,
    validateTokenSuccess,
    commonHttpErrors,
    badRequestError,
    internalServerError,
    conflictError,
    logoutDeniedError,
    loginUserSuccessResponse
} from "../schemas/schema.js";

const validateToken = {
    tags: ["Authentication"],
    description: "This is GET API. You can validate token of logged in users",
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: validateTokenSuccess,
                    },
                },
            },
        },
        ...commonHttpErrors,
    },
};

const logout = {
    tags: ["Authentication"],
    description: "This is GET API. User can logout using this API. If API gets allDeviceLogout in body with true. It will remove all tokens. User will not able to access app.",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        allDeviceLogout: {
                            type: 'boolean',
                            example: true
                        }
                    }

                },
            },
        },
    },
    responses: {
        200: {
            description:
                "This will return an object having keys [success, message, data].",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: logoutSuccess,
                    },
                },
            },
        },
        ...logoutDeniedError,
        500: {
            description:
                "This will return an object having keys [success, message, error]",
            content: {
                "application/json": {
                    schema: internalServerError,
                },
            },
        },
    },
};

const register = {
    tags: ["Authentication"],
    description: "This is POST API. You can add new user.",
    requestBody: {
        content: {
            "application/json": {
                schema: registerNewUserRequestBody,
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
                        example: registerNewUserSuccess,
                    },
                },
            },
        },
        ...badRequestError,
        ...conflictError,
        500: {
            description:
                "This will return an object having keys [success, message, error]",
            content: {
                "application/json": {
                    schema: internalServerError,
                },
            },
        },
    },
};

const login = {
    tags: ["Authentication"],
    description: "This is POST API. You can add new user.",
    requestBody: {
        content: {
            "application/json": {
                schema: loginUserRequestBody,
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
                        example: loginUserSuccessResponse,
                    },
                },
            },
        },
        ...badRequestError,
        500: {
            description:
                "This will return an object having keys [success, message, error]",
            content: {
                "application/json": {
                    schema: internalServerError,
                },
            },
        },
    },
};

export const authenticationsRoute = {
    "/api/v1/authentication/register": {
        post: register,
    },
    "/api/v1/authentication/login": {
        post: login,
    },
    "/api/v1/authentication/logout": {
        post: logout,
    },
    "/api/v1/authentication/validate-token": {
        get: validateToken,
    },
};

export default authenticationsRoute;