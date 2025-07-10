export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/20 backdrop-blur-sm animate-fade-in">
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <div className="text-slate-300 font-medium text-xs md:text-sm order-2 md:order-1">
              © 2025 AWS User Group Philippines - Cebu Chapter
            </div>
            <div className="text-slate-400 font-medium text-xs md:text-sm order-1 md:order-2">
              Built with ❤️ by the community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
