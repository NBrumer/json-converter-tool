"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function UuidGeneratorPage() {
  const [uuid, setUuid] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = () => {
    try {
      setError("");
      const newUuid = crypto.randomUUID();
      setUuid(newUuid);
      setMessage("UUID generated successfully.");
    } catch {
      setError("Failed to generate UUID.");
      setMessage("");
    }
  };

  const handleCopy = async () => {
    if (!uuid) {
      setError("Generate a UUID first.");
      setMessage("");
      return;
    }

    try {
      await navigator.clipboard.writeText(uuid);
      setError("");
      setMessage("UUID copied to clipboard.");
    } catch {
      setError("Failed to copy UUID.");
      setMessage("");
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="UUID Generator"
        description="Generate UUIDs instantly in your browser."
      />

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Generated UUID
        </label>

        <textarea
          value={uuid}
          readOnly
          className="h-32 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          placeholder="Click the button to generate a UUID"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleGenerate}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
          >
            Generate UUID
          </button>

          <button
            onClick={handleCopy}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800"
          >
            Copy UUID
          </button>
        </div>
      </div>

      <StatusMessage message={message} error={error} />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">What this tool does</h2>
        <p className="mt-3 text-gray-700">
          This tool generates UUID values directly in the browser. UUIDs are
          commonly used as unique identifiers in software systems.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
          <li>Click the "Generate UUID" button.</li>
          <li>Copy the generated value if needed.</li>
          <li>Paste it into your app, database, or config.</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Creating database IDs</li>
          <li>Generating test data</li>
          <li>Using unique identifiers in APIs</li>
        </ul>
      </section>

      <RelatedTools currentHref="/uuid-generator" />
    </PageContainer>
  );
}