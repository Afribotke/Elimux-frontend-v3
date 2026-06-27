import { Metadata } from "next";

export const metadata: Metadata = { title: "Apply", description: "Apply to your chosen program" };

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Apply</h1>
        <p className="text-gray-500">Application form will be implemented here.</p>
      </div>
    </div>
  );
}
