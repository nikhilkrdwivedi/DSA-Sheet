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
        topics: {
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
        "title": "Array Searching",
        "level": "medium",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "resources": {
            "video": [
                {
                    "index": 0,
                    "url": "https://www.youtube.com/embed/13ocRMSJy5M?si=LK4SoOaKexhdoSqv",
                    "source": "youtube",
                    "title": "Array Searching"
                }
            ],
            "blogs": [
                {
                    "index": 0,
                    "url": "https://www.geeksforgeeks.org/linear-search/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Introduction to Linear Search Algorithm"
                },
                {
                    "index": 1,
                    "url": "https://www.geeksforgeeks.org/binary-search/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Binary Search Algorithm – Iterative and Recursive Implementation"
                }
            ]
        },
        "topics": [
            "66ebaf74d33530ab23aa4436"
        ],
        "problems": [],
        "createdBy": "66eac85a70e171a9dcbd5e74",
        "isActive": true,
        "_id": "66ecf0522189697c556ddbaa",
        "createdAt": "2024-09-20T03:47:30.874Z",
        "updatedAt": "2024-09-20T03:47:30.874Z",
        "__v": 0
    }
};

const createChapterBadRequestExample = {
    type: "object",
    example: {
        "success": false,
        "message": "Bad request, please try again!",
        "error": "Title is required!"
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

    "success": true,
    "message": "Resource successfully fetched!",
    "data": [
        {
            "_id": "66ebc0a0bd17be1d4cce00fb",
            "title": "Getting Started with Arrays",
            "level": "easy",
            "tags": [
                "DSA",
                "Array",
                "Interview"
            ],
            "resources": {
                "video": [
                    {
                        "index": 0,
                        "url": "https://www.youtube.com/embed/IiQvyDIRgoI?si=7-Q3_sP4bpgvjEy6",
                        "source": "youtube",
                        "title": "Getting Started with Arrays"
                    }
                ],
                "blogs": [
                    {
                        "index": 0,
                        "url": "https://www.geeksforgeeks.org/what-is-array/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "What is Array?"
                    },
                    {
                        "index": 1,
                        "url": "https://www.geeksforgeeks.org/array-representation-in-data-structures/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Array Representation in Data Structures"
                    },
                    {
                        "index": 2,
                        "url": "https://www.geeksforgeeks.org/types-of-arrays/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Types of Arrays"
                    },
                    {
                        "index": 3,
                        "url": "https://www.geeksforgeeks.org/is-array-a-data-type-or-data-structure/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Is array a Data Type or Data Structure?"
                    },
                    {
                        "index": 4,
                        "url": "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Applications, Advantages and Disadvantages of Array"
                    },
                    {
                        "index": 5,
                        "url": "https://www.geeksforgeeks.org/why-array-data-structures-is-needed/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Why Array Data Structures is needed?"
                    }
                ]
            },
            "topics": [
                "66ebaf74d33530ab23aa4436"
            ],
            "problems": [],
            "createdBy": "66eb93bd5c6a1a53aebe3604",
            "isActive": true,
            "createdAt": "2024-09-19T06:11:44.422Z",
            "updatedAt": "2024-09-19T08:39:15.455Z",
            "__v": 0
        },
    ]
}
export const getChapterSuccessResponse = {

    "success": true,
    "message": "Resource successfully fetched!",
    "data": {
        "_id": "66ebc0a0bd17be1d4cce00fb",
        "title": "Getting Started with Arrays",
        "level": "easy",
        "tags": [
            "DSA",
            "Array",
            "Interview"
        ],
        "resources": {
            "video": [
                {
                    "index": 0,
                    "url": "https://www.youtube.com/embed/IiQvyDIRgoI?si=7-Q3_sP4bpgvjEy6",
                    "source": "youtube",
                    "title": "Getting Started with Arrays"
                }
            ],
            "blogs": [
                {
                    "index": 0,
                    "url": "https://www.geeksforgeeks.org/what-is-array/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "What is Array?"
                },
                {
                    "index": 1,
                    "url": "https://www.geeksforgeeks.org/array-representation-in-data-structures/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Array Representation in Data Structures"
                },
                {
                    "index": 2,
                    "url": "https://www.geeksforgeeks.org/types-of-arrays/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Types of Arrays"
                },
                {
                    "index": 3,
                    "url": "https://www.geeksforgeeks.org/is-array-a-data-type-or-data-structure/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Is array a Data Type or Data Structure?"
                },
                {
                    "index": 4,
                    "url": "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Applications, Advantages and Disadvantages of Array"
                },
                {
                    "index": 5,
                    "url": "https://www.geeksforgeeks.org/why-array-data-structures-is-needed/?ref=roadmap",
                    "source": "geeksforgeeks",
                    "title": "Why Array Data Structures is needed?"
                }
            ]
        },
        "topics": [
            "66ebaf74d33530ab23aa4436"
        ],
        "problems": [],
        "createdBy": "66eb93bd5c6a1a53aebe3604",
        "isActive": true,
        "createdAt": "2024-09-19T06:11:44.422Z",
        "updatedAt": "2024-09-19T08:39:15.455Z",
        "__v": 0
    }
}

export const getChaptersByTopicIdResponse = {
    "success": true,
    "message": "Resource successfully fetched!",
    "data": [
        {
            "_id": "66ebc0a0bd17be1d4cce00fb",
            "title": "Getting Started with Arrays",
            "level": "easy",
            "tags": [
                "DSA",
                "Array",
                "Interview"
            ],
            "resources": {
                "video": [
                    {
                        "index": 0,
                        "url": "https://www.youtube.com/embed/IiQvyDIRgoI?si=7-Q3_sP4bpgvjEy6",
                        "source": "youtube",
                        "title": "Getting Started with Arrays"
                    }
                ],
                "blogs": [
                    {
                        "index": 0,
                        "url": "https://www.geeksforgeeks.org/what-is-array/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "What is Array?"
                    },
                    {
                        "index": 1,
                        "url": "https://www.geeksforgeeks.org/array-representation-in-data-structures/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Array Representation in Data Structures"
                    },
                    {
                        "index": 2,
                        "url": "https://www.geeksforgeeks.org/types-of-arrays/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Types of Arrays"
                    },
                    {
                        "index": 3,
                        "url": "https://www.geeksforgeeks.org/is-array-a-data-type-or-data-structure/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Is array a Data Type or Data Structure?"
                    },
                    {
                        "index": 4,
                        "url": "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Applications, Advantages and Disadvantages of Array"
                    },
                    {
                        "index": 5,
                        "url": "https://www.geeksforgeeks.org/why-array-data-structures-is-needed/?ref=roadmap",
                        "source": "geeksforgeeks",
                        "title": "Why Array Data Structures is needed?"
                    }
                ]
            },
            "topics": [
                "66ebaf74d33530ab23aa4436"
            ],
            "problems": [],
            "createdBy": "66eb93bd5c6a1a53aebe3604",
            "isActive": true,
            "createdAt": "2024-09-19T06:11:44.422Z",
            "updatedAt": "2024-09-19T08:39:15.455Z",
            "__v": 0
        },
    ]
}
export default {
    createChapterRequest,
    createChapterResponse,
    createChapterBadRequestResponse,
    getChaptersSuccessResponse,
    getChapterSuccessResponse,
    getChaptersByTopicIdResponse
}