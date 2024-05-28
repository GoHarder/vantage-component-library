declare global {
  namespace Lib {
    type StyleContext = {
      select: { variant: 'filled' | 'outlined' };
      switch: {
        icons: boolean;
        showOnlySelectedIcon: boolean;
      };
      textInput: { variant: 'filled' | 'outlined' };
    };
  }

  // namespace Server {
  //   type Role = 'user' | 'admin' | 'root';

  //   interface AuthToken {
  //     id: ObjectId;
  //     role: Server.Role;
  //     iat: number;
  //     exp: number;
  //   }

  //   interface ClientErrorCodes {
  //     400: '400 Bad Request';
  //     401: '401 Unauthorized';
  //     403: '403 Forbidden';
  //     404: '404 Not Found';
  //     422: '422 Unprocessable Entity';
  //   }

  //   interface ServerErrorCodes {
  //     500: '500 Internal Server Error';
  //   }

  //   interface ErrorCodes extends ClientErrorCodes, ServerErrorCodes {}

  //   type ErrorCode = ErrorCodes[keyof ErrorCodes];
  // }

  // namespace NodeJS {
  //   interface ProcessEnv {
  //     NAME: string;
  //     HOST: string;
  //     PORT: number;
  //     PROTOCOL: 'http' | 'https';
  //     HASH: string;
  //     MONGO_URL: string;
  //     MONGO_DB: string;
  //     SMTP_HOST: string;
  //     SMTP_PORT: number;
  //     BASE_URL?: string;
  //   }
  // }

  // namespace Express {
  //   interface Request {
  //     token: Server.AuthToken;
  //   }
  // }
}

export {};
