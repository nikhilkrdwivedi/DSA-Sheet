import httpResponseMessages from "../../constants/httpResponseMessages.js";

export const baseApiSuccessResponse = {
  success: true,
  message: httpResponseMessages.SERVER_UP_AND_RUNNING,
  data: new Date(),
};