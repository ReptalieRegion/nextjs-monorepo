"use client";

import { useFetchMeProfile } from "@/hooks/queries/useFetchMeProfile";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
    return null;
  }

  return <main>{children}</main>;
}
