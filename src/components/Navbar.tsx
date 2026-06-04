"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarStore } from "@/store";
import { navLinks } from "@/lib/constant";
import MenuToggle from "./MenuToggle";
import MobileNavbar from "./MobileNav";

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavbarStore();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
          scrolled ? "border-b border-border" : ""
        }`}
      >
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-[13px] font-mono text-accent tracking-[0.08em]"
          >
            jeffrey.irukeh
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-mono tracking-[0.05em] transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle — only the button, no positioning wrapper */}
          <div className="md:hidden">
            <MenuToggle showNav={isMenuOpen} setShowNav={toggleMenu} />
          </div>
        </div>
      </header>

      {/* MobileNav rendered outside the constrained container,
          free to anchor fixed to the full viewport */}
      <div className="md:hidden">
        <MobileNavbar showNav={isMenuOpen} setShowNav={toggleMenu} />
      </div>
    </>
  );
};

export default Header;