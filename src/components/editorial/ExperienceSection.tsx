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
      "Building and maintaining multi-tenant marketplace and AI learning products — GreenBidz, a B2B bidding platform running four marketplaces from one shared React and Node.js codebase, and a React Native learning app for schools.",
    lines: [
      "Own frontend and API work across bidding and offer flows, seller and admin dashboards, and CRM integrations.",
      "Integrate the platform's LLM-backed semantic search into buyer discovery and listing flows.",
      "Sync marketplace leads into Zoho CRM so sales picks them up without manual export.",
      "Ship React Native features and defect fixes across quizzes, class scheduling and school management modules.",
      "Working across the stack — React and Next.js front ends, Node services, React Native mobile.",
    ],
    stack: ["React.js", "Next.js", "React Native", "Node.js", "LLM Search", "Zoho CRM"],
  },
  {
    role: "Full Stack Developer",
    org: "Code Crafter Web Solutions",
    place: "Lucknow",
    period: "Sept 2024 — Jan 2026",
    current: false,
    blurb:
      "Sixteen months building business automation and CRM platforms end to end — an email automation engine with drag-and-drop builders, a sales and HR CRM, and a diagnostics booking platform — plus a run of client sites.",
    lines: [
      "Built BullCRM's email automation engine end to end, alongside three drag-and-drop builders — email templates, landing pages and visual workflows.",
      "Contributed to BullCRM's WhatsApp automation module — message templates, broadcasts and trigger-based flows.",
      "Developed DSS CRM's sales and HR modules, with an attribute-based permission and authentication system governing role access across every module.",
      "Independently shipped Shanya Scans — test catalogue, slot booking, online payments, secure report delivery and a role-based admin panel.",
      "Delivered eight client sites alongside the products, working directly with clients on scope and revisions.",
    ],
    stack: ["React.js", "Express.js", "Node.js", "MongoDB", "ABAC", "Razorpay"],
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
