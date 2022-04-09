import { Call } from './Call';
import { User } from './Me';

export type QueryParams = Record<string, string | number>;

export type CallsApiResponse = {
  nodes: Array<Call>;
  totalCount: number;
  hasNextPage: boolean;
};

export type LoginApiRequest = {
  username: string;
  password: string;
};

export type LoginApiResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type AddNoteRequest = {
  content: string;
};
