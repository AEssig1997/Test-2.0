import "./globals.css";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4 space-y-4">
      <h1 className="text-xl font-semibold">Aelana</h1>
      <nav className="space-y-2">
        <a href="/dashboard">Dashboard</a>
        <a href="/clients/1">Client</a>
        <a href="/scenarios">Scenarios</a>
      </nav>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
