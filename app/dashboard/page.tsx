export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <Metric title="Total Clients" value="42" />
        <Metric title="Avg Trend" value="+8.2%" />
        <Metric title="Self-Funded %" value="64%" />
      </div>

      <RenewalPipeline />
      <Alerts />
    </div>
  );
}

function Metric({ title, value }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}

function RenewalPipeline() {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <h2 className="font-medium mb-2">Renewals</h2>
      <ul className="space-y-2">
        <li>Acme Corp — 45 days ⚠</li>
        <li>Beta Inc — 30 days</li>
        <li>Delta LLC — 10 days</li>
      </ul>
    </div>
  );
}

function Alerts() {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <h2 className="font-medium mb-2">Insights</h2>
      <ul className="space-y-2">
        <li>⚠ High specialty drug exposure</li>
        <li>⚠ Out-of-network spend high</li>
      </ul>
    </div>
  );
}
