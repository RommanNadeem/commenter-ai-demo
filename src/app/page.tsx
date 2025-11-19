import Link from "next/link";
import { logos } from "@/lib/content";

const threeSteps = [
  {
    title: "Comment Where It Matters",
    description: "See posts from your ideal buyers and get AI comments in your voice.",
  },
  {
    title: "Move Warm Threads In One Inbox",
    description: "Handle every reply in one place with summaries and reply suggestions.",
  },
  {
    title: "Turn Conversations Into Leads",
    description: "Promote hot threads to leads and track them on a simple board.",
  },
];

const features = [
  {
    title: "Focused Comment Feed",
    description: "Comment where it matters with AI suggestions in your voice.",
  },
  {
    title: "Unified Inbox",
    description: "See every warm thread from comments and DMs in one place.",
  },
  {
    title: "Smart Sales",
    description: "Engagement scores, reply rates and win probability for each deal.",
  },
  {
    title: "ROI Dashboard",
    description: "Comments, DMs, leads, deals and revenue all in one view.",
  },
];

const milestones = [
  "Connect LinkedIn",
  "Post your first AI-assisted comments",
  "Reply to warm DMs in the inbox",
  "Mark your first lead from a thread",
];

const outcomes = [
  {
    title: "More Replies From ICP Accounts",
    stat: "+40% replies vs last week",
  },
  {
    title: "Every Lead Attributed To A Comment Or DM",
    stat: "100% of leads linked to a thread",
  },
  {
    title: "Clear Today View Of Who To Talk To",
    stat: "One list of 5–10 warm threads per day",
  },
];

