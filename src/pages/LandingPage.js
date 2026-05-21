import React from 'react';
import './LandingPage.css';

const gumroadLink = 'https://graphicawork.gumroad.com/l/lxbvgt';

const painPoints = [
  'No job after coming to Canada',
  'Applying randomly with no results',
  'No routine or structure',
  'Feeling stuck and confused',
];

const solutionPoints = [
  'A 30-day execution system, not a theory guide',
  'Daily tasks that tell you exactly what to do',
  'Less confusion, more action',
  'Built for first-job momentum after arrival',
];

const includes = [
  '30-Day Notion Action System (Day 1–30)',
  'Resume Templates (Restaurant, Warehouse, No Experience)',
  'Message Scripts (Cold email, LinkedIn, Follow-ups)',
  'Walk-in Script',
  'Interview Prep Toolkit',
  'Canada Job Guide',
];

const steps = [
  'Start Day 1',
  'Complete daily tasks',
  'Track progress',
  'Follow the system for 30 days',
];

const samplePlan = [
  'Day 1: Fix resume + apply to 5 jobs',
  'Day 2: Apply to 10 jobs + LinkedIn setup',
  'Day 3: Walk-ins + messages',
];

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">Graphicawork</span>
          <span className="brand-note">Practical systems for job seekers in Canada</span>
        </div>
        <a className="topbar-link" href={gumroadLink} target="_blank" rel="noreferrer">
          Start My Reset
        </a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">Built for international students in Canada</div>
          <h1>30-Day Canada Reset System</h1>
          <p className="subtitle">Get Any Job Fast (Even With No Experience)</p>
          <p className="description">
            A step-by-step 30-day system to help international students in Canada get their first job.
          </p>
          <div className="hero-actions">
            <a className="cta-button primary" href={gumroadLink} target="_blank" rel="noreferrer">
              Start My Reset
            </a>
            <a className="cta-button secondary" href="#what-you-get">
              See What&apos;s Inside
            </a>
          </div>
          <div className="hero-metrics" aria-label="Product highlights">
            <div>
              <strong>30</strong>
              <span>Day system</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Core assets</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Clear goal</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-label">Inside the reset</div>
          <ul className="panel-list">
            <li>Daily action instead of random applications</li>
            <li>Simple structure for the first 30 days</li>
            <li>Tools that reduce confusion and save time</li>
          </ul>
          <div className="panel-callout">
            <span>Focus:</span> execute the plan, track the work, move faster.
          </div>
        </aside>
      </section>

      <section className="content-grid section-shell two-column">
        <div className="section-heading">
          <span className="section-tag">Problem</span>
          <h2>Most students do not need more advice.</h2>
          <p>
            They need a clear system they can follow every day without guessing what to do next.
          </p>
        </div>
        <div className="card-grid four-up">
          {painPoints.map((item) => (
            <article className="info-card" key={item}>
              <span className="card-icon" aria-hidden="true">•</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid section-shell two-column">
        <div className="section-heading">
          <span className="section-tag accent">Solution</span>
          <h2>Action first. No fluff.</h2>
          <p>
            This is a 30-day execution system with daily tasks, clear direction, and a focus on doing the work.
          </p>
        </div>
        <div className="stack-list">
          {solutionPoints.map((item) => (
            <article className="stack-card" key={item}>
              <span className="stack-marker" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="what-you-get">
        <div className="section-heading centered">
          <span className="section-tag">What You Get</span>
          <h2>The full system is built to reduce friction.</h2>
        </div>
        <div className="card-grid three-up">
          {includes.map((item) => (
            <article className="feature-card" key={item}>
              <div className="feature-dot" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-panel">
        <div className="section-heading">
          <span className="section-tag accent">How It Works</span>
          <h2>Use the system. Complete the work. Track the result.</h2>
        </div>
        <div className="step-list">
          {steps.map((step, index) => (
            <article className="step-card" key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-panel">
        <div className="section-heading">
          <span className="section-tag">Sample Plan</span>
          <h2>What the first three days look like.</h2>
        </div>
        <div className="sample-plan">
          {samplePlan.map((item) => {
            const [day, task] = item.split(':');

            return (
              <article className="sample-card" key={item}>
                <span>{day}</span>
                <p>{task.trim()}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta-band section-shell">
        <div>
          <span className="section-tag accent">Call To Action</span>
          <h2>Stop waiting. Start executing.</h2>
        </div>
        <a className="cta-button primary large" href={gumroadLink} target="_blank" rel="noreferrer">
          Start My Reset
        </a>
      </section>

      <footer className="final-note section-shell">
        <p>
          This system works only if you execute.
          <br />
          No excuses. No delays.
          <br />
          Follow it seriously for 30 days and you will see results.
        </p>
        <span>– Graphicawork</span>
      </footer>
    </main>
  );
}

export default LandingPage;