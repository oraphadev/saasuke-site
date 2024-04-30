'use client'

import { useTranslations } from 'next-intl'
import { Slide } from 'react-awesome-reveal'

export const Demo = () => {
  const t = useTranslations('components.demo')

  return (
    <div id="demo" className="flex flex-1">
      <div className="container py-20">
        <Slide direction="up" triggerOnce fraction={0.4}>
          <div className="flex flex-col gap-2 text-center">
            <div className="flex-1 text-sm font-semibold text-primary">
              {t('caption')}
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
              {t('title')}
            </h1>
            <p className="text-muted-foreground">{t('description')}</p>
            <div className="mt-6 flex items-center justify-center">
              <iframe
                className="aspect-video w-full max-w-3xl rounded-lg"
                src="https://www.youtube.com/embed/W3Pb3v_GpoE?si=Z3a33ncz2glzuuJf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
