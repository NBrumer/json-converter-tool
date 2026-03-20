"use client";

import { useRef, useState } from "react";
import { Parser } from "json2csv";

export default function Home() {
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

  const parseAnyJsonSafely = () => {
    return JSON.parse(jsonInput);
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

  const handleValidate = () => {
    try {
      setError("");
      setMessage("");

      parseAnyJsonSafely();
      setMessage("JSON is valid.");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid JSON.");
      }
    }
  };

  const handleFormat = () => {
    try {
      setError("");
      setMessage("");

      const parsed = parseAnyJsonSafely();
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

  const handleMinify = () => {
    try {
      setError("");
      setMessage("");

      const parsed = parseAnyJsonSafely();
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

  const handleDownloadCsv = () => {
    if (!csvOutput) {
      setError("There is no CSV to download yet.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("");

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

  const handleClear = () => {
    setJsonInput("");
    setCsvOutput("");
    setError("");
    setMessage("Input and output cleared.");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Free JSON Tools
        </h1>

        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Validate, format, minify, and convert JSON to CSV online for free.
        </p>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <h2 className="text-lg font-semibold">Available actions</h2>
          <p className="mt-2 text-sm text-gray-700">
            Use this page as a mini JSON toolbox. Paste JSON, validate it,
            format it for readability, minify it for compact storage, or
            convert arrays of objects into CSV.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              JSON input
            </label>

            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="h-[420px] w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-black outline-none"
              placeholder="Paste your JSON here"
            />

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={handleValidate}
                className="rounded-lg border border-black px-4 py-2 text-black"
              >
                Validate JSON
              </button>

              <button
                onClick={handleFormat}
                className="rounded-lg border border-black px-4 py-2 text-black"
              >
                Format JSON
              </button>

              <button
                onClick={handleMinify}
                className="rounded-lg border border-black px-4 py-2 text-black"
              >
                Minify JSON
              </button>

              <button
                onClick={handleConvert}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Convert to CSV
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg border border-gray-400 px-4 py-2 text-black"
              >
                Upload JSON file
              </button>

              <button
                onClick={handleClear}
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700"
              >
                Clear
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
              className="h-[420px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
              placeholder="CSV result will appear here"
            />

            <div className="mt-4">
              <button
                onClick={handleDownloadCsv}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>

        {message && (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-semibold">Validate JSON</h3>
            <p className="mt-2 text-sm text-gray-700">
              Check whether your JSON syntax is correct before using it in your
              app, test, or data pipeline.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-semibold">Format JSON</h3>
            <p className="mt-2 text-sm text-gray-700">
              Make your JSON easier to read by applying clean indentation and
              spacing.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-semibold">Convert JSON to CSV</h3>
            <p className="mt-2 text-sm text-gray-700">
              Turn arrays of objects into CSV for Excel, spreadsheets, reports,
              or quick data inspection.
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold">About this page</h2>
          <p className="mt-3 text-gray-700">
            This free JSON toolbox is designed for developers, analysts, testers,
            and anyone who needs quick access to common JSON utilities in the
            browser. You can validate JSON, format it, minify it, upload a JSON
            file, and convert arrays to CSV without leaving the page.
          </p>
          <p className="mt-3 text-gray-700">
            In the next steps, this project will grow into a multi-page tool
            website with separate utilities for JSON formatting, validation,
            conversion, and more.
          </p>
        </section>
      </div>
    </main>
  );
}