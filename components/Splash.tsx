"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-04-04T00:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="text-4xl md:text-5xl font-semibold tabular-nums"
        style={{
          fontFamily: "var(--font-playfair)",
          color: "var(--brand-white)",
          minWidth: "2.5ch",
          textAlign: "center",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="text-xs tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: "var(--brand-muted)",
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    intervalRef.current = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 2) setVisible(false);
    };
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (startY - e.changedTouches[0].clientY > 10) setVisible(false);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [visible]);

  // Bloquer le scroll pendant le splash + toute la durée de l'animation de sortie
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!visible) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      // Garder bloqué le temps de l'animation (900ms) puis libérer
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleDiscover = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: "-100vh", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "var(--brand-primary)" }}
        >
          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(36, 51, 89, 0.8) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
            {/* Logo avec pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.95, 1, 0.95],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow:
                    "0 0 0 1px rgba(138,154,181,0.2), 0 0 40px rgba(28,43,74,0.8), 0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/logo-icon.jpg"
                  alt="Le Lyon's"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* "Ouverture le" */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <p
                className="uppercase tracking-widest text-sm"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.25em",
                }}
              >
                Ouverture le
              </p>
              <h1
                className="text-5xl md:text-7xl leading-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brand-white)",
                  fontStyle: "italic",
                }}
              >
                4 Avril 2026
              </h1>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-6 md:gap-10"
            >
              {timeLeft ? (
                <>
                  <CountdownUnit value={timeLeft.days} label="jours" />
                  <div className="text-3xl mt-1" style={{ color: "var(--brand-muted)", fontFamily: "var(--font-playfair)" }}>:</div>
                  <CountdownUnit value={timeLeft.hours} label="heures" />
                  <div className="text-3xl mt-1" style={{ color: "var(--brand-muted)", fontFamily: "var(--font-playfair)" }}>:</div>
                  <CountdownUnit value={timeLeft.minutes} label="min" />
                  <div className="text-3xl mt-1" style={{ color: "var(--brand-muted)", fontFamily: "var(--font-playfair)" }}>:</div>
                  <CountdownUnit value={timeLeft.seconds} label="sec" />
                </>
              ) : (
                <div style={{ height: 64 }} />
              )}
            </motion.div>
          </div>

          {/* Bouton Découvrir */}
          <motion.div
            className="absolute bottom-12 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={handleDiscover}
              className="group flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="Découvrir le site"
            >
              <span
                className="uppercase tracking-widest text-xs transition-colors duration-300 group-hover:text-white"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.2em",
                }}
              >
                Découvrir
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="transition-colors duration-300 group-hover:text-white"
                style={{ color: "var(--brand-muted)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 4v12M4 10l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
