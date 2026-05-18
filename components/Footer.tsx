import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-primary/20 px-6 lg:px-10 py-12">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/Megathos-logo.png"
              alt="Data Megathos Logo"
              width={24}
              height={24}
              className="size-6 object-contain"
            />
            <h2 className="text-lg font-bold leading-tight">Data Megathos</h2>
          </Link>
          <p className="text-sm text-slate-400">
            Engineering the future of digital products for startups and SMEs
            worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Company
            </h4>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/portfolio"
            >
              Portfolio
            </a>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/careers"
            >
              Careers
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Services
            </h4>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/services"
            >
              Mobile App Development
            </Link>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/services"
            >
              AI &amp; Automation
            </Link>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/services"
            >
              WordPress Website
            </Link>
            <Link
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="/services"
            >
              Custom Software
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Social
            </h4>
            <a
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="https://www.facebook.com/datamegathos" target="_blank"
            >
              Facebook
            </a>
            <a
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="https://www.linkedin.com/company/data-megathos" target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="https://www.x.com/datamegathos" target="_blank"
            >
              X (Twitter)
            </a>
            <a
              className="text-sm text-slate-400 hover:text-white transition-colors"
              href="https://www.instagram.com/datamegathos" target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 mt-8 border-t border-primary/10 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
        <p>© 2024 Data Megathos. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="/privacy-policy">
            Privacy Policy
          </a>
          <Link className="hover:text-white transition-colors" href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
