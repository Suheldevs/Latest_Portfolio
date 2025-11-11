import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part 
            of your visions. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:mohdsuhel.dev@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  mohdsuhel.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a 
                  href="tel:+919519838720" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +91 9519838720
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Lucknow, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-secondary p-8 rounded-2xl border border-border">
          <h3 className="text-xl font-semibold mb-6">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background border-border resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
