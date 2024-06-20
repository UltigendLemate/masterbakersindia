import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Master Bakers India Challenge 2024",
  description: "Happening on 3rd & 4th August 2024 at India Expo Centre & Mart, Greater Noida, NCR",
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
