export const createProgressRequest = {
    type: "object",
    properties: {
        chapter: {
            type: "string",
            example: "66ebc0a0bd17be1d4cce00fb",
        },
        type: {
            type: "string",
            example: "chapter",
        },
        isCompleted: {
            type: "boolean",
            example: true,
        },
    },
};

export const createProgressResponse = {
    "success": true,
    "message": "Resource successfully created!",
    "data": {
        "chapter": "66ebc0a0bd17be1d4cce00fb",
        "type": "chapter",
        "isCompleted": true
    }
}

export const getProgressResponse = {
    "success": true,
    "message": "Resource successfully fetched!",
    "data": {
        "problem": [],
        "chapter": [
            "66ebc0a0bd17be1d4cce00fb",
            "66ebc394bd17be1d4cce0107"
        ]
    }
}


export default {
    createProgressRequest,
    createProgressResponse,
    getProgressResponse

}