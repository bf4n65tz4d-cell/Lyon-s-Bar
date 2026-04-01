"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "La Carte", href: "#carte" },
  { label: "L'Espace", href: "#espace" },
  { label: "Événements", href: "#evenements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        style={{
          background: scrolled
            ? "rgba(15, 24, 36, 0.97)"
            : "rgba(15, 24, 36, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(138,154,181,0.12)"
            : "1px solid rgba(138,154,181,0.07)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.4)"
            : "none",
          transition: "background 0.4s, box-shadow 0.4s, border-color 0.4s",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            aria-label="Retour en haut"
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgba(138,154,181,0.3)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo-icon.jpg"
                alt="Le Lyon's"
                width={36}
                height={36}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <span
              className="hidden md:block text-sm uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                color: "var(--brand-white)",
                letterSpacing: "0.18em",
              }}
            >
              Le Lyon&apos;s
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative group text-sm uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm px-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.1em",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100"
                  style={{
                    background: "var(--brand-muted)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block px-5 py-2 text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-95"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-white)",
              border: "1px solid rgba(255,255,255,0.35)",
              letterSpacing: "0.12em",
              transition: "background 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.1)";
              el.style.borderColor = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.35)";
            }}
          >
            Réserver
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer" : "Menu"}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-px"
                style={{
                  background: "var(--brand-white)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    i === 0 && menuOpen
                      ? "translateY(5px) rotate(45deg)"
                      : i === 2 && menuOpen
                      ? "translateY(-5px) rotate(-45deg)"
                      : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            background: "var(--brand-primary)",
            maxHeight: menuOpen ? "400px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <div className="px-6 pb-6 flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-base uppercase border-b focus-visible:outline-none"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "rgba(255,255,255,0.8)",
                  borderColor: "rgba(138,154,181,0.15)",
                  letterSpacing: "0.1em",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 py-3 text-sm uppercase text-center"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                color: "var(--brand-white)",
                border: "1px solid rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
              }}
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
