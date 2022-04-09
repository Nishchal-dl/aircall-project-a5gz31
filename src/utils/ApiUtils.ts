import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { LoginApiResponse, QueryParams } from '../types/Api';

export function convertObjectToQueryParams(params: QueryParams = {}): string {
  const queryParams: Array<string> = Object.keys(params).map(
    (param) =>
      `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`
  );
  return `?${queryParams.join('&')}`;
}

export function addDefaultConfiguration(): AxiosRequestConfig {
  const token = localStorage.getItem('auth-token');
  const authHeader: AxiosRequestHeaders = {
    Authorization: `Bearer ${token}`,
  };
  const config: AxiosRequestConfig = {
    headers: { ...authHeader },
  };
  return config;
}

export function saveAuthToken({
  access_token,
  refresh_token,
}: LoginApiResponse) {
  localStorage.setItem('auth-token', access_token);
  localStorage.setItem('refresh-token', refresh_token);
}
