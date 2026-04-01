"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-6 py-14 flex flex-col items-center gap-6 text-center"
      style={{ background: "var(--brand-dark)" }}
    >
      {/* Logo */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid rgba(138,154,181,0.2)",
          opacity: 0.8,
        }}
      >
        <Image
          src="/logo-icon.jpg"
          alt="Le Lyon's"
          width={48}
          height={48}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Social */}
      <a
        href="https://instagram.com/bar_le_lyons"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
        style={{ color: "var(--brand-muted)", transition: "color 0.25s" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--brand-white)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--brand-muted)")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "13px",
            letterSpacing: "0.1em",
          }}
        >
          @bar_le_lyons
        </span>
      </a>

      {/* Divider */}
      <div
        className="w-16 h-px"
        style={{ background: "rgba(138,154,181,0.15)" }}
      />

      {/* Copyright + mentions */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <p
          style={{
            fontFamily: "var(--font-barlow)",
            color: "rgba(138,154,181,0.5)",
            fontSize: "12px",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Le Lyon&apos;s · Tous droits réservés
        </p>
        <span style={{ color: "rgba(138,154,181,0.2)", fontSize: "12px" }}>·</span>
        <Link
          href="/mentions-legales"
          style={{
            fontFamily: "var(--font-barlow)",
            color: "rgba(138,154,181,0.4)",
            fontSize: "12px",
            letterSpacing: "0.05em",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            transition: "color 0.25s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(138,154,181,0.8)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(138,154,181,0.4)")}
        >
          Mentions légales
        </Link>
      </div>

      {/* NovUp credit */}
      <p
        style={{
          fontFamily: "var(--font-barlow)",
          color: "rgba(138,154,181,0.3)",
          fontSize: "11px",
          letterSpacing: "0.05em",
        }}
      >
        Site réalisé par{" "}
        <a
          href="https://novupstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:outline-none"
          style={{ transition: "color 0.25s" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "rgba(138,154,181,0.7)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "rgba(138,154,181,0.3)")
          }
        >
          NovUp Studio
        </a>
      </p>
    </footer>
  );
}
