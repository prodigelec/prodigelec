import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CompanyOnboardingModal from "../components/onboarding/CompanyOnboardingModal";
import "../private.css";

/**
 * Layout pour les pages privées (sauf login)
 * Gère la validation de session (JWT)
 */
export default async function PrivatePagesLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  // Basic session guard
  if (!token) {
    redirect("/login");
  }

  return (
    <div className="theme-private min-h-screen">
      <CompanyOnboardingModal />
      {children}
    </div>
  );
}