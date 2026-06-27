import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/discover", label: "Discover Programs" },
    { href: "/institutions", label: "Institutions" },
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About Us" },
  ],
  Support: [
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  Partners: [
    { href: "/partners/institutions", label: "For Institutions" },
    { href: "/partners/sponsors", label: "For Sponsors" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-gold-900/30 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-gold-500" />
              <span className="text-xl font-bold text-gold-400">ElimuX</span>
            </Link>
            <p className="text-sm text-gray-500">Discover and apply to global education opportunities.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold-600" /><span>support@elimux.ke</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold-600" /><span>+254 700 000 000</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-600" /><span>Nairobi, Kenya</span></div>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-gray-500 hover:text-gold-400 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gold-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ElimuX. All rights reserved.</p>
          <span className="text-xs text-gray-700">Compliant with Kenya Data Protection Act</span>
        </div>
      </div>
    </footer>
  );
}
