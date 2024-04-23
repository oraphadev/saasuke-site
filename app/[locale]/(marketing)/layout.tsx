import { Navbar } from '@/app/[locale]/(marketing)/_components/navbar'
import { PropsWithChildren } from 'react'

const LandingPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main id="lading-page">
      <Navbar />
      {children}
    </main>
  )
}

export default LandingPageLayout
