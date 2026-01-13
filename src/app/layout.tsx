import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Master Bakers India Challenge 2026",
  description: "Happening on 7th August 2026 at India Expo Centre & Mart, Greater Noida, NCR",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
