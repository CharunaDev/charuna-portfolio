import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="border-border bg-surface/80 flex items-center gap-6 rounded-full border px-6 py-3 backdrop-blur-md">
        <Link href="#top" className="text-foreground text-sm font-semibold">
          charuna
        </Link>
        <ul className="hidden items-center gap-5 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted hover:text-accent text-sm transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-border flex items-center gap-4 border-l pl-4">
          <a
            href="https://github.com/CharunaDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/charuna-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="mailto:charuna.dev@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors"
          >
            <FiMail size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
