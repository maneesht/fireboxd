import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(!request.headers.get('authorization')) {
        return NextResponse.rewrite(new URL('/login', request.url));
    }

    const requestHeaders = new Headers(request.headers);
    // add field to request headers
    requestHeaders.set("X-My-Custom-Header", "CustomHeaderValue");
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

}
 