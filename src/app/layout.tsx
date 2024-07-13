import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { INFO } from "@/data/Info";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: INFO.pageTitle,
  description: INFO.pageDescription,
  keywords: INFO.keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-zinc-50">
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
        </div>
      </body>
    </html>
  );
}
