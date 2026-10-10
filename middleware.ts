import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import knownPaths from './lib/known-paths.json';

const handleI18n = createMiddleware(routing);

function stripLocale(pathname: string) {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const rest = pathname.slice(3);
    return rest || '/';
  }
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const rest = pathname.slice(3);
    return rest || '/';
  }
  return pathname;
}

function isKnownPath(pathname: string) {
  let path = stripLocale(pathname);
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  if (path === '/') return true;
  if (knownPaths.pages.includes(path)) return true;
  if (path.startsWith('/blog/')) {
    return knownPaths.blogSlugs.includes(path.slice('/blog/'.length));
  }
  return false;
}

const notFoundHtml = `<!DOCTYPE html>
<html lang="es-BO">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Página no encontrada | AI Partner</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="La página que buscás no existe o fue movida." />
</head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#020617;color:#e2e8f0;font-family:Inter,ui-sans-serif,system-ui,sans-serif;text-align:center;padding:24px;">
  <main>
    <p style="letter-spacing:.3em;text-transform:uppercase;color:#a5f3fc;font-size:14px;">404</p>
    <h1 style="margin-top:16px;font-size:40px;color:#fff;">Página no encontrada</h1>
    <p style="margin-top:16px;max-width:36rem;line-height:1.7;">Esa dirección no existe en AI Partner. Podés volver al inicio o ver los planes y precios.</p>
    <p style="margin-top:28px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a href="/" style="background:#67e8f9;color:#020617;text-decoration:none;border-radius:999px;padding:12px 20px;font-weight:600;">Volver al inicio</a>
      <a href="/precios" style="border:1px solid rgba(255,255,255,.15);color:#fff;text-decoration:none;border-radius:999px;padding:12px 20px;">Ver planes y precios</a>
    </p>
  </main>
</body>
</html>`;

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  if (!isKnownPath(pathname)) {
    if (pathname === '/es' || pathname.startsWith('/es/')) {
      const url = request.nextUrl.clone();
      url.pathname = stripLocale(pathname);
      return NextResponse.redirect(url);
    }
    return new NextResponse(notFoundHtml, {
      status: 404,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex',
      },
    });
  }
  return handleI18n(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
