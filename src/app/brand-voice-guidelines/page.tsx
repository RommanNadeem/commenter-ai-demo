const voicePillars = [
  {
    title: "Outcome first",
    description: "Talk about leads, pipeline, calls, revenue. Not content, engagement, or generic AI.",
    example: 'Sample line: "See which comments created leads. Follow up from one inbox."',
  },
  {
    title: "Direct and concrete",
    description: "Short sentences, strong verbs, clear nouns.",
    example: 'Keep copy like: "See which comments created leads. Follow up from one inbox."',
  },
  {
    title: "Calm confidence",
    description: 'Sound experienced, not loud. Say "Here is how this works" instead of "crush LinkedIn."',
  },
  {
    title: "Proof over promises",
    description: 'Favor specifics such as "First attributed lead in 7 days" instead of "see results fast."',
  },
  {
    title: "Co pilot, not replacement",
    description: "AI assists. The human decides and sends.",
  },
  {
    title: "Plain language",
    description: "Use everyday sales words and avoid corporate jargon.",
  },
];

const messagingPillars = [
  {
    title: "A. From noise to pipeline",
    problem: "Problem: scattered comments, DMs, screenshots, manual tracking.",
    promise: "Promise: one system that turns this activity into a trackable pipeline.",
    sampleLines: [
      "Stop guessing which comments matter. See every lead that started from a thread.",
      "No more spreadsheets and screenshots. Every warm conversation turns into a card in your pipeline.",
    ],
  },
  {
    title: "B. Proof of what works",
    problem: "Focus on attribution, not vanity metrics.",
    promise: "",
    sampleLines: [
      "Every lead is tied to a specific comment or DM, so you know exactly what to repeat.",
      "See which threads actually turn into calls and deals.",
    ],
  },
  {
    title: "C. Daily workflow, not a dashboard",
    problem: "Show what to do today, not just show graphs.",
    promise: "",
    sampleLines: [
      "Each morning, see who to message, which threads to move, and which deals to push forward.",
      "A focused Today view that tells you what to do next.",
    ],
  },
  {
    title: "D. AI that earns its keep",
    problem: "AI is always linked to an outcome.",
    promise: "",
    sampleLines: [
      "AI drafts the first comment. You decide, edit, and post.",
      "Suggested replies and lead prompts that save time and prevent dropped threads.",
    ],
  },
];

const copyStyleRules = [
  {
    title: "Tone",
    points: [
      "Calm, confident, helpful.",
      "Informal but professional.",
      "Never hypey, never sarcastic.",
    ],
  },
  {
    title: "Sentences",
    points: [
      "Prefer short, active sentences.",
      "Use verbs like: track, see, turn, move, follow up, focus, close.",
      "Use arrows for flows: Comment → DM → Lead → Call → Won.",
    ],
  },
  {
    title: "Vocabulary to use",
    points: [
      "Comment, thread, DM, inbox.",
      "Lead, pipeline, deal, stage, call.",
      "Follow up, next step, today, schedule.",
      "ICP, feed, attribution, insight.",
      "Trial, Pro, Team.",
    ],
  },
  {
    title: "Vocabulary to avoid",
    points: [
      '"Crush LinkedIn", "dominate", "smash your goals", "supercharge".',
      'Vague nouns like "solutions", "robust platform", "cutting edge AI".',
    ],
  },
];

const ctaExamples = [
  "Get My First Lead",
  "Start 7 Day Trial",
  "Connect LinkedIn And Build My Feed",
  "See My Pipeline",
];

const heroPatterns = [
  {
    title: "Website hero pattern",
    items: [
      "Headline: Clear outcome, mention LinkedIn and pipeline (ex: Turn LinkedIn Comments And DMs Into Pipeline In 7 Days).",
      'Subtext: One sentence that explains the loop (ex: "Comment where it matters, reply from one inbox, and turn warm threads into a simple pipeline you can see and act on.").',
      'Primary CTA: "Get My First Lead".',
      'Support line: "7 day trial. Full comment to pipeline loop included."',
    ],
  },
  {
    title: "Product page pattern",
    items: [
      "Organize by modules and jobs: Comments, Inbox, Pipeline, Insights.",
      'Module copy examples: Comments — "Start better conversations in the right threads." Inbox — "Handle every warm DM in one place." Pipeline — "Turn threads into tracked leads and deals." Insights — "See what actually creates pipeline."',
      "Each module needs one sentence outcome, short description, and optional micro visual or screenshot.",
    ],
  },
];

const microcopyExamples = [
  {
    label: "Inbox empty state",
    text: "Once you start getting replies and DMs from LinkedIn, they will show up here. For now, go back to your feed and post a few comments to start conversations.",
  },
  {
    label: "Lead suggestion",
    text: 'Badge: "Looks Like A Lead". Panel text: "Create a tracked lead from this thread and see it in your pipeline."',
  },
  {
    label: "Success",
    text: 'Lead created. You can find it in New on your pipeline board.',
  },
  {
    label: "Nudge",
    text: "You have 3 warm threads with no reply in the last 3 days. Reply now to keep them moving.",
  },
];

