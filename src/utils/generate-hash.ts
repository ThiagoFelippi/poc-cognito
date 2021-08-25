import * as crypto from "crypto";

import { CLIENT_ID, SECRET_HASH } from "../config/enviroments";


export function generateHash(username: string) {
  return crypto
    .createHmac("sha256", SECRET_HASH)
    .update(username + CLIENT_ID)
    .digest("base64");
}
