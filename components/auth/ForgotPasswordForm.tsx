"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CheckCircle } from "lucide-react";

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsSent(true); }, 1000);
  }

  if (isSent) {
    return (
      <Card className="bg-black border-gold-900/30">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-gold-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">Check Your Email</h2>
          <p className="text-gray-500 mb-4">We have sent password reset instructions to your email address.</p>
          <Button variant="outline" asChild className="w-full border-gold-700 text-gold-500 hover:bg-gold-950"><Link href="/login">Back to Login</Link></Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-black border-gold-900/30">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4"><GraduationCap className="h-12 w-12 text-gold-500" /></div>
        <CardTitle className="text-2xl text-white">Reset Password</CardTitle>
        <CardDescription className="text-gray-500">Enter your email to receive reset instructions</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div><label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label><Input id="email" type="email" placeholder="you@example.com" required className="bg-black/50 border-gold-900/30 text-white placeholder:text-gray-600" /></div>
          <Button type="submit" className="w-full bg-gold-600 text-black hover:bg-gold-500" disabled={isLoading}>{isLoading ? "Sending..." : "Send Reset Link"}</Button>
        </form>
        <div className="mt-4 text-center text-sm"><Link href="/login" className="text-gold-500 hover:text-gold-400">Back to login</Link></div>
      </CardContent>
    </Card>
  );
}
