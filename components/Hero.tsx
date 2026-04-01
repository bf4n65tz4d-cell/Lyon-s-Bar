"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--brand-primary)" }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          zIndex: 0,
        }}
      />

      {/* Radial glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(36,51,89,0.9) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--brand-primary))",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo complet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ maxWidth: 420, width: "100%" }}
        >
          <div
            className="relative"
            style={{
              padding: "24px 32px",
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(36,51,89,0.6) 0%, transparent 100%)",
            }}
          >
            <Image
              src="/logo-full.jpg"
              alt="Le Lyon's — Le repaire pour rugir entre amis"
              width={420}
              height={180}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              priority
            />
          </div>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm md:text-base font-light"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            color: "var(--brand-muted)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            maxWidth: 540,
          }}
        >
          Le repaire pour rugir entre amis
        </motion.p>

        {/* Badge ouverture */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-4 py-2"
          style={{
            border: "1px solid rgba(138,154,181,0.25)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
          />
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--brand-muted)",
              letterSpacing: "0.18em",
            }}
          >
            Ouverture le 4 avril 2026
          </span>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--brand-muted)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
