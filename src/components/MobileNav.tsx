"use client";
import { navLinks } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const MobileNav = ({
  setShowNav,
  showNav,
}: {
  setShowNav: Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        // fixed spans the full viewport width, sits flush under the header
        "fixed top-[57px] left-0 right-0 z-50",
        "bg-background border-b border-border",
        "transition-all duration-300 overflow-hidden",
        showNav
          ? "max-h-screen opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex flex-col px-6 py-2">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setShowNav(false)}
            className={cn(
              "text-[11px] font-mono uppercase tracking-[0.1em] py-4 border-b border-border last:border-b-0 transition-colors",
              pathname === item.href
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;