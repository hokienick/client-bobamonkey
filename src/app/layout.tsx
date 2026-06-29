import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boba Monkey — San Diego's Favorite Boba & Vietnamese Coffee",
  description: "Authentic Vietnamese coffee, creamy milk teas, and specialty boba drinks. Two locations in San Diego — Adams Ave and Mission Beach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=clash-grotesk@400,500,600,700&f[]=satoshi@400,500,700&f[]=telma@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
