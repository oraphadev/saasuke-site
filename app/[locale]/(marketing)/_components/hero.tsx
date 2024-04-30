'use client'

import { CTAButton } from '@/app/[locale]/(marketing)/_components/cta-button'
import { useTranslations } from 'next-intl'
import { Slide } from 'react-awesome-reveal'

export const Hero = () => {
  const t = useTranslations('components.hero')

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="container py-20">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-12">
          <Slide direction="left" triggerOnce fraction={0.4}>
            <div className="flex flex-col gap-2">
              <div className="flex-1 text-sm font-semibold text-primary">
                {t('caption')}
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
                {t('title')}
              </h1>
              <p className="text-muted-foreground">{t('description')}</p>
              <div className="mt-6">
                <CTAButton />
              </div>
            </div>
          </Slide>
          <Slide direction="right" triggerOnce fraction={0.4}>
            <div className="flex flex-col gap-2">
              <div className="flex-1 text-sm font-semibold text-primary">
                {t('caption')}
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
                {t('title')}
              </h1>
              <p className="text-muted-foreground">{t('description')}</p>
              <div className="mt-6">
                <CTAButton />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}
