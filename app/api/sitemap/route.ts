import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://elimux.ke";
  const routes = ["", "/discover", "/institutions", "/programs", "/about", "/contact", "/privacy", "/terms"];
  const today = new Date().toISOString().split("T")[0];

  let xml = "<?xml version="1.0" encoding="UTF-8"?>
";
  xml += "<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
";
  for (const route of routes) {
    const priority = route === "" ? "1.0" : "0.8";
    xml += "  <url>
";
    xml += "    <loc>" + baseUrl + route + "</loc>
";
    xml += "    <lastmod>" + today + "</lastmod>
";
    xml += "    <changefreq>weekly</changefreq>
";
    xml += "    <priority>" + priority + "</priority>
";
    xml += "  </url>
";
  }
  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
  });
}
