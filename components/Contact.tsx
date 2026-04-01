"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(138,154,181,0.2)",
    color: "var(--brand-white)",
    fontFamily: "var(--font-barlow)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.25s",
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--brand-primary)" }}
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
            On vous attend
          </p>
          <h2
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--brand-white)",
              fontStyle: "italic",
            }}
          >
            Contact
          </h2>
          <div
            className="mx-auto mt-5 w-12 h-px"
            style={{ background: "var(--brand-muted)" }}
          />
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — Infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Adresse */}
            <div className="flex flex-col gap-2">
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                Adresse
              </p>
              <p
                className="text-lg md:text-xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brand-white)",
                  fontStyle: "italic",
                }}
              >
                46 Avenue Paul Santy
              </p>
              <p
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: "var(--brand-muted)",
                  fontSize: "14px",
                }}
              >
                69008 Lyon — 8ème arrondissement
              </p>
            </div>

            {/* Horaires */}
            <div className="flex flex-col gap-3">
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                Horaires
              </p>
              {[
                { day: "Lun — Jeu", hours: "17h — 1h" },
                { day: "Ven — Sam", hours: "17h — 3h" },
                { day: "Dimanche", hours: "Fermé" },
              ].map((h) => (
                <div key={h.day} className="flex items-end gap-0">
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-white)",
                      fontSize: "14px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {h.day}
                  </span>
                  <div className="menu-dots" />
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: h.hours === "Fermé" ? "var(--brand-muted)" : "var(--brand-white)",
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--brand-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                Nous retrouver
              </p>
              <a
                href="https://instagram.com/bar_le_lyons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
                style={{ width: "fit-content" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-muted)", flexShrink: 0 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-barlow)",
                    color: "rgba(138,154,181,0.8)",
                    fontSize: "14px",
                    transition: "color 0.25s",
                  }}
                  className="group-hover:text-white"
                >
                  @bar_le_lyons
                </span>
              </a>
              <a
                href="tel:+33400000000"
                className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
                style={{ width: "fit-content" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-muted)", flexShrink: 0 }}>
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-barlow)",
                    color: "rgba(138,154,181,0.8)",
                    fontSize: "14px",
                    transition: "color 0.25s",
                  }}
                  className="group-hover:text-white"
                >
                  +33 4 00 00 00 00
                </span>
              </a>
            </div>

            {/* Map placeholder */}
            <div
              className="relative overflow-hidden"
              style={{
                height: 160,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(138,154,181,0.12)",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ color: "var(--brand-muted)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                  }}
                >
                  46 Av. Paul Santy, Lyon 8
                </p>
                <a
                  href="https://maps.google.com/?q=46+Avenue+Paul+Santy+Lyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline focus-visible:outline-none"
                  style={{ fontFamily: "var(--font-barlow)", opacity: 0.6 }}
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                style={{
                  border: "1px solid rgba(138,154,181,0.15)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ color: "var(--brand-muted)" }}>
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 20l5 5 11-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--brand-white)", fontStyle: "italic" }}
                >
                  Message envoyé !
                </p>
                <p style={{ fontFamily: "var(--font-barlow)", color: "var(--brand-muted)", fontSize: "14px" }}>
                  On vous répond dès que possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.2)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.2)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: "var(--brand-muted)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Votre message (réservation, privatisation, question...)"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(138,154,181,0.2)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-98"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    color: "var(--brand-primary)",
                    background: "var(--brand-white)",
                    letterSpacing: "0.15em",
                    transition: "background 0.25s, color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--brand-cream)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--brand-white)";
                  }}
                >
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
