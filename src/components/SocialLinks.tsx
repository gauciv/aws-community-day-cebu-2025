export default function SocialLinks() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '💻' },
    { name: 'Discord', href: '#', icon: '💬' },
  ]

  return (
    <div className="flex justify-center gap-4 mb-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="w-12 h-12 bg-gradient-to-r from-[#FF6B35]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center text-xl hover:scale-110 hover:bg-gradient-to-r hover:from-[#FF6B35]/40 hover:to-[#4A90E2]/40 transition-all duration-300 border border-white/10"
          aria-label={`Follow us on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
