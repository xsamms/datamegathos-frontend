import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Tech Blog | Data Megathos",
  description:
    "Insights on software engineering, cloud architecture, AI automation, and web design from the Data Megathos engineering team.",
  alternates: {
    canonical: "https://www.datamegathos.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

