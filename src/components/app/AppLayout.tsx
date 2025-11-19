"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppLayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: "Comments", href: "/app/comments", icon: "💬" },
  { label: "Inbox", href: "/app/inbox", icon: "📥" },
  { label: "Pipeline", href: "/app/pipeline", icon: "📊" },
  { label: "Dashboard", href: "/app/dashboard", icon: "📈" },
];

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const [trialDaysLeft, setTrialDaysLeft] = useState(7);

  useEffect(() => {
    // Calculate days remaining in trial (7 days from now)
    const trialEndDate = new Date();
    trialEndDate.setDate(trialEndDate.getDate() + 7);
    
    const updateTrialCounter = () => {
      const now = new Date();
      const diffTime = trialEndDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTrialDaysLeft(Math.max(0, diffDays));
    };

    updateTrialCounter();
    const interval = setInterval(updateTrialCounter, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-sidebar-header">
          <Link href="/app" className="app-logo">
            Commenter AI
          </Link>
        </div>
        <nav className="app-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`app-nav-item ${isActive ? "active" : ""}`}
              >
                <span className="app-nav-icon">{item.icon}</span>
                <span className="app-nav-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="app-sidebar-footer">
          <Link href="/settings" className="app-nav-item">
            <span className="app-nav-icon">⚙️</span>
            <span className="app-nav-label">Settings</span>
          </Link>
          <Link href="/pricing" className="app-nav-item app-upgrade-item">
            <span className="app-nav-icon">⭐</span>
            <span className="app-nav-label">Upgrade to Pro</span>
          </Link>
        </div>
        <div className="app-trial-counter">
          <div className="trial-counter-label">Trial ends in</div>
          <div className="trial-counter-value">{trialDaysLeft} {trialDaysLeft === 1 ? 'day' : 'days'}</div>
        </div>
      </aside>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}

