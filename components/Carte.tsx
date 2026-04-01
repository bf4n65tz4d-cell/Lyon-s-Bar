"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type TabKey = "bieres" | "cocktails" | "vins" | "planches";

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "bieres", label: "Bières Pression" },
  { key: "cocktails", label: "Cocktails" },
  { key: "vins", label: "Vins" },
  { key: "planches", label: "Planches" },
];

const menu: Record<TabKey, MenuItem[]> = {
  bieres: [
    { name: "Lager", desc: "Légère, dorée, rafraîchissante", price: "4€" },
    { name: "IPA", desc: "Houblonnée, amère, arômes fruités", price: "5.50€" },
    { name: "Blonde", desc: "Ronde, équilibrée, notes de miel", price: "4.50€" },
    { name: "Brune", desc: "Riche, torréfiée, longue finale", price: "5€" },
    { name: "Wheat Beer", desc: "Blanche, épicée, légèrement citronnée", price: "5€" },
    { name: "Session IPA", desc: "Faible degré, très aromatique", price: "5.50€" },
  ],
  cocktails: [
    { name: "Mojito", desc: "Rhum blanc, menthe fraîche, citron vert, sucre de canne", price: "9€" },
    { name: "Old Fashioned", desc: "Bourbon, bitters Angostura, sucre", price: "11€" },
    { name: "Aperol Spritz", desc: "Aperol, prosecco, splash de soda", price: "8€" },
    { name: "Whisky Sour", desc: "Bourbon, citron, sirop, blanc d'œuf", price: "10€" },
    { name: "Negroni", desc: "Gin, Campari, vermouth rouge", price: "11€" },
    { name: "Paloma", desc: "Tequila blanco, pamplemousse, sel", price: "10€" },
    { name: "Dark &amp; Stormy", desc: "Rhum brun, ginger beer, citron vert", price: "9€" },
    { name: "Mocktail du jour", desc: "Création sans alcool, demandez-nous", price: "7€" },
  ],
  vins: [
    { name: "Blanc — Verre", desc: "Sélection maison, cépages variés", price: "5€" },
    { name: "Blanc — Bouteille", desc: "Chablis, Muscadet, IGP Pays d'Oc", price: "22€" },
    { name: "Rouge — Verre", desc: "Sélection maison, corps moyen", price: "5.50€" },
    { name: "Rouge — Bouteille", desc: "Côtes du Rhône, Languedoc, Bordeaux", price: "28€" },
    { name: "Rosé — Verre", desc: "Provence, léger et fruité", price: "5.50€" },
    { name: "Rosé — Bouteille", desc: "Côtes de Provence AOP", price: "26€" },
    { name: "Pétillant — Flûte", desc: "Crémant ou Prosecco selon arrivage", price: "7€" },
    { name: "Pétillant — Bouteille", desc: "Crémant de Bourgogne", price: "35€" },
  ],
  planches: [
    { name: "Planche Charcuterie", desc: "Jambon cru, saucisson, coppa, cornichons, pain grillé", price: "15€" },
    { name: "Planche Fromages", desc: "Sélection affineur : comté, brie, chèvre, confiture", price: "14€" },
    { name: "Planche Mixte", desc: "Le meilleur des deux : charcuterie & fromages sélectionnés", price: "18€" },
    { name: "Supplément pain", desc: "Pain de campagne grillé — portion", price: "2€" },
  ],
};

function MenuItem({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-end gap-0 py-4 group"
      style={{ borderBottom: "1px solid rgba(138,154,181,0.12)" }}
    >
      <div className="flex flex-col gap-0.5 flex-shrink-0">
        <span
          className="text-base md:text-lg"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--brand-white)",
            fontStyle: "italic",
          }}
        >
          {item.name}
        </span>
        {item.desc && (
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-barlow)",
              color: "var(--brand-muted)",
              lineHeight: "1.5",
            }}
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        )}
      </div>
      <div className="menu-dots" />
      <span
        className="flex-shrink-0 text-base"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: "var(--brand-white)",
          letterSpacing: "0.05em",
        }}
      >
        {item.price}
      </span>
    </motion.div>
  );
}

const heroItems = [
  {
    label: "Cocktails",
    prix: "9€ – 11€",
    gradient: "linear-gradient(135deg, #C9853A 0%, #8B4513 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4h6a7 7 0 0 1 0 14H9a7 7 0 0 1 0-14z" />
        <line x1="9" y1="18" x2="9" y2="22" />
        <line x1="15" y1="18" x2="15" y2="22" />
        <line x1="6" y1="22" x2="18" y2="22" />
      </svg>
    ),
  },
  {
    label: "Bières",
    prix: "4€ – 5.50€",
    gradient: "linear-gradient(135deg, #D4A017 0%, #8B6914 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "Vins",
    prix: "5€ – 35€",
    gradient: "linear-gradient(135deg, #722F37 0%, #4A1528 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8M12 11v11M6 3h12l-2 7a5 5 0 0 1-8 0z" />
      </svg>
    ),
  },
  {
    label: "Planches",
    prix: "14€ – 18€",
    gradient: "linear-gradient(135deg, #8B7355 0%, #5C4A32 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <path d="M3 6h18l-2 14H5z" />
      </svg>
    ),
  },
];

export default function Carte() {
  const [activeTab, setActiveTab] = useState<TabKey>("bieres");

  return (
    <section
      id="carte"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--brand-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
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
            Nos propositions
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-white)",
              fontStyle: "italic",
            }}
          >
            La Carte
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Hero items visuels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {heroItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                const map: Record<string, TabKey> = {
                  "Cocktails": "cocktails",
                  "Bières": "bieres",
                  "Vins": "vins",
                  "Planches": "planches",
                };
                setActiveTab(map[item.label]);
              }}
              className="relative flex flex-col items-center justify-center gap-2 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-95"
              style={{
                background: item.gradient,
                borderRadius: "4px",
                minHeight: "120px",
                transition: "opacity 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {item.icon}
              <span
                className="text-sm uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {item.label}
              </span>
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {item.prix}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-5 py-2.5 text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-95"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                letterSpacing: "0.1em",
                transition: "background 0.25s, color 0.25s, border-color 0.25s",
                background:
                  activeTab === tab.key ? "var(--brand-white)" : "transparent",
                color:
                  activeTab === tab.key ? "var(--brand-primary)" : "var(--brand-muted)",
                border:
                  activeTab === tab.key
                    ? "1px solid var(--brand-white)"
                    : "1px solid rgba(138,154,181,0.25)",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(138,154,181,0.6)";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-white)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(138,154,181,0.25)";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-muted)";
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div>
          {menu[activeTab].map((item, i) => (
            <MenuItem key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Note de bas */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10 text-xs"
          style={{
            fontFamily: "var(--font-barlow)",
            color: "var(--brand-muted)",
            opacity: 0.6,
          }}
        >
          Carte susceptible d'évoluer selon les arrivages et la saison.
        </motion.p>
      </div>
    </section>
  );
}
