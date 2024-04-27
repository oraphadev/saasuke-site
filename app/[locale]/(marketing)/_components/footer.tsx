import { Github, Instagram, Twitter, Youtube } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export const Footer = async () => {
  const t = await getTranslations('components.footer')

  return (
    <footer className="flex flex-1">
      <div className="container flex flex-wrap items-center justify-between gap-6 border-t py-8">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} • {t('rights')}
        </p>
      </div>
    </footer>
  )
}
