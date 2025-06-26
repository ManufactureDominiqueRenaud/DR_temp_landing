import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("Request pathname:", pathname);

  // Ne pas rediriger les fichiers statiques (images, CSS, JS, etc.)
  if (pathname.startsWith("/img/")) {
    return NextResponse.next();
  }

  if (!pathname.startsWith("/warranty")) {
    console.log("Redirecting to /warranty");
    return NextResponse.redirect(new URL("/warranty", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
