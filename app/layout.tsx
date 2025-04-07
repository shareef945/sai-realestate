import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/space-grotesk";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/ui/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SAI Real Estate | Luxury Properties in Ghana",
  description:
    "Premium real estate development offering luxury properties, rentals, and innovative property management solutions in Ghana.",
  keywords: [
    "SAI Real Estate",
    "Luxury Properties",
    "Real Estate Ghana",
    "Property Sales",
    "Property Rentals",
    "Casa360",
    "Property Management",
    "Vista Grande",
    "Auben's Place",
    "Teshie Nungua Estates",
    "Tse-Addo",
    "Ghana Real Estate",
  ],
  authors: [{ name: "SAI Real Estate" }],
  creator: "SAI Real Estate",
  publisher: "SAI Real Estate",
  icons: {
    icon: [
      {
        url: "/sai-black.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/sai-black.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/sai-main.png", sizes: "180x180", type: "image/png" }],
    other: [{ url: "/sai-main.png", rel: "apple-touch-icon" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SAI Real Estate | Luxury Properties in Ghana",
    description: "Affordable Luxury Real Estate Development in Ghana",
    url: "https://sairealestate.casa",
    images: [
      {
        url: "/general-media/landing.JPG",
        width: 1200,
        height: 630,
        alt: "SAI Real Estate Preview",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "SAI Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAI Real Estate | Luxury Properties in Ghana",
    description:
      "Premium real estate development offering luxury properties, rentals, and innovative property management solutions in Ghana.",
    images: ["/general-media/landing.JPG"],
    creator: "@sairealestate_",
    site: "@sairealestate_",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  // verification: {
  //   google: "your-google-verification-code", // Replace with your verification code
  // },
  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://umami.saitechnology.co/script.js"
          data-website-id="3372e9c8-f8bd-4820-b9b1-c73b8f50bf05"
        />
      </head>
      <body className="antialiased bg-[#151515] relative before:fixed before:inset-0 before:content-[''] before:-z-10 before:pointer-events-none before:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] before:bg-[size:14rem_14rem]">
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
