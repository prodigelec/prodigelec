/**
 * Layout minimal pour la page de login
 * Aucune navbar, aucun composant supplémentaire
 */
export default function LoginLayout({ children }) {
  return (
    <div className="theme-private">
      {children}
    </div>
  );
}