import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service", description: "ElimuX Terms of Service" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-black border border-gold-900/30 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="prose max-w-none">
            <p className="text-gray-400">By using ElimuX, you agree to these Terms of Service.</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Use of Platform</h2>
            <p className="text-gray-400">ElimuX provides education discovery and application services. You must be at least 18 years old.</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Accounts</h2>
            <p className="text-gray-400">You are responsible for maintaining the security of your account.</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Governing Law</h2>
            <p className="text-gray-400">These Terms are governed by the laws of Kenya.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
