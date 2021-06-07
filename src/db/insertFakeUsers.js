import { runAction } from "./tools";
import { insertMany } from "./tools";

const fakeUsers = [
  {
    name: "clement",
    login: "clemoni",
    admin: true,
    createdAt: new Date(),
  },
  {
    name: "camila",
    login: "camiesco",
    admin: false,
    createdAt: new Date(),
  },
  {
    name: "milo",
    login: "milodogo",
    admin: false,
    createdAt: new Date(),
  },
];

runAction("users")(insertMany)(fakeUsers)
  .then((result) => console.log(result.insertedCount))
  .catch((e) => console.log(e));
