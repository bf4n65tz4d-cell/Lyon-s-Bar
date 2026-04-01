"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6h16l-2 14H10L8 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 6h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20v6M20 20v6M10 26h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 10c2 0 4 1 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "L'Ambiance",
    desc: "Afterwork décontracté, soirées entre amis, l'énergie d'un bar qui vit. Un espace pensé pour se retrouver, trinquer, et rugir.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L8 14h16L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14v4a6 6 0 0012 0v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 24v4M12 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "La Carte",
    desc: "Bières pression sélectionnées, cocktails maison travaillés, vins soigneusement choisis, planches généreuses pour partager.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C11.582 4 8 7.582 8 12c0 6 8 16 8 16s8-10 8-16c0-4.418-3.582-8-8-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "L'Espace",
    desc: "46 Avenue Paul Santy, Lyon 8ème. En plein cœur du quartier, proche universités et bureaux. Un lieu accessible, vivant.",
  },
];

export default function Concept() {
  return (
    <section
      id="concept"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--brand-cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-muted)",
              letterSpacing: "0.2em",
            }}
          >
            Qui sommes-nous
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-text)",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
          >
            Notre ADN
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 md:p-10 flex flex-col gap-5"
              style={{
                background: "var(--brand-white)",
                border: "1px solid rgba(28,43,74,0.07)",
                boxShadow:
                  "0 2px 12px rgba(28,43,74,0.06), 0 1px 3px rgba(28,43,74,0.04)",
                transition: "box-shadow 0.35s, transform 0.35s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 8px 32px rgba(28,43,74,0.12), 0 2px 8px rgba(28,43,74,0.06)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 2px 12px rgba(28,43,74,0.06), 0 1px 3px rgba(28,43,74,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{
                  background: "rgba(28,43,74,0.05)",
                  color: "var(--brand-primary)",
                  borderRadius: "4px",
                }}
              >
                {card.icon}
              </div>
              <h3
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brand-text)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: "var(--brand-text-muted)",
                  lineHeight: "1.75",
                }}
              >
                {card.desc}
              </p>
              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  background: "var(--brand-primary)",
                  transition: "transform 0.4s ease",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
