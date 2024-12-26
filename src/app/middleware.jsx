import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware ejecutado:', request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Aplica a todas las rutas
};
