"use client";

import Link from "next/link";
import { useState } from "react";

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
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to all tools
        </Link>

        <h1 className="mt-4 text-4xl font-bold">JSON Validator</h1>
        <p className="mt-3 text-lg text-gray-600">
          Check whether your JSON is valid.
        </p>

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
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Validate JSON
            </button>
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
      </div>
    </main>
  );
}