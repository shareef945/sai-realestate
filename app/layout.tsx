import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/space-grotesk";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "SAI Real Estate",
  description: "Real Estate Development",
  icons: {
    icon: [
      {
        url: "/sai-main.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/sai-main.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "SAI Real Estate",
    description: "Affordable Luxury Real Estate Development in Ghana",
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
      <body className="antialiased bg-[#151515] relative before:fixed before:inset-0 before:content-[''] before:-z-10 before:pointer-events-none before:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] before:bg-[size:14rem_14rem]">
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
