"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function JsonValidatorPage() {
  const [jsonInput, setJsonInput] = useState(`{
  "name": "Alice",
  "age": 25
}`);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleValidate = () => {
    try {
      setError("");
      setMessage("");

      JSON.parse(jsonInput);
      setMessage("JSON is valid.");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid JSON.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="JSON Validator"
        description="Check whether your JSON is valid."
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
            onClick={handleValidate}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
          >
            Validate JSON
          </button>
        </div>
      </div>

      <StatusMessage message={message} error={error} />
      <RelatedTools currentHref="/json-validator" />
      <section className="mt-12 max-w-3xl">
  <h2 className="text-2xl font-semibold">What this tool does</h2>
  <p className="mt-3 text-gray-700">
    This JSON validator allows you to quickly check whether your JSON is valid.
    It parses your input and shows an error message if the syntax is incorrect.
  </p>

  <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
  <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
    <li>Paste your JSON into the input field.</li>
    <li>Click the "Validate JSON" button.</li>
    <li>Check the result message below the input.</li>
  </ol>

  <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
    <li>Debugging API responses</li>
    <li>Validating configuration files</li>
    <li>Checking JSON before sending requests</li>
  </ul>
</section>
    </PageContainer>
  );
}