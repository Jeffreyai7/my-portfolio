"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNavbarStore } from "@/store";
import { navLinks } from "@/lib/constant";
import ThemeToggleButton from "./ThemeToggle";
import MenuToggle from "./MenuToggle";
import MobileNavbar from "./MobileNav";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavbarStore();
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname.includes(path);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-background text-foreground transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-2 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="w-[50px]">
          <Image
            src="/images/android-chrome-512x512.png"
            alt="Logo"
            width={24}
            height={24}
            className="relative z-50 w-full rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[1rem] font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Menu ` */}
        <div className=" md:hidden">
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <MenuToggle showNav={isMenuOpen} setShowNav={toggleMenu} />
          </div>
          <MobileNavbar showNav={isMenuOpen} setShowNav={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
