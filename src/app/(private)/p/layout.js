import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CompanyOnboardingModal from "../components/onboarding/CompanyOnboardingModal";

/**
 * Layout pour les pages privées authentifiées
 * Protège l'accès et inclut le CompanyOnboardingModal
 */
export default async function PrivateAuthenticatedLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  // Rediriger vers login si pas de token
  if (!token) {
    redirect("/login");
  }

  return (
    <>
      <CompanyOnboardingModal />
      {children}
    </>
  );
}