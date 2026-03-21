import Link from "next/link";
import { tools } from "../data/tools";
import ToolCard from "../components/ToolCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free JSON Tools for Developers",
  description:
    "Use free browser-based tools to validate, format, minify, and convert JSON, CSV, YAML, Base64, URLs, and timestamps.",
};

export default function Home() {
  const featuredTools = tools.slice(0, 6);

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Free JSON Tools for Developers
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Validate, format, convert, and transform JSON data online with a
            growing collection of simple browser-based tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/tools"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white"
            >
              Browse all tools
            </Link>

            <Link
              href="/json-validator"
              className="rounded-lg border border-black px-5 py-3 text-black"
            >
              Try JSON Validator
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Popular tools</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Fast</h3>
            <p className="mt-2 text-sm text-gray-700">
              Use lightweight tools directly in the browser without extra setup.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Free</h3>
            <p className="mt-2 text-sm text-gray-700">
              All current tools are free to use for quick day-to-day tasks.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Practical</h3>
            <p className="mt-2 text-sm text-gray-700">
              Built for developers, analysts, testers, and data-heavy workflows.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-semibold">About this website</h2>

          <p className="mt-4 text-gray-700">
            Free JSON Tools is a small collection of utilities for common data
            tasks such as JSON validation, formatting, minification, and
            conversion between formats like CSV and YAML.
          </p>

          <p className="mt-4 text-gray-700">
            The goal is to build a clean and useful toolbox that works entirely
            in the browser and grows over time with more pages and more helpful
            utilities.
          </p>
        </section>
      </div>
    </main>
  );
}