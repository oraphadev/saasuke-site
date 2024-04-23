interface ContainerProps {
  caption?: string
  title?: string
  description?: string
  children?: React.ReactNode
}

export const Container = ({
  caption,
  title,
  description,
  children,
}: ContainerProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="container py-8">
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
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
