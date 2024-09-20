export const createProblemRequest = {
    type: "object",
    properties: {
        title: {
            type: "string",
            example: "Remove Element",
            required: true,
        },
        url: {
            type: "string",
            example: "https://leetcode.com/problems/remove-element/description/",
            required: true,
        },
        source: {
            type: "string",
            example: "LeetCode",
            required: true,
        },
        note: {
            type: "string",
            example: "Complete theory first for better understandings.",
            required: true,
        },
        level: {
            type: "string",
            example: "easy",
            required: true,
        },
        tags: {
            type: "array",
            example: ["DSA", "Array", "Interview"],
        },
        topics: {
            type: 'array',
            example: ["66ebaf74d33530ab23aa4436"]
        },
        chapters: {
            type: 'array',
            example: ["66ebc0a0bd17be1d4cce00fb"]
        },
    },
};

export const createProblemResponse = {
    "success": true,
    "message": "Resource successfully created!",
    "data": {
        "title": "Remove Element",
        "url": "https://leetcode.com/problems/remove-element/description/",
        "source": "LeetCode",
        "note": "Complete theory first for better understandings.",
        "level": "easy",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "topics": [
            "66ebaf74d33530ab23aa4436"
        ],
        "chapters": [
            "66ebc0a0bd17be1d4cce00fb"
        ],
        "createdBy": "66eb93bd5c6a1a53aebe3604",
        "isActive": true,
        "_id": "66ebe3339c251c9d67c38d41",
        "createdAt": "2024-09-19T08:39:15.358Z",
        "updatedAt": "2024-09-19T08:39:15.358Z",
        "__v": 0
    }
}

const createProblemBadRequestExample = {
    type: "object",
    example: {
        "success": false,
        "message": "E11000 duplicate key error collection: DSA-Sheet.topics index: name_1 dup key: { name: \"Array\" }",
        "error": {
            "errorResponse": {
                "index": 0,
                "code": 11000,
                "errmsg": "E11000 duplicate key error collection: DSA-Sheet.topics index: name_1 dup key: { name: \"Array\" }",
                "keyPattern": {
                    "name": 1
                },
                "keyValue": {
                    "name": "Array"
                }
            },
            "index": 0,
            "code": 11000,
            "keyPattern": {
                "name": 1
            },
            "keyValue": {
                "name": "Array"
            }
        }
    }
}
export const createProblemBadRequestResponse = {
    400: {
        description:
            "This will return an object having keys [success, message, error].",
        content: {
            "application/json": {
                schema: createProblemBadRequestExample,
            },
        },
    },
};
export const getProblemsSuccessResponse = {
    "success": true,
    "message": "Resource successfully fetched!",
    "data": [
        {
            "_id": "66ebe3339c251c9d67c38d41",
            "title": "Remove Element",
            "url": "https://leetcode.com/problems/remove-element/description/",
            "source": "LeetCode",
            "note": "Complete theory first for better understandings.",
            "level": "easy",
            "tags": [
                "DSA",
                "Array",
                "Interview"
            ],
            "topics": [
                "66ebaf74d33530ab23aa4436"
            ],
            "chapters": [
                "66ebc394bd17be1d4cce0107"
            ],
            "createdBy": "66eb93bd5c6a1a53aebe3604",
            "isActive": true,
            "createdAt": "2024-09-19T08:39:15.358Z",
            "updatedAt": "2024-09-19T08:39:15.358Z",
            "__v": 0
        }
    ]
}
export const getProblemSuccessResponse = {
    "success": true,
    "message": "Resource successfully fetched!",
    "data":
    {
        "_id": "66ebe3339c251c9d67c38d41",
        "title": "Remove Element",
        "url": "https://leetcode.com/problems/remove-element/description/",
        "source": "LeetCode",
        "note": "Complete theory first for better understandings.",
        "level": "easy",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "topics": [
            "66ebaf74d33530ab23aa4436"
        ],
        "chapters": [
            "66ebc394bd17be1d4cce0107"
        ],
        "createdBy": "66eb93bd5c6a1a53aebe3604",
        "isActive": true,
        "createdAt": "2024-09-19T08:39:15.358Z",
        "updatedAt": "2024-09-19T08:39:15.358Z",
        "__v": 0
    }
}
export default {
    createProblemRequest,
    createProblemResponse,
    createProblemBadRequestResponse,
    getProblemsSuccessResponse,
    getProblemSuccessResponse
}