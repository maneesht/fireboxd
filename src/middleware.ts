import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { firebaseConfig } from "./app/firebaseConfig";
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";

async function checkAuth(idToken?: string | null) {
  if (!idToken) {
    console.log('no id token');
    return false;
  }
  const firebaseServerAppSettings = {
    authIdToken: idToken, // We'll explain how to get the
    // idToken in the service worker
    // example below.
  };

  const serverApp = initializeServerApp(
    firebaseConfig,
    firebaseServerAppSettings
  );
  const serverAuth = getAuth(serverApp);
  await serverAuth.authStateReady();
  if (serverAuth.currentUser === null) {
    // authIdToken was missing or invalid.
    console.log("nope!");
    return false;
  }
  console.log("true!");
  return true;
}
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const authRes = (await checkAuth(request.headers.get("authorization")));
  console.log(!(await checkAuth(request.headers.get("authorization"))) &&
    request.nextUrl.pathname !== "/login");
  if (
    !(await checkAuth(request.headers.get("authorization"))) &&
    request.nextUrl.pathname !== "/login"
  ) {
    console.log('redirectin');
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [  '/((?!_next|api/auth).*)(.+)']

};
