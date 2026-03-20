"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";

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
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Minify JSON
          </button>
        </div>
      </div>

      <StatusMessage message={message} error={error} />
    </PageContainer>
  );
}