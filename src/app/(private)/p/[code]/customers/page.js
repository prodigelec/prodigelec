import CustomerList from "@/app/(private)/components/customers/CustomerList";

export default function CustomersPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900">Clients</h1>
        <p className="text-slate-500">
          Gérez votre base de clients particuliers et professionnels.
        </p>
      </div>

      <CustomerList />
    </div>
  );
}
