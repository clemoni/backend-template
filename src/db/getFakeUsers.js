import { runAction } from "./tools";
import { findAll } from "./tools";

export const getFakeUsers = async () => {
  return await runAction("users")(findAll)({});
};
