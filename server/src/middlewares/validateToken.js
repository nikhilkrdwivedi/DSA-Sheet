import jwt from "jsonwebtoken";

import { UserProvider } from "../providers/provider.js";

import {ENVIRONMENT_CONFIGS} from "../configurations/environment.js";

import httpResponseMessages from "../constants/httpResponseMessages.js";
 

const extractTokenFromHeader = (request) => {
  if (
    request.headers.authorization &&
    request.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return request.headers.authorization.split(" ")[1];
  }
  return undefined;
};

export const validateToken = async (
  request,
  response,
  next
) => {
  let token = extractTokenFromHeader(request);
  console.log('😀😀😀 line 26 🚀🚀🚀', token);
  if (!token) {
    return response.status(401).json({
      success: false,
      message: httpResponseMessages.ACCESS_DENIED,
      error: null,
    });
  }
  token = token.replace(/\"/g, "");
  console.log('😀😀😀 line 34 🚀🚀🚀', token);
  try {
    const userToken = jwt.verify(token, ENVIRONMENT_CONFIGS.JWT_SECRET);
    if (!userToken) {
      return response.status(401).json({
        success: false,
        message: httpResponseMessages.ACCESS_DENIED,
        error: null,
      });
    }

    const user = await UserProvider.findOne({
      _id: userToken.userId,
      tokens: token,
    });
    console.log('😀😀😀 line 48 🚀🚀🚀', user);
    if (!user) {
      return response.status(401).json({
        success: false,
        message: httpResponseMessages.ACCESS_DENIED,
        error: null,
      });
    }
    request.user = user;
    next();
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: httpResponseMessages.ACCESS_DENIED,
      error: null,
    });
  }
};

export default validateToken;