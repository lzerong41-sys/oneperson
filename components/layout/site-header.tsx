"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-fg transition-colors hover:text-primary"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/#contact">联系我</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="打开导航菜单"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-line bg-bg w-72">
            <SheetHeader>
              <SheetTitle className="text-left text-fg">
                {profile.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm text-fg-muted",
                    "transition-colors hover:bg-bg-elevated hover:text-fg"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  联系我
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
