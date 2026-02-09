"use client";

import { ArrowUpDown, ArrowUp, ArrowDown, Check } from "lucide-react";

function SortIcon({ sortConfig, columnKey }) {
  if (sortConfig.key !== columnKey) {
    return <ArrowUpDown size={14} className="text-slate-300" />;
  }
  return sortConfig.direction === "asc" ? (
    <ArrowUp size={14} className="text-(--color-primary)" />
  ) : (
    <ArrowDown size={14} className="text-(--color-primary)" />
  );
}

export default function CustomerTableHeader({
  sortConfig,
  onSort,
  selectedCount,
  totalCount,
  onSelectAll,
}) {
  const isAllSelected = selectedCount === totalCount && totalCount > 0;
  const isPartialSelected = selectedCount > 0 && selectedCount < totalCount;

  return (
    <thead>
      <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase font-semibold text-slate-500 tracking-wider">
        <th className="px-4 py-4 w-12">
          <button
            onClick={onSelectAll}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              isAllSelected
                ? "bg-(--color-primary) border-(--color-primary) text-white"
                : isPartialSelected
                  ? "bg-(--color-primary)/30 border-(--color-primary) text-white"
                  : "border-slate-300 hover:border-slate-400"
            }`}
          >
            {(isAllSelected || isPartialSelected) && (
              <Check size={12} strokeWidth={3} />
            )}
          </button>
        </th>
        <th className="px-6 py-4">
          <button
            onClick={() => onSort("name")}
            className="flex items-center gap-2 hover:text-slate-700 transition-colors"
          >
            Client <SortIcon sortConfig={sortConfig} columnKey="name" />
          </button>
        </th>
        <th className="px-6 py-4">
          <button
            onClick={() => onSort("status")}
            className="flex items-center gap-2 hover:text-slate-700 transition-colors"
          >
            Statut <SortIcon sortConfig={sortConfig} columnKey="status" />
          </button>
        </th>
        <th className="px-6 py-4">
          <button
            onClick={() => onSort("city")}
            className="flex items-center gap-2 hover:text-slate-700 transition-colors"
          >
            Localisation <SortIcon sortConfig={sortConfig} columnKey="city" />
          </button>
        </th>
        <th className="px-6 py-4 text-right">Actions</th>
      </tr>
    </thead>
  );
}
