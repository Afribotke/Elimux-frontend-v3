import { Metadata } from "next";

export const metadata: Metadata = { title: "Institutions", description: "Browse verified educational institutions" };

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Institutions</h1>
        <p className="text-gray-500">Browse verified universities and colleges.</p>
      </div>
    </div>
  );
}
