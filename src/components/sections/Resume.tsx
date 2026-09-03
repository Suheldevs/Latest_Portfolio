import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Layers,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Jamtech Technologies Pvt Ltd, Lucknow",
    period: "Jan 2026 - Present",
    description:
      "Building cross-platform mobile and web applications with React Native, Next.js, and Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Code Crafter Web Solutions, Lucknow",
    period: "Sept 2024 - Jan 2026",
    description:
      "Developed dynamic, scalable web applications using React.js, Express.js, and Node.js with a focus on performance.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Lucknow, India",
    period: "2024 - Present",
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Jawahar Lal Nehru Polytechnic",
    location: "Sitapur, India",
    period: "Apr 2021 - Mar 2024",
  },
];

const certifications = [
  {
    title: "Complete Web Development Bootcamp",
    issuer: "Angela Yu, Udemy",
  },
  {
    title: "Internship (MERN Stack)",
    issuer: "Digicoders",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: Layers,
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Redux Toolkit", "RTK Query", "GSAP", "Axios"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "Socket.io", "Mongoose"],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    items: ["MongoDB", "MongoDB Atlas", "Firebase (Auth & Firestore)", "Redis", "Basic SQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Razorpay", "Chart.js", "Expo (React Native)", "VS Code", "Vercel", "Netlify"],
  },
];

// Section heading with icon chip and a rule that stretches to the right edge
const SectionHeading = ({ icon: Icon, title }: { icon: typeof Briefcase; title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <h3 className="text-xl font-bold whitespace-nowrap">{title}</h3>
    <div className="flex-1 h-px bg-border" />
  </div>
);

const Resume = () => {
  // Feed the cursor position to the CSS spotlight (--mx / --my)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-5">Resume</h2>

      {/* Experience & Education side by side on wide screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Experience */}
        <div>
          <SectionHeading icon={Briefcase} title="Experience" />
          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute left-[5px] top-2 bottom-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-7 pb-4 last:pb-0">
                {/* Timeline dot with glow ring */}
                <span className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" />

                <article
                  onMouseMove={handleMouseMove}
                  className="spotlight-card group relative bg-secondary/60 border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary/40 animate-card-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="relative mb-6">
            <div className="absolute left-[5px] top-2 bottom-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            {education.map((edu, index) => (
              <div key={index} className="relative pl-7 pb-4 last:pb-0">
                <span className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" />

                <article
                  onMouseMove={handleMouseMove}
                  className="spotlight-card group relative bg-secondary/60 border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary/40 animate-card-in"
                  style={{ animationDelay: `${(index + experiences.length) * 120}ms` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    {edu.location}
                  </p>
                </article>
              </div>
            ))}
          </div>

          <SectionHeading icon={Award} title="Certifications" />
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <article
                key={index}
                onMouseMove={handleMouseMove}
                className="spotlight-card relative bg-secondary/60 border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/40 animate-card-in flex items-center gap-3"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <SectionHeading icon={Sparkles} title="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map(({ category, icon: Icon, items }, index) => (
            <div
              key={category}
              onMouseMove={handleMouseMove}
              className="spotlight-card relative bg-secondary/60 border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary/40 animate-card-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
