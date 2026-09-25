import type { CSSProperties } from "react";
import SectionLabel from "@/components/editorial/SectionLabel";

interface Project {
  id: string;
  num: string;
  year: string;
  title: string;
  kind: string;
  status: string;
  shot?: string;
  role: string;
  metric: { n: string; label: string };
  blurb: string;
  lines: string[];
  stack: string[];
  links: { live?: string; repo?: string };
}

const PROJECTS: Project[] = [
  {
    id: "greenbidz",
    num: "01",
    year: "2026",
    title: "GreenBidz",
    kind: "Product · B2B AI bidding marketplace",
    status: "Live",
    shot: "/projects/greenbidz.png",
    role: "Frontend & API · Jamtech",
    metric: { n: "4", label: "tenant marketplaces on one shared codebase" },
    blurb:
      "A multi-tenant B2B bidding marketplace for pre-owned test, measurement and lab equipment — four tenant marketplaces running on one shared React and Node.js codebase, with LLM-backed semantic search underneath discovery.",
    lines: [
      "Build the marketplace UI, bidding and offer flows, seller dashboards and admin tooling across all four tenant marketplaces.",
      "Integrate the platform's LLM-backed semantic search into buyer discovery and listing flows.",
      "Sync marketplace leads into Zoho CRM so the sales team works them without manual export.",
    ],
    stack: ["React.js", "Node.js", "Multi-tenant", "LLM Semantic Search", "Zoho CRM"],
    links: { live: "https://101lab.co/" },
  },
  {
    id: "bullcrm",
    num: "02",
    year: "2025",
    title: "BullCRM",
    kind: "Product · Business automation",
    status: "Live",
    shot: "/projects/bullcrm.png",
    role: "Full stack · Code Crafter",
    metric: { n: "3", label: "drag-and-drop builders — emails, pages, workflows" },
    blurb:
      "A sales CRM built around email — lead capture through to revenue, with an automation engine and visual builders so a team can design campaigns, pages and workflows without a developer.",
    lines: [
      "Built the email automation engine end to end.",
      "Built three drag-and-drop builders — email templates, landing pages and visual workflows.",
      "Contributed to the WhatsApp automation module — message templates, broadcasts and trigger-based flows.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Drag-and-drop builders"],
    links: { live: "https://bullcrm.io/" },
  },
  {
    id: "dss",
    num: "03",
    year: "2025",
    title: "DSS CRM",
    kind: "Client work · CRM + website platform",
    status: "Live",
    shot: "/projects/dss.png",
    role: "Full stack · Code Crafter",
    metric: { n: "1", label: "permission system governing every module" },
    blurb:
      "A business CRM and website platform — the public site brings leads in, and the CRM behind it runs sales and HR, with every module gated by one attribute-based permission system.",
    lines: [
      "Developed the sales and HR modules — lead capture and assignment, employee records and internal workflows.",
      "Built an attribute-based permission and authentication system governing role access across every module.",
      "Public-facing website with product and project showcases feeding the lead pipeline.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "ABAC", "JWT Auth"],
    links: { live: "https://dss-web.netlify.app/" },
  },
  {
    id: "shanya-scans",
    num: "04",
    year: "2025",
    title: "Shanya Scans",
    kind: "Product · Diagnostics & test booking",
    status: "Live",
    shot: "/projects/shanya-scans.png",
    role: "Solo build · Code Crafter",
    metric: { n: "4", label: "steps online — catalogue, booking, payment, report" },
    blurb:
      "An online diagnostics platform, built end to end — patients browse the test catalogue, book a slot and pay online, and reports reach them securely without a phone call.",
    lines: [
      "Test catalogue, slot booking, online payments and secure patient report delivery.",
      "Role-based admin panel for tests, pricing and appointments.",
      "Automated result and status reporting to patients.",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Razorpay"],
    links: { live: "https://www.shanyascans.com/" },
  },
  {
    id: "quippy-lab",
    num: "05",
    year: "2026",
    title: "Quippy Lab",
    kind: "Product · AI learning",
    status: "Live",
    shot: "/projects/quippy-lab.png",
    role: "React Native · Jamtech",
    metric: { n: "3", label: "modules — quizzes, scheduling, school management" },
    blurb:
      "An AI-powered learning platform for online learning centres — live classes, gamified lessons and a React Native app, all runnable under a school's own brand.",
    lines: [
      "React Native features and defect fixes across quizzes, class scheduling and school management modules.",
      "Interactive quizzes and gamified lessons driving the core learning loop.",
      "School management so a centre runs its own students, cohorts and teachers.",
    ],
    stack: ["React Native", "Next.js", "Node.js", "Expo"],
    links: { live: "https://space.quippy-lab.com/" },
  },
  {
    id: "hrms",
    num: "06",
    year: "2025",
    title: "HRMS",
    kind: "Product · HR platform",
    status: "Live",
    shot: "/projects/hrms.png",
    role: "Full stack · Code Crafter",
    metric: { n: "2", label: "portals — employee and admin" },
    blurb:
      "A human resource management system with separate employee and admin portals — onboarding, attendance, leave, and payroll in one place, gated behind role-based access so an employee never sees another employee's record.",
    lines: [
      "Admin onboards employees and assigns roles; permissions cascade through every module from there.",
      "Attendance with mobile check-in / check-out, and leave requests that route through an approval chain.",
      "Payroll management with salary-slip generation and download.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind"],
    links: {
      live: "https://hrms-demo.netlify.app/",
      repo: "https://github.com/Suheldevs/HRMS",
    },
  },
];

// Client sites delivered alongside the products.
const OTHER_PROJECTS: Array<{ name: string; kind: string; url: string }> = [
  { name: "Adv. Ashok Kumar", kind: "Legal practice", url: "https://adv-ashok-kumar.netlify.app/" },
  { name: "Xpress Tour & Travels", kind: "Travel", url: "https://xpresstourtravels.com/" },
  { name: "Batohi Caterers", kind: "Catering", url: "https://batohicaterers.com/" },
  { name: "Hope Hospital", kind: "Healthcare", url: "https://hope-hospital-demo.netlify.app/" },
  { name: "Ashirwad Vastu Astro", kind: "Consultancy", url: "https://ashirwadvastuastro.com/" },
  { name: "Agarwal & Associates", kind: "Professional services", url: "https://agarwal-associates.netlify.app/" },
  { name: "Dr Shashikant Urology", kind: "Medical practice", url: "https://drshashikanturology.com/" },
  { name: "Star Motors", kind: "Automotive", url: "https://www.starmotors.co.in/" },
];

const hostOf = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, "") : "");

