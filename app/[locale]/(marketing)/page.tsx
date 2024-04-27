import { Demo } from '@/app/[locale]/(marketing)/_components/demo'
import { Help } from '@/app/[locale]/(marketing)/_components/help'
import { Hero } from '@/app/[locale]/(marketing)/_components/hero'
import { LoremIpsum } from '@/app/[locale]/(marketing)/_components/lorem-ipsum'
import { Pricing } from '@/app/[locale]/(marketing)/_components/pricing'

const LandingPage = async () => {
  return (
    <>
      <Hero />
      <Demo />
      <Pricing />
      <Help />
      <LoremIpsum />
    </>
  )
}

export default LandingPage
