import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/common/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "ElimuX - Discover Global Education Opportunities", template: "%s | ElimuX" },
  description: "Find and apply to universities, colleges, and programs worldwide.",
  keywords: ["education", "university", "college", "study abroad", "Kenya", "Africa", "scholarships"],
  metadataBase: new URL("https://elimux.ke"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elimux.ke",
    siteName: "ElimuX",
    title: "ElimuX - Discover Global Education Opportunities",
    description: "Find and apply to universities, colleges, and programs worldwide.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
