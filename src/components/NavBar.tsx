"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Pages with dark hero sections that need white navbar text when at top
  const darkHeroPages = ["/", "/product"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOverDarkHero = darkHeroPages.includes(pathname) && !isScrolled;

  return (
    <header className={`site-nav ${isScrolled ? "site-nav--solid" : ""} ${isOverDarkHero ? "site-nav--over-dark" : ""}`}>
      <div className="site-shell nav-inner">
        <Link className="nav-logo" href="/">
          Commenter AI
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link href="/login" className="nav-login">
            Login
          </Link>
          <Link className="btn btn-primary" href="/onboarding">
            Get My First Lead
          </Link>
        </div>
      </div>
    </header>
  );
};
