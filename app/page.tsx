"use client";

import { useState } from "react";
import { Parser } from "json2csv";

export default function Home() {
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

  const [csvOutput, setCsvOutput] = useState("");

  const convert = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const parser = new Parser();
      const csv = parser.parse(parsed);
      setCsvOutput(csv);
    } catch {
      setCsvOutput("Ошибка JSON");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">JSON → CSV Converter</h1>

        <div className="mb-6">
          <label className="block mb-2 font-medium">JSON input</label>
          <textarea
            className="w-full h-64 border border-gray-400 rounded-md p-3 font-mono text-sm bg-white text-black"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>

        <button
          onClick={convert}
          className="bg-black text-white px-5 py-2 rounded-md mb-6"
        >
          Convert
        </button>

        <div>
          <label className="block mb-2 font-medium">CSV output</label>
          <textarea
            className="w-full h-64 border border-gray-400 rounded-md p-3 font-mono text-sm bg-white text-black"
            value={csvOutput}
            readOnly
          />
        </div>
      </div>
    </main>
  );
}