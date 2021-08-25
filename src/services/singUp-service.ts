import { Request, Response } from "express";

import { generateHash } from "../utils/generate-hash";
import { identityServiceProvider } from "./aws-identity-provider";
import { CognitoService } from "./cognito-service";

type IRequestBody = {
  username: string;
  password: string;
  email: string;
};

export async function signUpService(req: Request, res: Response) {
  const { Username, Password, UserAttributes } = validateParams(req.body);

  const SecretHash = generateHash(Username);

  const cognitoService = new CognitoService(identityServiceProvider);
  try {
    await cognitoService.signUp(Username, Password, UserAttributes, SecretHash);
    res.status(201).json({ info: "CREATED", message: "User created successful" });
  } catch (err) {
    res.status(409).json({ info: "CONFLICT", message: err.message, trace: JSON.stringify(err) });
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
