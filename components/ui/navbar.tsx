"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

const COMMON_STYLES = {
  nav: (isScrolled: boolean) =>
    `fixed top-0 z-50 w-full transition-all duration-300 py-2 px-2 ${
      isScrolled ? "bg-[#151515] border-[#898989]" : "bg-transparent"
    }`,
  container: " flex h-16 w-full items-center justify-between px-6 ",
  logo: "flex items-center gap-4", // Added gap-4 for consistent spacing
  logoText: "text-white font-semibold", // Removed pl-4 since we're using gap
  mobileButton: "lg:hidden text-black",
  desktopNav: "hidden lg:flex lg:items-center lg:gap-8", // Changed space-x-4 to gap-6 for more spacing
  link: "flex w-full items-center text-white text-sm font-semibold", // Removed px-4 since we're using gap
};

const Logo = () => (
  <Link href="/" className={COMMON_STYLES.logo} prefetch={false}>
    <Image
      src="/sai-main.png"
      width={50}
      alt="logo"
      height={50}
      priority
    />
    <p className={COMMON_STYLES.logoText}>REAL ESTATE</p>
  </Link>
);

const NavigationLinks = ({ className }: { className?: string }) => (
  <div className={className}>
    {NAV_ITEMS.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={COMMON_STYLES.link}
        prefetch={false}
      >
        {label}
      </Link>
    ))}
    <Button>
      <Link href="/">Contact</Link>
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
          <SheetContent side="left" className="bg-[#151515]">
            <Logo />
            <div className="grid gap-2 py-6 bg-[#151515]">
              <NavigationLinks />
            </div>
          </SheetContent>
        </Sheet>
        <NavigationLinks className={COMMON_STYLES.desktopNav} />
      </div>
    </header>
  );
}
