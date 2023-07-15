import type { Metadata } from "next";

// These styles apply to every route in the application
import "./styles/globals.css";
import Providers from "./components/react_query_provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Debojyoti Dey",
  description: "Debojyoti Dey's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <Script src="https://kit.fontawesome.com/c36a0de087.js"></Script>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
