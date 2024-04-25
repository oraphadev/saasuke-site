import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div role="status">
        <Image
          src="/images/logo.svg"
          width={45}
          height={45}
          alt="Logo"
          className="motion-safe:animate-spin"
          priority
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
