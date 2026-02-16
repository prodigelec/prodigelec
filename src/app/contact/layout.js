/**
 * Layout spécifique pour la page contact
 * Inclut un preconnect pour OpenStreetMap qui est uniquement utilisé sur cette page
 */
export default function ContactLayout({ children }) {
    return (
        <>
            {/* Preconnect optimisé pour OpenStreetMap - utilisé uniquement sur cette page */}
            <link rel="preconnect" href="https://tile.openstreetmap.org" crossOrigin="anonymous" />
            {children}
        </>
    );
}
