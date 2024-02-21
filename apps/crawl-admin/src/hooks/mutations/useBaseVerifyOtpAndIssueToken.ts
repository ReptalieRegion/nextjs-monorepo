import { VerifyOtpAndIssueToken } from "@/types/server/auth";
import authFetch from "@/utils/fetch/fetcher";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

async function verifyOtpAndIssueToken({
  email,
  otpCode,
}: VerifyOtpAndIssueToken["Request"]) {
  const response = await authFetch("/api/auth/verify-otp-and-issue-token", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: { email, otpCode },
  });

  return response.json();
}

function useBaseVerifyOtpAndIssueToken<TContext = unknown>(
  options?: Omit<
    UseMutationOptions<
      VerifyOtpAndIssueToken["Response"],
      Error,
      VerifyOtpAndIssueToken["Request"],
      TContext
    >,
    "mutationFn"
  >,
) {
  return useMutation<
    VerifyOtpAndIssueToken["Response"],
    Error,
    VerifyOtpAndIssueToken["Request"],
    TContext
  >({
    mutationFn: verifyOtpAndIssueToken,
    ...options,
  });
}

export { useBaseVerifyOtpAndIssueToken };
