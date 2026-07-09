import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Yeboah | Creative Engineer",
  description:
    "A minimal portfolio for Eric Yeboah, a Creative Engineer based in Accra crafting digital experiences with clean code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
