import { AxiosPromise } from 'axios';
import { User } from '../types/Me';
import { Api } from './Api';

export class MeApi extends Api {
  private static meEndpoint = '/me';

  public static getMyDetails(): AxiosPromise<User> {
    return this.get<User>(MeApi.meEndpoint);
  }
}
