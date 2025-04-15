import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get hostname (e.g. www.synoptix.ai, synoptix.ai)
  const hostname = request.headers.get('host') || '';
  
  // If the hostname starts with www., redirect to the non-www version
  if (hostname.startsWith('www.')) {
    const newUrl = `https://${hostname.replace('www.', '')}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(newUrl, { status: 301 });
  }
  
  return NextResponse.next();
}

// Run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (inside /public/images)
     * - files with extensions (.jpg, .png, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)',
  ],
};
