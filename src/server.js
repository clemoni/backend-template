import express from "express";
import colors from "colors";
import { routes } from "./routes";

const PORT = 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`.rainbow);
});
