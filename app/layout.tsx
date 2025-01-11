import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/space-grotesk";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "SAI Real Estate",
  description: "Real Estate Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#151515]">
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
