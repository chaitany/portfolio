/**
 * Portfolio.jsx — Chaitanya Reddy Vaddula · Lead Software Engineer
 * Stack: React, TypeScript, Node.js
 *
 * Usage:
 *   npm create vite@latest my-portfolio -- --template react
 *   cd my-portfolio
 *   # Replace src/App.jsx with this file
 *   # Add to index.html <head>:
 *     <link rel="preconnect" href="https://fonts.googleapis.com" />
 *     <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
 *   npm run dev
 */

import { useState, useEffect, useRef } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const SKILLS = {
  react: {
    id: "react",
    label: "React",
    pct: 97,
    badgeBg: "#E6F1FB",
    badgeFg: "#0C447C",
    barColor: "#378ADD",
    summary:
      "10+ years delivering production React apps across SaaS and e-commerce platforms. Led design system authoring at GoTo Technologies, drove a 35% conversion uplift at LogMeIn Central, and built AI agent-interaction surfaces using MCP servers.",
    chips: [
      "React.js", "Next.js (SSR/SSG)", "TypeScript", "Redux", "Hooks",
      "Micro-Frontends", "Component Systems", "Accessibility (a11y)",
      "Performance Optimization", "Tailwind CSS", "SASS", "Storybook",
      "Testing Library", "Vite", "Webpack",
    ],
  },
  ts: {
    id: "ts",
    label: "TypeScript",
    pct: 95,
    badgeBg: "#EEEDFE",
    badgeFg: "#3C3489",
    barColor: "#7F77DD",
    summary:
      "Expert-level TypeScript across frontend and backend. Authored RFCs and ADRs for reusable typed component libraries at GoTo, standardising UI across multiple global product lines and lifting team productivity by 40–60%.",
    chips: [
      "Strict Mode", "Generics", "Utility Types", "Discriminated Unions",
      "Declaration Files", "SDK Development", "RFC/ADR authorship",
      "Design Patterns", "tRPC", "Zod", "OpenAPI types", "GraphQL codegen",
    ],
  },
  node: {
    id: "node",
    label: "Node.js",
    pct: 88,
    badgeBg: "#EAF3DE",
    badgeFg: "#27500A",
    barColor: "#639922",
    summary:
      "Full backend experience spanning REST, GraphQL, task queues, and microservices. Built a Redis-based production task scheduler and a FastAPI multi-tenant SaaS backend with PostgreSQL Row-Level Security.",
    chips: [
      "Node.js", "GraphQL", "REST", "FastAPI", "Django",
      "Redis", "PostgreSQL", "MongoDB", "BullMQ", "Docker",
      "CI/CD", "Microservices", "CLI tooling", "Vercel",
    ],
  },
  python: {
    id: "python",
    label: "Python",
    pct: 85,
    badgeBg: "#FEF3E2",
    badgeFg: "#7A4100",
    barColor: "#F0A500",
    summary:
      "Production Python across backend services, data pipelines, and AI tooling. Built high-performance async query engines, task schedulers, and LangChain-based agentic workflows integrated with the OpenAI API.",
    chips: [
      "FastAPI", "Django", "LangChain", "OpenAI API", "Asyncpg",
      "Redis", "PostgreSQL", "Asyncio", "Pytest", "Pydantic",
      "Agentic Development", "GitHub Copilot", "Pandas", "Celery",
    ],
  },
  aws: {
    id: "aws",
    label: "AWS",
    pct: 82,
    badgeBg: "#FFF0E6",
    badgeFg: "#8A3000",
    barColor: "#FF6B2B",
    summary:
      "Hands-on AWS across serverless, storage, and deployment pipelines. Architected a serverless document intelligence platform using Lambda, S3, Textract, and API Gateway — fronted by a React dashboard with real-time job tracking.",
    chips: [
      "Lambda", "S3", "API Gateway", "Textract", "DynamoDB",
      "CloudFront", "IAM", "SQS", "SNS", "Cognito",
      "ECR", "CloudWatch", "Vercel", "Docker", "CI/CD",
    ],
  },
};

