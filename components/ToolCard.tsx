import Link from "next/link";
import { ToolItem } from "../data/tools";

type ToolCardProps = {
  tool: ToolItem;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-lg hover:-translate-y-1"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {tool.category}
      </p>

      <h2 className="mt-2 text-xl font-semibold text-black">{tool.title}</h2>

      <p className="mt-2 text-sm text-gray-700">{tool.description}</p>

      <p className="mt-4 text-sm font-medium text-black">Open tool →</p>
    </Link>
  );
}