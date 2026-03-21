export type ToolItem = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export const tools: ToolItem[] = [
  {
    title: "JSON Validator",
    description: "Check whether your JSON is valid.",
    href: "/json-validator",
    category: "JSON",
  },
  {
    title: "JSON Formatter",
    description: "Format JSON with clean indentation.",
    href: "/json-formatter",
    category: "JSON",
  },
  {
    title: "JSON Minifier",
    description: "Minify JSON into a compact one-line format.",
    href: "/json-minifier",
    category: "JSON",
  },
  {
    title: "JSON to CSV Converter",
    description: "Convert JSON arrays of objects into CSV.",
    href: "/json-to-csv",
    category: "Conversion",
  },
  {
    title: "JSON to YAML Converter",
    description: "Convert JSON into YAML format.",
    href: "/json-to-yaml",
    category: "Conversion",
  },
  {
    title: "CSV to JSON Converter",
    description: "Convert simple CSV data into JSON.",
    href: "/csv-to-json",
    category: "Conversion",
  },
  {
    title: "UUID Generator",
    description: "Generate UUIDs instantly in your browser.",
    href: "/uuid-generator",
    category: "Utilities",
  },
  {
    title: "Base64 Encode / Decode",
    description: "Encode text to Base64 or decode Base64 back to text.",
    href: "/base64-encode-decode",
    category: "Utilities",
  },
  {
    title: "URL Encode / Decode",
    description: "Encode URLs and query strings or decode them back.",
    href: "/url-encode-decode",
    category: "Utilities",
  },
  {
    title: "Timestamp Converter",
    description: "Convert Unix timestamps to readable dates and back.",
    href: "/timestamp-converter",
    category: "Utilities",
  },
];