export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
];

export const logos = ["PipelineCraft", "Northbound Labs", "SignalOps", "LinkedLeads"];

export const personaCards = [
  {
    title: "Solo founders and service providers",
    body: "You sell services or B2B SaaS and rely on LinkedIn for clients.",
    bullets: [
      "Turn daily engagement into visible sales.",
      "Know which conversations to follow up on today.",
      "See exactly which comments and DMs created deals.",
    ],
  },
  {
    title: "LinkedIn coaches and program owners",
    body: "You run programs that teach LinkedIn. Your reputation depends on visible wins.",
    bullets: [
      "Give clients dashboards that show their LinkedIn sales.",
      "Prove your framework with real leads and calls, not just likes.",
      "Spot patterns across cohorts and refine your playbooks.",
    ],
  },
];

export const featureCards = [
  {
    title: "Comments",
    bullets: ["ICP feed and smart alerts.", "AI drafts and best-practice scoring."],
  },
  {
    title: "Inbox",
    bullets: ["Unified DMs with AI summaries.", "Templates and reply nudges."],
  },
  {
    title: "CRM",
    bullets: ["Deal board mapped to social stages.", "Timeline with comments + DM history."],
  },
  {
    title: "Analytics",
    bullets: ["Lead velocity and attribution.", "Playbook performance by post."],
  },
];

export const productPersonas = [
  {
    title: "Solo B2B Founder",
    bullets: [
      "Personalized comment prompts.",
      "Inbox follow-up guardrails.",
      "Light CRM that doesn’t break flow.",
      "Outcome analytics that win buy-in.",
    ],
  },
  {
    title: "LinkedIn Coach / Program Owner",
    bullets: [
      "Team oversight dashboards.",
      "DM workflows with attribution.",
      "Sales shared with clients.",
      "Analytics packs for ROI updates.",
    ],
  },
];

export const planCards = [
  {
    badge: "Sales Navigator alternative",
    title: "Starter",
    description: "For solo founders validating that LinkedIn can be a predictable pipeline.",
    persona: "Solo founders",
    valueProp: "All core modules with limits perfect for validating LinkedIn as a pipeline.",
    bullets: [
      "150 AI comments / month",
      "60 AI DM replies / month",
      "150 active leads",
      "30 days data history",
    ],
    featured: false,
  },
  {
    badge: "Most popular",
    title: "Growth",
    description: "For founders, coaches and small teams who have a working system and want to scale it.",
    persona: "Founders, coaches, small teams",
    valueProp: "Unlimited usage, automations, and up to 5 seats to scale your LinkedIn sales system.",
    bullets: [
      "Unlimited AI comments and DM replies",
      "Unlimited leads",
      "AI automations and workflows",
      "Up to 5 seats included",
    ],
    featured: true,
  },
  {
    badge: "Agencies and programs",
    title: "Team",
    description: "For agencies and programs that manage multiple profiles and cohorts.",
    persona: "Agencies and programs",
    valueProp: "Client workspaces, program-level dashboards, and dedicated success management.",
    bullets: [
      "Up to 10 seats and 5 LinkedIn accounts",
      "Client and cohort workspaces",
      "Program-level ROI dashboards",
      "Dedicated success manager",
    ],
    featured: false,
  },
];

export const featureComparison = [
  { 
    category: "Core modules",
    feature: "All core modules",
    starter: "✅ Full access",
    growth: "✅ Full access",
    team: "✅ Full access"
  },
  { 
    category: "Comments",
    feature: "ICP feed + AI comments",
    starter: "✅ 150/month",
    growth: "✅ Unlimited (fair use)",
    team: "✅ Unlimited (fair use)"
  },
  { 
    category: "Inbox",
    feature: "Unified LinkedIn inbox with AI replies",
    starter: "✅ 60 DM replies/month",
    growth: "✅ Unlimited (fair use)",
    team: "✅ Unlimited (fair use)"
  },
  { 
    category: "Pipeline",
    feature: "Lead creation from threads",
    starter: "✅ 150 active leads",
    growth: "✅ Unlimited",
    team: "✅ Unlimited"
  },
  { 
    category: "Analytics",
    feature: "Simple board and ROI dashboard",
    starter: "✅ Full",
    growth: "✅ Full + advanced",
    team: "✅ Program-level dashboards"
  },
  { 
    category: "LinkedIn accounts",
    feature: "LinkedIn accounts",
    starter: "1",
    growth: "1",
    team: "5 included"
  },
  { 
    category: "AI features",
    feature: "AI tips per day",
    starter: "2",
    growth: "Unlimited",
    team: "Unlimited"
  },
  { 
    category: "Data history",
    feature: "Data history",
    starter: "30 days",
    growth: "12 months",
    team: "12+ months"
  },
  { 
    category: "Channels",
    feature: "Multi-channel inbox",
    starter: "LinkedIn only",
    growth: "Multi-channel as available",
    team: "Multi-channel as available"
  },
  { 
    category: "Automation",
    feature: "AI automations and workflows",
    starter: "❌",
    growth: "✅ Follow-up queue, next best action, playbooks",
    team: "✅ Advanced workflows"
  },
  { 
    category: "Team & workspaces",
    feature: "Seats included",
    starter: "1",
    growth: "Up to 5",
    team: "Up to 10 (+ $40–60/seat)"
  },
  { 
    category: "Team & workspaces",
    feature: "Client and cohort workspaces",
    starter: "❌",
    growth: "❌",
    team: "✅"
  },
  { 
    category: "Team & workspaces",
    feature: "Admin controls and permissions",
    starter: "❌",
    growth: "❌",
    team: "✅"
  },
  { 
    category: "Support",
    feature: "Support & onboarding",
    starter: "Email support",
    growth: "Priority support + onboarding call",
    team: "Dedicated success manager + training"
  },
  { 
    category: "Early access",
    feature: "Early access to new AI models",
    starter: "❌",
    growth: "✅",
    team: "✅"
  },
];

