import { ServerAPI } from "./base";

export type GenerateOtpRequest = {
  email: string;
  password: string;
};

export type GenerateOtpResponse = {
  message: string;
};

export type GenerateOtp = ServerAPI<GenerateOtpRequest, GenerateOtpResponse>;

export type VerifyOtpAndIssueTokenRequest = {
  email: string;
  otpCode: string;
};

export type VerifyOtpAndIssueTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type VerifyOtpAndIssueToken = ServerAPI<
  VerifyOtpAndIssueTokenRequest,
  VerifyOtpAndIssueTokenResponse
>;
