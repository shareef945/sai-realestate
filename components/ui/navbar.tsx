"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

const COMMON_STYLES = {
  nav: "sticky top-0 z-50 w-full border-[#898989] bg-[#151515] py-2 px-2",
  container: " flex h-16 w-full items-center justify-between px-6 ",
  logo: "flex items-center",
  logoText: "text-white pl-4 font-semibold",
  mobileButton: "lg:hidden text-white",
  desktopNav: "hidden lg:flex lg:items-center lg:space-x-4",
  link: "flex w-full items-center py-2 text-[#898989]",
};

const Logo = () => (
  <Link href="/" className={COMMON_STYLES.logo} prefetch={false}>
    <Image src="/sai-main.png" width={50} alt="logo" height={50} />
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
  </div>
);

export default function Navbar() {
  return (
    <header className={COMMON_STYLES.nav}>
      <div className={COMMON_STYLES.container}>
        <Logo />
        <Sheet>
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
