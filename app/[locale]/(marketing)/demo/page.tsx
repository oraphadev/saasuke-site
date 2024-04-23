import { Container } from '@/app/[locale]/(marketing)/_components/container'
import { getTranslations } from 'next-intl/server'

const DemoPage = async () => {
  const t = await getTranslations('pages.demo')

  return (
    <Container
      caption={t('caption')}
      title={t('title')}
      description={t('description')}
    ></Container>
  )
}

export default DemoPage
