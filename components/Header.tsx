import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-black">
          Free JSON Tools
        </Link>

        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tools" className="hover:underline">
            All Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}