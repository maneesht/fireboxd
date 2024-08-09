'use client';

import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  if(pathname === '/login') {
    return null;
  }
  return (
    <div className="flex justify-center mt-5">
      <div className=" sm:max-w-sm flex align-middle">
        <img
          className="mx-auto h-20 w-auto"
          src="https://developers.google.com/static/profile/badges/community/firebase/dataconnect/badge.svg"
          alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight inline-block content-center">
          FireBoxd
        </h2>
      </div>
    </div>
  );
}
