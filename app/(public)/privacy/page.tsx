import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "ElimuX Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-black border border-gold-900/30 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="prose max-w-none">
            <p className="text-gray-400">ElimuX is committed to protecting your personal data in accordance with the <strong className="text-white">Kenya Data Protection Act, 2019</strong> and <strong className="text-white">GDPR</strong>.</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Data Controller</h2>
            <p className="text-gray-400"><strong className="text-white">Name:</strong> ElimuX Limited<br /><strong className="text-white">Email:</strong> dpo@elimux.ke<br /><strong className="text-white">Phone:</strong> +254 700 000 000</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li><strong className="text-white">Account:</strong> Name, email, phone, password</li>
              <li><strong className="text-white">Profile:</strong> Education history, preferences</li>
              <li><strong className="text-white">Usage:</strong> Pages visited, searches, clicks</li>
            </ul>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Your Rights</h2>
            <p className="text-gray-400">Under the Kenya Data Protection Act, you have the right to access, correct, delete, and port your data.</p>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Contact</h2>
            <p className="text-gray-400">For privacy questions, contact our Data Protection Officer at dpo@elimux.ke</p>
          </div>
        </div>
      </div>
    </div>
  );
}
