"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function JsonMinifierPage() {
  const [jsonInput, setJsonInput] = useState(`[
  {
    "name": "Alice",
    "age": 25
  },
  {
    "name": "Bob",
    "age": 30
  }
]`);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleMinify = () => {
    try {
      setError("");
      setMessage("");

      const parsed = JSON.parse(jsonInput);
      const minified = JSON.stringify(parsed);

      setJsonInput(minified);
      setMessage("JSON minified successfully.");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to minify JSON.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="JSON Minifier"
        description="Minify JSON into a compact one-line format."
      />

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          JSON input
        </label>

        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="h-[360px] w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-black outline-none"
        />

        <div className="mt-4">
          <button
            onClick={handleMinify}
            className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
          >
            Minify JSON
          </button>
        </div>
      </div>

      <StatusMessage message={message} error={error} />
      <section className="mt-12 max-w-3xl">
  <h2 className="text-2xl font-semibold">What this tool does</h2>
  <p className="mt-3 text-gray-700">
    This JSON minifier removes all unnecessary spaces and line breaks, producing
    a compact version of your JSON.
  </p>

  <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
  <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
    <li>Paste your JSON into the input field.</li>
    <li>Click "Minify JSON".</li>
    <li>The compact JSON will replace the original input.</li>
  </ol>

  <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
    <li>Reducing file size</li>
    <li>Embedding JSON in code</li>
    <li>Optimizing data transfer</li>
  </ul>
</section>
<RelatedTools currentHref="/json-minifier" />
    </PageContainer>
  );
}