import SectionLabel from "@/components/editorial/SectionLabel";

const HIGHLIGHTS: Array<[string, string]> = [
  ["Multi-tenancy", "Four GreenBidz marketplaces served from one shared React and Node.js codebase."],
  ["AI integration", "LLM-backed semantic search wired into buyer discovery and listing flows."],
  ["Automation", "BullCRM's email engine and three drag-and-drop builders, built end to end."],
  ["Access control", "JWT and attribute-based permissions governing every module in DSS CRM."],
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
              I build the kind of software a business actually runs on — marketplaces, CRMs, automation engines,
              booking systems. Not landing pages. The sort of thing where someone's bid, someone's appointment,
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
              At Jamtech Technologies I work on GreenBidz, a B2B bidding marketplace — bidding and offer flows,
              seller and admin dashboards, Zoho CRM sync, and the LLM-backed semantic search behind buyer
              discovery. The interesting constraint isn't the features, it's the sharing: <em>four tenant
              marketplaces run on one React and Node.js codebase</em>, so every change has to hold for all of them
              at once. Alongside it, React Native work on an AI learning app — quizzes, class scheduling and
              school management.
            </p>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 19, lineHeight: 1.65, fontWeight: 400, textWrap: "pretty" }}
            >
              Before that, sixteen months at Code Crafter building business platforms end to end — BullCRM's
              email automation engine and its three drag-and-drop builders, DSS CRM's sales and HR modules behind
              an attribute-based permission system, and Shanya Scans for diagnostics booking — plus eight client
              sites alongside. The AI work is where I'm pushing now: LLM integration, semantic search and Qdrant
              vector search on top of the same MERN stack I already know cold.
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
