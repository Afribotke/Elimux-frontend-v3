"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "elimux-cookie-consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: true, timestamp: new Date().toISOString() }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: false, timestamp: new Date().toISOString() }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gold-900/30 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-300">We use cookies to enhance your experience. By continuing, you agree to our use of cookies.</p>
              <p className="text-xs text-gray-600 mt-1">Read our <a href="/privacy" className="text-gold-500 underline">Privacy Policy</a> for details.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleReject} className="border-gold-800 text-gray-400 hover:bg-gold-950">Reject Non-Essential</Button>
            <Button size="sm" onClick={handleAccept} className="bg-gold-600 text-black hover:bg-gold-500">Accept All</Button>
            <button onClick={() => setIsVisible(false)} className="p-2 text-gray-600 hover:text-gray-400"><X className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
