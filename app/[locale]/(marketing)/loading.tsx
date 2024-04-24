import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-background/30 backdrop-blur dark:bg-background/30">
      <div role="status">
        <Image
          src="/logo.svg"
          width={45}
          height={45}
          alt="Logo"
          className="motion-safe:animate-spin"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
