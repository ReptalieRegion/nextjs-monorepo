"use client";

import { useBaseGenerateOtp } from "@/hooks/mutations/useBaseGenerateOtp";
import { useBaseVerifyOtpAndIssueToken } from "@/hooks/mutations/useBaseVerifyOtpAndIssueToken";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function LoginPage() {
  const [isShowOtpInput, setIsShowOtpInput] = useState(false);
  const router = useRouter();

  const generateOtpMutation = useBaseGenerateOtp({
    onSuccess: () => setIsShowOtpInput(true),
    onError: () => {
      console.log("hi");
    },
  });

  const verifyOtpAndIssueTokenMutation = useBaseVerifyOtpAndIssueToken({
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const handlePressLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isShowOtpInput) {
      const email = e.currentTarget.email.value;
      const otpCode = e.currentTarget.otpCode.value;
      verifyOtpAndIssueTokenMutation.mutate({ email, otpCode });
    } else {
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      generateOtpMutation.mutate({ email, password });
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={handlePressLogin}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          name="email"
          placeholder="아이디"
          className="block"
          disabled={isShowOtpInput}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="block"
          disabled={isShowOtpInput}
        />
        {isShowOtpInput && (
          <div>
            <input type="password" name="otpCode" placeholder="인증코드" />
            <button type="submit">재발급</button>
          </div>
        )}
        <button type="submit" className="text-center">
          로그인
        </button>
      </form>
    </main>
  );
}
