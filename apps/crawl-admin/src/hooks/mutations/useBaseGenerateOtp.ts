import { GenerateOtp } from "@/types/server/auth";
import authFetch from "@/utils/fetch/fetcher";

import type {} from "@tanstack/react-query";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

async function login({ email, password }: GenerateOtp["Request"]) {
  const response = await authFetch("/api/auth/generate-otp", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: { email, password },
  });

  return response.json();
}

function useBaseGenerateOtp<TContext = unknown>(
  options?: Omit<
    UseMutationOptions<
      GenerateOtp["Response"],
      Error,
      GenerateOtp["Request"],
      TContext
    >,
    "mutationFn"
  >
) {
  return useMutation<
    GenerateOtp["Response"],
    Error,
    GenerateOtp["Request"],
    TContext
  >({
    mutationFn: login,
    ...options,
  });
}

export { useBaseGenerateOtp };
