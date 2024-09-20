import axiosHelper from "./axiosHelper";
import { ENVIRONMENT_CONFIGS } from "../configurations/environment";

const AUTHENTICATION_ENDPOINT = "/api/v1/authentication";
const ENDPOINT = ENVIRONMENT_CONFIGS.BASE_URL + AUTHENTICATION_ENDPOINT;

export function validateToken() {
  return axiosHelper(
    `${ENDPOINT}/validate-token`,
    "GET",
  );
}
export function login(payload) {
  return axiosHelper(
    `${ENDPOINT}/login`,
    "POST",
    null,
    payload
  );
}

export function register(payload) {
  return axiosHelper(
    `${ENDPOINT}/register`,
    "POST",
    null,
    payload
  );
}

export function logout(body = {}) {
  return axiosHelper(
    `${ENDPOINT}/logout`,
    "POST",
    null,
    body
  );
}

export default { validateToken, login, logout, register };