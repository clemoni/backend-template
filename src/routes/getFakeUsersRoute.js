import { getFakeUsers } from "../db/";

export const getFakeUsersRoute = {
  method: "get",
  path: "/users",
  handler: async (req, res) => {
    try {
      const users = await getFakeUsers();
      res.json(users);
    } catch (e) {
      console.error(
        `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
      );
    }
  },
};
