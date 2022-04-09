import { AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { LoginApiRequest, LoginApiResponse } from '../types/Api';
import { Api } from './Api';

export class AuthApi extends Api {
  private static loginEndpoint = '/auth/login';
  private static refreshTokenEndpoint = '/auth/refresh-token-v2';

  public static login(
    userNameCredentials: LoginApiRequest
  ): AxiosPromise<LoginApiResponse> {
    return this.post<LoginApiRequest, LoginApiResponse>(
      AuthApi.loginEndpoint,
      userNameCredentials
    );
  }

  public static refreshToken(token: string): AxiosPromise<LoginApiResponse> {
    const refreshHeader: AxiosRequestHeaders = {
      Authorization: `Bearer ${token}`,
    };
    const config: AxiosRequestConfig = {
      headers: { ...refreshHeader },
    };
    return this.get<LoginApiResponse>(AuthApi.refreshTokenEndpoint, {}, config);
  }
}
