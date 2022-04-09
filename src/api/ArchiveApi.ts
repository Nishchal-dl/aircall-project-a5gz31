import { AxiosPromise } from 'axios';
import { ID } from '../types/Call';
import { Api } from './Api';

export class ArchiveApi extends Api {
  public static toggleArchive(id: ID): AxiosPromise<void> {
    const archiveEndpoint = `/calls/${id}/archive`;
    return this.put<void>(archiveEndpoint);
  }
}
