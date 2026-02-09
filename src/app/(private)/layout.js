import PrivateThemeWrapper from "@/app/components/layout/PrivateThemeWrapper";

export default function PrivateLayout({ children }) {
  return (
    <PrivateThemeWrapper>
      <div className="min-h-screen">
        {children}
      </div>
    </PrivateThemeWrapper>
  );
}