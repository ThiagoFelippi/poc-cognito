import * as AWS from "aws-sdk";

import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } from "../config/enviroments";

AWS.config.update({
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  region: REGION,
});

export const identityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2021-08-23",
  region: REGION,
});
