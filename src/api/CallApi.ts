import { AxiosPromise } from 'axios';
import { CallsApiResponse } from '../types/Api';
import { Call, ID } from '../types/Call';
import { Api } from './Api';

export const CALL_PAGE_LIMIT = 10;

export class CallApi extends Api {
  private static callsEndpoint: string = '/calls';

  public static getCalls(
    offset: number,
    limit: number = CALL_PAGE_LIMIT
  ): AxiosPromise<CallsApiResponse> {
    const queryParams = { offset, limit, call_type: 'answered' };
    return this.get<CallsApiResponse>(CallApi.callsEndpoint, queryParams);
  }

  public static getCallsById(id: ID): AxiosPromise<Call> {
    const endpoint = `${CallApi.callsEndpoint}/${id}`;
    return this.get<Call>(endpoint);
  }
}
