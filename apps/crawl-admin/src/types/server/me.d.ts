import { ServerAPI } from "./base";

export type FetchMeProfileRequest = void;

export type FetchMeProfileResponse = {
  id: string;
  email: string;
  name: string;
  role:
    | "MASTER"
    | "PROJECT_MANAGER"
    | "CUSTOMER_SUPPORT_MANAGER"
    | "UNDETERMINED";
};

export type FetchMeProfile = ServerAPI<
  FetchMeProfileRequest,
  FetchMeProfileResponse
>;
