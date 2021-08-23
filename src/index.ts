import * as express from "express";

const app = express();

import { PORT } from "./config/enviroments";
import { authService } from "./services/auth-service";

function setup() {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.urlencoded({ extended: true }));
}

function routes() {
  app.post("/", authService);
}

function main() {
  setup();
  routes();
}

app.listen(PORT, () => {
  main();
  console.log(`Running at: http://localhost:${PORT}`);
});
