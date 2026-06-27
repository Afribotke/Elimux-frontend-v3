"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/discover", label: "Discover" },
  { href: "/institutions", label: "Institutions" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-900/30 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-gold-500" />
          <span className="text-xl font-bold text-gold-400">ElimuX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                pathname === link.href ? "text-gold-500" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="text-gold-500 hover:text-gold-400 hover:bg-gold-950">
            <Link href="/discover"><Search className="h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" asChild className="border-gold-700 text-gold-500 hover:bg-gold-950 hover:text-gold-400">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-gold-600 text-black hover:bg-gold-500">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden p-2 text-gold-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold-900/30 bg-black px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm font-medium text-gray-400 hover:text-gold-400 py-2" onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-gold-900/30">
            <Button variant="outline" asChild className="w-full border-gold-700 text-gold-500"><Link href="/login">Log In</Link></Button>
            <Button asChild className="w-full bg-gold-600 text-black hover:bg-gold-500"><Link href="/register">Get Started</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
