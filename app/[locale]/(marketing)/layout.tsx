import { Footer } from '@/app/[locale]/(marketing)/_components/footer'
import { Navbar } from '@/app/[locale]/(marketing)/_components/navbar'
import { PropsWithChildren } from 'react'

const LandingPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main
      id="lading-page"
      className="before:bg-noise before:pointer-events-none before:fixed before:inset-0 before:z-[999999] before:block before:bg-[length:200px_auto] before:opacity-30 before:content-['']"
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default LandingPageLayout
