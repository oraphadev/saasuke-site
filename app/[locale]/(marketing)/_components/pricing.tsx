import { Button } from '@/components/ui/button'
import { BadgeCheck, Rocket } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export const Pricing = async () => {
  const t = await getTranslations('components.pricing')

  return (
    <div id="pricing" className="flex flex-1">
      <div className="container py-12">
        <div className="flex flex-col-reverse overflow-hidden rounded-lg lg:flex-row">
          <div className="flex flex-1 flex-col bg-gray-50 p-6 dark:bg-slate-700/5 md:p-12">
            <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl md:text-2xl">
              {t('title')}
            </h3>
            <p className="mb-6 text-muted-foreground">{t('description')}</p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 xl:grid-cols-3">
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                <span>{t('title')}</span>
              </li>
            </ul>
          </div>
          <div className="flex shrink-0 flex-col items-center justify-center bg-gray-100 p-12 dark:bg-slate-500/5">
            <h4 className="mb-2 text-5xl font-bold">R$197</h4>
            <p className="mb-4 text-center text-xs text-muted-foreground">
              Pay once. Build unlimited projects!
            </p>
            <Button className="w-60 min-w-36 max-w-full">
              <Rocket className="mr-2 h-4 w-4" />
              {t('button')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
