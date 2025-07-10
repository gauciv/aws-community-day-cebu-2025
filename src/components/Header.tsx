import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative z-20 flex justify-center">
      <Image
        src="/aws-logo.svg"
        alt="AWS Logo"
        width={120}
        height={39}
        priority
        className="w-16 h-auto md:w-20 lg:w-24"
      />
    </header>
  )
}
