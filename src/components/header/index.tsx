"use client";

import React from "react";
import Link from "next/link";
import Login from "./Login";
import { useUserStore } from "@/lib/store";
import Profile from "./Profile";

function Navbar() {
  const user = useUserStore((state) => state.user);
  return (
    <nav className="flex justify-between">
      <div className="group">
        <Link href={"/"} className="text-2xl font-bold">
          Blogs
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-foreground"></div>
      </div>
      {user?.id ? <Profile /> : <Login />}
    </nav>
  );
}

export default Navbar;
