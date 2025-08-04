'use client'

export function Footer() {
  return (
    <footer className="w-full border-t border-[#27272A] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-9 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Checklab, Los Angeles, CA 90049, United States
        </div>

        <div className="flex space-x-15">
          <a href="/terms" className="hover:text-gray-300 transition">Terms</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Career</a>
          <a href="/privacy" className="hover:text-gray-300 transition">License</a>
          <a href="https://x.com/arintenhq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
