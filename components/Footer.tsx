import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm font-medium text-black">Free JSON Tools</p>

        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          A lightweight collection of browser-based tools for working with JSON,
          CSV, YAML, and other developer-friendly formats.
        </p>

        <div className="mt-4 flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tools" className="hover:underline">
            All Tools
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 Free JSON Tools
        </p>
      </div>
    </footer>
  );
}