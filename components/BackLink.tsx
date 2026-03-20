import Link from "next/link";

export default function BackLink() {
  return (
    <Link href="/" className="text-sm text-gray-600 hover:underline">
      ← Back to all tools
    </Link>
  );
}