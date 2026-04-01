"use client";

import { motion } from "framer-motion";

const events = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    tag: "Chaque jeudi",
    title: "Afterwork du Jeudi",
    time: "Dès 18h",
    desc: "Terminez votre semaine en beauté. Cocktail de bienvenue offert pour tout afterwork entre collègues. L'occasion parfaite de décompresser.",
    highlight: "Cocktail de bienvenue offert",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5-6.5-4.5-6.5 4.5 2.5-7.5L4 11.5h7.5L14 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Chaque vendredi",
    title: "Soirée Étudiante",
    time: "Dès 19h",
    desc: "Le vendredi appartient aux étudiants. Tarifs préférentiels sur présentation de votre carte étudiante. La semaine mérite une bonne fin.",
    highlight: "Tarifs préférentiels sur présentation carte",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 11h20" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 4v4M19 4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 16h4M16 16h4M8 19h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    tag: "Sur demande",
    title: "Privatisation",
    time: "Selon disponibilités",
    desc: "Anniversaire, pot de départ, team building... Le Lyon's se privatise pour vos événements. Ambiance garantie dans un espace entièrement dédié.",
    highlight: "Votre espace privatisé pour vos événements",
  },
];

export default function Evenements() {
  return (
    <section
      id="evenements"
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
          className="text-center mb-14 md:mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-muted)",
              letterSpacing: "0.2em",
            }}
          >
            Au programme
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-text)",
              fontStyle: "italic",
            }}
          >
            Nos Rendez-vous
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col gap-5 p-7 md:p-8 overflow-hidden"
              style={{
                background: "var(--brand-primary)",
                boxShadow:
                  "0 4px 24px rgba(28,43,74,0.2), 0 1px 4px rgba(0,0,0,0.15)",
                transition: "box-shadow 0.35s, transform 0.35s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 12px 40px rgba(28,43,74,0.35), 0 2px 8px rgba(0,0,0,0.2)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 4px 24px rgba(28,43,74,0.2), 0 1px 4px rgba(0,0,0,0.15)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Background grain */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
                  backgroundSize: "256px 256px",
                }}
              />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Tag + icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs uppercase tracking-widest px-3 py-1"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.15em",
                      border: "1px solid rgba(138,154,181,0.2)",
                    }}
                  >
                    {event.tag}
                  </span>
                  <div style={{ color: "var(--brand-muted)" }}>{event.icon}</div>
                </div>

                {/* Title + time */}
                <div>
                  <h3
                    className="text-xl md:text-2xl mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--brand-white)",
                      fontStyle: "italic",
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {event.time}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    color: "rgba(138,154,181,0.85)",
                    lineHeight: "1.75",
                  }}
                >
                  {event.desc}
                </p>

                {/* Highlight */}
                <div
                  className="flex items-center gap-2 pt-1"
                  style={{ borderTop: "1px solid rgba(138,154,181,0.15)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(138,154,181,0.6)" }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-barlow)",
                      color: "var(--brand-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    {event.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
