"use client";
import React, { useContext } from "react";
import { AuthContext } from "../Context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserButton() {
  const { user } = useContext(AuthContext);
  const pathname = usePathname();
  if (user?.id) {
    return <Link href="/profile">{user?.firstName || "Profile"}</Link>;
  }
  return <Link href={`/login?redirect=${pathname}`}>Login</Link>;
}
