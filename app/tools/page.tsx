import { tools } from "../../data/tools";
import ToolCard from "../../components/ToolCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Browse all available JSON, CSV, YAML, Base64, URL, UUID, and timestamp tools in one place.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">All Tools</h1>

        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Browse all available tools for working with JSON, CSV, YAML, and
          related data formats.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}