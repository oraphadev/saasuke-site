import { CTAButton } from '@/app/[locale]/(marketing)/_components/cta-button'
import { Section } from '@/app/[locale]/(marketing)/_components/section'
import { getTranslations } from 'next-intl/server'

const LandingPage = async () => {
  const t = await getTranslations('pages.home')

  return (
    <Section
      caption={t('caption')}
      title={t('title')}
      description={t('description')}
      button={<CTAButton />}
    />
  )
}

export default LandingPage
