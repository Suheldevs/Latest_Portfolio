import { useMemo, useState } from "react";
import SectionLabel from "@/components/editorial/SectionLabel";

interface Project {
  id: string;
  num: string;
  year: string;
  title: string;
  kind: string;
  status: string;
  shot?: string;
  blurb: string;
  lines: string[];
  stack: string[];
  links: { live?: string; repo?: string };
}

const PROJECTS: Project[] = [
  {
    id: "hrms",
    num: "01",
    year: "2025",
    title: "HRMS",
    kind: "Product · HR platform",
    status: "Live",
    shot: "/projects/hrms.png",
    blurb:
      "A human resource management system with separate employee and admin portals — onboarding, attendance, leave, and payroll in one place, with the whole thing gated behind role-based access so an employee never sees another employee's record.",
    lines: [
      "Admin onboards employees and assigns roles; permissions cascade through every module from there.",
      "Attendance with mobile check-in / check-out, and leave requests that route through an approval chain.",
      "Payroll management with salary-slip generation and download.",
      "Notifications and profile management so staff chase their own requests instead of chasing HR.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind"],
    links: {
      live: "https://hrms-demo.netlify.app/",
      repo: "https://github.com/Suheldevs/HRMS",
    },
  },
  {
    id: "quippy-lab",
    num: "02",
    year: "2025",
    title: "Quippy Lab",
    kind: "Product · AI language learning",
    status: "Live",
    shot: "/projects/quippy-lab.png",
    blurb:
      "An AI-powered language learning platform built for online learning centres — live classes, AI speaking practice, and gamified lessons, all runnable under a school's own brand.",
    lines: [
      "Interactive quizzes and gamified lessons driving the core learning loop.",
      "React Native mobile app carrying online live classes and real-time progress tracking.",
      "School management module so a centre runs its own students, cohorts, and teachers.",
    ],
    stack: ["React Native", "Next.js", "Node.js", "MongoDB", "AI / LLM", "Expo"],
    links: { live: "https://space.quippy-lab.com/" },
  },
  {
    id: "shanya-scans",
    num: "03",
    year: "2025",
    title: "Shanya Scans",
    kind: "Product · Medical booking",
    status: "Live",
    shot: "/projects/shanya-scans.png",
    blurb:
      "Online medical test and scan booking, built end to end on my own — patients book, the clinic manages catalogue and pricing, and results reach people without a phone call.",
    lines: [
      "Role-based admin panel to manage tests, pricing, and appointment slots dynamically.",
      "Automated reporting system pushing test results and status updates to patients.",
      "Independently developed — spec, build, and deployment.",
    ],
    stack: ["React.js", "Node.js", "MongoDB"],
    links: { live: "https://www.shanyascans.com/" },
  },
  {
    id: "dss",
    num: "04",
    year: "2025",
    title: "DSS Website",
    kind: "Client work · Marketing + CRM",
    status: "Live",
    shot: "/projects/dss.png",
    blurb:
      "A richly designed dynamic marketing site that doubles as a lead engine — product and project showcases up front, cookie-based lead capture and an email subscription system underneath.",
    lines: [
      "Lead generation via cookies, feeding captured visitors into the client's follow-up flow.",
      "Product and project showcases plus a blog, all editable rather than hard-coded.",
      "Email subscription system with list management.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    links: { live: "https://dss-web.netlify.app/" },
  },
  {
    id: "crm",
    num: "05",
    year: "2026",
    title: "CRM Platform",
    kind: "Client work · Multi-tenant",
    status: "In production",
    blurb:
      "A comprehensive CRM in active development at Jamtech — lead capture through to close, with the site-measurement, product, HR, and digital-asset modules a field sales business actually needs.",
    lines: [
      "Lead capture and rule-based assignment, tracked by stage through the pipeline.",
      "Recce module: field teams record site measurements that flow straight into quoting.",
      "Product management, HR, and digital asset management under one workspace-scoped permission model.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Multi-tenant"],
    links: {},
  },
  {
    id: "other-projects",
    num: "06",
    year: "2024–25",
    title: "Other Projects",
    kind: "Client work · Freelance builds",
    status: "Shipped",
    shot: "/projects/client-sites.png",
    blurb:
      "Eight client sites delivered alongside the products — legal practice, travel, catering, healthcare, consultancy, automotive. Marketing builds where the brief is a fast, responsive site the client can keep using without me. Full list with live links directly below.",
    lines: [
      "Responsive marketing builds in React and Next.js, deployed to Netlify and shared hosting.",
      "Several carry cookie-based lead capture and email subscription flows.",
      "Worked direct with each client on scope, content, and revisions.",
    ],
    stack: ["React.js", "Next.js", "Tailwind", "Netlify"],
    links: { live: "https://xpresstourtravels.com/" },
  },
];

// Every entry under OTHER PROJECTS on the résumé.
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

export default function ProjectsSection() {
  const [active, setActive] = useState(PROJECTS[0].id);
  const project = useMemo(() => PROJECTS.find((p) => p.id === active) ?? PROJECTS[0], [active]);

  return (
    <section
      id="projects"
      style={{ padding: "120px 0", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
    >
      <div className="container-p">
        <SectionLabel num="§ 02" caption={`An index, ${PROJECTS.length} entries`}>
          Selected projects
        </SectionLabel>

        <div
          className="proj-grid"
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(28px, 5vw, 80px)",
          }}
        >
          {/* Left: index list */}
          <div>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 16 }}>
              Index
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid var(--ink)" }}>
              {PROJECTS.map((p) => {
                const on = p.id === active;
                return (
                  <li key={p.id} style={{ borderBottom: "1px solid var(--rule)" }}>
                    <button
                      onClick={() => setActive(p.id)}
                      onMouseEnter={() => setActive(p.id)}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "48px 1fr auto",
                        alignItems: "baseline",
                        gap: 16,
                        width: "100%",
                        padding: "22px 8px",
                        background: on ? "var(--paper)" : "transparent",
                        border: 0,
                        borderLeft: on ? "3px solid var(--accent)" : "3px solid transparent",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "inherit",
                        color: "inherit",
                        transition: "background .2s ease, border-color .2s ease",
                      }}
                    >
                      <span className="mono" style={{ fontSize: 13, color: on ? "var(--accent)" : "var(--ink-faint)" }}>
                        {p.num}
                      </span>
                      <span
                        className="serif"
                        style={{
                          fontSize: "clamp(22px, 2.4vw, 32px)",
                          fontStyle: on ? "italic" : "normal",
                          fontWeight: 300,
                          lineHeight: 1.1,
                          color: on ? "var(--ink)" : "var(--ink-soft)",
                        }}
                      >
                        {p.title}
                      </span>
                      <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                        {p.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: active project detail */}
          <div key={project.id} style={{ animation: "projFade .35s ease" }}>
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 24,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div className="mono caps" style={{ color: "var(--accent)" }}>
                  {project.kind}
                </div>
                <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
                  Status · {project.status}
                </div>
              </div>

              <h3
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 5.5vw, 76px)",
                  fontWeight: 300,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  marginTop: 28,
                  aspectRatio: "16/9",
                  width: "100%",
                  border: "1px solid var(--ink)",
                  background:
                    "repeating-linear-gradient(135deg, var(--paper) 0 12px, var(--paper-2) 12px 24px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {project.shot ? (
                  <img
                    src={project.shot}
                    alt={`Screenshot of ${project.title}`}
                    /* Only the active project renders, so there is nothing to
                       defer — lazy here just leaves the panel blank. */
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                ) : (
                  <span className="mono caps" style={{ color: "var(--ink-soft)", fontSize: 11 }}>
                    Internal build · no public URL
                  </span>
                )}
                <span
                  className="mono"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 12,
                    fontSize: 11,
                    color: "var(--ink-faint)",
                    background: "color-mix(in srgb, var(--paper) 78%, transparent)",
                    padding: "2px 6px",
                  }}
                >
                  fig. {project.num}
                </span>
              </div>

              <p
                className="serif"
                style={{
                  marginTop: 28,
                  fontSize: 21,
                  lineHeight: 1.5,
                  fontWeight: 300,
                  textWrap: "pretty",
                }}
              >
                {project.blurb}
              </p>

              <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none" }}>
                {project.lines.map((l, i) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 1fr",
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderTop: "1px dotted var(--rule)",
                      fontSize: 15,
                      lineHeight: 1.55,
                    }}
                  >
                    <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>
                      →
                    </span>
                    <span style={{ textWrap: "pretty" }}>{l}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.stack.map((s, i) => (
                  <span
                    key={i}
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "6px 10px",
                      border: "1px solid var(--rule)",
                      color: "var(--ink-soft)",
                      background: "var(--paper)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {project.links.live && (
                  <a className="btn-p" href={project.links.live} target="_blank" rel="noreferrer">
                    Visit site{" "}
                    <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                      ↗
                    </span>
                  </a>
                )}
                {project.links.repo && (
                  <a className="btn-p ghost" href={project.links.repo} target="_blank" rel="noreferrer">
                    Source{" "}
                    <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Every other project listed on the résumé */}
        <div style={{ marginTop: 96 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            <div className="mono caps" style={{ color: "var(--ink-faint)" }}>
              Other projects
            </div>
            <div className="mono caps" style={{ color: "var(--ink-faint)" }}>
              {OTHER_PROJECTS.length} client sites
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {OTHER_PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="other-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "20px 0",
                  borderBottom:
                    i === OTHER_PROJECTS.length - 1 ? "1px solid var(--ink)" : "1px solid var(--rule)",
                  transition: "color .2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
              >
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
                  {p.name}
                  <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}> — {p.kind}</span>
                </span>
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  Visit ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .other-row { grid-template-columns: auto 1fr !important; }
          .other-row > span:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
