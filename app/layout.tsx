import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/content/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.role}`,
  },
  description: profile.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen font-sans`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
