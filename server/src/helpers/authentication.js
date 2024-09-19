import { BLACKLIST_KEYS_FOR_RETURN_USER } from "../constants/authentication.js";

export const transformUserToReturnToClient = (payload) => {
  BLACKLIST_KEYS_FOR_RETURN_USER.forEach((key) => delete payload[key]);
  return payload;
};

export default { transformUserToReturnToClient };