import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Home, Rss, Settings, User } from "lucide-react";
import { LuFolderOpen, LuUser, LuMail } from "react-icons/lu";

import Link from "next/link";

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home, isActive: true },
  { title: "About", href: "/#about", icon: LuUser },
  { title: "Projects", href: "/projects", icon: LuFolderOpen },
  { title: "Contact", href: "/#contact", icon: LuMail },
];

export default function NavigationMenuMobile() {
  return (
    <NavigationMenu className="fixed bottom-0 left-0 right-0 md:hidden">
      <NavigationMenuList className="">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "flex h-auto items-center py-2.5"
              )}
              active={item.isActive}
              asChild
            >
              <Link href={item.href} className="" >
                <item.icon className="mb-1.5 mr-1 h-5 w-5" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