const PROJECTS = [
  {
    name: "LogMeIn Central — Transaction UI",
    stack: "React + TS",
    stackColor: "#378ADD",
    desc: "Led end-to-end component system design and production delivery for B2B/B2C transaction flows, achieving a 35% improvement in user conversion.",
    icon: "⬡",
  },
  {
    name: "GoTo / Grasshopper — Sitecore Migration",
    stack: "Next.js + GraphQL",
    stackColor: "#7F77DD",
    desc: "Migrated GoTo and Grasshopper web apps to Sitecore Headless (Next.js + GraphQL), reducing page-load times by 50% in a high-speed production environment.",
    icon: "⟳",
  },
  {
    name: "Redis Task Queue",
    stack: "Python + Redis",
    stackColor: "#639922",
    desc: "Production-grade task scheduler with worker crash recovery, atomic execution, exponential back-off retries, and dead-letter queue patterns.",
    icon: "▣",
  },
  {
    name: "Multi-Tenant Guard",
    stack: "FastAPI + PostgreSQL",
    stackColor: "#E07B39",
    desc: "Secure SaaS backend using PostgreSQL Row-Level Security for strict data isolation, dynamic RBAC, and automated audit logging via database triggers.",
    icon: "◈",
  },
  {
    name: "GoTo Design System",
    stack: "React + TS",
    stackColor: "#378ADD",
    desc: "Centralised component library with RFC/ADR documentation, standardising UI across multiple global product lines and boosting team productivity by 40–60%.",
    icon: "◉",
  },
  {
    name: "DocuSense — Document Intelligence Platform",
    stack: "React + Python + AWS",
    stackColor: "#FF6B2B",
    desc: "Serverless document processing platform: React dashboard uploads files to S3, triggers Lambda + AWS Textract for extraction, FastAPI orchestrates results, with real-time job status via SQS and DynamoDB.",
    icon: "◎",
  },
];

// ─── Code snippets (React/TS · Node.js · Python · AWS) ─────────────────────

