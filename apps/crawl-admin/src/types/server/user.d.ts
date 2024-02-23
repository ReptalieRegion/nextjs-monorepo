import { ServerAPI } from "./base";

export type User = {
  nickname: string;
  lastAccessAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deviceInfo: {
    version: string;
    buildNumber: string;
    systemName: string;
    systemVersion: string;
  };
  profile: {
    src: string;
  };
  postCount: number;
  entityCount: number;
};
export type FetchUserListRequest = void;
export type FetchUserListResponse = User[];
export type FetchUserList = ServerAPI<
  FetchUserListRequest,
  FetchUserListResponse
>;

export type FetchUserTotalCountRequest = void;
export type FetchUserTotalCountResponse = {
  users: {
    count: number;
  };
};
export type FetchUserTotalCount = ServerAPI<
  FetchUserTotalCountRequest,
  FetchUserTotalCountResponse
>;
