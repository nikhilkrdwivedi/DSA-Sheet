import axiosHelper from "./axiosHelper";
import { ENVIRONMENT_CONFIGS } from "../configurations/environment";

const TOPIC_ENDPOINT = "/api/v1/topic";
const ENDPOINT = ENVIRONMENT_CONFIGS.BASE_URL + TOPIC_ENDPOINT;

export function getTopics() {
  return axiosHelper(
    `${ENDPOINT}/`,
    "GET",
  );
}
export function getTopic(topicId) {
  return axiosHelper(
    `${ENDPOINT}/${topicId}`,
    "GET",
  );
}


export default { getTopics, getTopic };