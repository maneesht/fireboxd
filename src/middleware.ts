import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { firebaseConfig } from "./app/firebaseConfig";
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";

async function checkAuth(idTokenWithBearer?: string | null) {
  if (!idTokenWithBearer) {
    return false;
  }
  const idToken = idTokenWithBearer?.split('Bearer ')[1];
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
    console.log('invalid token');
    return false;
  }
  console.log("true!");
  return true;
}
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === "/login" ||  request.nextUrl.pathname === '/service-worker.js' || request.nextUrl.pathname === '/favicon.ico') {
    console.log(`For path ${request.nextUrl.pathname} we are not redirecting`);
    return NextResponse.next();
  }
  if (
    !(await checkAuth(request.headers.get("authorization")))
  ) {
    console.log(`For path ${request.nextUrl.pathname} we are redirecting`);
    return NextResponse.redirect(new URL('/login', request.url))

  }
}
    export const config = {
        matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
      }
