"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function UrlEncodeDecodePage() {
  const [input, setInput] = useState("https://example.com/?q=hello world");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      setError("");
      setOutput(encodeURIComponent(input));
      setMessage("URL encoded successfully.");
    } catch {
      setOutput("");
      setError("Failed to encode URL.");
      setMessage("");
    }
  };

  const handleDecode = () => {
    try {
      setError("");
      setOutput(decodeURIComponent(input));
      setMessage("URL decoded successfully.");
    } catch {
      setOutput("");
      setError("Failed to decode URL.");
      setMessage("");
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="URL Encode / Decode"
        description="Encode URLs and query strings or decode them back."
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
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
            >
              Encode URL
            </button>

            <button
              onClick={handleDecode}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800"
            >
              Decode URL
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
          This tool encodes URLs and query strings into a safe format or decodes
          them back into readable text.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
          <li>Paste a URL or encoded string into the input field.</li>
          <li>Click Encode or Decode.</li>
          <li>Copy the result from the output area.</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Working with query strings</li>
          <li>Debugging encoded URLs</li>
          <li>Preparing URL parameters for requests</li>
        </ul>
      </section>

      <RelatedTools currentHref="/url-encode-decode" />
    </PageContainer>
  );
}