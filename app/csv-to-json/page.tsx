"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function CsvToJsonPage() {
  const [csvInput, setCsvInput] = useState(`name,age,city
Alice,25,Berlin
Bob,30,Paris`);
  const [jsonOutput, setJsonOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    try {
      setError("");
      setMessage("");

      const lines = csvInput
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length < 2) {
        throw new Error("CSV must include a header row and at least one data row.");
      }

      const headers = lines[0].split(",").map((header) => header.trim());

      const rows = lines.slice(1).map((line) => {
        const values = line.split(",").map((value) => value.trim());
        const rowObject: Record<string, string> = {};

        headers.forEach((header, index) => {
          rowObject[header] = values[index] ?? "";
        });

        return rowObject;
      });

      setJsonOutput(JSON.stringify(rows, null, 2));
      setMessage("CSV successfully converted to JSON.");
    } catch (err) {
      setJsonOutput("");

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to convert CSV to JSON.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="CSV to JSON Converter"
        description="Convert simple CSV data into JSON."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            CSV input
          </label>

          <textarea
            value={csvInput}
            onChange={(e) => setCsvInput(e.target.value)}
            className="h-[360px] w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-black outline-none"
          />

          <div className="mt-4">
            <button
              onClick={handleConvert}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
            >
              Convert to JSON
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            JSON output
          </label>

          <textarea
            value={jsonOutput}
            readOnly
            className="h-[360px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          />
        </div>
      </div>

      <StatusMessage message={message} error={error} />
      <RelatedTools currentHref="/csv-to-json" />
    </PageContainer>
  );
}