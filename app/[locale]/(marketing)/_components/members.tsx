'use client'

import { Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Members = () => {
  const t = useTranslations('components.members')

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        <Image src="/images/ninjas.svg" alt="Members" width={156} height={48} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={`star-${index}`}
              className="h-5 w-5 fill-yellow-500"
              fill="currentColor"
              fillRule="evenodd"
              strokeWidth={0}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{t('counter')}</p>
      </div>
    </div>
  )
}
