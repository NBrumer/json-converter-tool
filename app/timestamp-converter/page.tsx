"use client";

import { useState } from "react";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";
import RelatedTools from "../../components/RelatedTools";

export default function TimestampConverterPage() {
  const [timestampInput, setTimestampInput] = useState("1710000000");
  const [dateInput, setDateInput] = useState("2026-03-21T12:00");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTimestampToDate = () => {
    try {
      setError("");
      const timestamp = Number(timestampInput);

      if (Number.isNaN(timestamp)) {
        throw new Error("Timestamp must be a number.");
      }

      const milliseconds =
        timestampInput.length === 13 ? timestamp : timestamp * 1000;

      const date = new Date(milliseconds);

      if (Number.isNaN(date.getTime())) {
        throw new Error("Invalid timestamp.");
      }

      setOutput(date.toISOString());
      setMessage("Timestamp converted to date.");
    } catch (err) {
      setOutput("");
      setMessage("");

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to convert timestamp.");
      }
    }
  };

  const handleDateToTimestamp = () => {
    try {
      setError("");

      const date = new Date(dateInput);

      if (Number.isNaN(date.getTime())) {
        throw new Error("Invalid date.");
      }

      setOutput(String(Math.floor(date.getTime() / 1000)));
      setMessage("Date converted to Unix timestamp.");
    } catch (err) {
      setOutput("");
      setMessage("");

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to convert date.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="Timestamp Converter"
        description="Convert Unix timestamps to readable dates and back."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Unix timestamp
            </label>
            <input
              value={timestampInput}
              onChange={(e) => setTimestampInput(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-sm text-black outline-none"
            />
            <button
              onClick={handleTimestampToDate}
              className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Convert timestamp to date
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date and time
            </label>
            <input
              type="datetime-local"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-sm text-black outline-none"
            />
            <button
              onClick={handleDateToTimestamp}
              className="mt-3 rounded-lg border border-gray-300 px-4 py-2 text-gray-800"
            >
              Convert date to timestamp
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
            className="h-[220px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          />
        </div>
      </div>

      <StatusMessage message={message} error={error} />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">What this tool does</h2>
        <p className="mt-3 text-gray-700">
          This tool converts Unix timestamps into readable date values and also
          converts date inputs back into Unix timestamps.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How to use</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
          <li>Enter a Unix timestamp or select a date.</li>
          <li>Choose the direction of conversion.</li>
          <li>Read the result in the output field.</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">Use cases</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Debugging logs</li>
          <li>Working with APIs</li>
          <li>Converting backend time values</li>
        </ul>
      </section>

      <RelatedTools currentHref="/timestamp-converter" />
    </PageContainer>
  );
}