import { useEffect, useRef, useState, type CSSProperties } from "react";
import SectionLabel from "@/components/editorial/SectionLabel";
import { useToast } from "@/hooks/use-toast";

/* ─────────────────────────────────────────────────────────────────────────────
   Web3Forms — same service the previous portfolio reaches for.

   ⚠ SET A KEY BEFORE GOING LIVE. The old form at /old has never had one: it
   still reads "YOUR_WEB3FORMS_ACCESS_KEY_HERE" in every commit, swallows the
   failure, and shows "Message sent successfully!" regardless — so every
   message sent through it has been lost silently.

   Get a free key at https://web3forms.com (enter mohdsuhel.dev@gmail.com; the
   key arrives by email), then either:
     • create a .env file next to package.json containing
         VITE_WEB3FORMS_ACCESS_KEY=your-key-here
       (preferred — keeps the key out of the repo), or
     • paste it into the fallback string below.

   Until a key exists, submitting opens the visitor's mail client with
   everything pre-filled instead of pretending to send. Nothing is lost.
   ──────────────────────────────────────────────────────────────────────────── */
const WEB3FORMS_ACCESS_KEY: string =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const EMAIL = "mohdsuhel.dev@gmail.com";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}

const PROJECT_TYPES: Array<{ value: string; label: string }> = [
  { value: "fullstack", label: "Full-stack web app" },
  { value: "mobile", label: "React Native app" },
  { value: "ai", label: "AI integration" },
  { value: "backend", label: "API / backend work" },
  { value: "consult", label: "Technical consultation" },
  { value: "other", label: "Other" },
];

