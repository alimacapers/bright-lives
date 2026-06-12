import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Lives Community Support LLC | Day Support Alexandria VA",
  description:
    "DBHDS-licensed day support for adults with developmental disabilities in Alexandria, VA. ISP-driven, HCBS-compliant community support serving Northern Virginia.",
  keywords:
    "day support, developmental disabilities, Alexandria VA, DBHDS, HCBS, Medicaid waiver, community support, Northern Virginia",
  openGraph: {
    title: "Bright Lives Community Support LLC",
    description:
      "Real community. Real lives. DBHDS-licensed day support for adults with developmental disabilities in Alexandria, VA.",
    type: "website",
    url: "https://brightlivesllc.com",
    siteName: "Bright Lives Community Support LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bright Lives Community Support LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Lives Community Support LLC",
    description:
      "Real community. Real lives. DBHDS-licensed day support for adults with developmental disabilities in Alexandria, VA.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
