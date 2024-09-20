import axiosHelper from "./axiosHelper";
import { ENVIRONMENT_CONFIGS } from "../configurations/environment";

const PROGRESS_ENDPOINT = "/api/v1/progress";
const ENDPOINT = ENVIRONMENT_CONFIGS.BASE_URL + PROGRESS_ENDPOINT;

export function updateProgress(payload) {
  return axiosHelper(
    `${ENDPOINT}/`,
    "POST",
    null,
    payload
  );
}
export function getProgressByTopicId(topicId) {
  return axiosHelper(
    `${ENDPOINT}/topic/${topicId}`,
    "GET",
  );
}


export default { updateProgress, getProgressByTopicId };