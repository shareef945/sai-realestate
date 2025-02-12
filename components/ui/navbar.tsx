"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";

const NAV_ITEMS = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/casa360", label: "Casa360" },
];

// const BOTTOM_NAV_ITEMS = [
//   { href: "/privacy", label: "Privacy Policy" },
//   { href: "/terms", label: "Terms of Service" },
// ];

const COMMON_STYLES = {
  nav: (isScrolled: boolean) =>
    `fixed top-0 z-50 w-full transition-all duration-300 py-2 px-2 ${
      isScrolled ? "bg-[#151515] border-[#898989]" : "bg-transparent"
    }`,
  container: "flex h-16 w-full items-center justify-between px-6",
  logo: "flex items-center gap-4",
  logoText: "text-white font-semibold",
  mobileButton: "lg:hidden text-white", // Changed from text-black to text-white
  desktopNav: "hidden lg:flex lg:items-center lg:gap-8",
  link: "flex w-full items-center text-secondary md:text-white text-xl md:text-sm font-semibold hover:text-gray-300 transition-colors", // Added hover effect
};

const Logo = () => (
  <Link href="/" className={COMMON_STYLES.logo} prefetch={false}>
    <Image
      src="/logos/sai-main.png"
      width={50}
      alt="logo"
      height={50}
      priority
    />
    <p className={COMMON_STYLES.logoText}>REAL ESTATE</p>
  </Link>
);

const NavigationLinks = ({
  className,
  isMobile,
}: {
  className?: string;
  isMobile?: boolean;
}) => (
  <div className={`${className} ${isMobile ? "flex flex-col gap-6" : ""}`}>
    {NAV_ITEMS.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`${COMMON_STYLES.link} ${isMobile ? "text-4xl" : ""}`}
        prefetch={false}
      >
        {label}
      </Link>
    ))}
    <Button className={isMobile ? "w-full mt-4" : ""}>
      <Link href="/contact">Contact</Link>
    </Button>
  </div>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={COMMON_STYLES.nav(isScrolled)}>
      <div className={COMMON_STYLES.container}>
        <Logo />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className={COMMON_STYLES.mobileButton}>
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#151515] p-6 w-full h-full">
            <div className="mb-8">
              <Logo />
            </div>
            <div className="grid gap-2 pt-20">
              <NavigationLinks isMobile />
            </div>
            <div className="absolute bottom-8 left-6">
              <p className="text-secondary text-sm">info@sairealestate.casa</p>
            </div>
          </SheetContent>
        </Sheet>
        <NavigationLinks className={COMMON_STYLES.desktopNav} />
      </div>
    </header>
  );
}
