import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-border/50 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-5 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p
            className="text-primary text-sm font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Build{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(100deg, #3B82F6, #818CF8)" }}
            >
              Together
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/8 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span
                className="text-green-400 text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Available for opportunities
              </span>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Looking for an internship, entry-level role, or exciting project? I'd love to hear from you. Let's connect and build something great together.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {[
                {
                  Icon: Mail,
                  label: "sonawaneashwini073@gmail.com",
                  href: "mailto:sonawaneashwini073@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "+91 9209037865",
                  href: "tel:+919209037865",
                },
                {
                  Icon: MapPin,
                  label: "Jalgaon, Maharashtra, India",
                  href: null,
                },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-card border border-border rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors shrink-0">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Ashwini08-04"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashwini-sonawane-231b0637b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3
                className="text-2xl font-bold mb-6 text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send a message
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      className="bg-background/50 border-border focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-background/50 border-border focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Internship opportunity / Project collaboration"
                    className="bg-background/50 border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Hi Ashwini, I'd like to discuss..."
                    className="min-h-[140px] bg-background/50 border-border focus-visible:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm font-semibold mt-1 gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
