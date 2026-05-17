"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Conditionally renders the public Header/Footer chrome.
 * Admin routes (/admin/*) get a clean shell with no public navigation.
 */
export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    // Admin pages manage their own chrome (sidebar, topnav)
    return <>{children}</>;
  }

  // Public pages get the standard site layout
  return (
    <div className="flex h-full grow flex-col">
      <div className="px-4 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[1200px] flex-1 w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
