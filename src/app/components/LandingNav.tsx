import { useState } from "react";
import Link from "next/link";
import { HomeIcon, InfoIcon, FileQuestion } from "lucide-react"; // Example icons

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";

const navItems = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "FAQ", path: "/faq", icon: FileQuestion },
  { name: "About", path: "/about", icon: InfoIcon },
];

export function LandingDock() {
  const [selected, setSelected] = useState("Home");

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-2">
      <TooltipProvider>
        <Dock direction="middle"
              className="bg-white  z-10">
          {navItems.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.path}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                      selected === item.name ? "text-black" : "" // Highlight the selected item
                    )}
                    onClick={() => setSelected(item.name)}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}

export default LandingDock;
