"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";


export default function Base64Page() {
  const [input, setInput] = useState("Hello world");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      setError("");
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      setMessage("Text encoded to Base64.");
    } catch {
      setOutput("");
      setError("Failed to encode text.");
      setMessage("");
    }
  };

  const handleDecode = () => {
    try {
      setError("");
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
      setMessage("Base64 decoded successfully.");
    } catch {
      setOutput("");
      setError("Failed to decode Base64.");
      setMessage("");
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="Base64 Encode / Decode"
        description="Encode text to Base64 or decode Base64 back to text."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-[300px] w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-black outline-none"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleEncode}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Encode to Base64
            </button>

            <button
              onClick={handleDecode}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800"
            >
              Decode Base64
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Output
          </label>
          <textarea
            value={output}
            readOnly
            className="h-[300px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          />
        </div>
      </div>

      <StatusMessage message={message} error={error} />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">What this tool does</h2>
        <p className="mt-3 text-gray-700">
          This tool lets you encode plain text into Base64 or decode Base64 back
          into readable text.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
          <li>Paste your text or Base64 string into the input field.</li>
          <li>Choose Encode or Decode.</li>
          <li>Copy the result from the output field.</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Encoding text for transport</li>
          <li>Decoding Base64 payloads</li>
          <li>Working with auth headers and tokens</li>
        </ul>
      </section>

      <RelatedTools currentHref="/base64-encode-decode" />
    </PageContainer>
  );
}