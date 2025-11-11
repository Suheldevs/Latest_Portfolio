import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "HRMS System",
    description: "Employee and Admin portals with role-based access, attendance tracking, leave management, payroll, and mobile check-in/check-out features.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://hrms-demo.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    title: "A-Mad Electricals",
    description: "Responsive e-commerce platform with admin panel for product management, categories, blogs, and inquiry handling.",
    tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    liveUrl: "https://a-mad-electricals.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "DSS Website & CRM",
    description: "Dynamic website with lead generation and comprehensive CRM platform with modules for lead management, recce, HR, and asset management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://dss-crm.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  },
  {
    title: "Shanya Scans",
    description: "Complete platform for online medical test and scan bookings with role-based admin panel and automated reporting system.",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "https://shanya-scans.netlify.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    title: "Lancet Architect",
    description: "Professional architecture portfolio website showcasing projects and design services.",
    tags: ["React", "Tailwind", "GSAP"],
    liveUrl: "https://lancetarchitect.com/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
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
  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background text-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-background text-xs rounded-lg text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
