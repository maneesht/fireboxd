'use client';

import { getAuth } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { firebaseApp } from "../firebaseConfig";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  if(pathname === '/login') {
    return null;
  }
  function logout() {
    const auth = getAuth(firebaseApp);
    auth.signOut().then(() => router.push('/login'));
  }

  return (
    <div>
    <div className="flex justify-center mt-5 flex-wrap">
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
    <div className="flex justify-center mt-5 flex-wrap">
<button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={logout}
    >
      Sign Out
    </button>
</div>
</div>
  );
}
