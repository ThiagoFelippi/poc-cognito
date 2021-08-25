import * as express from "express";

const app = express();

import { PORT } from "./config/enviroments";
import { signUpService } from "./services/singUp-service";
import { authVerifyService } from "./services/auth-verify-service";
import { signInService } from "./services/signIn-service";

function setup() {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.urlencoded({ extended: true }));
}

function routes() {
  app.post("/", signUpService);
  app.post("/verify", authVerifyService);
  app.post("/login", signInService);
}

function main() {
  setup();
  routes();
}

app.listen(PORT, () => {
  main();
  console.log(`Running at: http://localhost:${PORT}`);
});
