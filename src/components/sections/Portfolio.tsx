import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

// Free screenshot service (WordPress mShots) — renders the live site as an image.
// First-ever request shows a loading placeholder until the screenshot is cached.
const liveScreenshot = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=450`;

const projects = [
  {
    title: "HRMS (HR Management System)",
    description: "Employee and Admin portals with role-based access, onboarding, attendance tracking, leave approvals, payroll, mobile check-in/check-out, and salary slip download.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://hrms-demo.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    title: "Quippy Lab — AI Language Learning",
    description: "AI-powered language learning platform with interactive quizzes and gamified lessons. React Native app with online live classes, school management, and real-time progress tracking.",
    tags: ["React Native", "Expo", "Node.js", "AI"],
    liveUrl: "",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80"
  },
  {
    title: "DSS Website & CRM",
    description: "Dynamic website with cookie-based lead generation, product showcases, blogs, and email subscriptions — plus a CRM with lead capture & assignment, recce, HR, and digital asset management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://dss-crm.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  },
  {
    title: "Shanya Scans",
    description: "Independently developed platform for online medical test and scan bookings with a role-based admin panel for tests, pricing, and appointments, plus automated result reporting.",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "https://www.shanyascans.com/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    title: "Start Motors",
    description: "Business website for an automotive dealership with vehicle showcases and inquiry handling.",
    tags: ["React", "Tailwind"],
    liveUrl: "https://www.startmotors.co.in/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
  },
  {
    title: "Xpress Tour & Travels",
    description: "Travel booking platform with tour packages, itineraries, and booking management.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://xpresstourtravels.com/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
  }
];

const Portfolio = () => {
  // Feed the cursor position to the CSS spotlight (--mx / --my)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-5">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            onMouseMove={handleMouseMove}
            className="spotlight-card group relative bg-secondary/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 animate-card-in"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Screenshot */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.liveUrl ? liveScreenshot(project.liveUrl) : project.image}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                onError={(e) => {
                  // Fall back to the static image if the screenshot fails
                  e.currentTarget.src = project.image;
                }}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Permanent bottom fade for depth, deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent transition-opacity duration-500 group-hover:from-secondary"></div>

              {/* Frosted action buttons slide up from the bottom on hover */}
              <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-lg bg-primary/90 text-primary-foreground backdrop-blur-md flex items-center justify-center gap-2 text-sm font-medium hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-lg bg-background/70 text-foreground backdrop-blur-md border border-border flex items-center justify-center gap-2 text-sm font-medium hover:bg-background transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-5">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-background/50 text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