const SOCIALS = [
  { label: "GitHub", handle: "@Suheldevs", href: "https://github.com/Suheldevs" },
  { label: "LinkedIn", handle: "in/mohd-suhel", href: "https://www.linkedin.com/in/mohd-suhel-4b2072257" },
  { label: "Portfolio", handle: "mohdsuhel.netlify.app", href: "https://mohdsuhel.netlify.app/" },
  { label: "Email", handle: EMAIL, href: `mailto:${EMAIL}` },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "", type: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [typeOpen, setTypeOpen] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typeOpen) return;
    const onDown = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypeOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTypeOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [typeOpen]);

  const selectedType = PROJECT_TYPES.find((t) => t.value === form.type);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!WEB3FORMS_ACCESS_KEY) {
      // No key configured — hand the message to the mail client rather than
      // dropping it and claiming success.
      const body =
        `${form.message}\n\n—\nFrom: ${form.name} <${form.email}>` +
        (selectedType ? `\nProject type: ${selectedType.label}` : "");
      window.location.href =
        `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      toast({
        title: "Opening your mail app",
        description: "Your message is pre-filled — just hit send.",
      });
      return;
    }

    try {
      // Web3Forms sends proper CORS headers, so unlike a Google Form POST the
      // response is readable — a rejection is caught instead of assumed sent.
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact: ${form.subject}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          project_type: selectedType ? selectedType.label : "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Web3Forms returned ${res.status}`);
      }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", type: "" });
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll be in touch soon.",
      });
    } catch (err) {
      setStatus("error");
      console.error("Contact form failed:", err);
      toast({
        title: "Didn't go through",
        description: `Try emailing me directly at ${EMAIL}.`,
        variant: "destructive",
      });
    }
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "12px 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--rule)",
    fontFamily: "var(--sans)",
    fontSize: 16,
    color: "var(--ink)",
    outline: "none",
    transition: "border-color .2s ease",
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 0", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
    >
      <div className="container-p">
        <SectionLabel num="§ 05" caption="The letters page">
          Contact
        </SectionLabel>

        <div
          className="contact-grid"
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(40px, 6vw, 100px)",
          }}
        >
          <div>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 24, lineHeight: 1.4, fontWeight: 300, textWrap: "pretty" }}
            >
              Got a product that needs building, an app that needs a mobile version, or an AI feature you're not
              sure how to wire in? I read every message, and I don't ghost.
            </p>

            <div style={{ marginTop: 40, borderTop: "1px solid var(--ink)" }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr auto",
                    alignItems: "baseline",
                    columnGap: 12,
                    padding: "18px 0",
                    borderBottom: "1px solid var(--rule)",
                    transition: "color .2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                >
                  <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                    {s.label}
                  </span>
                  {/* min-width:0 lets this column shrink below the handle's
                      min-content — without it the whole grid floors at 345px
                      and pushes the page sideways under ~385px. */}
                  <span
                    className="serif"
                    style={{ fontStyle: "italic", fontSize: 19, minWidth: 0, overflowWrap: "anywhere" }}
                  >
                    {s.handle}
                  </span>
                  <span className="mono" style={{ fontSize: 12, color: "var(--ink-faint)" }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 6 }}>
                Based
              </div>
              <div className="serif" style={{ fontSize: 20 }}>
                Lucknow, India
              </div>
            </div>
          </div>

          <form onSubmit={submit}>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 20 }}>
              Send a letter
            </div>

            <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              <label>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                  Name
                </div>
                <input
                  required
                  style={inputStyle}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
                />
              </label>
              <label>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                  Email
                </div>
                <input
                  required
                  type="email"
                  style={inputStyle}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
                />
              </label>
            </div>

            <label style={{ display: "block", marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Subject
              </div>
              <input
                required
                style={inputStyle}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
              />
            </label>

            <div style={{ marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Project type
              </div>
              <div ref={typeRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={typeOpen}
                  onClick={() => setTypeOpen((o) => !o)}
                  style={{
                    ...inputStyle,
                    paddingRight: 24,
                    textAlign: "left",
                    cursor: "pointer",
                    color: selectedType ? "var(--ink)" : "var(--ink-faint)",
                    borderBottomColor: typeOpen ? "var(--ink)" : "var(--rule)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span style={{ fontStyle: selectedType ? "normal" : "italic" }}>
                    {selectedType ? selectedType.label : "Select one (optional)"}
                  </span>
                  <span
                    className="mono"
                    aria-hidden="true"
                    style={{
                      fontSize: 11,
                      color: "var(--ink-faint)",
                      transition: "transform .2s ease",
                      transform: typeOpen ? "rotate(180deg)" : "none",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {typeOpen && (
                  <ul
                    role="listbox"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 6px)",
                      left: 0,
                      right: 0,
                      margin: 0,
                      padding: 6,
                      listStyle: "none",
                      background: "var(--paper)",
                      border: "1px solid var(--ink)",
                      boxShadow: "0 10px 24px -12px rgba(26,24,21,0.18)",
                      zIndex: 20,
                      animation: "projFade .18s ease",
                    }}
                  >
                    {form.type && (
                      <li role="option" aria-selected={false}>
                        <button
                          type="button"
                          onClick={() => {
                            setForm({ ...form, type: "" });
                            setTypeOpen(false);
                          }}
                          className="mono caps"
                          style={{
                            width: "100%",
                            textAlign: "left",
                            background: "transparent",
                            border: 0,
                            padding: "10px 12px",
                            color: "var(--ink-faint)",
                            cursor: "pointer",
                            fontSize: 11,
                            letterSpacing: "0.12em",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-faint)")}
                        >
                          Clear selection
                        </button>
                      </li>
                    )}
                    {PROJECT_TYPES.map((t) => {
                      const on = t.value === form.type;
                      return (
                        <li key={t.value} role="option" aria-selected={on}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, type: t.value });
                              setTypeOpen(false);
                            }}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              background: on ? "var(--paper-2)" : "transparent",
                              border: 0,
                              borderLeft: on ? "3px solid var(--accent)" : "3px solid transparent",
                              padding: "12px 14px",
                              fontFamily: "var(--sans)",
                              fontSize: 15,
                              color: "var(--ink)",
                              cursor: "pointer",
                              transition: "background .15s ease, border-color .15s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (!on) e.currentTarget.style.background = "var(--paper-2)";
                            }}
                            onMouseLeave={(e) => {
                              if (!on) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {t.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            <label style={{ display: "block", marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Message
              </div>
              <textarea
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
              />
            </label>

            <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-p" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
              </button>
              {status === "sent" && (
                <span className="mono caps" style={{ color: "var(--sage)" }}>
                  Thanks — I'll be in touch soon
                </span>
              )}
              {status === "sending" && (
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  One moment…
                </span>
              )}
              {(status === "idle" || status === "error") && (
                <a
                  href={`mailto:${EMAIL}`}
                  className="mono caps link-u tap-pad"
                  style={{ color: status === "error" ? "var(--accent)" : "var(--ink-faint)" }}
                >
                  {status === "error" ? "Didn't go through — email directly" : "Or just email directly"}
                </a>
              )}
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid, .form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .social-row { grid-template-columns: 84px 1fr auto !important; }
        }
      `}</style>
    </section>
  );
}
