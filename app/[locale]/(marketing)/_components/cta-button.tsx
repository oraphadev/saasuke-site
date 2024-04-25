import { Members } from '@/app/[locale]/(marketing)/_components/members'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const CTAButton = (): React.ReactNode => {
  const t = useTranslations('components.ctaButton')

  return (
    <div>
      <Button className="mb-2">
        <Rocket className="mr-2 h-4 w-4" />
        {t('button')}
      </Button>
      <p className="mb-12 text-sm text-muted-foreground">{t('discount')}</p>
      <Members />
    </div>
  )
}
