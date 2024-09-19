export const createChapterRequest = {
    type: "object",
    properties: {
        title: {
            type: "string",
            example: "Getting Started with Arrays",
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
        topics:{
            type: 'array',
            example: ["66ebaf74d33530ab23aa4436"]
        },
        resources: {
            type: 'object',
            properties: {
                video: {
                    type: 'array',
                    example: [{
                        index: 0,
                        url: 'https://www.youtube.com/embed/IiQvyDIRgoI?si=7-Q3_sP4bpgvjEy6',
                        source: 'youtube',
                        title: 'Getting Started with Arrays',
                    }]
                },
                blogs: {
                    type: 'array',
                    example: [
                        {
                        index: 0,
                        url: 'https://www.geeksforgeeks.org/what-is-array/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'What is Array?',
                    },
                    {
                        index: 1,
                        url: 'https://www.geeksforgeeks.org/array-representation-in-data-structures/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'Array Representation in Data Structures',
                    },
                    {
                        index: 2,
                        url: 'https://www.geeksforgeeks.org/types-of-arrays/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'Types of Arrays',
                    },
                    {
                        index: 3,
                        url: 'https://www.geeksforgeeks.org/is-array-a-data-type-or-data-structure/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'Is array a Data Type or Data Structure?',
                    },
                    {
                        index: 4,
                        url: 'https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'Applications, Advantages and Disadvantages of Array',
                    },
                    {
                        index: 5,
                        url: 'https://www.geeksforgeeks.org/why-array-data-structures-is-needed/?ref=roadmap',
                        source: 'geeksforgeeks',
                        title: 'Why Array Data Structures is needed?',
                    },
                    
                ]
                }
            }
        }
    },
};

export const createChapterResponse = {
    "success": true,
    "message": "Resource successfully created!",
    "data": {
        "name": "Array",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "topics": [],
        "problems": [],
        "createdBy": "66eac85a70e171a9dcbd5e74",
        "isActive": true,
        "_id": "66eafc32525bfe08f802a940",
        "createdAt": "2024-09-18T16:13:38.943Z",
        "updatedAt": "2024-09-18T16:13:38.943Z",
        "__v": 0
    }
};

const createChapterBadRequestExample = {
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
export const createChapterBadRequestResponse = {
    400: {
        description:
            "This will return an object having keys [success, message, error].",
        content: {
            "application/json": {
                schema: createChapterBadRequestExample,
            },
        },
    },
};
export const getChaptersSuccessResponse = {
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
                "topics": [],
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
export const getChapterSuccessResponse = {
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
            "topics": [],
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
    createChapterRequest,
    createChapterResponse,
    createChapterBadRequestResponse,
    getChaptersSuccessResponse,
    getChapterSuccessResponse
}