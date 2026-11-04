import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Payment Portal - Data Megathos",
  description:
    "Securely finalize your project payment. 256-bit SSL encrypted checkout powered by Stripe.",
  alternates: {
    canonical: "https://www.datamegathos.com/pay",
  },
};

export default function PayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
