import { Users, Building2, User, UserPlus } from "lucide-react";

export default function CustomerStats({ customers = [] }) {
  // Calculate stats
  const totalCustomers = customers.length;
  const prosCount = customers.filter((c) => c.type === "professional").length;
  const individualsCount = customers.filter(
    (c) => c.type === "individual",
  ).length;
  const syndicsCount = customers.filter((c) => c.type === "syndic").length;

  // Pour "À relancer", on se base sur le statut 'lead'
  const toFollowUpCount = customers.filter((c) => c.status === "lead").length;

  const stats = [
    {
      label: "Total Clients",
      value: totalCustomers,
      icon: Users,
      color: "text-primary",
      bgColor: "bg-(--color-primary-soft)",
      borderColor: "border-primary/20",
    },
    {
      label: "Professionnels",
      value: prosCount,
      icon: Building2,
      color: "text-(--color-info)",
      bgColor: "bg-(--color-info-soft)",
      borderColor: "border-(--color-info)/20",
    },
    {
      label: "Syndics / Agences",
      value: syndicsCount,
      icon: Building2,
      color: "text-(--color-secondary)",
      bgColor: "bg-(--color-secondary-soft)",
      borderColor: "border-(--color-secondary)/20",
    },
    {
      label: "À relancer",
      value: toFollowUpCount,
      icon: UserPlus,
      color: "text-(--color-emerald-600)",
      bgColor: "bg-(--color-emerald-50)",
      borderColor: "border-(--color-emerald-200)",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-2xl border ${stat.borderColor} bg-white shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]`}
        >
          <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
            <stat.icon size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