const tag: CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "6px 10px",
  border: "1px solid var(--rule)",
  color: "var(--ink-soft)",
  background: "var(--paper)",
};

/** Screenshot framed as a browser window, so every case reads as a real, live product. */
function BrowserFrame({ project }: { project: Project }) {
  const host = hostOf(project.links.live);
  const frame = (
    <div className="proj-frame">
      <div className="proj-frame-bar">
        <span className="proj-dots" aria-hidden>
          <i /> <i /> <i />
        </span>
        <span className="mono proj-url">{host || "internal build"}</span>
        <span className="mono proj-fig">fig. {project.num}</span>
      </div>
      <div className="proj-frame-shot">
        {project.shot ? (
          <img src={project.shot} alt={`Screenshot of ${project.title}`} loading="lazy" decoding="async" />
        ) : (
          <span className="mono caps" style={{ color: "var(--ink-soft)" }}>
            Internal build · no public URL
          </span>
        )}
      </div>
    </div>
  );
  return project.links.live ? (
    <a href={project.links.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}>
      {frame}
    </a>
  ) : (
    frame
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ padding: "120px 0", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
    >
      <div className="container-p">
        <SectionLabel
          num="§ 02"
          caption={`${PROJECTS.length} case studies · ${OTHER_PROJECTS.length} client sites`}
        >
          Selected projects
        </SectionLabel>

        {/* Jump strip — every project is on the page, this just gets a reader there fast */}
        <nav className="proj-jump" aria-label="Projects">
          {PROJECTS.map((p) => (
            <a key={p.id} href={`#case-${p.id}`} className="mono">
              <span style={{ color: "var(--accent)" }}>{p.num}</span> {p.title}
            </a>
          ))}
        </nav>

        <div>
          {PROJECTS.map((p, idx) => (
            <article
              key={p.id}
              id={`case-${p.id}`}
              className={`proj-case${idx % 2 ? " flip" : ""}`}
            >
              <div className="proj-media">
                <BrowserFrame project={p} />
              </div>

              <div className="proj-body">
                <div className="proj-meta">
                  <span className="mono caps" style={{ color: "var(--accent)" }}>
                    {p.num} · {p.kind}
                  </span>
                  <span className="mono caps proj-status">
                    <i aria-hidden /> {p.status} · {p.year}
                  </span>
                </div>

                <h3 className="serif proj-title">{p.title}</h3>

                <div className="proj-facts">
                  <div>
                    <div className="serif proj-metric">{p.metric.n}</div>
                    <div className="proj-metric-label">{p.metric.label}</div>
                  </div>
                  <div>
                    <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 6 }}>
                      My role
                    </div>
                    <div style={{ fontSize: 15 }}>{p.role}</div>
                  </div>
                </div>

                <p className="serif proj-blurb">{p.blurb}</p>

                <ul style={{ margin: "20px 0 0", padding: 0, listStyle: "none" }}>
                  {p.lines.map((l, i) => (
                    <li key={i} className="proj-line">
                      <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>
                        →
                      </span>
                      <span style={{ textWrap: "pretty" }}>{l}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.stack.map((s, i) => (
                    <span key={i} className="mono" style={tag}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {p.links.live && (
                    <a className="btn-p" href={p.links.live} target="_blank" rel="noreferrer">
                      Visit live site{" "}
                      <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                        ↗
                      </span>
                    </a>
                  )}
                  {p.links.repo && (
                    <a className="btn-p ghost" href={p.links.repo} target="_blank" rel="noreferrer">
                      Source{" "}
                      <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Client sites delivered alongside the products */}
        <div style={{ marginTop: 112 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            <h3 className="serif" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 300 }}>
              Client sites, <span style={{ fontStyle: "italic" }}>live today</span>
            </h3>
            <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
              {OTHER_PROJECTS.length} sites · React & Next.js · 2024–25
            </div>
          </div>
          <div className="client-grid">
            {OTHER_PROJECTS.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="client-card">
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {String(i + 1).padStart(2, "0")} · {p.kind}
                </span>
                <span className="serif" style={{ fontSize: 22, lineHeight: 1.25 }}>
                  {p.name}
                </span>
                <span className="mono client-host">{hostOf(p.url)} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .proj-jump { margin-top: 48px; display: flex; flex-wrap: wrap; gap: 8px 24px;
          padding: 16px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--rule); }
        .proj-jump a { font-size: 13px; color: var(--ink-soft); transition: color .2s ease; }
        .proj-jump a:hover { color: var(--ink); }

        .proj-case { display: grid; grid-template-columns: 1.15fr 1fr; gap: clamp(28px, 5vw, 72px);
          align-items: start; padding: clamp(56px, 8vw, 96px) 0; border-bottom: 1px solid var(--rule);
          scroll-margin-top: 80px; }
        .proj-case.flip .proj-media { order: 2; }
        .proj-media { position: sticky; top: 96px; }

        .proj-frame { border: 1px solid var(--ink); background: var(--paper); overflow: hidden;
          box-shadow: 0 1px 0 var(--rule), 0 24px 48px -28px rgba(26,24,21,.35);
          transition: transform .35s ease, box-shadow .35s ease; }
        a:hover > .proj-frame { transform: translateY(-4px);
          box-shadow: 0 1px 0 var(--rule), 0 36px 64px -30px rgba(26,24,21,.45); }
        .proj-frame-bar { display: flex; align-items: center; gap: 12px; padding: 9px 12px;
          border-bottom: 1px solid var(--ink); background: var(--paper-2); }
        .proj-dots { display: inline-flex; gap: 5px; }
        .proj-dots i { width: 9px; height: 9px; border-radius: 999px; border: 1px solid var(--ink-faint); display: inline-block; }
        .proj-url { flex: 1; min-width: 0; font-size: 11px; color: var(--ink-soft); background: var(--paper);
          border: 1px solid var(--rule); padding: 3px 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .proj-fig { font-size: 11px; color: var(--ink-faint); }
        .proj-frame-shot { aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center;
          background: repeating-linear-gradient(135deg, var(--paper) 0 12px, var(--paper-2) 12px 24px); }
        .proj-frame-shot img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;
          transition: transform .6s ease; }
        a:hover .proj-frame-shot img { transform: scale(1.02); }

        .proj-meta { display: flex; justify-content: space-between; gap: 8px 16px; flex-wrap: wrap; margin-bottom: 18px; }
        .proj-status { color: var(--ink-soft); display: inline-flex; align-items: center; gap: 8px; }
        .proj-status i { width: 7px; height: 7px; border-radius: 999px; background: var(--sage); display: inline-block; }
        .proj-title { margin: 0; font-size: clamp(40px, 5vw, 68px); font-weight: 300; letter-spacing: -0.025em; line-height: .95; }

        .proj-facts { margin-top: 24px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 20px;
          padding: 16px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--rule); }
        .proj-facts > div + div { border-left: 1px solid var(--rule); padding-left: 20px; }
        .proj-metric { font-size: 52px; line-height: 1; font-weight: 400; color: var(--accent); }
        .proj-metric-label { margin-top: 6px; font-size: 13px; line-height: 1.4; color: var(--ink-soft); }

        .proj-blurb { margin: 22px 0 0; font-size: 19px; line-height: 1.5; font-weight: 300; text-wrap: pretty; }
        .proj-line { display: grid; grid-template-columns: 24px 1fr; align-items: baseline; padding: 9px 0;
          border-top: 1px dotted var(--rule); font-size: 15px; line-height: 1.55; }

        .client-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--ink);
          border-left: 1px solid var(--rule); }
        .client-card { display: flex; flex-direction: column; gap: 10px; min-height: 150px; padding: 20px;
          border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule); background: var(--paper-2);
          transition: background .2s ease, color .2s ease; }
        .client-card:hover { background: var(--paper); color: var(--accent); }
        .client-host { margin-top: auto; font-size: 11px; color: var(--ink-faint); overflow-wrap: anywhere; }

        @media (max-width: 1000px) {
          .client-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .proj-case { grid-template-columns: 1fr; }
          .proj-case.flip .proj-media { order: 0; }
          .proj-media { position: static; }
        }
        @media (max-width: 520px) {
          .proj-facts { grid-template-columns: 1fr; }
          .proj-facts > div + div { border-left: 0; padding-left: 0; border-top: 1px dotted var(--rule); padding-top: 14px; }
          .client-grid { grid-template-columns: 1fr; }
          .client-card { min-height: 0; }
          .proj-fig { display: none; }
        }
      `}</style>
    </section>
  );
}
