import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "21,847", label: "Institutions" },
  { value: "186", label: "Countries" },
  { value: "150,000+", label: "Programs" },
  { value: "50,000+", label: "Students Helped" },
  { value: "95%", label: "Success Rate" },
  { value: "4.9/5", label: "User Rating" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gold-950/30 border-t border-gold-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 bg-gold-950 text-gold-400 border-gold-800">Trusted Worldwide</Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Numbers That Speak</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gold-500">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
