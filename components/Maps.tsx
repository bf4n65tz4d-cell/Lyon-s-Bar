"use client";

import { motion } from "framer-motion";

const infos = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    value: "46 Avenue Paul Santy, 69008 Lyon",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
        <line x1="1" y1="9" x2="23" y2="9" />
        <line x1="8" y1="3" x2="8" y2="21" />
      </svg>
    ),
    label: "Métro",
    value: "Ligne D — Station Grange Blanche (8 min à pied)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="14" rx="2" ry="2" />
        <path d="M8 17v4M16 17v4M2 17h20" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Bus",
    value: "C7, C14 — Arrêt Paul Santy",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    label: "Parking",
    value: "Parking Carrefour Avenue Paul Santy (gratuit le soir)",
  },
];

export default function Maps() {
  return (
    <section
      id="acces"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--brand-primary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-muted)",
              letterSpacing: "0.2em",
            }}
          >
            Venir nous voir
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-white)",
              fontStyle: "italic",
            }}
          >
            Nous trouver
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Gauche : infos pratiques */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {infos.map((info, i) => (
              <div key={info.label} className="flex items-start gap-4">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {info.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-xs uppercase"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {info.label}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-barlow)",
                      color: "var(--brand-white)",
                      lineHeight: "1.6",
                    }}
                  >
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Droite : Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5!2d4.8705!3d45.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4b0d2d2d2d%3A0x0!2s46+Avenue+Paul+Santy%2C+69008+Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="350"
              style={{
                border: 0,
                display: "block",
                filter: "hue-rotate(200deg) saturate(0.6) brightness(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Lyon's Bar — 46 Avenue Paul Santy, Lyon 8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
