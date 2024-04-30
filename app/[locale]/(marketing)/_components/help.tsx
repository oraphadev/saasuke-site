import { CTAButton } from '@/app/[locale]/(marketing)/_components/cta-button'
import { getTranslations } from 'next-intl/server'

export const Help = async () => {
  const t = await getTranslations('components.help')

  return (
    <div id="help" className="flex flex-1">
      <div className="container py-20">
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
      </div>
    </div>
  )
}
