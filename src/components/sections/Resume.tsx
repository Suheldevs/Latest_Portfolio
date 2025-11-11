import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full Stack MERN Developer",
    company: "Code Crafter Web Solution",
    period: "Jan 2025 - Present",
    description: "Building dynamic web applications using MERN stack with focus on performance and scalability."
  },
  {
    title: "Frontend Developer",
    company: "Digicoder Pvt Ltd, Lucknow",
    period: "Mar 2024 - Dec 2024",
    description: "Developed responsive user interfaces and collaborated with backend teams to deliver seamless applications."
  }
];

const education = [
  {
    degree: "Bachelor in Computer Science and Engineering",
    institution: "G.C.R.G. Group of Institutions",
    location: "Lucknow, India",
    period: "July 2024 - Present"
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Jawahar Lal Nehru Polytechnic",
    location: "Barabanki, India",
    period: "Apr 2021 - Mar 2024"
  }
];

const skills = {
  "Languages": ["JavaScript", "Python", "C", "OOP"],
  "Frontend": ["ReactJS", "Tailwind CSS", "GSAP", "Redux Toolkit"],
  "Backend": ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "MongoDB"],
  "Tools": ["Github", "Postman", "RTK Query", "Firebase", "Chart.js", "Razorpay"]
};

const Resume = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>

      {/* Experience */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold">Experience</h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="bg-secondary p-6 rounded-2xl hover:border-primary border border-border transition-all duration-300">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-lg inline-block mb-3">
                  {exp.period}
                </span>
                <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                <p className="text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold">Education</h3>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="bg-secondary p-6 rounded-2xl hover:border-primary border border-border transition-all duration-300">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-lg inline-block mb-3">
                  {edu.period}
                </span>
                <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300"
            >
              <h4 className="text-lg font-semibold mb-4 text-primary">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-background rounded-lg text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
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
