"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Afterwork Entreprise",
    desc: "Formule cocktail + planches, ambiance dédiée. Idéal pour vos équipes après une longue journée.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Anniversaires",
    desc: "Soirée privatisée, service attentionné. On crée l'ambiance parfaite pour fêter ça en grand.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Événements sur mesure",
    desc: "On s'adapte à votre projet. Soirée à thème, lancement, célébration — dites-nous tout.",
  },
];

export default function Privatisation() {
  return (
    <section
      id="privatisation"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--brand-primary)" }}
    >
      {/* Grain texture SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        style={{ mixBlendMode: "overlay" }}
      >
        <filter id="priv-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#priv-grain)" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-4"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-muted)",
              letterSpacing: "0.2em",
            }}
          >
            Réservation exclusive
          </p>
          <h2
            className="text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-white)",
              fontStyle: "italic",
            }}
          >
            Privatisez Le Lyon's
          </h2>
          <div
            className="mx-auto mt-5 mb-6 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-barlow)",
              color: "var(--brand-muted)",
              lineHeight: "1.7",
            }}
          >
            Pour vos afterworks d'entreprise, anniversaires, soirées privées
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(138,154,181,0.15)",
                borderRadius: "2px",
              }}
            >
              <div style={{ color: "var(--brand-muted)" }}>{card.icon}</div>
              <h3
                className="text-xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brand-white)",
                  fontStyle: "italic",
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: "var(--brand-muted)",
                  lineHeight: "1.65",
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-sm uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-95"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              letterSpacing: "0.18em",
              background: "var(--brand-white)",
              color: "var(--brand-primary)",
              transition: "background 0.25s, color 0.25s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--brand-cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--brand-white)";
            }}
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
