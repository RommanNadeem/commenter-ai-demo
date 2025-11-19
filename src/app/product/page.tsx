import Link from "next/link";

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
  {
    name: "Sarah Chen",
    role: "VP Sales",
    company: "TechFlow",
    tags: ["SaaS", "Enterprise"],
    replyRate: 45,
    engagementScore: 75,
    dealValue: "$15,200",
    avgDeal: "$9,800",
    nextStep: "28 Sep",
  },
];

const workspaces = [
  {
    title: "Comments",
    job: "Find the right threads and start real conversations.",
    description: "See posts from your ideal buyers and get AI comments in your voice.",
    features: [
      "ICP feed surfaces the threads that matter",
      "AI comment suggestions tuned to your tone",
      "Comment stats show what gets replies",
    ],
    visualLabel: "ICP feed, AI comment button, comment stats",
  },
  {
    title: "Inbox",
    job: "Handle every warm thread in one place.",
    description: "Unified inbox for comments and DMs with summaries and reply suggestions.",
    features: [
      "Multi-channel inbox (comments, DMs, email)",
      "Looks Like A Lead badges surface hot threads",
      "AI suggests replies with full context",
    ],
    visualLabel: "Unified inbox, summarize / suggest reply / mark as lead",
  },
  {
    title: "Pipeline",
    job: "Track deals with engagement score and win probability.",
    description: "CRM board built for social selling with smart prioritization.",
    features: [
      "Engagement scores across comments, DMs, email and WhatsApp",
      "Win probability and expected close dates per deal",
      "Stage changes suggested by AI when conversations move forward",
    ],
    visualLabel: "CRM board with cards like Emily Stone, reply rate, engagement score, deal value, next step",
  },
  {
    title: "ROI Dashboard",
    job: "See what last week on LinkedIn produced for your business.",
    description: "Comments → DMs → leads → revenue all in one view with AI tips.",
    features: [
      "Comments, DMs, new leads and closed deals in one view",
      "Funnels from comments and DMs all the way to revenue",
      "AI tips from your data like 'questions at the end of comments get you more replies'",
    ],
    visualLabel: "ROI tiles, comment funnel, DM funnel, lead performance",
  },
];

const workflow = [
  {
    title: "Morning – Comments",
    description: "Review ICP feed, post AI-assisted comments, log 5–10 smart touches.",
    visual: "Comments UI",
  },
  {
    title: "Midday – Inbox",
    description: "Reply to warm threads, let AI suggest replies and mark new leads.",
    visual: "Inbox snippet with 'Looks Like A Lead'",
  },
  {
    title: "Afternoon – Pipeline & Dashboard",
    description: "Update stages, check today's ROI dashboard, pick tomorrow's focus.",
    visual: "Pipeline column + mini dashboard",
  },
];

const integrations = [
  { 
    title: "LinkedIn", 
    status: "Live", 
    body: "Full sync of feed, comments, and DMs.",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
      </svg>
    )
  },
  { 
    title: "Email", 
    status: "Coming", 
    body: "Coming soon",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636H1.636A1.636 1.636 0 0 1 0 19.366V5.457l11.182 6.818L24 5.457zM24 3.818L12 10.636 0 3.818V2.182C0 1.278.732.546 1.636.546h20.728c.904 0 1.636.732 1.636 1.636v1.636z" fill="#4285F4"/>
      </svg>
    )
  },
  { 
    title: "WhatsApp", 
    status: "Coming", 
    body: "Coming soon",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366"/>
      </svg>
    )
  },
];

const quotes = [
  {
    quote: "We stopped guessing which comments mattered. First attributed lead in six days.",
    name: "Alex R.",
    role: "Founder, outbound studio",
  },
];

