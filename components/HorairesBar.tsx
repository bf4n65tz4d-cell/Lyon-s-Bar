"use client";

import { motion } from "framer-motion";

const horaires = [
  { label: "Lun – Mer", heures: "17h – 01h" },
  { label: "Jeu – Ven", heures: "17h – 03h" },
  { label: "Sam", heures: "15h – 03h" },
  { label: "Dim", heures: "Fermé" },
];

export default function HorairesBar() {
  return (
    <div
      style={{ background: "#0F1824" }}
      className="py-4 px-6 overflow-x-auto"
    >
      <div className="max-w-4xl mx-auto flex items-center gap-6 min-w-max md:min-w-0 md:justify-center">
        {/* Icône horloge */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--brand-muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>

        {/* Colonnes horaires */}
        <div className="flex items-center gap-8 md:gap-12">
          {horaires.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-0.5"
            >
              <span
                className="text-xs uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  letterSpacing: "0.15em",
                  color: "var(--brand-muted)",
                }}
              >
                {h.label}
              </span>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  letterSpacing: "0.08em",
                  color: h.heures === "Fermé" ? "rgba(138,154,181,0.5)" : "var(--brand-white)",
                }}
              >
                {h.heures}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
