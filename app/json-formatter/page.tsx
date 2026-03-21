"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function JsonFormatterPage() {
  const [jsonInput, setJsonInput] = useState(`{"name":"Alice","age":25}`);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      setError("");
      setMessage("");

      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);

      setJsonInput(formatted);
      setMessage("JSON formatted successfully.");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to format JSON.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="JSON Formatter"
        description="Format JSON with readable indentation."
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
            onClick={handleFormat}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
          >
            Format JSON
          </button>
        </div>
      </div>

      <StatusMessage message={message} error={error} />
      <section className="mt-12 max-w-3xl">
  <h2 className="text-2xl font-semibold">What this tool does</h2>
  <p className="mt-3 text-gray-700">
    This JSON formatter converts compact JSON into a readable, properly
    indented format that is easier to understand and debug.
  </p>

  <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
  <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
    <li>Paste your JSON into the input field.</li>
    <li>Click the "Format JSON" button.</li>
    <li>The formatted JSON will appear in the same field.</li>
  </ol>

  <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
    <li>Reading large JSON files</li>
    <li>Debugging API responses</li>
    <li>Preparing JSON for documentation</li>
  </ul>
</section>
<RelatedTools currentHref="/json-formatter" />
    </PageContainer>
  );
}