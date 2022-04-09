import axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import { QueryParams } from '../types/Api';
import { convertObjectToQueryParams } from '../utils/ApiUtils';

export const authInterceptor = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('auth-token');
  if (token) {~
    config.headers.Authorization = `Bearer ${token}`;
  }
  return { ...config };
};

const axiosInstance: AxiosInstance = axios.create();
axiosInstance.interceptors.request.use(authInterceptor);

export class Api {
  private static baseUrl = 'https://frontend-test-api.aircall.io';

  protected static get<T>(
    url: string,
    queryParams: QueryParams = {},
    config: Partial<AxiosRequestConfig> = {}
  ): AxiosPromise<T> {
    return axiosInstance.get(
      Api.baseUrl + url + convertObjectToQueryParams(queryParams),
      config
    );
  }

  protected static post<T, L>(
    url: string,
    body: T,
    queryParams: QueryParams = {},
    config: Partial<AxiosRequestConfig> = {}
  ): AxiosPromise<L> {
    return axiosInstance.post(
      Api.baseUrl + url + convertObjectToQueryParams(queryParams),
      body,
      config
    );
  }

  protected static put<T>(url: string): AxiosPromise<T> {
    return axiosInstance.put(url, {}, {});
  }
}
