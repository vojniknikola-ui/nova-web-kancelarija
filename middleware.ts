import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n-config';

function getLocale(request: NextRequest): string | undefined {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return defaultLocale;
  }

  return undefined;
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);

  if (locale) {
    return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\..*).*)'],
};
