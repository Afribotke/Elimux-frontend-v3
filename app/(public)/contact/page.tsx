import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with ElimuX" };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-gray-500">Have questions? We are here to help.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black border-gold-900/30">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium text-gray-300">First Name</label><Input placeholder="John" className="bg-black/50 border-gold-900/30 text-white" /></div>
                  <div><label className="text-sm font-medium text-gray-300">Last Name</label><Input placeholder="Doe" className="bg-black/50 border-gold-900/30 text-white" /></div>
                </div>
                <div><label className="text-sm font-medium text-gray-300">Email</label><Input type="email" placeholder="you@example.com" className="bg-black/50 border-gold-900/30 text-white" /></div>
                <div><label className="text-sm font-medium text-gray-300">Message</label><textarea rows={4} className="w-full px-3 py-2 rounded-md border border-gold-900/30 bg-black/50 text-white resize-none" placeholder="How can we help?" /></div>
                <Button className="w-full bg-gold-600 text-black hover:bg-gold-500">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="bg-black border-gold-900/30">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold-600" /><div><div className="font-medium text-white">Email</div><div className="text-sm text-gray-500">support@elimux.ke</div></div></div>
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold-600" /><div><div className="font-medium text-white">Phone</div><div className="text-sm text-gray-500">+254 700 000 000</div></div></div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold-600" /><div><div className="font-medium text-white">Address</div><div className="text-sm text-gray-500">Nairobi, Kenya</div></div></div>
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-gold-600" /><div><div className="font-medium text-white">Hours</div><div className="text-sm text-gray-500">Mon-Fri: 8AM - 6PM EAT</div></div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
