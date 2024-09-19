import { baseApiSuccessResponse } from "../schemas/schema.js";

const getBaseAPIResponse = {
  tags: ["Base"],
  description:
    "This is test API. If you get response then app is up and running.",
  responses: {
    200: {
      description:
        "This will return an object having keys [success, message, data]",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: baseApiSuccessResponse,
          },
        },
      },
    },
  },
};
export const baseRoute = {
  "/": {
    get: getBaseAPIResponse,
  },
};
export default baseRoute;