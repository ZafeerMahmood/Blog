import { useUserStore } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardIcon,LockOpen1Icon } from "@radix-ui/react-icons";
import { createBrowserClient } from "@supabase/ssr";
function Profile() {
  const user = useUserStore((state) => state.user);
  const set= useUserStore((state) => state.setUser);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );
    const handleLogout = async () => {
      await supabase.auth.signOut();
      set(null);
    };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="hover:border-2 border-accent ">
          <AvatarImage src={user?.user_metadata.avatar_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2 space-y-3 divide-y-2">
        <div className="grid gap-4">
          <div className="space-y-2 ">
            <div className="px-2 mt-2">
              <p className="text-sm text-foreground-secondary">
                {user?.user_metadata.full_name}
              </p>
              <p className="text-sm text-foreground-secondary">{user?.email}</p>
            </div>
            <Link href='/dashboard' className="block">
              <Button size={'sm'} variant={'ghost'} className="w-full flex items-center justify-between px-5">  Dashboard <DashboardIcon/></Button>
            </Link>
            <Button size={'sm'} variant={'destructive'} onClick={handleLogout} className="w-full flex items-center justify-between px-5">  logout <LockOpen1Icon/></Button>

          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Profile;
