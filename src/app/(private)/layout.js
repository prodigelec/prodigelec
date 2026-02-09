import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CompanyOnboardingModal from "./components/onboarding/CompanyOnboardingModal";
import "./private.css";

/**
 * Base Private Layout
 * Handles session (JWT) validation.
 */
export default async function PrivateLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  // Basic session guard
  if (!token) {
    redirect("/auth/crm-login");
  }

  return (
    <div className="theme-private min-h-screen">
      <CompanyOnboardingModal />
      {children}
    </div>
  );
}