const SNIPPETS = [
  {
    label: "portfolio.tsx",
    lang: "React · TypeScript",
    tokens: [
      { cls: "cmt",   text: "// Type-safe data-fetching hook" },
      { cls: "nl" },
      { cls: "kw",    text: "function " },
      { cls: "fn",    text: "useFetch" },
      { cls: "plain", text: "<" },
      { cls: "type",  text: "T" },
      { cls: "plain", text: ">(url: " },
      { cls: "type",  text: "string" },
      { cls: "plain", text: ") {" },
      { cls: "nl" },
      { cls: "plain", text: "  " },
      { cls: "kw",    text: "const " },
      { cls: "plain", text: "[data, setData] = " },
      { cls: "fn",    text: "useState" },
      { cls: "plain", text: "<" },
      { cls: "type",  text: "T | null" },
      { cls: "plain", text: ">(null);" },
      { cls: "nl" },
      { cls: "plain", text: "  " },
      { cls: "fn",    text: "useEffect" },
      { cls: "plain", text: "(() => {" },
      { cls: "nl" },
      { cls: "plain", text: "    " },
      { cls: "fn",    text: "fetch" },
      { cls: "plain", text: "(url)" },
      { cls: "nl" },
      { cls: "plain", text: "      ." },
      { cls: "fn",    text: "then" },
      { cls: "plain", text: "(r => r." },
      { cls: "fn",    text: "json" },
      { cls: "plain", text: "())" },
      { cls: "nl" },
      { cls: "plain", text: "      ." },
      { cls: "fn",    text: "then" },
      { cls: "plain", text: "(" },
      { cls: "fn",    text: "setData" },
      { cls: "plain", text: ");" },
      { cls: "nl" },
      { cls: "plain", text: "  }, [url]);" },
      { cls: "nl" },
      { cls: "kw",    text: "  return " },
      { cls: "plain", text: "{ data };" },
      { cls: "nl" },
      { cls: "plain", text: "}" },
    ],
  },
  {
    label: "server.js",
    lang: "Node.js",
    tokens: [
      { cls: "cmt",   text: "// Express REST endpoint with async handler" },
      { cls: "nl" },
      { cls: "kw",    text: "const " },
      { cls: "plain", text: "app = " },
      { cls: "fn",    text: "express" },
      { cls: "plain", text: "();" },
      { cls: "nl" },
      { cls: "nl" },
      { cls: "plain", text: "app." },
      { cls: "fn",    text: "get" },
      { cls: "plain", text: "(" },
      { cls: "string",text: "'/api/jobs/:id'" },
      { cls: "plain", text: ", " },
      { cls: "kw",    text: "async " },
      { cls: "plain", text: "(req, res) => {" },
      { cls: "nl" },
      { cls: "plain", text: "  " },
      { cls: "kw",    text: "const " },
      { cls: "plain", text: "job = " },
      { cls: "kw",    text: "await " },
      { cls: "fn",    text: "getJobById" },
      { cls: "plain", text: "(req.params.id);" },
      { cls: "nl" },
      { cls: "plain", text: "  " },
      { cls: "kw",    text: "if " },
      { cls: "plain", text: "(!job) " },
      { cls: "kw",    text: "return " },
      { cls: "nl" },
      { cls: "plain", text: "    res." },
      { cls: "fn",    text: "status" },
      { cls: "plain", text: "(404)." },
      { cls: "fn",    text: "json" },
      { cls: "plain", text: "({ error: " },
      { cls: "string",text: "'Not found'" },
      { cls: "plain", text: " });" },
      { cls: "nl" },
      { cls: "plain", text: "  res." },
      { cls: "fn",    text: "json" },
      { cls: "plain", text: "({ job });" },
      { cls: "nl" },
      { cls: "plain", text: "});" },
    ],
  },
  {
    label: "worker.py",
    lang: "Python",
    tokens: [
      { cls: "cmt",   text: "# Async FastAPI route with Pydantic model" },
      { cls: "nl" },
      { cls: "kw",    text: "from " },
      { cls: "plain", text: "fastapi " },
      { cls: "kw",    text: "import " },
      { cls: "fn",    text: "FastAPI" },
      { cls: "plain", text: ", " },
      { cls: "fn",    text: "HTTPException" },
      { cls: "nl" },
      { cls: "nl" },
      { cls: "plain", text: "@app." },
      { cls: "fn",    text: "post" },
      { cls: "plain", text: "(" },
      { cls: "string",text: '"/jobs"' },
      { cls: "plain", text: ")" },
      { cls: "nl" },
      { cls: "kw",    text: "async " },
      { cls: "kw",    text: "def " },
      { cls: "fn",    text: "create_job" },
      { cls: "plain", text: "(payload: " },
      { cls: "type",  text: "JobRequest" },
      { cls: "plain", text: "):" },
      { cls: "nl" },
      { cls: "plain", text: "    job = " },
      { cls: "kw",    text: "await " },
      { cls: "fn",    text: "enqueue" },
      { cls: "plain", text: "(payload.dict())" },
      { cls: "nl" },
      { cls: "plain", text: "    " },
      { cls: "kw",    text: "return " },
      { cls: "plain", text: "{ " },
      { cls: "string",text: '"id"' },
      { cls: "plain", text: ": job.id, " },
      { cls: "string",text: '"status"' },
      { cls: "plain", text: ": " },
      { cls: "string",text: '"queued"' },
      { cls: "plain", text: " }" },
    ],
  },
  {
    label: "handler.py",
    lang: "AWS Lambda",
    tokens: [
      { cls: "cmt",   text: "# Lambda: extract text via AWS Textract" },
      { cls: "nl" },
      { cls: "kw",    text: "import " },
      { cls: "plain", text: "boto3" },
      { cls: "nl" },
      { cls: "nl" },
      { cls: "fn",    text: "textract" },
      { cls: "plain", text: " = boto3." },
      { cls: "fn",    text: "client" },
      { cls: "plain", text: "(" },
      { cls: "string",text: '"textract"' },
      { cls: "plain", text: ")" },
      { cls: "nl" },
      { cls: "nl" },
      { cls: "kw",    text: "def " },
      { cls: "fn",    text: "handler" },
      { cls: "plain", text: "(event, context):" },
      { cls: "nl" },
      { cls: "plain", text: "    key = event[" },
      { cls: "string",text: '"key"' },
      { cls: "plain", text: "]" },
      { cls: "nl" },
      { cls: "plain", text: "    resp = textract." },
      { cls: "fn",    text: "detect_document_text" },
      { cls: "plain", text: "(" },
      { cls: "nl" },
      { cls: "plain", text: "        Document={ " },
      { cls: "string",text: '"S3Object"' },
      { cls: "plain", text: ": {" },
      { cls: "nl" },
      { cls: "plain", text: "            " },
      { cls: "string",text: '"Bucket"' },
      { cls: "plain", text: ": " },
      { cls: "string",text: '"docusense-uploads"' },
      { cls: "plain", text: "," },
      { cls: "nl" },
      { cls: "plain", text: "            " },
      { cls: "string",text: '"Name"' },
      { cls: "plain", text: ": key }})" },
      { cls: "nl" },
      { cls: "kw",    text: "    return " },
      { cls: "plain", text: "resp[" },
      { cls: "string",text: '"Blocks"' },
      { cls: "plain", text: "]" },
    ],
  },
];

