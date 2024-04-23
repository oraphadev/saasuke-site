'use client'

import { LocaleSwitcher } from '@/app/[locale]/_components/locale-switcher'
import { Logo } from '@/app/[locale]/_components/logo'
import { ThemeSwitcher } from '@/app/[locale]/_components/theme-switcher'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Link, usePathname } from '@/navigation.config'
import { useTranslations } from 'next-intl'

export const Navbar = () => {
  const currentRoute = usePathname()
  const t = useTranslations('components.navbar')

  return (
    <header className="sticky left-0 right-0 top-0 z-30 flex-none bg-background/65 backdrop-blur dark:bg-background/75">
      <div className="container mx-auto flex items-center justify-between gap-3 border-b border-gray-500/10 py-4">
        <Logo />
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
      <Carousel
        opts={{ dragFree: true }}
        className="container mx-auto flex items-end gap-6 border-b border-gray-500/10 px-0"
      >
        <CarouselContent className="is-navigation px-8">
          <CarouselItem className="basis-auto">
            <Link
              href="/"
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                currentRoute === '/'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('home')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Link
              href="/demo"
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                currentRoute === '/demo'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('demo')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Link
              href="/pricing"
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                currentRoute === '/pricing'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('pricing')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto pr-8">
            <Link
              href="/help"
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                currentRoute === '/help'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('help')}
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </header>
  )
}
