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
        "_id": "66eafc32525bfe08f802a940",
        "createdAt": "2024-09-18T16:13:38.943Z",
        "updatedAt": "2024-09-18T16:13:38.943Z",
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
    getTopicSuccessResponse
}