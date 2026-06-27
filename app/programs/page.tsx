import { Metadata } from "next";

export const metadata: Metadata = { title: "Programs", description: "Browse education programs" };

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Programs</h1>
        <p className="text-gray-500">Find the perfect program for your career goals.</p>
      </div>
    </div>
  );
}
