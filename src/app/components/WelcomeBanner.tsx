'use client';

import { getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseApp } from "../firebaseConfig";

export function WelcomeBanner() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);
  return (
    <div>
      <h1 className="mx-6 mt-12 w-[300px] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent dark:from-white dark:to-[#AAAAAA] md:!w-full lg:!mt-10 lg:text-6xl xl:leading-snug">
        Hello, {user?.displayName}
      </h1>
      <p className="mx-6 max-h-[112px] w-[315px] text-center font-mono text-xl text-[#666666] dark:text-[#888888] md:max-h-[96px] md:w-[700px] md:text-xl">
        Search For A Movie To Review!
      </p>
    </div>
  );
}
