import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[350px] bg-card border border-border rounded-2xl p-8 lg:sticky lg:top-8 h-fit">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 border-4 border-border overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-24 h-24">
              <circle cx="100" cy="80" r="35" fill="hsl(var(--primary))" opacity="0.8"/>
              <path d="M 60 140 Q 100 110, 140 140 Q 140 180, 100 180 Q 60 180, 60 140" fill="hsl(var(--primary))" opacity="0.8"/>
            </svg>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl font-bold text-foreground mb-2">Mohd Suhel</h1>
        <p className="text-sm bg-secondary px-4 py-2 rounded-lg text-muted-foreground">
          Full Stack Developer
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-border my-6"></div>

        {/* Contact Info */}
        <div className="w-full space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <a 
                href="mailto:mohdsuhel.dev@gmail.com" 
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                mohdsuhel.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
              <a 
                href="tel:+919519838720" 
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                +91 9519838720
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm text-foreground">Lucknow, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-6"></div>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href="https://github.com/mohdSuhel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/suheldevs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
