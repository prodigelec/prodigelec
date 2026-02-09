/**
 * Minimalist Portal Dashboard
 * Optimized for clarity and elegance.
 */
export default async function PortalDashboardPage({ params }) {
    const { code } = await params;

    return (
        <div className="space-y-6 animate-in fade-in duration-700 pb-10">
            <div className="flex items-center justify-center h-[60vh] text-slate-400 text-sm">
                Dashboard en cours de construction...
            </div>
        </div>
    );
}
