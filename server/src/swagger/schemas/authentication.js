
export const registerNewUserRequestBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Virat Kohli",
    },
    email: {
      type: "string",
      example: "ironman@gmail.com",
    },
    password: {
      type: "string",
      example: "123Nikhil@Nikhil123",
    },
  },
};

export const loginUserRequestBody = {
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "guest@gmail.com",
    },
    password: {
      type: "string",
      example: "Guest6545@",
    },
  },
};

export const registerNewUserSuccess = {
  "success": true,
  "message": "User successfully created!",
  "data": {
    "user": {
      "_id": "66ecfc8cc38c957b94c6af25",
      "name": "John Wick",
      "email": "John@gmail.com",
      "isActive": true,
      "createdAt": "2024-09-20T04:39:40.650Z",
      "updatedAt": "2024-09-20T04:39:40.695Z",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmVjZmM4Y2MzOGM5NTdiOTRjNmFmMjUiLCJpYXQiOjE3MjY4MDcxODAsImV4cCI6MTczNDU4MzE4MH0.mfBB6cv-4pzer3KQcxi1eI3l_E_T2tZWZFjDdFDHZ9Q"
  }
};
export const loginUserSuccessResponse = {
  "success": true,
  "message": "User successfully logged in!",
  "data": {
    "user": {
      "_id": "66eac85a70e171a9dcbd5e74",
      "name": "Virat Kohli",
      "email": "ironman@gmail.com",
      "isActive": true,
      "createdAt": "2024-09-18T12:32:26.760Z",
      "updatedAt": "2024-09-20T04:36:37.131Z",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmVhYzg1YTcwZTE3MWE5ZGNiZDVlNzQiLCJpYXQiOjE3MjY4MDY5OTcsImV4cCI6MTczNDU4Mjk5N30.ZwVJS7dL_23ps3iUFStqNZuqePYwWYlhTvuGG7sbZD0"
  }
}
export const validateTokenSuccess = {
  success: true,
  message: "Token is valid!",
  data: {
    _id: "63fb62dd7bc36b37f30b1f62",
    name: "Virat Kohli",
    email: "ironman@gmail.com",
    isActive: true,
    createdAt: "2023-02-26T13:47:09.595Z",
    updatedAt: "2023-02-26T13:58:30.090Z",
    __v: 0,
  },
};

export const logoutSuccess = {
  success: true,
  message: "User successfully logged out!",
  data: {},
};

export default {
  registerNewUserRequestBody,
  loginUserRequestBody,
  registerNewUserSuccess,
  validateTokenSuccess,
  logoutSuccess,
  loginUserSuccessResponse
};
