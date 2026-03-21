import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://json-converter-tool.vercel.app";

  const routes = [
    "",
    "/tools",
    "/json-validator",
    "/json-formatter",
    "/json-minifier",
    "/json-to-csv",
    "/json-to-yaml",
    "/csv-to-json",
    "/uuid-generator",
    "/base64-encode-decode",
    "/url-encode-decode",
    "/timestamp-converter",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}