// ─── Terminal typewriter ─────────────────────────────────────────────────────

function Terminal() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const stepTimer = useRef(null);
  const rotateTimer = useRef(null);

  function startTyping(sIdx) {
    clearTimeout(stepTimer.current);
    idx.current = 0;
    setRendered([]);
    setDone(false);
    const tokens = SNIPPETS[sIdx].tokens;

    function step() {
      if (idx.current >= tokens.length) {
        setDone(true);
        return;
      }
      const token = tokens[idx.current++];
      setRendered((prev) => [...prev, token]);
      const delay = token.cls === "nl" ? 55 : 20 + Math.random() * 32;
      stepTimer.current = setTimeout(step, delay);
    }
    stepTimer.current = setTimeout(step, 350);
  }

  useEffect(() => {
    startTyping(0);
    rotateTimer.current = setInterval(() => {
      setSnippetIdx((prev) => {
        const next = (prev + 1) % SNIPPETS.length;
        startTyping(next);
        return next;
      });
    }, 15000);
    return () => {
      clearTimeout(stepTimer.current);
      clearInterval(rotateTimer.current);
    };
  }, []);

  const snippet = SNIPPETS[snippetIdx];

  return (
    <div style={styles.terminal}>
      <div style={styles.termBar}>
        <span style={{ ...styles.dot, background: "#ff5f57" }} />
        <span style={{ ...styles.dot, background: "#febc2e" }} />
        <span style={{ ...styles.dot, background: "#28c840" }} />
        <span style={styles.termTitle}>{snippet.label}</span>
        <span style={styles.termLang}>{snippet.lang}</span>
        <div style={styles.termDots}>
          {SNIPPETS.map((_, i) => (
            <span
              key={i}
              onClick={() => { setSnippetIdx(i); startTyping(i); }}
              style={{
                ...styles.termDot,
                background: i === snippetIdx ? "#58a6ff" : "#30363d",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
      <div style={styles.termBody}>
        {rendered.map((tok, i) =>
          tok.cls === "nl" ? (
            <br key={i} />
          ) : (
            <span key={i} style={TOKEN_COLORS[tok.cls]}>
              {tok.text}
            </span>
          )
        )}
        {!done && <span style={styles.cursor} />}
      </div>
    </div>
  );
}

// ─── Skill card ──────────────────────────────────────────────────────────────

function SkillCard({ skill, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.skillCard,
        borderColor: active ? "#94A3B8" : "#E2E8F0",
        transform: active ? "translateY(-2px)" : "none",
        cursor: "pointer",
      }}
    >
      <span style={{ ...styles.skillIconDot, background: skill.barColor }} />
      <div style={styles.skillName}>{skill.label}</div>
      <div style={styles.skillSub}>{skill.chips.slice(0, 3).join(", ")}</div>
      <div style={styles.barTrack}>
        <div
          style={{
            ...styles.barFill,
            width: `${skill.pct}%`,
            background: skill.barColor,
          }}
        />
      </div>
    </button>
  );
}

// ─── Detail panel ────────────────────────────────────────────────────────────

function DetailPanel({ skill }) {
  return (
    <div style={styles.detailCard}>
      <div style={styles.detailHeader}>
        <span
          style={{
            ...styles.badge,
            background: skill.badgeBg,
            color: skill.badgeFg,
          }}
        >
          {skill.label}
        </span>
        <span style={styles.detailTitle}>— what I work with</span>
      </div>
      <p style={styles.detailSummary}>{skill.summary}</p>
      <div style={styles.chips}>
        {skill.chips.map((c) => (
          <span key={c} style={styles.chip}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Project card ────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div style={styles.projectCard}>
      <div
        style={{ ...styles.projectAccent, background: project.stackColor }}
      />
      <div style={styles.projectInner}>
        <div style={styles.projHeader}>
          <span style={styles.projName}>{project.name}</span>
          <span
            style={{
              ...styles.projStack,
              color: project.stackColor,
              border: `1px solid ${project.stackColor}33`,
            }}
          >
            {project.stack}
          </span>
        </div>
        <p style={styles.projDesc}>{project.desc}</p>
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSkill, setActiveSkill] = useState("react");

  return (
    <div style={styles.page}>
      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroName}>Chaitanya Reddy Vaddula</h1>
          <p style={styles.heroSub}>
            Lead Software Engineer · 10+ years · Full-Stack Engineer, Cloud-AWS, CI/CD, Mentor
          </p>
          <Terminal />
        </div>
      </header>

      {/* Body */}
      <main style={styles.main}>
        {/* Skills */}
        <section>
          <p style={styles.sectionLabel}>Core expertise</p>
          <div style={styles.skillGrid}>
            {Object.values(SKILLS).map((sk) => (
              <SkillCard
                key={sk.id}
                skill={sk}
                active={activeSkill === sk.id}
                onClick={() => setActiveSkill(sk.id)}
              />
            ))}
          </div>
          <DetailPanel skill={SKILLS[activeSkill]} />
        </section>

        {/* Projects */}
        <section style={{ marginTop: "2rem" }}>
          <p style={styles.sectionLabel}>Selected projects</p>
          <div style={styles.projectGrid}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={styles.ctaRow}>
          <a href="mailto:crvaddula@gmail.com" style={styles.btnPrimary}>
            Get in touch
          </a>
          <a
            href="https://github.com/chaitany"
            target="_blank"
            rel="noreferrer"
            style={styles.btnSecondary}
          >
            GitHub →
          </a>
        </div>
      </main>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const TOKEN_COLORS = {
  cmt:   { color: "#8b949e" },
  kw:    { color: "#ff7b72" },
  fn:    { color: "#d2a8ff" },
  string:{ color: "#a5d6ff" },
  type:  { color: "#ffa657" },
  prop:  { color: "#79c0ff" },
  val:   { color: "#56d364" },
  plain: { color: "#e6edf3" },
};

const styles = {
  page: {
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    background: "#F8FAFC",
    minHeight: "100vh",
  },

  // Hero
  hero: {
    background: "#0A0E1A",
    padding: "0",
  },
  heroInner: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "3rem 2rem 2.5rem",
    textAlign: "center",
  },
  badgeRow: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    marginBottom: "1.25rem",
    flexWrap: "wrap",
  },
  heroBadge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 99,
    letterSpacing: "0.04em",
  },
  heroName: {
    fontSize: "clamp(2rem, 5vw, 2.75rem)",
    fontWeight: 700,
    color: "#F0F4FF",
    letterSpacing: "-0.02em",
    margin: "0 0 0.5rem",
    lineHeight: 1.1,
  },
  heroSub: {
    fontSize: 15,
    color: "#fff",
    margin: "0 0 2rem",
    fontWeight: 400,
  },

  // Terminal
  terminal: {
    background: "#0d1117",
    borderRadius: 12,
    border: "1px solid #30363d",
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "left",
    overflow: "hidden",
  },
  termBar: {
    background: "#161b22",
    borderBottom: "1px solid #30363d",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    display: "inline-block",
  },
  termTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    color: "#8b949e",
    marginLeft: 8,
    flex: 1,
  },
  termLang: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    color: "#58a6ff",
    background: "#1c2333",
    padding: "2px 8px",
    borderRadius: 4,
    marginRight: 8,
  },
  termDots: {
    display: "flex",
    gap: 5,
    alignItems: "center",
  },
  termDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    transition: "background 0.3s",
  },
  termBody: {
    padding: "1.25rem 1.5rem 1.5rem",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    lineHeight: 1.75,
    minHeight: 190,
  },
  cursor: {
    display: "inline-block",
    width: 7,
    height: 14,
    background: "#58a6ff",
    verticalAlign: "middle",
    animation: "blink 1s step-end infinite",
  },

  // Main
  main: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "2rem 2rem 3rem",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#94A3B8",
    marginBottom: "1rem",
  },

  // Skill cards
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
    marginBottom: "1rem",
  },
  skillCard: {
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    padding: "1.25rem",
    textAlign: "left",
    transition: "border-color 0.15s, transform 0.15s",
    outline: "none",
  },
  skillIconDot: {
    display: "block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginBottom: 10,
  },
  skillName: {
    fontSize: 15,
    fontWeight: 600,
    color: "#0A0E1A",
    marginBottom: 4,
  },
  skillSub: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 1.4,
    marginBottom: 10,
  },
  barTrack: {
    background: "#F1F5F9",
    borderRadius: 99,
    height: 3,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 99,
    transition: "width 0.8s cubic-bezier(.4,0,.2,1)",
  },

  // Detail card
  detailCard: {
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    padding: "1.5rem",
    marginTop: "0.5rem",
  },
  detailHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: "0.75rem",
  },
  badge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 4,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#0A0E1A",
  },
  detailSummary: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: "1rem",
    lineHeight: 1.6,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    padding: "4px 10px",
    background: "#F1F5F9",
    border: "1px solid #E2E8F0",
    borderRadius: 4,
    color: "#64748B",
  },

  // Projects
  projectGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  projectCard: {
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    display: "flex",
    overflow: "hidden",
  },
  projectAccent: {
    width: 4,
    flexShrink: 0,
  },
  projectInner: {
    padding: "1rem 1.25rem",
    flex: 1,
  },
  projHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  projName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#0A0E1A",
  },
  projStack: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    padding: "3px 8px",
    borderRadius: 4,
    fontWeight: 500,
  },
  projDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.5,
    margin: 0,
  },

  // CTA
  ctaRow: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    marginTop: "2.5rem",
  },
  btnPrimary: {
    background: "#0A0E1A",
    color: "#F0F4FF",
    border: "none",
    padding: "10px 22px",
    borderRadius: 8,
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
  btnSecondary: {
    background: "transparent",
    color: "#0A0E1A",
    border: "1px solid #CBD5E1",
    padding: "10px 22px",
    borderRadius: 8,
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
};

// Inject blink keyframe once
if (typeof document !== "undefined") {
  const id = "__portfolio_blink__";
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = "@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }";
    document.head.appendChild(s);
  }
}
