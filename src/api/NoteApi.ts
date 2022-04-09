import { AxiosPromise } from 'axios';
import { AddNoteRequest } from '../types/Api';
import { Call, ID } from '../types/Call';
import { Api } from './Api';

export class NoteApi extends Api {
  public static addNote(id: ID, note: string): AxiosPromise<Call> {
    const noteEndpoint = `/calls/${id}/note`;
    const body: AddNoteRequest = { content: note };
    return this.post<AddNoteRequest, Call>(noteEndpoint, body);
  }
}
