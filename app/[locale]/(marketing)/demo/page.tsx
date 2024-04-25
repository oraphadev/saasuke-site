import { Section } from '@/app/[locale]/(marketing)/_components/section'
import { getTranslations } from 'next-intl/server'

const DemoPage = async () => {
  const t = await getTranslations('pages.demo')

  return (
    <Section
      caption={t('caption')}
      title={t('title')}
      description={t('description')}
    />
  )
}

export default DemoPage
