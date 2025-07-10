export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-slate-300 font-medium">
              © 2025 AWS User Group Philippines - Cebu Chapter
            </div>
            <div className="flex items-center gap-4 text-slate-400 font-medium">
              <span>Built with ❤️ by the community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
