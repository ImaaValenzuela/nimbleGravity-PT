import { Github, Linkedin } from "lucide-react";

export const SignatureCredits = () => {
  return (
    <div className="signature-credits">
      <span className="signature-text">Crafted by Imanol</span>
      <div className="signature-links">
        <a
          href="https://github.com/ImaaValenzuela"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="lucide-icon" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/imanol-valenzuela/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="lucide-icon" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};
