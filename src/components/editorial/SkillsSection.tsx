import SectionLabel from "@/components/editorial/SectionLabel";

type Level = "Core" | "Working";

interface SkillGroup {
  title: string;
  caption: string;
  items: Array<[string, Level]>;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    caption: "Where most of the hours go",
    items: [
      ["React.js (hooks, context, composition)", "Core"],
      ["Next.js — SSR, routing, API routes", "Core"],
      ["React Native + Expo", "Core"],
      ["Tailwind CSS, responsive systems", "Core"],
      ["Redux Toolkit & RTK Query", "Working"],
    ],
  },
  {
    title: "Backend",
    caption: "Node services behind every product",
    items: [
      ["Node.js & Express.js", "Core"],
      ["REST API & schema design", "Core"],
      ["JWT auth, attribute-based access control", "Core"],
      ["Mongoose — schemas, aggregation", "Core"],
      ["Socket.io — real-time events", "Working"],
    ],
  },
  {
    title: "Data & AI",
    caption: "Storage, and what sits on top of it",
    items: [
      ["MongoDB — modelling, indexes", "Core"],
      ["LLM integration & prompt design", "Working"],
      ["Semantic search, Qdrant vector DB", "Working"],
      ["Redis caching", "Working"],
      ["PostgreSQL & SQL", "Working"],
    ],
  },
  {
    title: "Cloud & tools",
    caption: "How the work actually ships",
    items: [
      ["Git & GitHub", "Core"],
      ["Postman, API testing", "Core"],
      ["VPS management & deployment", "Working"],
      ["Claude Code, Claude / LLM APIs", "Working"],
      ["Razorpay and Zoho CRM integrations", "Working"],
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    period: "",
    grade: "B.Tech",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    school: "Jawahar Lal Nehru Polytechnic, Sitapur",
    period: "2021 – 2024",
    grade: "Diploma",
  },
  {
    degree: "Complete Web Development Bootcamp",
    school: "Angela Yu, Udemy",
    period: "2024",
    grade: "Certified",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 04" caption="What I reach for, and how often">
          Craft
        </SectionLabel>

        <div
          className="skills-grid"
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            border: "1px solid var(--ink)",
          }}
        >
          {SKILL_GROUPS.map((g, gi) => (
            <div
              key={gi}
              style={{
                padding: "28px 28px 32px",
                borderRight: gi % 2 === 0 ? "1px solid var(--ink)" : "none",
                borderBottom: gi < 2 ? "1px solid var(--ink)" : "none",
                background: gi === 0 ? "var(--paper-2)" : "var(--paper)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 20,
                }}
              >
                <h3
                  className="serif"
                  style={{ margin: 0, fontSize: 32, fontWeight: 300, fontStyle: "italic" }}
                >
                  {g.title}
                </h3>
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {String(gi + 1).padStart(2, "0")}/0{SKILL_GROUPS.length}
                </span>
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 16 }}>
                {g.caption}
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {g.items.map(([name, level], i) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "baseline",
                      // Without a gap the level label butts against long skill
                      // names once the column narrows on mobile.
                      columnGap: 14,
                      padding: "12px 0",
                      borderTop: "1px dotted var(--rule)",
                      fontSize: 15,
                    }}
                  >
                    <span>{name}</span>
                    <span
                      className="mono caps"
                      style={{
                        fontSize: 10,
                        color: level === "Core" ? "var(--accent)" : "var(--ink-soft)",
                      }}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72 }}>
          <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 16 }}>
            Schooling & certs
          </div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {EDUCATION.map((ed, i) => (
              <div
                key={i}
                className="edu-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {ed.period}
                </span>
                <span className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
                  {ed.degree}
                  <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}> — {ed.school}</span>
                </span>
                <span className="mono caps" style={{ color: "var(--accent)" }}>
                  {ed.grade}
                </span>
              </div>
            ))}
            <div
              className="edu-row"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 24,
                alignItems: "baseline",
                padding: "22px 0",
                borderBottom: "1px solid var(--ink)",
              }}
            >
              <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                2024
              </span>
              <span className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
                Internship — MERN Stack
                <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}> — Digicoders</span>
              </span>
              <span className="mono caps" style={{ color: "var(--accent)" }}>
                Completion
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div { border-right: none !important; border-bottom: 1px solid var(--ink) !important; }
          .skills-grid > div:last-child { border-bottom: none !important; }
          .edu-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}