const designLanguage = [
  {
    title: "Layout",
    points: [
      "Clear primary nav: Comments, Inbox, Pipeline, Insights.",
      'Visible Today area or strip at the top with "Today’s Plan".',
      "Use cards and lists that are easy to scan quickly.",
    ],
  },
  {
    title: "Visual hierarchy",
    points: [
      "Primary actions: high contrast buttons.",
      "Secondary actions: subtle, minimal borders or text buttons.",
      "Most important objects: Hot threads, Leads and deals, Key numbers on Insights.",
    ],
  },
  {
    title: "Color logic",
    points: [
      "One primary accent color for CTAs and main highlights.",
      'One softer accent for signals like "Looks Like A Lead", "Needs Follow Up".',
      "Neutral greys for background, cards, borders.",
      "Guiding rule: if everything is bright, nothing is important.",
    ],
  },
  {
    title: "Typography",
    points: [
      "Neutral, modern sans serif with clear hierarchy.",
      "Headline, Subhead, Body, Meta structure.",
      "Avoid decorative fonts. Prioritize clarity.",
    ],
  },
  {
    title: "Data and analytics",
    points: [
      "Simple bar charts, line charts, and metric cards.",
      'Prefer statements like "Leads This Week", "DM To Lead Conversion", "Leads From Comments vs DMs".',
      "Limited color palette for charts, consistently applied.",
    ],
  },
];

const interactionPrinciples = [
  "Motion supports understanding, not spectacle.",
  "When a lead is created from a thread, card animates into the pipeline board.",
  "When attribution links a comment to a lead, highlight both briefly.",
  "Step based onboarding shows smooth progress from step 1 to 3.",
  "No heavy parallax or showy animations inside the main app. Marketing site motion must still explain the loop visually.",
];

const alwaysOnChecklist = [
  "Does this clearly connect activity on LinkedIn to leads, calls, or pipeline?",
  "Are we speaking in plain language that a busy founder or rep understands at a glance?",
  "Is AI positioned as a helper that saves time or prevents dropped leads?",
  "Is there one obvious next action for the user?",
  'Are we reinforcing the promise "first attributed lead in 7 days" where it matters?',
  "Is the design calm, focused, and easy to scan, not loud or playful?",
];

export default function BrandVoiceGuidelinesPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <div className="pill">System Reference</div>
          <h2>Brand Voice &amp; Design Reference</h2>
          <p className="section-subtitle">
            Use this page before writing copy, designing a flow, or shipping a campaign. It keeps Commenter AI grounded in calm,
            outcome-first language.
          </p>
        </div>
        <div className="card tinted">
          <h3>Brand Essence</h3>
          <p><strong>One line:</strong> Turn LinkedIn comments and DMs into visible, measurable pipeline.</p>
          <h4>Personality</h4>
          <ul>
            <li>Calm senior operator.</li>
            <li>Practical sales coach.</li>
            <li>Clear data brain in the background.</li>
            <li>No hype, no guru language. Just "do this, see pipeline move here."</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>Voice Pillars</h3>
        <p className="section-subtitle">Use these as non negotiables for all copy.</p>
        <div className="cards">
          {voicePillars.map((pillar) => (
            <div className="card" key={pillar.title}>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
              {pillar.example && <p className="micro-text">{pillar.example}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Core Positioning</h3>
        <div className="cards">
          <div className="card">
            <h4>Category</h4>
            <p>Social CRM for LinkedIn first sellers.</p>
          </div>
          <div className="card">
            <h4>Primary promise</h4>
            <p>"First attributed lead in 7 days from comments and DMs."</p>
          </div>
          <div className="card">
            <h4>Differentiator</h4>
            <p>Full loop attribution. Comments → DMs → Pipeline → Insights → Back into actions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Messaging Pillars</h3>
        <div className="cards">
          {messagingPillars.map((pillar) => (
            <div className="card" key={pillar.title}>
              <h4>{pillar.title}</h4>
              {pillar.problem && <p><strong>{pillar.problem}</strong></p>}
              {pillar.promise && <p><strong>{pillar.promise}</strong></p>}
              <ul>
                {pillar.sampleLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Copy Style Rules</h3>
        <div className="cards">
          {copyStyleRules.map((rule) => (
            <div className="card" key={rule.title}>
              <h4>{rule.title}</h4>
              <ul>
                {rule.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: 32 }}>
          <h4>CTA rules</h4>
          <ul>
            <li>Title Case.</li>
            <li>Clear, outcome linked.</li>
            <li>One primary CTA per surface.</li>
          </ul>
          <p>Examples:</p>
          <ul>
            {ctaExamples.map((cta) => (
              <li key={cta}>{cta}</li>
            ))}
          </ul>
          <p className="micro-text">Avoid generic CTAs as primary (for example "Learn More").</p>
        </div>
      </section>

      <section className="section">
        <h3>Hero &amp; Key Surface Patterns</h3>
        <div className="cards">
          {heroPatterns.map((pattern) => (
            <div className="card" key={pattern.title}>
              <h4>{pattern.title}</h4>
              <ul>
                {pattern.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>In Product Microcopy</h3>
        <p className="section-subtitle">Tone: clear and directive, not chatty.</p>
        <div className="cards">
          {microcopyExamples.map((example) => (
            <div className="card" key={example.label}>
              <h4>{example.label}</h4>
              <p>{example.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Design Language</h3>
        <p className="section-subtitle">The product should feel like a focused sales console, not a marketing toy.</p>
        <div className="cards">
          {designLanguage.map((bucket) => (
            <div className="card" key={bucket.title}>
              <h4>{bucket.title}</h4>
              <ul>
                {bucket.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Interaction &amp; Motion</h3>
        <div className="card">
          <ul>
            {interactionPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>Always On Checklist</h3>
        <div className="card">
          <ul>
            {alwaysOnChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

