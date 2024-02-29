"use server";

import { Metadata } from "next";
import { PropsWithChildren } from "react";

import "./styles.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "크롤 - 희귀동물 커뮤니티",
    description:
      "파충류 커뮤니티 어플 | 파충류 커뮤니티 앱 | 파충류 분양 앱 | 파충류 먹이 앱",
    category: "파충류 커뮤니티",
    appLinks: {},
    keywords: [
      "파충류",
      "커뮤니티",
      "거북이",
      "다이어리",
      "희귀동물",
      "게코",
      "도마뱀",
      "뱀",
      "양서류",
      "절지류",
    ],
  };
}

export default async function Layout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
