"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

type NextAuthProviderProps = {
  session: Session | null;
};

export default function NextAuthProvider({
  children,
  session,
}: PropsWithChildren<NextAuthProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
