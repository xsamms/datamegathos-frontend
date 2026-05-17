"use client";

import { useState } from "react";
import Link from "next/link";

type PaymentTab = "card" | "bank";

export default function PayPage() {
  const [activeTab, setActiveTab] = useState<PaymentTab>("card");

  return (
    <div className="flex flex-col lg:flex-row gap-0 -mx-4 lg:-mx-10 my-[-20px] min-h-[calc(100vh-var(--header-height))]">
      {/* Left Column: Order Summary */}
      <aside className="w-full lg:w-[40%] xl:w-[35%] bg-brand-bg text-white p-8 lg:p-12 xl:p-16 flex flex-col justify-between relative overflow-hidden shrink-0">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {/* Branding */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-2xl">
                database
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Data Megathos
            </span>
          </div>

          {/* Summary Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight">
              Project Payment Portal
            </h1>
            <p className="text-white/60 text-lg max-w-sm leading-relaxed">
              Securely finalize the next stage of our partnership and project
              milestones.
            </p>
          </div>

          {/* Order Details */}
          <div className="space-y-8">
            <div className="group">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">
                Engagement Type
              </p>
              <p className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                MVP Development: Phase 1
              </p>
            </div>
            <div className="group">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">
                Invoice Number
              </p>
              <p className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                INV-2023-001
              </p>
            </div>
            <div className="pt-10 mt-10 border-t border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-3">
                Total Investment
              </p>
              <p className="text-5xl lg:text-6xl font-bold text-primary tracking-tight drop-shadow-md">
                $5,000.00
              </p>
            </div>
          </div>
        </div>

        {/* Footer / Help Link */}
        <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
          <Link
            className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
            </div>
            <span className="font-medium">Direct Support via WhatsApp</span>
          </Link>
        </div>
      </aside>

      {/* Right Column: Payment Form */}
      <section className="w-full lg:w-[60%] xl:w-[65%] p-6 lg:p-12 xl:p-16 flex items-center justify-center relative">
        <div className="w-full max-w-[540px] bg-brand-surface rounded-2xl border border-brand-border p-8 lg:p-10 relative z-10 shadow-xl shadow-black/20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              credit_score
            </span>
            Payment Details
          </h2>

          {/* Payment Method Tabs */}
          <div className="flex gap-3 mb-8 bg-brand-bg p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab("card")}
              className={`flex-1 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                activeTab === "card"
                  ? "bg-primary/20 text-primary shadow-sm border border-primary/10"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                credit_card
              </span>
              <span className="hidden sm:inline">Credit Card</span>
            </button>
            <button
              onClick={() => setActiveTab("bank")}
              className={`flex-1 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                activeTab === "bank"
                  ? "bg-primary/20 text-primary shadow-sm border border-primary/10"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                account_balance
              </span>
              <span className="hidden sm:inline">Bank Transfer</span>
            </button>
          </div>

          {/* Credit Card Form */}
          {activeTab === "card" && (
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                  Cardholder Name
                </label>
                <input
                  className="input h-12 px-4"
                  placeholder="John Doe"
                  type="text"
                  name="cardholderName"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                    credit_card
                  </span>
                  <input
                    className="input h-12 pl-12 pr-4 font-mono tracking-wide"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                    name="cardNumber"
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Expiry Date
                  </label>
                  <input
                    className="input h-12 px-4 font-mono tracking-wide text-center"
                    placeholder="MM/YY"
                    type="text"
                    name="expiryDate"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    <span className="flex justify-between items-center">
                      CVV
                      <span
                        className="material-symbols-outlined text-[16px] text-outline cursor-help"
                        title="3 digits on back of card"
                      >
                        info
                      </span>
                    </span>
                  </label>
                  <input
                    className="input h-12 px-4 font-mono tracking-widest text-center"
                    maxLength={4}
                    placeholder="•••"
                    type="password"
                    name="cvv"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="btn btn-primary w-full h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 group"
                  type="button"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                    lock
                  </span>
                  Confirm $5,000.00 Payment
                </button>
              </div>
            </form>
          )}

          {/* Bank Transfer Form */}
          {activeTab === "bank" && (
            <div className="space-y-6">
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Transfer the exact amount to the bank details below. Once
                payment is confirmed, your project milestone will be activated
                within 24 hours.
              </p>

              <div className="space-y-4 bg-brand-bg rounded-xl p-6 border border-brand-border">
                <div>
                  <p className="text-xs text-outline uppercase tracking-widest font-semibold mb-1">
                    Bank Name
                  </p>
                  <p className="text-on-surface font-medium">
                    First National Bank
                  </p>
                </div>
                <div>
                  <p className="text-xs text-outline uppercase tracking-widest font-semibold mb-1">
                    Account Name
                  </p>
                  <p className="text-on-surface font-medium">
                    Data Megathos LLC
                  </p>
                </div>
                <div>
                  <p className="text-xs text-outline uppercase tracking-widest font-semibold mb-1">
                    Account Number
                  </p>
                  <p className="text-on-surface font-medium font-mono tracking-wide">
                    1234 5678 9012
                  </p>
                </div>
                <div>
                  <p className="text-xs text-outline uppercase tracking-widest font-semibold mb-1">
                    Routing / SWIFT
                  </p>
                  <p className="text-on-surface font-medium font-mono tracking-wide">
                    FNBAUS33
                  </p>
                </div>
                <div className="pt-2 border-t border-brand-border">
                  <p className="text-xs text-outline uppercase tracking-widest font-semibold mb-1">
                    Reference
                  </p>
                  <p className="text-primary font-bold font-mono tracking-wide">
                    INV-2023-001
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="block text-sm font-semibold text-on-surface-variant">
                  Upload Proof of Payment
                </label>
                <div className="border-2 border-dashed border-brand-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-outline mb-2">
                    cloud_upload
                  </span>
                  <p className="text-sm text-on-surface-variant">
                    Drag &amp; drop or{" "}
                    <span className="text-primary font-semibold">browse</span>{" "}
                    to upload
                  </p>
                  <p className="text-xs text-outline mt-1">
                    PDF, PNG, JPG up to 5MB
                  </p>
                </div>
              </div>

              <button
                className="btn btn-primary w-full h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 group"
                type="button"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                Confirm Bank Transfer
              </button>
            </div>
          )}

          {/* Trust Signals */}
          <div className="mt-8 pt-6 border-t border-brand-border flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2 text-on-surface-variant text-sm font-medium bg-primary/5 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-green-500 text-[18px]">
                verified_user
              </span>
              Guaranteed Safe &amp; Secure Checkout
            </div>
            <div className="flex items-center gap-5 text-outline text-xs font-medium mt-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  lock
                </span>{" "}
                256-bit SSL
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  security
                </span>{" "}
                Secured by Stripe
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
