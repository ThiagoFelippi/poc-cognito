import { CognitoIdentityServiceProvider } from "aws-sdk";

import { CLIENT_ID } from "../config/enviroments";

export class CognitoService {
  constructor(private readonly identityServiceProvider: CognitoIdentityServiceProvider) {}

  public async signUp(Username: string, Password: string, UserAttributes: { Name: string; Value: string }[], SecretHash: string) {
    const params = {
      ClientId: CLIENT_ID,
      Username,
      Password,
      UserAttributes,
      SecretHash,
    };

    const response = await this.identityServiceProvider.signUp(params).promise();
    return response;
  }

  public async signIn(Username: string, Password: string, SecretHash: string) {
    const params = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: CLIENT_ID,
      AuthParameters: {
        USERNAME: Username,
        PASSWORD: Password,
        SECRET_HASH: SecretHash,
      },
    };

    const response = await this.identityServiceProvider.initiateAuth(params).promise();
    return response;
  }

  public async verifyAccount(Username: string, ConfirmationCode: string, SecretHash: string) {
    const params = {
      ClientId: CLIENT_ID,
      Username,
      ConfirmationCode,
      SecretHash,
    };

    const response = await this.identityServiceProvider.confirmSignUp(params).promise();
    return response;
  }
}
