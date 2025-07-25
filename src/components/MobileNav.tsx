import { navLinks } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

const MobileNav = ({
  setShowNav,
  showNav,
}: {
  setShowNav: Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}) => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname.includes(path);

  return (
    <div
      className={cn(
        "absolute top-20 left-0 z-0 flex w-screen flex-col items-center justify-between gap-14 bg-white  py-10 shadow-lg transition duration-500 lg:relative lg:top-0 lg:w-full lg:flex-row lg:gap-0 lg:py-0 lg:shadow-none",
        showNav ? "translate-y-0" : "-translate-y-[200%] lg:translate-y-0"
      )}
    >
      <nav className="">
        <ul className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between">
          {navLinks.map((item) => (
            <li key={item.name} className="w-full text-center lg:text-left">
              <Link
                className={cn(
                  "w-full text-nowrap",
                  isActive(item.href)
                    ? "text-blue-dark font-semibold"
                    : "text-grey-dark hover:text-grey-darker"
                )}
                href={item.href}
                onClick={() => setShowNav(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
