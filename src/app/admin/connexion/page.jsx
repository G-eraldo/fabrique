import AdminLogin from "@/components/AdminLogin";
import { getAdmin } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Connexion au mini-CRM",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await getAdmin()) redirect("/admin");
  return (
    <section className="admin-page section-tight">
      <div className="container">
        <AdminLogin />
      </div>
    </section>
  );
}
