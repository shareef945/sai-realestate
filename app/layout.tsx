import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/space-grotesk";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "SAI Real Estate",
  description: "Real Estate Development",
  icons: {
    icon: "/sai-main.png",
  },
  openGraph: {
    title: "SAI Real Estate",
    description: "Luxury Real Estate Development in Ghana",
    images: [
      {
        url: "/site-preview.png",
        width: 1200,
        height: 630,
        alt: "SAI Real Estate Preview",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "SAI Real Estate",
  },
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
