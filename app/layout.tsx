import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { LayoutShell } from "@/components/LayoutShell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Data Megathos | High-end Software Development Agency",
  description:
    "High-end software development agency specializing in mobile app and website development, WordPress development, bespoke software solutions, and intelligent AI automation.",
  verification: {
    google: "GvwMlTY33UyXTjry5K25aQpLydorjxlLWh2sD17Yfwg",
    other: {
      "msvalidate.01": "79896EB0E2D3284708D62C3B6C3635AA",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} h-full`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics & Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B1QMFN7LCB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-B1QMFN7LCB');`,
          }}
        ></script>

        {/* Google Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10775302462"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10775302462');`,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-10775302462/xW14COak6YoYEL6iiJIo'});`,
          }}
        ></script>
      </head>
      <body className="bg-background-dark text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden antialiased">
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
