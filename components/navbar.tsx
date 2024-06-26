"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {
  isPro: boolean;
}

const Navbar = ({ isPro }: NavbarProps) => {
  const proModal = useProModal();
  return (
    <div className="fixed w-full h-16 z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center justify-evenly gap-4">
        <MobileSidebar isPro={isPro} />
        <Link href="https://landing-page-three-phi-84.vercel.app/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            StudyBuddy.Ai
          </h1>
        </Link>
        <div className="flex gap-4">
        <Link href="/sign-in">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignIn
          </button>
        </Link>
        <Link href="/sign-up">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignUp
          </button>
        </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button variant="premium" size="sm" onClick={proModal.onOpen}>
            Upgrade
            <Sparkles className="h-6 w-6 pl-2 text-white fill-white" />
          </Button>
        )}
        {isPro && (
          <Button variant="premium" size="sm">
            Pro
            <Sparkles className="h-6 w-6 pl-2 text-white fill-white" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
