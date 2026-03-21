import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://json-converter-tool.vercel.app/"),
  title: {
    default: "Free JSON Tools",
    template: "%s | Free JSON Tools",
  },
  description:
    "Free online tools for JSON, CSV, YAML, Base64, URLs, timestamps, and other developer-friendly data tasks.",
    verification: {
      google: "Q2bgUNoSbw8_uZfnqqt6C8nS3t8Vv9eGJeQyW4vp96E"
    }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="en">
       <head>
    <meta
      name="google-site-verification"
      content="Q2bgUNoSbw8_uZfnqqt6C8nS3t8Vv9eGJeQyW4vp96E"
    />
  </head>
      <body className="bg-white text-gray-900">
        <GoogleAnalytics gaId={gaId} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}