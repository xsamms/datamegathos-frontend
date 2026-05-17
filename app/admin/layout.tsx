import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Data Megathos CMS",
  description: "Content management system for Data Megathos",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The auth guard is handled at the individual page level (client-side
  // redirect in useAuth), not in this layout. This avoids redirect loops
  // when the login page itself is under /admin.
  //
  // Protected pages (posts/create, etc.) use useAuth() to check
  // authentication and redirect to /admin/login if not authenticated.

  return (
    <div className="cms-root">
      {children}
    </div>
  );
}
