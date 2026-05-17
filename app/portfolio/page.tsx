"use client";

import { useState } from "react";

type Category = "All" | "Mobile" | "Web" | "AI" | "CMS";

const categories: Category[] = ["All", "Mobile", "Web", "AI", "CMS"];

const projects = [
  {
    title: "Global E-Commerce Platform",
    category: "Web" as Category,
    description:
      "A highly scalable e-commerce solution with real-time inventory management and secure payment gateways.",
    techs: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABevjG49mENGl_gGk1AJ_TxVAuziFikAvrWWSIw1_IAl42NxDVt_fc2IEdBdK-bQvwmGHM06IRMG8W5pX6_2etWqZkXaE7rbyYnfdNNzW6A8vkemkW_sAt_COv60f9ZUhUx1es5-H0hIOd1YSibyvO-GIvi6fJ-WM4HDiW8F0TNzqEGPAy-6PXOOLJuDRr6JjaMcBepaJ1bu2Z8KFk_dgniYFUXiEJNHkm3EpAwDddkmTy0OIspOQlPinZagnLNcQxpU35NEuREWKU",
    alt: "Dashboard of an e-commerce platform",
  },
  {
    title: "Intelligent Customer Support Bot",
    category: "AI" as Category,
    description:
      "An advanced AI chatbot that reduced customer support response times by 80% while improving satisfaction.",
    techs: ["Python", "TensorFlow", "OpenAI API"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAqFDYIZ__1Jz-FYhXARpphtgWZ0NPelY2-f6iNcQzEsUdKByDVh5StA8K_vHCZWt0nWfPH_q21HUpjHaimSmDqms4MqFNbiuY0TKoj6B5sZFAapVjvq_l6T6yrm64JCq-0B708_WXbHq7BLkGic5YBGM09LU-b3SeRZOwCxo04DnYBLNr1grNmbDvdMQBOhspo8vUqUKSeGkBxCLBP8f-HFF0wrrIv_O-rPlsSfloHuk3LNsYWhDs8DHEkB38fEgzhUrBSTljOOto",
    alt: "Abstract AI neural network visualization",
  },
  {
    title: "Telemed Patient Portal App",
    category: "Mobile" as Category,
    description:
      "A secure, HIPAA-compliant mobile application connecting patients with doctors for virtual consultations.",
    techs: ["Flutter", "Firebase", "WebRTC"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtje_M6a2zRvxn37Fffb7juWRiDfWZRFpTJKxu3l3KKu7NGRHXq_55ujri9Bx1NSTbH5ZxEAcp5SCpmK0dRmjmLzCrXjz-ZSE0G-XPLs5WGqlTGleAv63cHkonmtc4abtD9sh8YMiplfpUeg_TxIqONFLxaNFylDq-s8_K4EaEup6BiCNoFOEngWKSugP6DCmGWwLTJPaej5Ahs6zeFUabEDb5Xpz8W7SpL9PvBTzlt2UzusyHGtDp-CaYUd87lrfc_yhFYFTBJkug",
    alt: "Person using a healthcare mobile app",
  },
  {
    title: "Enterprise CMS Migration",
    category: "CMS" as Category,
    description:
      "Seamless migration of a large-scale media network to a headless CMS architecture for improved performance.",
    techs: ["Next.js", "Sanity.io", "GraphQL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMzDCUPVYm1I0vQHJFAC_wux31-90wJ2zhVFPnfNFrZSQr14UX7VHDqL4kqEzgCLuhPDNh4YyCqgiHIH6NMb8Eiu3p1P8lrIgoNsX2wCU32Cc44tdJYpdSxopU7Nh1LKNjiOKVDFOZcjNEmPpXJtMwj2P3a_T0qA3eqTHrTehiGPii9CXq5PbIJYvVXxwfVTJ4GZs1Yvz-8YZm4dQco_SMNJkMO555wNfpy9U_yvJ96hEkMYTXUNqyaeB-kl0A45EJazkGdE8BstK9",
    alt: "Laptop displaying a content management system",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col gap-8 py-10 px-4 lg:px-10">
      {/* Page Header */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Portfolio &amp; Case Studies
        </h1>
        <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
          Explore our recent projects across Mobile, Web, AI, and CMS
          development. See how we&apos;ve helped businesses achieve their
          digital goals.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-6 text-sm font-bold leading-normal transition-colors ${
              activeFilter === cat
                ? "bg-primary text-white"
                : "bg-brand-surface border border-brand-border hover:bg-primary/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 group cursor-pointer"
          >
            {/* Project Image */}
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden relative shadow-lg"
              style={{ backgroundImage: `url("${project.image}")` }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Case Study
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold leading-normal group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="bg-brand-surface text-xs font-bold px-2 py-1 rounded text-primary border border-brand-border shrink-0 ml-2">
                  {project.category}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm font-normal leading-normal">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-on-surface-variant bg-brand-surface border border-brand-border px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center py-8 gap-2">
        <button
          className="flex size-10 items-center justify-center text-outline hover:text-primary transition-colors cursor-not-allowed opacity-50"
          disabled
          aria-label="Previous page"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
        </button>
        <button
          className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-lg bg-primary"
          aria-current="page"
        >
          1
        </button>
        <button className="text-sm font-medium leading-normal flex size-10 items-center justify-center hover:bg-brand-surface rounded-lg transition-colors">
          2
        </button>
        <button className="text-sm font-medium leading-normal flex size-10 items-center justify-center hover:bg-brand-surface rounded-lg transition-colors">
          3
        </button>
        <span className="text-sm font-medium leading-normal flex items-center justify-center px-2">
          ...
        </span>
        <button
          className="flex size-10 items-center justify-center text-outline hover:text-primary transition-colors"
          aria-label="Next page"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
