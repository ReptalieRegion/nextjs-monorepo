"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen h-full flex-col items-center justify-center px-24">
      <button
        className="btn bg-blue-500 text-black font-medium text-lg p-4 rounded"
        onClick={() => signIn("github")}
      >
        Login using Google
      </button>
    </div>
  );
}