export const usageLimits = [
  { 
    title: "AI Comments per month",
    limits: [
      { plan: "Starter", value: "150" },
      { plan: "Growth", value: "Unlimited (fair use)" },
      { plan: "Team", value: "Unlimited (fair use)" }
    ],
    helperText: "Starter is perfect for validating LinkedIn as a pipeline."
  },
  { 
    title: "AI DM Replies per month",
    limits: [
      { plan: "Starter", value: "60" },
      { plan: "Growth", value: "Unlimited (fair use)" },
      { plan: "Team", value: "Unlimited (fair use)" }
    ],
    helperText: ""
  },
  { 
    title: "Active Leads",
    limits: [
      { plan: "Starter", value: "150" },
      { plan: "Growth", value: "Unlimited" },
      { plan: "Team", value: "Unlimited" }
    ],
    helperText: ""
  },
  { 
    title: "Channels",
    limits: [
      { plan: "Starter", value: "LinkedIn" },
      { plan: "Growth", value: "Multi-channel as available" },
      { plan: "Team", value: "Multi-channel as available" }
    ],
    helperText: ""
  },
  { 
    title: "Data History",
    limits: [
      { plan: "Starter", value: "30 days" },
      { plan: "Growth", value: "12 months" },
      { plan: "Team", value: "12+ months" }
    ],
    helperText: ""
  },
];

export const faqItems = [
  {
    question: "How does the trial work?",
    answer: "Enjoy seven full days. Cancel anytime before day eight and you won't be charged.",
    category: "billing"
  },
  {
    question: "When am I charged?",
    answer: "At the end of the trial. Annual discounts available on Pro and Team.",
    category: "billing"
  },
  {
    question: "Can I upgrade or downgrade?",
    answer: "Yes—upgrade instantly or downgrade at renewal. No hidden fees or seat minimums.",
    category: "billing"
  },
  {
    question: "Do you post or DM on my behalf?",
    answer: "No. Commenter AI helps you draft comments and DMs, but you always review and send them yourself. We're a tool, not an automation service.",
    category: "product"
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your leads, deals, and conversation history before canceling. We'll keep your data for 30 days after cancellation, then permanently delete it.",
    category: "product"
  },
  {
    question: "Can I use Commenter AI alongside my existing CRM?",
    answer: "Yes. Commenter AI syncs with popular CRMs via API. You can also export data manually. We're designed to complement your existing tools, not replace them.",
    category: "product"
  },
  {
    question: "Does each team member need their own seat?",
    answer: "Yes. Each person who needs access to the dashboard, inbox, or sales requires a seat. Team plans include 5+ seats with shared quotas and admin controls.",
    category: "product"
  },
];

export const resourceCategories = [
  { title: "Playbooks", description: "Step-by-step sequences for founders & reps." },
  { title: "Guides", description: "Deep dives on social CRM, attribution, and messaging." },
  { title: "Case Studies", description: "Client stories with before/after metrics." },
];

export const caseStudies = [
  { title: "Agency • $35K in 30 days", teaser: "How a boutique agency captured warm DMs and filled a mastermind." },
  { title: "Founder • 5 enterprise pilots", teaser: "Turning personal content into sales with zero SDRs." },
  { title: "Program • Cohort success", teaser: "Live dashboards showing every participant's sales." },
];

export const guides = [
  {
    date: "Nov 2025",
    title: "Building a social-first CRM habit",
    description: "Practical rituals to keep your LinkedIn sales warm.",
  },
  {
    date: "Oct 2025",
    title: "DM follow-up templates that feel personal",
    description: "Use AI as a coach, not a robot.",
  },
  {
    date: "Sep 2025",
    title: "Attribution models for social selling",
    description: "Show revenue leadership where wins came from.",
  },
];

export const authFields = [
  { label: "Name", type: "text", placeholder: "Alex Revenue", id: "name" },
  { label: "Email", type: "email", placeholder: "you@company.com", id: "email" },
  { label: "Password", type: "password", placeholder: "••••••••", id: "password" },
];

