import { Code2, Database, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive and dynamic web applications using modern frameworks and technologies."
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating scalable RESTful APIs and managing databases with Node.js, Express, and MongoDB."
  },
  {
    icon: Smartphone,
    title: "Full Stack Solutions",
    description: "End-to-end development from database design to user interface implementation."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user interfaces with attention to detail."
  }
];

const About = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      
      <div className="prose prose-invert max-w-none mb-8">
        <p className="text-muted-foreground leading-relaxed mb-4">
          I am a passionate <span className="text-primary font-semibold">Full Stack Developer</span> specializing 
          in the MERN stack. I have extensive experience working with front-end frameworks such as ReactJS, Tailwind CSS, 
          and GSAP. On the back-end, I've been working with Node.js, Express.js, and MongoDB.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I am committed to continuous learning and professional growth, and I am always eager to explore new technologies 
          and methodologies. I enjoy creating efficient, scalable solutions to real-world problems and contributing to the 
          overall success of the team.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-6">What I'm Doing</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group p-6 bg-secondary border border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
