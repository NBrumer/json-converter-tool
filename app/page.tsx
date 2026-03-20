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
    {
      title: "JSON to YAML Converter",
      description: "Convert JSON into YAML format.",
      href: "/json-to-yaml",
    },
    {
      title: "CSV to JSON Converter",
      description: "Convert simple CSV data into JSON.",
      href: "/csv-to-json",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Free JSON Tools
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{tool.title}</h2>
              <p className="mt-2 text-sm text-gray-700">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}