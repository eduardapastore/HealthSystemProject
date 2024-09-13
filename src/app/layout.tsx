import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="relative">
      <body className={twMerge(sora.className, "antialiased bg-blue-100")}>
        {children}
      </body>
    </html>
  );
}
