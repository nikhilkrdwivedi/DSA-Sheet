import axiosHelper from "./axiosHelper";
import {ENVIRONMENT_CONFIGS} from "../configurations/environment";

const TOPIC_ENDPOINT = "/api/v1/chapter";
const ENDPOINT = ENVIRONMENT_CONFIGS.BASE_URL + TOPIC_ENDPOINT;
console.log('😀😀😀 line 6 🚀🚀🚀',ENVIRONMENT_CONFIGS );
export function getTopics() {
  return axiosHelper(
    `${ENDPOINT}/`,
    "GET",
  );
}
export function getChaptersByTopicId(topicId) {
  return axiosHelper(
    `${ENDPOINT}/topic/${topicId}`,
    "GET",
  );
}
 

export default { getTopics, getChaptersByTopicId };