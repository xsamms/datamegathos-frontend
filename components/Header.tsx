"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-4 lg:px-10 py-4 sticky top-0 bg-background-dark/90 backdrop-blur-md z-50 rounded-lg">
      <Link href="/" className="flex items-center gap-4 text-white">
        <Image
          src="/images/Data-Megathos-new-logo1.jpg"
          alt="Data Megathos Logo"
          width={32}
          height={32}
          className="size-8 object-contain"
        />
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          Data Megathos
        </h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]) &&
                link.href.split("#")[0] !== "/";

            return link.href.startsWith("/#") ? (
              <a
                key={link.label}
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                className={`text-sm font-medium leading-normal transition-colors ${isActive ? "text-primary" : "hover:text-primary"
                  }`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/quote"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">Get a Quote</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Mobile Menu"
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-md border-b border-border py-4 px-4 flex flex-col gap-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]) &&
                  link.href.split("#")[0] !== "/";

              return link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  className="text-base font-medium leading-normal hover:text-primary transition-colors"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  className={`text-base font-medium leading-normal transition-colors ${isActive ? "text-primary" : "hover:text-primary"
                    }`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/quote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mt-2"
          >
            <span className="truncate">Get a Quote</span>
          </Link>
        </div>
      )}
    </header>
  );
}