const crmLeads = [
  {
    name: "Emily Stone",
    role: "Product Manager",
    company: "Airflow",
    tags: ["SaaS", "Enterprise"],
    replyRate: 34,
    engagementScore: 60,
    dealValue: "$12,800",
    avgDeal: "$9,800",
    nextStep: "26 Sep",
  },
  {
    name: "Lana Steiner",
    role: "Product Manager",
    company: "Airflow",
    tags: ["SaaS", "Enterprise"],
    replyRate: 20,
    engagementScore: 40,
    dealValue: "$8,300",
    avgDeal: "$9,800",
    nextStep: "26 Sep",
  },
  {
    name: "Noah Pierre",
    role: "Product Manager",
    company: "Airflow",
    tags: ["SaaS", "Enterprise"],
    replyRate: 29,
    engagementScore: 55,
    dealValue: "$11,000",
    avgDeal: "$9,800",
    nextStep: "26 Sep",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section home-hero">
        <div className="hero-container">
          <div className="hero">
            <div className="hero-content">
              <h1>Turn LinkedIn Comments And DMs Into Sales In 7 Days</h1>
              <p className="hero-subtext">
                Comment where it matters, reply from one inbox, and see every warm thread turn into tracked leads and revenue.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-primary-hero" href="/onboarding">
                  Get My First Lead
                </Link>
                <Link className="btn btn-secondary-hero" href="/onboarding">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-metrics">
                <div className="metric-tile">
                  <div className="metric-label">Revenue From LinkedIn</div>
                  <div className="metric-value">$24.5K</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-label">New Leads This Week</div>
                  <div className="metric-value">12</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-label">Comments Posted</div>
                  <div className="metric-value">156</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-label">DMs Sent</div>
                  <div className="metric-value">89</div>
                </div>
              </div>
              <div className="hero-funnel">
                <div className="hero-funnel-step">Comments</div>
                <div className="hero-funnel-arrow">→</div>
                <div className="hero-funnel-step">DMs</div>
                <div className="hero-funnel-arrow">→</div>
                <div className="hero-funnel-step">Leads</div>
                <div className="hero-funnel-arrow">→</div>
                <div className="hero-funnel-step">Deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Contrast Section */}
      <section className="section pipeline-section">
        <div className="section-container">
          <div className="section-header">
            <h2>From Scattered Activity To One Visible Sales</h2>
            <p>Commenter AI connects your LinkedIn comments and DMs into one simple sales system you can actually see and act on.</p>
          </div>
          <div className="pipeline-contrast">
            <div className="pipeline-column pipeline-bad">
              <h3>Scattered & Invisible</h3>
              <ul className="pipeline-list">
                <li>Screenshots in random folders</li>
                <li>DMs buried in LinkedIn</li>
                <li>Notes in spreadsheets</li>
                <li>No clear view of sales</li>
              </ul>
            </div>
            <div className="pipeline-column pipeline-good">
              <h3>One Visible Loop</h3>
              <ul className="pipeline-list pipeline-list-good">
                <li>✓ Focused comment feed</li>
                <li>✓ Unified inbox for warm threads</li>
                <li>✓ Simple sales board</li>
                <li>✓ ROI dashboard that shows what worked</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="section steps-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Three Steps To Turn LinkedIn Activity Into Sales</h2>
            <p>Use the same daily loop as operators who already sell from comments and DMs.</p>
          </div>
          <div className="steps-grid">
            {threeSteps.map((step, index) => (
              <div className="step-card" key={step.title}>
                <div className="step-icon">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Board Section */}
      <section className="section crm-board-section">
        <div className="section-container">
          <div className="section-header">
            <h2>See Every Lead In One Simple Board</h2>
            <p>Reply rate, engagement score, win probability and deal value in one CRM built around social selling.</p>
          </div>
          <div className="crm-board">
            <div className="crm-column">
              <div className="crm-column-header">New</div>
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-name">{crmLeads[0].name}</div>
                </div>
                <div className="crm-role">{crmLeads[0].role} @ {crmLeads[0].company}</div>
                <div className="crm-tags">
                  {crmLeads[0].tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <div className="crm-channels">
                  <span className="channel-icon">L</span>
                </div>
                <div className="crm-metrics">
                  <div>
                    <div className="metric-label-inline">Reply Rate</div>
                    <div className="metric-value-inline">{crmLeads[0].replyRate}%</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[0].replyRate}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="metric-label-inline">Engagement</div>
                    <div className="metric-value-inline">{crmLeads[0].engagementScore}/100</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[0].engagementScore}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="crm-deal">
                  <div className="deal-value">Deal Value: {crmLeads[0].dealValue}</div>
                  <div className="deal-avg">Avg Deal: {crmLeads[0].avgDeal}</div>
                </div>
                <div className="crm-next-step">Next Step: {crmLeads[0].nextStep}</div>
              </div>
            </div>
            <div className="crm-column">
              <div className="crm-column-header">Sent DM</div>
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-name">{crmLeads[1].name}</div>
                </div>
                <div className="crm-role">{crmLeads[1].role} @ {crmLeads[1].company}</div>
                <div className="crm-tags">
                  {crmLeads[1].tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <div className="crm-channels">
                  <span className="channel-icon">L</span>
                </div>
                <div className="crm-metrics">
                  <div>
                    <div className="metric-label-inline">Reply Rate</div>
                    <div className="metric-value-inline">{crmLeads[1].replyRate}%</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[1].replyRate}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="metric-label-inline">Engagement</div>
                    <div className="metric-value-inline">{crmLeads[1].engagementScore}/100</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[1].engagementScore}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="crm-deal">
                  <div className="deal-value">Deal Value: {crmLeads[1].dealValue}</div>
                  <div className="deal-avg">Avg Deal: {crmLeads[1].avgDeal}</div>
                </div>
                <div className="crm-next-step">Next Step: {crmLeads[1].nextStep}</div>
              </div>
            </div>
            <div className="crm-column">
              <div className="crm-column-header">In Progress</div>
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-name">{crmLeads[2].name}</div>
                </div>
                <div className="crm-role">{crmLeads[2].role} @ {crmLeads[2].company}</div>
                <div className="crm-tags">
                  {crmLeads[2].tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <div className="crm-channels">
                  <span className="channel-icon">L</span>
                </div>
                <div className="crm-metrics">
                  <div>
                    <div className="metric-label-inline">Reply Rate</div>
                    <div className="metric-value-inline">{crmLeads[2].replyRate}%</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[2].replyRate}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="metric-label-inline">Engagement</div>
                    <div className="metric-value-inline">{crmLeads[2].engagementScore}/100</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[2].engagementScore}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="crm-deal">
                  <div className="deal-value">Deal Value: {crmLeads[2].dealValue}</div>
                  <div className="deal-avg">Avg Deal: {crmLeads[2].avgDeal}</div>
                </div>
                <div className="crm-next-step">Next Step: {crmLeads[2].nextStep}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Dashboard Section */}
      <section className="section mini-dashboard-section">
        <div className="section-container">
          <div className="mini-dashboard-layout">
            <div className="mini-dashboard-content">
              <h2>What You See Every Morning</h2>
              <p>A simple view of what your LinkedIn activity produced and what to do next.</p>
            </div>
            <div className="mini-dashboard">
              <div className="mini-row">
                <div className="mini-label">New Leads</div>
                <div className="mini-value">12</div>
              </div>
              <div className="mini-row">
                <div className="mini-label">Comments This Week</div>
                <div className="mini-value">156</div>
              </div>
              <div className="mini-row">
                <div className="mini-label">DM Reply Rate</div>
                <div className="mini-value">68%</div>
              </div>
              <div className="mini-row">
                <div className="mini-label">Sales From LinkedIn</div>
                <div className="mini-value">$24.5K</div>
              </div>
              <div className="mini-row mini-muted">
                <div className="mini-label">Today's Focus</div>
                <div className="mini-value">3 warm threads to follow up</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="section feature-grid-section">
        <div className="section-container">
          <div className="section-header">
            <h2>A Simple Social CRM Around Your LinkedIn Sales</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Attributed Lead Section */}
      <section className="section milestones-section">
        <div className="section-container">
          <div className="milestones-layout">
            <div className="milestones-content">
              <h2>First Attributed Lead In 7 Days</h2>
              <p>Your trial is designed to get you one real lead into your sales, not just toy data.</p>
            </div>
            <div className="milestones-list">
              {milestones.map((milestone, index) => (
                <div key={milestone} className="milestone-item">
                  <div className="milestone-check">{index + 1}</div>
                  <div className="milestone-text">{milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Changes Section */}
      <section className="section outcomes-section">
        <div className="section-container">
          <div className="section-header">
            <h2>What Changes In Your First 7 Days</h2>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((outcome) => (
              <div className="outcome-badge" key={outcome.title}>
                <h3>{outcome.title}</h3>
                <div className="outcome-stat">{outcome.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Choose Starter, Growth, Or Team</h2>
            <p>Every plan keeps the full comment → DM → pipeline loop intact.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="pricing-price">$79/month</p>
              <p>Sales Navigator alternative for solo founders validating LinkedIn as a pipeline.</p>
              <Link className="btn btn-secondary" href="/onboarding">
                Start Starter Plan
              </Link>
            </div>
            <div className="pricing-card pricing-featured">
              <h3>Growth</h3>
              <p className="pricing-price">$149/month</p>
              <p>For founders, coaches and small teams who have a working system and want to scale it.</p>
              <Link className="btn btn-primary" href="/onboarding">
                Start Growth Plan
              </Link>
            </div>
            <div className="pricing-card">
              <h3>Team</h3>
              <p className="pricing-price">From $349/month</p>
              <p>For agencies and programs that manage multiple profiles and cohorts.</p>
              <Link className="btn btn-secondary" href="/onboarding">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section">
        <div className="section-container">
          <div className="final-cta-content">
            <h2>Turn Your Next Week Of Comments And DMs Into Measurable Sales</h2>
            <p>Start a 7 day trial and see real leads appear in your sales from LinkedIn.</p>
            <Link className="btn btn-primary-hero" href="/onboarding">
              Start 7 Day Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
