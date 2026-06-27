import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Landmark, Plane, Wrench, Laptop, Briefcase, HeartPulse, GraduationCap } from "lucide-react";

const categories = [
  { icon: GraduationCap, title: "Education" },
  { icon: Landmark, title: "Finance" },
  { icon: Plane, title: "Visa & Travel" },
  { icon: Wrench, title: "TVET & Trades" },
  { icon: Laptop, title: "Technology" },
  { icon: Briefcase, title: "Career" },
  { icon: HeartPulse, title: "Health" },
  { icon: BookOpen, title: "Online Courses" },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-black border-t border-gold-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore by Category</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Find programs across every field of study</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Card key={cat.title} className="border-gold-900/30 bg-black/50 hover:bg-gold-950/20 hover:border-gold-800/50 transition-all cursor-pointer group">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gold-950/50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-900/30 transition-colors">
                  <cat.icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-gold-400 transition-colors">{cat.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
