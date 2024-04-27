import { Footer } from '@/app/[locale]/(marketing)/_components/footer'
import { Navbar } from '@/app/[locale]/(marketing)/_components/navbar'
import { PropsWithChildren } from 'react'

const LandingPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main id="lading-page">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default LandingPageLayout
