"use client";

import { motion } from "framer-motion";

const avis = [
  {
    nom: "Marie L.",
    initiales: "ML",
    couleur: "#4A90D9",
    note: 5,
    texte: "Excellent bar pour l'afterwork ! Cocktails soignés, ambiance chaleureuse et accueil au top. On y retourne sans hésiter.",
  },
  {
    nom: "Thomas B.",
    initiales: "TB",
    couleur: "#E67E22",
    note: 5,
    texte: "La planche charcuterie était généreuse et délicieuse. Bonne sélection de bières pression. Cadre sympa dans le 8ème.",
  },
  {
    nom: "Camille R.",
    initiales: "CR",
    couleur: "#27AE60",
    note: 5,
    texte: "Paul est aux petits soins ! Super lieu pour se retrouver entre collègues après le boulot. Les cocktails sont vraiment bons.",
  },
  {
    nom: "Antoine M.",
    initiales: "AM",
    couleur: "#8E44AD",
    note: 5,
    texte: "Nouvelle adresse du 8ème qui fait déjà parler d'elle. Déco soignée, personnel sympa, je recommande vivement.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Avis() {
  return (
    <section
      id="avis"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--brand-cream)" }}
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
          {/* Logo Google + note */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg width="24" height="24" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
              <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
            </svg>
            <span
              className="text-3xl md:text-4xl font-semibold"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--brand-primary)",
                fontStyle: "italic",
              }}
            >
              4,8 ★★★★★ sur Google
            </span>
          </div>
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-barlow)",
              color: "var(--brand-muted)",
            }}
          >
            Ce que nos clients disent de nous
          </p>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Grid avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {avis.map((a, i) => (
            <motion.div
              key={a.nom}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 flex flex-col gap-4"
              style={{
                background: "#FFFFFF",
                borderRadius: "4px",
                boxShadow: "0 4px 24px rgba(28,43,74,0.08), 0 1px 4px rgba(28,43,74,0.05)",
              }}
            >
              {/* Top: avatar + nom + étoiles */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: a.couleur }}
                >
                  <span
                    className="text-xs font-semibold text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.05em" }}
                  >
                    {a.initiales}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      letterSpacing: "0.06em",
                      color: "var(--brand-primary)",
                    }}
                  >
                    {a.nom}
                  </span>
                  <Stars count={a.note} />
                </div>
              </div>
              {/* Texte avis */}
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: "#4A5568",
                  lineHeight: "1.7",
                }}
              >
                {a.texte}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
