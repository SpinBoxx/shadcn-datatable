"use client";

import useRoutes from "@/hooks/use-routes";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Settings } from "lucide-react";

const MainNav = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const routes = useRoutes();
  return (
    <nav className={cn("flex items-center gap-x-4 lg:space-x-4", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{route.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={route.href}
                      >
                        <route.icon className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Administration
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Modifie toutes les données du backend en une seule
                          interface.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {route.subMenu.map((subMenu) => (
                    <ListItem href={subMenu.href} title={subMenu.label}>
                      {subMenu.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default MainNav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
