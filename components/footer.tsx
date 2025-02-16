import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} NEAR Foundation. All rights reserved.</div>
          <nav className="flex space-x-6">
            <Link
              href="https://drive.google.com/file/d/1o_QdfsQ-Zvo4yzTRW0ZaoMg87gwbO9OQ/view"
              className="text-white/60 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Zyrb3Xsp26wgoUtAX8jyHoPm2yQwHKUL/view"
              className="text-white/60 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://t.me/neardev"
              className="text-white/60 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on Telegram
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

