import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "12+", label: "Projects Delivered" },
  { value: "20+", label: "Technologies" },
];

const services = [
  {
    title: "Web Development",
    description: "Responsive, dynamic web applications with React.js, Next.js, and Tailwind CSS."
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native and Expo — live classes, real-time tracking, offline-first flows."
  },
  {
    title: "Backend Development",
    description: "REST APIs with Node.js and Express, JWT auth, Socket.io, MongoDB, Firebase, and Redis."
  },
  {
    title: "AI-Integrated Solutions",
    description: "AI-powered product features — interactive quizzes, gamified lessons, smart automation."
  }
];

const About = () => {
  return (
    <section className="animate-fade-in">
      {/* Lede — typography does the talking */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl sm:text-[28px] font-semibold leading-snug tracking-tight mb-5">
          I'm Mohd Suhel — a software developer from Lucknow building
          <span className="text-primary"> fast, scalable</span> web and mobile products.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          I work across the stack — React.js, Next.js, and React Native on the front end;
          Node.js, Express, and MongoDB behind it. Most of my work is real-world product:
          HR platforms, CRMs, booking systems, and an AI-powered learning app.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Lately I've been focused on AI-integrated development — building features
          that feel smart without getting in the user's way.
        </p>
      </div>

      {/* Stats — plain numbers, no boxes */}
      <div className="flex items-center gap-8 sm:gap-12 mb-12">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Services — editorial numbered list */}
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-2">
        What I Do
      </p>
      <div className="divide-y divide-border">
        {services.map((service, index) => (
          <div key={service.title} className="group flex items-baseline gap-5 sm:gap-8 py-5">
            <span className="text-sm tabular-nums text-muted-foreground/50 w-6 shrink-0">
              0{index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold transition-colors duration-200 group-hover:text-primary">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1 max-w-xl">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
