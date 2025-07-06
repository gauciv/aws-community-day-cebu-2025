import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center items-center p-6 md:p-12 lg:p-16">
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
