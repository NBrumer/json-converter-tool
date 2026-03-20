import Link from "next/link";

export default function Home() {
  const tools = [
    {
      title: "JSON Validator",
      description: "Check whether your JSON is valid.",
      href: "/json-validator",
    },
    {
      title: "JSON Formatter",
      description: "Format JSON with clean indentation.",
      href: "/json-formatter",
    },
    {
      title: "JSON Minifier",
      description: "Minify JSON into a compact one-line format.",
      href: "/json-minifier",
    },
    {
      title: "JSON to CSV Converter",
      description: "Convert JSON arrays of objects into CSV.",
      href: "/json-to-csv",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">Free JSON Tools</h1>

        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          A collection of simple JSON tools for developers, analysts, testers,
          and anyone who works with structured data.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{tool.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{tool.description}</p>
              <p className="mt-4 text-sm font-medium text-black">
                Open tool →
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold">About this project</h2>
          <p className="mt-3 text-gray-700">
            This website is being built as a lightweight toolbox with multiple
            focused utilities. Each tool has its own page, making the site
            easier to use and easier to grow over time.
          </p>
        </section>
      </div>
    </main>
  );
}