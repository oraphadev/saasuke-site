import { Link } from '@/navigation.config'
import Image from 'next/image'

export const Logo = (): React.ReactNode => {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.svg"
        width={30}
        height={30}
        alt="Logo"
        className="hover:motion-safe:animate-spin"
      />
      <span className="hidden text-lg font-semibold sm:inline-block">
        Saasuke
      </span>
    </Link>
  )
}
