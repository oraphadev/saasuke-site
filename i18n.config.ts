import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['en-US', 'pt-BR', 'es-ES']
export const localePrefix = 'always'
export const defaultLocale = 'en-US'

export const getLocaleName = (locale: string) => {
  switch (locale) {
    case 'en-US':
      return 'English'
    case 'pt-BR':
      return 'Português'
    case 'es-ES':
      return 'Español'
    default:
      return locale
  }
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
