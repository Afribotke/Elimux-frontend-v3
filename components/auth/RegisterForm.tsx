"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Eye, EyeOff } from "lucide-react";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <Card className="bg-black border-gold-900/30">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4"><GraduationCap className="h-12 w-12 text-gold-500" /></div>
        <CardTitle className="text-2xl text-white">Create Account</CardTitle>
        <CardDescription className="text-gray-500">Start your education journey with ElimuX</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label><Input id="firstName" placeholder="John" required className="bg-black/50 border-gold-900/30 text-white placeholder:text-gray-600" /></div>
            <div><label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label><Input id="lastName" placeholder="Doe" required className="bg-black/50 border-gold-900/30 text-white placeholder:text-gray-600" /></div>
          </div>
          <div><label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label><Input id="email" type="email" placeholder="you@example.com" required className="bg-black/50 border-gold-900/30 text-white placeholder:text-gray-600" /></div>
          <div><label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="Min 8 characters" required minLength={8} className="bg-black/50 border-gold-900/30 text-white placeholder:text-gray-600" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" required className="mt-1" />
            <label htmlFor="terms" className="text-xs text-gray-500">I agree to the <Link href="/terms" className="text-gold-500 hover:text-gold-400">Terms of Service</Link> and <Link href="/privacy" className="text-gold-500 hover:text-gold-400">Privacy Policy</Link></label>
          </div>
          <Button type="submit" className="w-full bg-gold-600 text-black hover:bg-gold-500" disabled={isLoading}>{isLoading ? "Creating account..." : "Create Account"}</Button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">Already have an account? <Link href="/login" className="text-gold-500 hover:text-gold-400 font-medium">Log in</Link></div>
      </CardContent>
    </Card>
  );
}
