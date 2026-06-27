import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Zap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = { title: "About Us", description: "Learn about ElimuX mission" };

const values = [
  { icon: Globe, title: "Accessibility", description: "Education should be accessible to everyone." },
  { icon: Shield, title: "Trust", description: "We verify every institution." },
  { icon: Zap, title: "Innovation", description: "AI-powered tools for perfect matches." },
  { icon: HeartHandshake, title: "Support", description: "We guide students every step." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="bg-gradient-to-b from-gold-950 to-black py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About ElimuX</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">We are on a mission to democratize access to global education.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="border-gold-900/30 bg-black/50">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gold-950/50 rounded-lg flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