export default function ProductPage() {
  return (
    <div className="product-page">
      {/* Product Hero Section */}
      <section className="section product-hero-modern">
        <div className="section-container product-hero-grid">
          <div className="product-hero-copy">
            <div className="section-badge">
              <span>🧭</span>
              <span>Product Tour</span>
            </div>
            <h1>See How Commenter AI Turns Comments And DMs Into Pipeline</h1>
            <p className="hero-subtext">
              Walk through the four workspaces that run your social selling loop: Comments, Inbox, Pipeline and ROI Dashboard.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary-hero" href="/onboarding">
                Start 7 Day Trial
              </Link>
              <Link className="btn btn-secondary-hero" href="/pricing">
                View Pricing
              </Link>
            </div>
            <p className="hero-trust">Full loop access · No credit card · First attributed lead guarantee</p>
          </div>
          <div className="product-hero-visual" aria-hidden>
            <div className="product-showcase">
              <div className="crm-board-preview">
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
                    <div className="crm-metrics">
                      <div>
                        <div className="metric-label-inline">Reply Rate</div>
                        <div className="metric-value-inline">{crmLeads[0].replyRate}%</div>
                      </div>
                      <div>
                        <div className="metric-label-inline">Engagement</div>
                        <div className="metric-value-inline">{crmLeads[0].engagementScore}/100</div>
                      </div>
                    </div>
                    <div className="crm-deal">
                      <div className="deal-value">Deal Value: {crmLeads[0].dealValue}</div>
                    </div>
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
                    <div className="crm-metrics">
                      <div>
                        <div className="metric-label-inline">Reply Rate</div>
                        <div className="metric-value-inline">{crmLeads[2].replyRate}%</div>
                      </div>
                      <div>
                        <div className="metric-label-inline">Engagement</div>
                        <div className="metric-value-inline">{crmLeads[2].engagementScore}/100</div>
                      </div>
                    </div>
                    <div className="crm-deal">
                      <div className="deal-value">Deal Value: {crmLeads[2].dealValue}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roi-tiles-preview">
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
            </div>
          </div>
        </div>
      </section>

      {/* Four Workspaces Section */}
      <section className="section workspaces-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>🌀</span>
              <span>Core Modules</span>
            </div>
            <h2>Four Workspaces, One Loop</h2>
            <p>
              One workspace for comments → DMs → pipeline → insights. Each workspace has a clear job in your social selling loop.
            </p>
          </div>
          <div className="workspaces-grid">
            {workspaces.map((workspace) => (
              <div className="workspace-card" key={workspace.title}>
                <div className="workspace-header">
                  <h3>{workspace.title}</h3>
                  <p className="workspace-job">{workspace.job}</p>
                </div>
                <p className="workspace-description">{workspace.description}</p>
                <ul className="workspace-features">
                  {workspace.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="workspace-visual-label">{workspace.visualLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside The CRM Board Section */}
      <section className="section crm-board-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>📊</span>
              <span>Deep Dive</span>
            </div>
            <h2>Inside The Social CRM Board</h2>
            <p>
              See exactly what each card shows and how engagement scores help you prioritize replies, not just open deals.
            </p>
          </div>
          <div className="crm-board-wide">
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
            <div className="crm-column">
              <div className="crm-column-header">Won</div>
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-name">{crmLeads[3].name}</div>
                </div>
                <div className="crm-role">{crmLeads[3].role} @ {crmLeads[3].company}</div>
                <div className="crm-tags">
                  {crmLeads[3].tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <div className="crm-channels">
                  <span className="channel-icon">L</span>
                </div>
                <div className="crm-metrics">
                  <div>
                    <div className="metric-label-inline">Reply Rate</div>
                    <div className="metric-value-inline">{crmLeads[3].replyRate}%</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[3].replyRate}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="metric-label-inline">Engagement</div>
                    <div className="metric-value-inline">{crmLeads[3].engagementScore}/100</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${crmLeads[3].engagementScore}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="crm-deal">
                  <div className="deal-value">Deal Value: {crmLeads[3].dealValue}</div>
                  <div className="deal-avg">Avg Deal: {crmLeads[3].avgDeal}</div>
                </div>
                <div className="crm-next-step">Next Step: {crmLeads[3].nextStep}</div>
              </div>
            </div>
          </div>
          <div className="crm-board-features">
            <ul>
              <li>Engagement scores across comments, DMs, email and WhatsApp.</li>
              <li>Win probability and expected close dates per deal.</li>
              <li>Stage changes suggested by AI when conversations move forward.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Dashboard & AI Coach Section */}
      <section className="section roi-dashboard-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>📈</span>
              <span>Deep Dive</span>
            </div>
            <h2>ROI Dashboard And AI Coach For Your LinkedIn</h2>
            <p>
              See comments → DMs → leads → revenue in one view, with AI tips generated from your own data, not dummy examples.
            </p>
          </div>
          <div className="roi-dashboard-layout">
            <div className="roi-dashboard-visual">
              <div className="roi-kpis">
                <div className="roi-kpi">
                  <div className="roi-kpi-label">Revenue From LinkedIn</div>
                  <div className="roi-kpi-value">$24.5K</div>
                </div>
                <div className="roi-kpi">
                  <div className="roi-kpi-label">New Leads This Week</div>
                  <div className="roi-kpi-value">12</div>
                </div>
                <div className="roi-kpi">
                  <div className="roi-kpi-label">Comments This Week</div>
                  <div className="roi-kpi-value">156</div>
                </div>
                <div className="roi-kpi">
                  <div className="roi-kpi-label">DM Reply Rate</div>
                  <div className="roi-kpi-value">68%</div>
                </div>
              </div>
              <div className="roi-funnels">
                <div className="roi-funnel">
                  <div className="funnel-label">Comment Funnel</div>
                  <div className="funnel-steps">
                    <div className="funnel-step">156 Comments</div>
                    <div className="funnel-arrow">→</div>
                    <div className="funnel-step">89 DMs</div>
                    <div className="funnel-arrow">→</div>
                    <div className="funnel-step">12 Leads</div>
                    <div className="funnel-arrow">→</div>
                    <div className="funnel-step">$24.5K Revenue</div>
                  </div>
                </div>
                <div className="roi-funnel">
                  <div className="funnel-label">DM Funnel</div>
                  <div className="funnel-steps">
                    <div className="funnel-step">89 DMs Sent</div>
                    <div className="funnel-arrow">→</div>
                    <div className="funnel-step">61 Replies</div>
                    <div className="funnel-arrow">→</div>
                    <div className="funnel-step">12 Leads</div>
                  </div>
                </div>
              </div>
              <div className="roi-ai-tips">
                <div className="ai-tip">
                  <div className="ai-tip-icon">💡</div>
                  <div className="ai-tip-text">Questions at the end of comments get you more replies</div>
                </div>
                <div className="ai-tip">
                  <div className="ai-tip-icon">💡</div>
                  <div className="ai-tip-text">This closing line books more calls</div>
                </div>
              </div>
            </div>
            <div className="roi-dashboard-features">
              <ul>
                <li>See comments, DMs, new leads and closed deals in one view.</li>
                <li>Funnels from comments and DMs all the way to revenue.</li>
                <li>AI tips from your data like 'questions at the end of comments get you more replies' or 'this closing line books more calls'.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Workflow Section */}
      <section className="section workflow-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>📅</span>
              <span>Daily rhythm</span>
            </div>
            <h2>Your Day With Commenter AI</h2>
            <p>
              The same daily loop as operators who already sell from comments and DMs, with product surfaces that make it concrete.
            </p>
          </div>
          <div className="workflow-timeline">
            {workflow.map((step) => (
              <div className="workflow-step" key={step.title}>
                <div className="workflow-step-header">
                  <h3>{step.title}</h3>
                  <p className="workflow-visual-label">{step.visual}</p>
                </div>
                <p className="workflow-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section integrations-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>🔗</span>
              <span>Integrations</span>
            </div>
            <h2>Integrations</h2>
            <p>
              LinkedIn is live. Additional channels plug into the same inbox and pipeline as they launch.
            </p>
          </div>
          <div className="integration-row">
            {integrations.map((integration) => (
              <div className="integration-item" key={integration.title}>
                <div className="integration-heading">
                  {integration.logo && <span className="integration-logo">{integration.logo}</span>}
                  <h3>{integration.title}</h3>
                  <span className="status-pill">{integration.status}</span>
                </div>
                {integration.status === "Live" && <p>{integration.body}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section proof-strip">
        <div className="section-container">
          <div className="quote-single">
            <blockquote>"{quotes[0].quote}"</blockquote>
            <figcaption>
              {quotes[0].name} · {quotes[0].role}
            </figcaption>
          </div>
        </div>
      </section>

      {/* Trial Section */}
      <section className="section trial-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <span>🎯</span>
              <span>Trial</span>
            </div>
            <h2>What You Get In The 7 Day Trial</h2>
            <p>
              Full access to see how comments → DMs → pipeline → insights works with your own LinkedIn activity.
            </p>
          </div>
          <div className="trial-benefits">
            <ul>
              <li>Full access to Comments, Inbox, Pipeline and ROI Dashboard</li>
              <li>Ability to create real leads from real threads</li>
              <li>AI tips generated from your own data, not dummy examples</li>
            </ul>
            <Link className="btn btn-primary-hero" href="/onboarding">
              Start 7 Day Trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="section faq-link-section">
        <div className="section-container">
          <p className="faq-link-text">
            Have more questions? <Link href="/">See detailed FAQ on the homepage</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta">
        <div className="cta-band-modern">
          <h2>Ready to see comment → DM → pipeline in action?</h2>
          <p>Launch your 7 day trial and create your first attributed lead.</p>
          <Link className="btn btn-primary-hero" href="/onboarding">
            Start 7 Day Trial
          </Link>
          <p className="cta-trust">No credit card required · Full loop access · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
