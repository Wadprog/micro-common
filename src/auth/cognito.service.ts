import { CognitoJwtVerifier } from 'aws-jwt-verify';
import {
  CognitoIdTokenPayload,
} from 'aws-jwt-verify/jwt-model';
import {
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

export class CognitoService {
  private accessVerifier: any;
  private idVerifier: any;
  private cognitoClient: CognitoIdentityProviderClient;

  constructor(private userPoolId: string, clientId: string) {
    this.accessVerifier = CognitoJwtVerifier.create({
      userPoolId,
      tokenUse: 'access',
      clientId,
    });

    this.idVerifier = CognitoJwtVerifier.create({
      userPoolId,
      tokenUse: 'id',
      clientId,
    });

    this.cognitoClient = new CognitoIdentityProviderClient({
      region: userPoolId.split('_')[0],
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async verifyTokens(accessToken: string, idToken: string) {
    try {
      if (!accessToken.startsWith('Bearer ')) {
        throw new Error('Invalid access token format');
      }

      const accessPayload = await this.accessVerifier.verify(
        accessToken.split(' ')[1]
      );
      const idPayload = await this.idVerifier.verify(idToken);

      return {
        accessPayload,
        idPayload,
      };
    } catch (error) {
      console.error('Token verification failed:', error);
      return null;
    }
  }

  getUserDetails(idPayload: CognitoIdTokenPayload) {
    return {
      username: idPayload.username,
      attributes: {
        sub: idPayload.sub,
        email: idPayload.email,
        given_name: idPayload.given_name,
        family_name: idPayload.family_name,
        email_verified: idPayload.email_verified,
        // ... other attributes from ID token
      },
    };
  }
}
