import { defaultLocale, localePrefix, locales } from '@/i18n.config'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
})

export const config = {
  matcher: [
    '/',
    '/(en-US|pt-BR|es-ES)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
