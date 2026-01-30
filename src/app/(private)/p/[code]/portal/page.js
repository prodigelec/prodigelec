/**
 * Minimalist Portal Dashboard
 * Optimized for clarity and elegance.
 */
export default async function PortalDashboardPage({ params }) {
    const { code } = await params;

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white h-32 rounded-xl border border-slate-100 shadow-sm"></div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
                {/* Large Chart Area */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm h-full"></div>
                
                {/* Side Panel / Activity */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm h-full"></div>
            </div>

            {/* Bottom Table Area */}
            <div className="bg-white h-64 rounded-xl border border-slate-100 shadow-sm w-full"></div>
        </div>
    );
}
