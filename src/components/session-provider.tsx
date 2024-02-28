"use client";
import { useUserStore } from "@/lib/store";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useCallback } from "react";

function SessionProvider() {
  const setUser = useUserStore(state => state.setUser);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );

  const readSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data);
    if (data && data.session?.user) {
      setUser(data.session.user);
    }
  }, [setUser, supabase]);

  useEffect(() => {
    readSession();
  }, [readSession]);

  return <></>
}

export default SessionProvider;
