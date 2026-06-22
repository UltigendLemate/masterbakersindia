import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script id="hyperleap-chatbot" strategy="afterInteractive">
          {`
            (function () {
              window.userChatbotConfig = {
                chatbotId: "5856d674-3d90-40e6-aaef-e18f4ced1941",
                privateKey: "NTg1NmQ2NzQzZDkwNDBlNmFhZWZlMThmNGNlZDE5NDFfMjY1MDY=",
              };
              var chatbotScript = document.createElement("script");
              chatbotScript.src = "https://chatjs.hyperleap.ai/chatbot.min.js";
              chatbotScript.async = true;
              document.head.appendChild(chatbotScript);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
