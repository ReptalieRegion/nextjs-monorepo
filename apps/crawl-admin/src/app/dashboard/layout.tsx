"use client";
import SlideBar from "@/components/SlideBar";
import TopBar from "@/components/TopBar";
import { useFetchMeProfile } from "@/hooks/queries/useFetchMeProfile";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { slideBarMenu } from "./constant";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { data, error } = useFetchMeProfile();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.replace("/login");
    }

    if (data?.role === "UNDETERMINED") {
      router.replace("/approval-pending");
    }
  }, [error, data?.role, router]);

  if (error || data?.role === "UNDETERMINED") {
    return <div></div>;
  }

  return (
    <div className="flex flex-row w-full h-full relative">
      <SlideBar headerLabel="크롤" menuItems={slideBarMenu} />
      <div className="flex-1">
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
