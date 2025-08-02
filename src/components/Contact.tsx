"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">Let&rsquo;s Work Together</h2>
      <p className="text-muted-foreground mb-10">
        Got a project or an idea? I&rsquo;d love to hear about it. Reach out
        below.
      </p>

      <form
        action="https://formspree.io/f/mdkdlaqk"
        method="POST"
        className="grid gap-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="p-3 bg-card text-card-foreground border border-border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="mail@example.com"
              className="p-3 bg-card text-card-foreground border border-border rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="Let&rsquo;s talk..."
            className="p-3 bg-card text-card-foreground border border-border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="self-start bg-primary text-primary-foreground hover:brightness-110 transition-all px-6 py-3 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default ContactSection;
