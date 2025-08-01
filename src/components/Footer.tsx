import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Jeffrey — Built with Next.js,
          Tailwind CSS and Framer Motion.
        </p>
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Jeffreyai7"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
