
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import httpResponseMessages from "../constants/httpResponseMessages.js";
import { ENVIRONMENT_CONFIGS } from "../configurations/environment.js";

import { UserProvider } from "../providers/provider.js";
import { AUTH_CONSTANTS } from "../constants/authentication.js";
import { transformUserToReturnToClient } from "../helpers/authentication.js";

const login = async (request, response) => {
    try {
        const loginUser = request.body;
        let query = {
            email: loginUser.email,
        };

        const user = await UserProvider.findOne(query);

        if (!user) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.LOGIN_ERROR,
                data: loginUser,
            });
        }

        // compare passwords
        const match = bcrypt.compareSync(loginUser.password, user.password);
        if (!match) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.LOGIN_ERROR,
                data: loginUser,
            });
        }
        // token issue with validation
        const token = jwt.sign({ userId: user._id }, ENVIRONMENT_CONFIGS.JWT_SECRET, {
            expiresIn: AUTH_CONSTANTS.expiresIn,
        });

        let updatedUser = await UserProvider.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { tokens: token } }
        );
        updatedUser = transformUserToReturnToClient(updatedUser);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.LOGIN_SUCCESS,
            data: {
                user: updatedUser,
                token,
            },
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const extractTokenFromHeader = (request) => {
    if (
        request.headers.authorization &&
        request.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        return request.headers.authorization.split(" ")[1];
    }
    return undefined;
};

const logout = async (request, response) => {
    try {
        let token = extractTokenFromHeader(request);
        if (!token) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.LOGOUT_DENIED,
                error: null,
            });
        }
        token = token.replace(/\"/g, "");
        const { allDeviceLogout } = request.body || false;
        const user = request.user;
        const isValidToken = jwt.verify(token, ENVIRONMENT_CONFIGS.JWT_SECRET);
        if (!isValidToken) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.ACCESS_DENIED,
                error: null,
            });
        }
        let updatePayload = { $pull: { tokens: token } };
        if (allDeviceLogout) {
            updatePayload = { $set: { tokens: [] } };
        }
        await UserProvider.findOneAndUpdate({ _id: user?._id }, updatePayload);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.LOGOUT_SUCCESS,
            data: {},
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const validateToken = async (request, response) => {
    try {
        let token = extractTokenFromHeader(request);

        if (!token) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.ACCESS_DENIED,
                error: null,
            });
        }

        token = token.replace(/\"/g, "");

        const isValidToken = jwt.verify(token, ENVIRONMENT_CONFIGS.JWT_SECRET);

        if (!isValidToken) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.ACCESS_DENIED,
                error: null,
            });
        }
        const { userId } = isValidToken;
        let user = await UserProvider.findOne({
            _id: userId,
            tokens: token,
        });

        if (!user) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.ACCESS_DENIED,
                error: null,
            });
        }
        user = transformUserToReturnToClient(user);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.VALID_TOKEN,
            data: user,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const register = async (request, response) => {
    try {
        const registerUser = request.body;
        //password check
        if (!AUTH_CONSTANTS.passwordRegex.test(registerUser.password)) {
            return response.status(401).json({
                success: false,
                message: httpResponseMessages.INVALID_PASSWORD_ERROR,
                error: registerUser,
            });
        }
        //user existence check
        const checkUser = await UserProvider.findOne({ email: registerUser.email });
        if (checkUser) {
            return response.status(409).json({
                success: false,
                message: httpResponseMessages.USER_ALREADY_EXIST,
                error: registerUser,
            });
        }

        // user creation test
        const password = bcrypt.hashSync(
            registerUser.password,
            AUTH_CONSTANTS.saltRounds
        );
        registerUser.password = password;
        const user = await UserProvider.create(registerUser);

        // token issue with validation
        const token = jwt.sign({ userId: user._id }, ENVIRONMENT_CONFIGS.JWT_SECRET, {
            expiresIn: AUTH_CONSTANTS.expiresIn,
        });

        // add token to user token mapping
        let updatedUser = await UserProvider.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { tokens: token } }
        );
        updatedUser = transformUserToReturnToClient(updatedUser);
        return response.status(200).json({
            success: true,
            message: httpResponseMessages.USER_CREATED,
            data: { user: updatedUser, token },
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: httpResponseMessages.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

export const UserAuthController = { login, logout, validateToken, register };