"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Ensure correct router import for client-side navigation
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Leaf } from "lucide-react";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use Next.js navigation for proper routing

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Leaf className="h-6 w-6 text-primary" />
            <span>GreenCommunity</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="/education" className="text-sm font-medium hover:text-primary">
            Education
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
          <Link href="/marketplace" className="text-sm font-medium hover:text-primary">
            Marketplace
          </Link>
          <Link href="/carbon" className="text-sm font-medium hover:text-primary">
            Carbon Tracker
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex md:items-center md:gap-4">
            {/* Using onClick to ensure navigation works properly */}
            <Button onClick={() => router.push("/login")}>Log In</Button>
            <Button onClick={() => router.push("/register")}>Sign Up</Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/projects"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/education"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="/community"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/marketplace"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  href="/carbon"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Carbon Tracker
                </Link>
                <div className="flex flex-col gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      router.push("/login");
                      setIsOpen(false);
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      router.push("/register");
                      setIsOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
