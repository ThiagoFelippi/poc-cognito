import { Request, Response } from "express";
import { generateHash } from "../utils/generate-hash";
import { identityServiceProvider } from "./aws-identity-provider";
import { CognitoService } from "./cognito-service";

type IRequestBody = {
  username: string;
  code: string;
};

export async function authVerifyService(req: Request, res: Response) {
  const { username, code } = req.body as IRequestBody;

  const SecretHash = generateHash(username);

  const cognitoService = new CognitoService(identityServiceProvider);
  try {
    await cognitoService.verifyAccount(username, code, SecretHash);
    res.status(200).json({ info: "OK", message: "User confirmed" });
  } catch (err) {
    console.log(`Unexpect error \n Error: ${JSON.stringify(err)}`);
    res.status(409).json({ info: "CONFLICT", message: err.message });
  }
}
