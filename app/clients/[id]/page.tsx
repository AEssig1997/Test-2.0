export default function ClientPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Acme Corp</h1>

      <div className="grid grid-cols-4 gap-4">
        <Stat label="PMPM" value="$612" />
        <Stat label="Trend" value="+9.1%" />
        <Stat label="Employees" value="1,240" />
        <Stat label="Funding" value="Fully Insured" />
      </div>
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
