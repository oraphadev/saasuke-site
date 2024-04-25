'use client'

import { Link } from '@/navigation.config'
import { useWindowScroll } from '@uidotdev/usehooks'
import Image from 'next/image'

export const Logo = (): React.ReactNode => {
  const [{ y }] = useWindowScroll()

  const imageStyle = {
    transform: `rotate(${Number(y)}deg)`,
  }

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/images/logo.svg"
        width={30}
        height={30}
        alt="Logo"
        className="transition-transform duration-0 ease-in-out"
        priority
        style={imageStyle}
      />
      <span className="hidden text-lg font-semibold sm:inline-block">
        Saasuke
      </span>
    </Link>
  )
}
