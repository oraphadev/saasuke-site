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
import { Link } from '@/navigation.config'
import { useWindowScroll } from '@uidotdev/usehooks'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const MARGIN_TOP = 140

export const Navbar = () => {
  const [{ y }] = useWindowScroll()
  const t = useTranslations('components.navbar')

  const scrollPosition = Number(y)
  const [offsets, setOffsets] = useState<Record<string, number>>({
    demo: Number.MAX_SAFE_INTEGER,
    pricing: Number.MAX_SAFE_INTEGER,
    help: Number.MAX_SAFE_INTEGER,
  })

  const activeItem = (() => {
    if (scrollPosition < offsets.demo - MARGIN_TOP) {
      return 'home'
    } else if (scrollPosition < offsets.pricing - MARGIN_TOP) {
      return 'demo'
    } else if (scrollPosition < offsets.help - MARGIN_TOP) {
      return 'pricing'
    } else if (scrollPosition >= offsets.help - MARGIN_TOP) {
      return 'help'
    }

    return null
  })()

  const scrollTo = ({
    position,
    item,
  }: {
    position?: number
    item?: string
  }) => {
    const top =
      position ?? document.querySelector<HTMLElement>(String(item))?.offsetTop
    window.scrollTo({
      top: top ? top - MARGIN_TOP : 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setOffsets(({ demo, pricing, help }) => ({
      demo: document.getElementById('demo')?.offsetTop ?? demo,
      pricing: document.getElementById('pricing')?.offsetTop ?? pricing,
      help: document.getElementById('help')?.offsetTop ?? help,
    }))
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex items-center justify-between gap-3 border-b border-gray-500/10 py-4">
        <Logo />
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
      <Carousel className="container mx-auto flex items-end gap-6 border-b border-gray-500/10 px-0">
        <CarouselContent className="is-navigation px-8">
          <CarouselItem className="basis-auto">
            <Link
              href="/"
              onClick={(event) => {
                event.preventDefault()
                scrollTo({ position: 0 })
              }}
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                activeItem === 'home'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('home')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Link
              href="#demo"
              onClick={(event) => {
                event.preventDefault()
                scrollTo({ item: '#demo' })
              }}
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                activeItem === 'demo'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('demo')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Link
              href="#pricing"
              onClick={(event) => {
                event.preventDefault()
                scrollTo({ item: '#pricing' })
              }}
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                activeItem === 'pricing'
                  ? 'dark:border-primary-light border-primary text-gray-800 dark:text-gray-200'
                  : 'text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300',
              )}
            >
              {t('pricing')}
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-auto pr-8">
            <Link
              href="#help"
              onClick={(event) => {
                event.preventDefault()
                scrollTo({ item: '#help' })
              }}
              className={cn(
                'inline-block border-b-[1.5px] border-transparent py-3 text-sm font-medium transition-colors',
                activeItem === 'help'
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
