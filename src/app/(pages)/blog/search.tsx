"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Search } from "@/components/Icons";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    }
  });
  return (
    <form className="flex items-center mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-background border border-box-accent text-foreground text-sm rounded-lg block w-full ps-10 p-2.5"
          placeholder="Search Blog..."
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="h-5 w-5 dark:text-gray-400 text-foreground-secondary" />
        </div>
      </div>
    </form>
  );
}
