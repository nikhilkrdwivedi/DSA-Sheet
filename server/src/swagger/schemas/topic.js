export const createTopicRequest = {
    type: "object",
    properties: {
        title: {
            type: "string",
            example: "Array",
            required: true,
        },
        description: {
            type: "string",
            example: "Array is a linear data structure where all elements are arranged sequentially. It is a collection of elements of same data type stored at contiguous memory locations.",
            required: true,
        },
        tags: {
            type: "array",
            example: ["DSA", "Array", "Interview"],
        },
    },
};

export const createTopicResponse = {
    "success": true,
    "message": "Resource successfully created!",
    "data": {
        "title": "Array",
        "description": "Array is a linear data structure where all elements are arranged sequentially. It is a collection of elements of same data type stored at contiguous memory locations.",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "chapters": [

        ],
        "problems": [

        ],
        "createdBy": "66eb93bd5c6a1a53aebe3604",
        "isActive": true,
        "createdAt": "2024-09-19T04:58:28.569Z",
        "updatedAt": "2024-09-20T05:09:53.607Z",
        "__v": 0
    }
};
export const updateTopicResponse = {
    "success": true,
    "message": "Resource successfully updated!",
    "data": {
        "_id": "66ebaf74d33530ab23aa4436",
        "title": "Array",
        "description": "Array is a linear data structure where all elements are arranged sequentially. It is a collection of elements of same data type stored at contiguous memory locations.",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "chapters": [
            "66ebc0a0bd17be1d4cce00fb",
            "66ebc394bd17be1d4cce0107",
            "66ecf0522189697c556ddbaa",
            "66ecf2315bb320f24f68f9fd"
        ],
        "problems": [
            "66ebe3339c251c9d67c38d41",
            "66ecf4d85bb320f24f68fa30"
        ],
        "createdBy": "66eb93bd5c6a1a53aebe3604",
        "isActive": true,
        "createdAt": "2024-09-19T04:58:28.569Z",
        "updatedAt": "2024-09-20T05:09:53.607Z",
        "__v": 0
    }
};

const createTopicBadRequestExample = {
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
export const createTopicBadRequestResponse = {
    400: {
        description:
            "This will return an object having keys [success, message, error].",
        content: {
            "application/json": {
                schema: createTopicBadRequestExample,
            },
        },
    },
};
export const getTopicsSuccessResponse = {
    type: 'object',
    example: {
        "success": true,
        "message": "Resource successfully fetched!",
        "data": [
            {
                "_id": "66eafc32525bfe08f802a940",
                "name": "Array",
                "tags": [
                    "DSA",
                    "Array",
                    "Interview"
                ],
                "chapters": [],
                "problems": [],
                "createdBy": "66eac85a70e171a9dcbd5e74",
                "isActive": true,
                "createdAt": "2024-09-18T16:13:38.943Z",
                "updatedAt": "2024-09-18T16:13:38.943Z",
                "__v": 0
            }
        ]
    }

}
export const getTopicSuccessResponse = {
    type: 'object',
    example: {
        "success": true,
        "message": "Resource successfully fetched!",
        "data": {
            "_id": "66eafc32525bfe08f802a940",
            "name": "Array",
            "tags": [
                "DSA",
                "Array",
                "Interview"
            ],
            "chapters": [],
            "problems": [],
            "createdBy": "66eac85a70e171a9dcbd5e74",
            "isActive": true,
            "createdAt": "2024-09-18T16:13:38.943Z",
            "updatedAt": "2024-09-18T16:13:38.943Z",
            "__v": 0
        }
    }


}
export default {
    createTopicRequest,
    createTopicResponse,
    createTopicBadRequestResponse,
    getTopicsSuccessResponse,
    getTopicSuccessResponse,
    updateTopicResponse
}