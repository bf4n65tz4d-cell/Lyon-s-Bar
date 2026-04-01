"use client";

import { motion } from "framer-motion";

const placeholders = [
  {
    label: "Comptoir",
    desc: "Le cœur du Lyon's",
    gradient: "linear-gradient(135deg, #1C2B4A 0%, #0F1824 60%, #1a2540 100%)",
    size: "large",
  },
  {
    label: "Terrasse",
    desc: "Pour les beaux jours",
    gradient: "linear-gradient(145deg, #243359 0%, #1C2B4A 100%)",
    size: "small",
  },
  {
    label: "Salle principale",
    desc: "L'espace de vie",
    gradient: "linear-gradient(135deg, #1a2540 0%, #0F1824 100%)",
    size: "small",
  },
  {
    label: "Bar à bières",
    desc: "Les tireuses en action",
    gradient: "linear-gradient(120deg, #1C2B4A 0%, #243359 100%)",
    size: "medium",
  },
  {
    label: "Espace privatisé",
    desc: "Vos événements",
    gradient: "linear-gradient(145deg, #0F1824 0%, #1C2B4A 100%)",
    size: "medium",
  },
];

function PlaceholderCard({
  item,
  index,
}: {
  item: (typeof placeholders)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden"
      style={{
        background: item.gradient,
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          zIndex: 1,
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "rgba(28,43,74,0.4)",
          transition: "opacity 0.4s",
          zIndex: 2,
        }}
      />

      {/* Zoom on hover */}
      <div
        className="w-full h-full group-hover:scale-105"
        style={{
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          minHeight: "inherit",
        }}
      />

      {/* Text */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10"
        style={{
          background: "linear-gradient(to top, rgba(15,24,36,0.85) 0%, transparent 100%)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            color: "var(--brand-muted)",
            letterSpacing: "0.2em",
          }}
        >
          {item.desc}
        </p>
        <p
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--brand-white)",
            fontStyle: "italic",
          }}
        >
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function Galerie() {
  return (
    <section
      id="espace"
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
            Bienvenue chez nous
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-text)",
              fontStyle: "italic",
            }}
          >
            L&apos;Espace
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: "220px" }}
        >
          {/* Card large — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden md:col-span-2 lg:col-span-1 lg:row-span-2"
            style={{
              background: placeholders[0].gradient,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                backgroundSize: "256px 256px",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(28,43,74,0.35)", transition: "opacity 0.4s" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,24,36,0.9) 0%, transparent 100%)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.2em",
                }}
              >
                {placeholders[0].desc}
              </p>
              <p
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brand-white)",
                  fontStyle: "italic",
                }}
              >
                {placeholders[0].label}
              </p>
            </div>
          </motion.div>

          {placeholders.slice(1).map((item, i) => (
            <PlaceholderCard key={item.label} item={item} index={i + 1} />
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-8 text-xs"
          style={{
            fontFamily: "var(--font-barlow)",
            color: "var(--brand-text-muted)",
            opacity: 0.5,
          }}
        >
          Photos de l&apos;espace à venir dès l&apos;ouverture — 4 avril 2026
        </motion.p>
      </div>
    </section>
  );
}
