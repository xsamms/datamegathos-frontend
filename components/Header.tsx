"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      <button className="md:hidden text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
