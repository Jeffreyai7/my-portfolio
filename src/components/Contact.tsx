"use client";
import { motion } from "framer-motion";

const ContactSection = () => (
  <motion.section
    id="contact"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-12 md:py-16"
  >
    <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono">
      Contact
    </span>
    <div>
      <h2 className="font-display font-light text-4xl text-foreground leading-[1.1] mb-4">
        Let&rsquo;s build
        <br />
        <em className="italic text-accent">something</em>
      </h2>
      <p className="text-sm text-muted-foreground font-mono leading-[1.8] mb-8">
        Open to freelance projects, full-time roles, and interesting problems.
      </p>

      <form
        action="https://formspree.io/f/mdkdlaqk"
        method="POST"
        className="space-y-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "mail@example.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-1.5">
              <label
                htmlFor={id}
                className="text-[11px] text-muted-foreground font-mono uppercase tracking-[0.06em]"
              >
                {label}
              </label>
              <input
                required
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className="bg-card border border-border text-foreground font-mono text-sm px-3 py-2.5 placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/40 transition-colors w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-[11px] text-muted-foreground font-mono uppercase tracking-[0.06em]"
          >
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="What are you working on?"
            className="bg-card border border-border text-foreground font-mono text-sm px-3 py-2.5 placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/40 transition-colors resize-none w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-accent-foreground font-mono text-xs font-medium px-5 py-2.5 hover:opacity-80 transition-opacity w-full sm:w-auto"
        >
          Send Message →
        </button>
      </form>
    </div>
  </motion.section>
);

export default ContactSection;