import { ThemeProvider } from '@/app/[locale]/_components/theme-provider'
import '@/app/globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Inter as FontFamily } from 'next/font/google'

const fontFamily = FontFamily({ subsets: ['latin'] })

export async function generateMetadata() {
  const t = await getTranslations('global.metadata')

  return {
    title: {
      default: t('title'),
      template: '%s | Saasuke',
    },
    description: t('description'),
    icons: [
      {
        url: '/logo.svg',
        href: '/logo.svg',
      },
    ],
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fontFamily.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
