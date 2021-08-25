import { Request, Response } from "express";
import { generateHash } from "../utils/generate-hash";
import { identityServiceProvider } from "./aws-identity-provider";
import { CognitoService } from "./cognito-service";

type IRequestBody = {
  username: string;
  password: string;
};

export async function signInService(req: Request, res: Response) {
  const { username, password } = req.body as IRequestBody;

  const SecretHash = generateHash(username);

  const cognitoService = new CognitoService(identityServiceProvider);
  try {
    const response = await cognitoService.signIn(username, password, SecretHash);
    res.status(200).json({
      info: "OK",
      message: "User logged",
      data: {
        AccessToken: response.AuthenticationResult.AccessToken,
        RefreshToken: response.AuthenticationResult.RefreshToken,
        TokenType: response.AuthenticationResult.TokenType,
        ExpiresIn: response.AuthenticationResult.ExpiresIn,
      },
    });
  } catch (err) {
    console.log(`Unexpect error \n Error: ${JSON.stringify(err)}`);
    res.status(409).json({ info: "CONFLICT", message: err.message });
  }
}
