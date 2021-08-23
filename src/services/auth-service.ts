import * as AWS from "aws-sdk";
import * as crypto from "crypto";
import { Request, Response } from "express";
import { CLIENT_ID, SECRET_HASH, ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } from "../config/enviroments";

type IRequestBody = {
  username: string;
  password: string;
  email: string;
};

AWS.config.update({
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  region: REGION,
});

export async function authService(req: Request, res: Response) {
  const { Username, Password, UserAttributes } = validateParams(req.body);

  const identityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2021-08-23",
    region: REGION,
  });
  const SecretHash = generateHash(Username);

  try {
    await identityServiceProvider
      .signUp({
        ClientId: CLIENT_ID,
        Username,
        Password,
        UserAttributes,
        SecretHash,
      })
      .promise();

    res.status(200).json({ status: 200, message: "User created successful", info: "OK" });
  } catch (err) {
    console.log(`Unexpected error occur ${JSON.stringify(err)}`);
    res.status(400).json({ status: 409, message: err.message, info: "CONFLICT" });
  }
}

function validateParams(body: IRequestBody) {
  const { username, password, email } = body ?? {};

  if (!username || !password || !email) {
    throw new Error("Required params not send");
  }

  return {
    Username: username,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  };
}

function generateHash(username: string) {
  return crypto
    .createHmac("sha256", SECRET_HASH)
    .update(username + CLIENT_ID)
    .digest("base64");
}
