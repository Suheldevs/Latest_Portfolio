import SectionLabel from "@/components/editorial/SectionLabel";

interface Experience {
  role: string;
  org: string;
  place: string;
  period: string;
  current: boolean;
  blurb: string;
  lines: string[];
  stack: string[];
}

const EXPERIENCE: Experience[] = [
  {
    role: "Associate Software Engineer",
    org: "Jamtech Technologies",
    place: "Lucknow",
    period: "Jan 2026 — present",
    current: true,
    blurb:
      "Building a multi-tenant CRM platform end to end — lead capture and assignment, on-site measurement workflows, product and HR modules, and a digital asset library, all under one workspace-scoped permission model.",
    lines: [
      "Own the lead lifecycle: capture from web forms and campaigns, rule-based assignment to sales users, and stage tracking through to close.",
      "Built the recce module — field teams record site measurements on mobile and the data flows straight into quoting, no re-entry.",
      "Shipped product-catalogue and digital-asset management so sales pulls approved specs and imagery instead of hunting through drives.",
      "Every query, socket event and API response is scoped by workspace, so no tenant can ever see another tenant's records.",
      "Working across the stack — Next.js front end, Node services, React Native for the field app.",
    ],
    stack: ["Next.js", "React Native", "Node.js", "Multi-tenant CRM", "REST APIs"],
  },
  {
    role: "Full Stack Developer",
    org: "Code Crafter Web Solutions",
    place: "Lucknow",
    period: "Sept 2024 — Jan 2026",
    current: false,
    blurb:
      "Sixteen months as the developer on four products and a run of client sites — an HR platform, an AI language-learning app, a medical booking system, and a lead-generating marketing site, each taken from empty repo to production.",
    lines: [
      "Built an HRMS with separate employee and admin portals: role-based access, attendance, leave approvals, payroll, and salary-slip download.",
      "Developed Quippy Lab, an AI-powered language-learning platform with gamified lessons, interactive quizzes, and a React Native app carrying live classes and real-time progress tracking.",
      "Independently shipped Shanya Scans — medical test and scan booking with a role-based admin panel for tests, pricing and appointments, plus automated result reporting.",
      "Delivered eight client sites alongside the products, several with cookie-based lead capture and email subscription flows.",
      "Worked directly with clients on scope and revisions — no account manager in between.",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "React Native", "Firebase"],
  },
  {
    role: "MERN Stack Intern",
    org: "Digicoders",
    place: "",
    period: "2024",
    current: false,
    blurb:
      "First real codebase outside coursework — where the MERN stack stopped being a tutorial and started being a job.",
    lines: [
      "Built CRUD applications across MongoDB, Express, React and Node under review.",
      "Internship completion certificate awarded on finishing the programme.",
    ],
    stack: ["MongoDB", "Express.js", "React"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="work" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 01" caption="Two years, three rooms, one throughline">
          Work
        </SectionLabel>

        <div style={{ marginTop: 80 }}>
          {EXPERIENCE.map((e, idx) => (
            <article
              key={idx}
              className="work-row"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "clamp(24px, 5vw, 80px)",
                padding: "48px 0",
                borderTop: "1px solid var(--ink)",
                borderBottom: idx === EXPERIENCE.length - 1 ? "1px solid var(--ink)" : "none",
              }}
            >
              <div>
                <div
                  className="mono caps"
                  style={{ color: e.current ? "var(--accent)" : "var(--ink-soft)", marginBottom: 6 }}
                >
                  {e.current ? "● Now" : "○ Prior"}
                </div>
                <div className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>
                  {e.period}
                </div>
                {e.place && (
                  <div className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 4 }}>
                    {e.place}
                  </div>
                )}
              </div>

              <div>
                <h3
                  className="serif"
                  style={{
                    margin: 0,
                    fontSize: "clamp(28px, 3.2vw, 42px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  {e.role}
                  <span style={{ fontStyle: "italic", color: "var(--ink-soft)" }}> — {e.org}</span>
                </h3>
                <p
                  className="serif"
                  style={{
                    marginTop: 18,
                    fontSize: 19,
                    lineHeight: 1.55,
                    maxWidth: "62ch",
                    textWrap: "pretty",
                  }}
                >
                  {e.blurb}
                </p>

                <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none" }}>
                  {e.lines.map((l, i) => (
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
                        color: "var(--ink)",
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
                  {e.stack.map((s, i) => (
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
                        background: "var(--paper-2)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .work-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
