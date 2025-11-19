"use client";

import Link from "next/link";
import { useState } from "react";
import { featureComparison, faqItems } from "@/lib/content";

const plans = [
  {
    name: "Starter",
    tag: "Sales Navigator alternative",
    priceMonthly: 79,
    priceYearly: 59,
    description: "For solo founders validating that LinkedIn can be a predictable pipeline.",
    bullets: [
      "All core modules",
      "ICP feed + AI comments",
      "Unified LinkedIn inbox with AI replies",
      "Lead creation from threads",
      "Simple board and ROI dashboard",
      "1 LinkedIn account",
      "150 AI comments / month",
      "60 AI DM replies / month",
      "2 AI tips per day",
      "150 active leads",
      "30 days data history",
      "Email support",
    ],
    cta: "Start Starter Plan",
    href: "/signup",
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale your system",
    priceMonthly: 149,
    priceYearly: 119,
    description: "For founders, coaches and small teams who have a working system and want to scale it.",
    bullets: [
      "Everything in Starter",
      "Unlimited AI comments and DM replies (fair use)",
      "Unlimited leads",
      "12 months of history",
      "Multi channel inbox as channels go live",
      "AI automations and workflows",
      "Up to 5 seats included",
      "Priority support and onboarding call",
      "Early access to new AI models",
    ],
    cta: "Start Growth Plan",
    href: "/signup",
    featured: true,
  },
  {
    name: "Team",
    tag: "Agencies and programs",
    priceMonthly: 349,
    priceYearly: 279,
    description: "For agencies and programs that manage multiple profiles and cohorts.",
    bullets: [
      "Everything in Growth",
      "Up to 10 seats and 5 LinkedIn accounts included",
      "Client and cohort workspaces",
      "Program level ROI dashboards and per client reporting",
      "Admin controls and permissions",
      "Dedicated success manager and training",
      "Add $40–60 per extra seat depending on commitment",
    ],
    cta: "Contact Sales",
    href: "/signup",
  },
];

const trustPoints = [
  "Your data stays yours. Export anytime on paid plans.",
  "Cancel or downgrade without calling anyone.",
  "Billing is transparent. No seat surprises.",
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const yearlyTotal = yearly * 12;
    const savings = monthlyTotal - yearlyTotal;
    const savingsPercent = Math.round((savings / monthlyTotal) * 100);
    return { savings, savingsPercent };
  };

  return (
    <div className="pricing-page">
      <section className="section plan-section" id="plans">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>📦</span>
              <span>Plans</span>
            </div>
            <h2>Choose Starter, Growth, Or Team</h2>
            <p>Every plan keeps the full comment → DM → pipeline loop intact.</p>
          </div>
          
          {/* Billing Toggle */}
          <div className="billing-toggle-wrapper">
            <div className="billing-toggle">
              <button
                className={`billing-toggle-option ${billingPeriod === "monthly" ? "active" : ""}`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`billing-toggle-option ${billingPeriod === "yearly" ? "active" : ""}`}
                onClick={() => setBillingPeriod("yearly")}
              >
                Yearly
              </button>
              {billingPeriod === "yearly" && (
                <span className="billing-badge">Save up to 25%</span>
              )}
            </div>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => {
              const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly;
              const savings = calculateSavings(plan.priceMonthly, plan.priceYearly);
              const isTeam = plan.name === "Team";
              
              return (
                <div className={`plan-card ${plan.featured ? "plan-card-featured" : ""}`} key={plan.name}>
                  <p className="plan-tag">{plan.tag}</p>
                  <h2>{plan.name}</h2>
                  <div className="plan-price-wrapper">
                    <p className="plan-price">
                      {isTeam && billingPeriod === "monthly" ? "From " : ""}${price}
                      <span className="plan-price-period">/month</span>
                    </p>
                    {billingPeriod === "yearly" && (
                      <p className="plan-price-note">
                        Billed annually (${price * 12}/year)
                      </p>
                    )}
                    {billingPeriod === "yearly" && savings.savings > 0 && (
                      <p className="plan-savings">
                        Save ${savings.savings}/year ({savings.savingsPercent}% off)
                      </p>
                    )}
                  </div>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`} href={plan.href}>
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>📊</span>
              <span>Feature comparison</span>
            </div>
            <h2>Feature Comparison</h2>
            <p>Know exactly what unlocks when you upgrade.</p>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row) => (
                  <tr key={`${row.category}-${row.feature}`}>
                    <td>
                      <p className="table-feature">{row.feature}</p>
                      <p className="table-meta">{row.category}</p>
                    </td>
                    <td>{row.starter}</td>
                    <td>{row.growth}</td>
                    <td>{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>🛡️</span>
              <span>Trust</span>
            </div>
            <h2>Billing With No Surprises</h2>
          </div>
          <div className="trust-grid">
            {trustPoints.map((point) => (
              <div className="trust-card-modern" key={point}>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>❓</span>
              <span>Pricing FAQ</span>
            </div>
            <h2>Pricing FAQ</h2>
            <p>Still wondering about something? Start here.</p>
          </div>
          <div className="faq-grid">
            {faqItems.slice(0, 4).map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="cta-band-modern">
          <h2>Turn Comments And DMs Into Pipeline You Can Measure</h2>
          <p>Try Commenter AI free for seven days. Upgrade only when you see your first attributed lead.</p>
          <Link className="btn btn-primary-hero" href="/onboarding">
            Start 7 Day Trial
          </Link>
          <p className="cta-trust">All plans include comment → DM → pipeline attribution</p>
        </div>
      </section>
    </div>
  );
}
