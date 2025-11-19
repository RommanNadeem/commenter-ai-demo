import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { SiteFooter } from "@/components/SiteFooter";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Commenter AI · Experience Toolkit",
  description: "A shareable Commenter AI experience concept built in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-site`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="site-shell flex-1 w-full">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
