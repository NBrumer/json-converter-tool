"use client";

import { useRef, useState } from "react";
import { Parser } from "json2csv";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function JsonToCsvPage() {
  const [jsonInput, setJsonInput] = useState(`[
  {
    "name": "Alice",
    "age": 25,
    "city": "Berlin"
  },
  {
    "name": "Bob",
    "age": 30,
    "city": "Paris"
  }
]`);

  const [csvOutput, setCsvOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const parseJsonSafely = () => {
    const parsed = JSON.parse(jsonInput);

    if (!Array.isArray(parsed)) {
      throw new Error("JSON must be an array of objects.");
    }

    return parsed;
  };

  const handleConvert = () => {
    try {
      setError("");
      setMessage("");

      const parsed = parseJsonSafely();
      const parser = new Parser();
      const csv = parser.parse(parsed);

      setCsvOutput(csv);
      setMessage("JSON successfully converted to CSV.");
    } catch (err) {
      setCsvOutput("");

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong while converting JSON.");
      }
    }
  };

  const handleDownloadCsv = () => {
    if (!csvOutput) {
      setError("There is no CSV to download yet.");
      setMessage("");
      return;
    }

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "converted-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
    setMessage("CSV file downloaded.");
    setError("");
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setError("");
      setMessage("");

      const text = await file.text();
      setJsonInput(text);
      setCsvOutput("");
      setMessage(`File "${file.name}" loaded successfully.`);
    } catch {
      setError("Failed to read the file.");
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="JSON to CSV Converter"
        description="Convert JSON arrays of objects into CSV."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            JSON input
          </label>

          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="h-[360px] w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-black outline-none"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleConvert}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
            >
              Convert to CSV
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg border border-gray-400 px-4 py-2 text-black"
            >
              Upload JSON file
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            CSV output
          </label>

          <textarea
            value={csvOutput}
            readOnly
            className="h-[360px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          />

          <div className="mt-4">
            <button
              onClick={handleDownloadCsv}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
            >
              Download CSV
            </button>
          </div>
        </div>
      </div>

      <StatusMessage message={message} error={error} />
      <RelatedTools currentHref="/json-to-csv" />
      <section className="mt-12 max-w-3xl">
  <h2 className="text-2xl font-semibold">What this tool does</h2>
  <p className="mt-3 text-gray-700">
    This tool converts JSON arrays into CSV format, making the data easier to
    use in spreadsheets or analytics tools.
  </p>

  <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
  <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
    <li>Paste JSON array into the input field.</li>
    <li>Click "Convert to CSV".</li>
    <li>Download or copy the generated CSV.</li>
  </ol>

  <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
    <li>Exporting API data</li>
    <li>Working with Excel or Google Sheets</li>
    <li>Data analysis workflows</li>
  </ul>
</section>
    </PageContainer>
  );
}