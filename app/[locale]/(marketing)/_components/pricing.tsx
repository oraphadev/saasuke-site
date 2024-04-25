import { cn } from '@/lib/utils'

interface PricingProps {
  caption?: string
  title?: string
  description?: string
  button?: React.ReactNode
  classNames?: string
}

export const Pricing = ({
  caption,
  title,
  description,
  button,
  classNames,
}: PricingProps) => {
  return (
    <div id="pricing" className={cn('flex flex-1 flex-col', classNames)}>
      <div className="container py-12">
        {(caption || title || description) && (
          <div className="mb-6 flex flex-col gap-2">
            {caption && (
              <div className="flex-1 text-sm font-semibold text-primary">
                {caption}
              </div>
            )}
            {title && (
              <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
            {button && <div className="mt-6">{button}</div>}
          </div>
        )}
      </div>
    </div>
  )
}
