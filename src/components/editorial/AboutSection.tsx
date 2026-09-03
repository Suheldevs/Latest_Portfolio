import SectionLabel from "@/components/editorial/SectionLabel";

const HIGHLIGHTS: Array<[string, string]> = [
  ["Product ownership", "Four products taken from empty repo to production inside two years."],
  ["AI integration", "AI-powered lesson engine in Quippy Lab; agent workflows and vector search."],
  ["Mobile", "React Native apps with live classes, mobile check-in, and real-time progress."],
  ["Multi-tenancy", "Workspace-scoped CRM where no tenant can reach another tenant's data."],
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 03" caption="A short biography, told plainly">
          About
        </SectionLabel>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(40px, 7vw, 120px)",
            marginTop: 60,
          }}
        >
          <aside>
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 20 }}>
              <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 12 }}>
                Pullquote
              </div>
              <p
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  fontWeight: 300,
                }}
              >
                “The model call is the easy part. The work is everything that has to be true before you make it.”
              </p>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginTop: 20 }}>
                — what two years of shipping taught me
              </div>
            </div>
          </aside>

          <div>
            <p
              className="serif"
              style={{
                margin: "0 0 22px",
                fontSize: 19,
                lineHeight: 1.65,
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              I build the kind of software a business actually runs on — HR platforms, CRMs, booking systems,
              learning apps. Not landing pages. The sort of thing where someone's payroll, someone's appointment,
              or someone's sales pipeline breaks if I get it wrong, and where the second year of use matters more
              than the launch week.
            </p>
            <p
              className="serif"
              style={{
                margin: "0 0 22px",
                fontSize: 19,
                lineHeight: 1.65,
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              At Jamtech Technologies I'm building a multi-tenant CRM — lead capture and assignment, on-site
              measurement that feeds straight into quoting, product catalogue, HR, digital assets. The interesting
              constraint isn't the features, it's the isolation: <em>every query, socket event and API response is
              scoped to a workspace</em>, because a CRM that leaks one client's leads into another's dashboard is
              worse than no CRM at all.
            </p>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 19, lineHeight: 1.65, fontWeight: 400, textWrap: "pretty" }}
            >
              Before that, sixteen months at Code Crafter shipping four products solo — an HRMS with payroll and
              leave approvals, Quippy Lab's AI language-learning platform with a React Native app, Shanya Scans
              for medical test booking, and a marketing site with cookie-based lead capture — plus eight client
              sites alongside. The AI work is where I'm pushing now: workflows, agent pipelines, and vector search
              on top of the same MERN stack I already know cold.
            </p>

            <div
              style={{
                marginTop: 48,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {HIGHLIGHTS.map(([title, body], i) => (
                <div
                  key={i}
                  style={{
                    padding: "22px 0",
                    paddingRight: i % 2 === 0 ? 20 : 0,
                    paddingLeft: i % 2 === 1 ? 20 : 0,
                    borderBottom: "1px solid var(--rule)",
                    borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <div className="mono caps" style={{ color: "var(--accent)", marginBottom: 6 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="serif" style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 4 }}>
                    {title}
                  </div>
                  <div style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.5 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
