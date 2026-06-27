import { Metadata } from "next";

export const metadata: Metadata = { title: "Discover Programs", description: "Explore education programs worldwide" };

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Discover Programs</h1>
        <p className="text-gray-500">Explore thousands of programs from institutions worldwide.</p>
      </div>
    </div>
  );
}
