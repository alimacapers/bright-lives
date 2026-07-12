import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlivesllc.com"),
  title: "Bright Lives Community Support LLC | Community Engagement in Northern Virginia",
  description:
    "DBHDS-licensed, non-center-based community engagement for adults with developmental disabilities in Alexandria and Northern Virginia.",
  keywords:
    "community engagement, non-center-based support, developmental disabilities, Alexandria VA, DBHDS, HCBS, Medicaid waiver, Northern Virginia",
  openGraph: {
    title: "Bright Lives Community Support LLC",
    description:
      "Real community. Real lives. Non-center-based community engagement for adults with developmental disabilities in Northern Virginia.",
    type: "website",
    url: "https://brightlivesllc.com",
    siteName: "Bright Lives Community Support LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Lives Community Support LLC",
    description:
      "Real community. Real lives. Non-center-based community engagement for adults with developmental disabilities in Northern Virginia.",
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
