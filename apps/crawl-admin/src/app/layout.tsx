import NextUIProviders from "@/providers/NextUIProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "크롤-admin",
  description: "크롤 어드민 사이트",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NextUIProviders>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextUIProviders>
      </body>
    </html>
  );
}
