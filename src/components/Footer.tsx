import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const links = [
    { href: "mailto:jirukeh@gmail.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://github.com/Jeffreyai7", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/jirukeh", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://x.com/jirukeh", icon: <FaXTwitter />, label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border py-6 mt-0">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-muted-foreground font-mono tracking-[0.05em]">
          © {new Date().getFullYear()} Jeffrey Irukeh
        </p>
        <div className="flex items-center gap-5">
          {links.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 text-base"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};