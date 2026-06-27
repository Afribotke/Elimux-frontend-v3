"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, GraduationCap, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-black to-black" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-950/50 border border-gold-800/50 px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-sm text-gold-400">AI-powered</span>
            <span className="text-sm text-gray-500">· 21,847 institutions · 186 countries</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ask anything. <span className="text-gold-500">Get your top 10</span> options.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tell us in plain language what you want to study, where, and your budget. We find your best 10 matches.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-600" />
                <Input 
                  type="text" 
                  placeholder="Try: Medicine in Kenya under KES 500k..." 
                  className="pl-10 h-14 bg-black/50 border-gold-800/50 text-white placeholder:text-gray-600 focus:border-gold-500 focus:ring-gold-500/20" 
                />
              </div>
              <Button size="lg" className="h-14 bg-gold-600 text-black hover:bg-gold-500 px-8">
                <Search className="h-5 w-5 mr-2" /> Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-gray-500">Try:</span>
              <span className="text-gold-600 hover:text-gold-400 cursor-pointer">Medicine in Kenya</span>
              <span className="text-gray-600">·</span>
              <span className="text-gold-600 hover:text-gold-400 cursor-pointer">MBA in Germany</span>
              <span className="text-gray-600">·</span>
              <span className="text-gold-600 hover:text-gold-400 cursor-pointer">Online nursing</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-gold-600" /><span className="text-sm font-medium text-gray-400">186 Countries</span></div>
            <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-gold-600" /><span className="text-sm font-medium text-gray-400">21,847 Institutions</span></div>
            <div className="flex items-center gap-2"><Users className="h-5 w-5 text-gold-600" /><span className="text-sm font-medium text-gray-400">50,000+ Students</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
