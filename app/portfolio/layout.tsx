import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies - Data Megathos",
  description:
    "Explore our recent projects across Mobile, Web, AI, and CMS development. See how Data Megathos has helped businesses achieve their digital goals.",
  alternates: {
    canonical: "https://www.datamegathos.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
