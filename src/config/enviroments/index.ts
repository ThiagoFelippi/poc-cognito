import * as dotenv from "dotenv";
import { resolve } from "path";

const path = resolve(".env");

dotenv.config({
  path,
});

const PORT = process.env.PORT || 3000;
const REGION = process.env.REGION || "us-east-1";
const { CLIENT_ID, SECRET_HASH, ACCESS_KEY_ID, SECRET_ACCESS_KEY } = process.env;

console.log(`Getting enviroemnts from: ${path}`);

export { PORT, CLIENT_ID, SECRET_HASH, ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION };
