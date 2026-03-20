"use client";

import { useState } from "react";
import yaml from "js-yaml";
import BackLink from "../../components/BackLink";
import PageContainer from "../../components/PageContainer";
import StatusMessage from "../../components/StatusMessage";
import ToolHeader from "../../components/ToolHeader";

export default function JsonToYamlPage() {
  const [jsonInput, setJsonInput] = useState(`{
  "name": "Alice",
  "age": 25,
  "city": "Berlin"
}`);
  const [yamlOutput, setYamlOutput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    try {
      setError("");
      setMessage("");

      const parsed = JSON.parse(jsonInput);
      const result = yaml.dump(parsed);

      setYamlOutput(result);
      setMessage("JSON successfully converted to YAML.");
    } catch (err) {
      setYamlOutput("");

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to convert JSON to YAML.");
      }
    }
  };

  return (
    <PageContainer>
      <BackLink />
      <ToolHeader
        title="JSON to YAML Converter"
        description="Convert JSON into YAML format."
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

          <div className="mt-4">
            <button
              onClick={handleConvert}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Convert to YAML
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            YAML output
          </label>

          <textarea
            value={yamlOutput}
            readOnly
            className="h-[360px] w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-black outline-none"
          />
        </div>
      </div>

      <StatusMessage message={message} error={error} />
    </PageContainer>
  );
}