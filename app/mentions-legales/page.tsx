import Link from "next/link";

export const metadata = {
  title: "Mentions légales — Le Lyon's",
};

export default function MentionsLegales() {
  return (
    <main
      style={{ background: "var(--brand-primary)", minHeight: "100vh" }}
      className="px-6 py-24 flex flex-col items-center"
    >
      <div style={{ maxWidth: 720, width: "100%" }}>

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "13px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--brand-muted)",
            transition: "color 0.25s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--brand-white)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--brand-muted)")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </Link>

        {/* Title */}
        <h1
          className="mb-12"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--brand-white)",
            lineHeight: 1.1,
          }}
        >
          Mentions légales
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            color: "var(--brand-muted)",
            fontFamily: "var(--font-barlow)",
            fontSize: "15px",
            lineHeight: 1.75,
          }}
        >
          <Section title="Éditeur du site">
            <p>Le Lyon&apos;s<br />
            46 Avenue Paul Santy, 69008 Lyon<br />
            À compléter</p>
          </Section>

          <Section title="Hébergement">
            <p>À compléter</p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de Le Lyon&apos;s et sont protégés par les lois relatives à la propriété intellectuelle.
              Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>À compléter</p>
          </Section>

          <Section title="Contact">
            <p>
              Pour toute question : <a
                href="https://instagram.com/bar_le_lyons"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--brand-white)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                @bar_le_lyons
              </a>
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="mb-3"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "11px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(138,154,181,0.6)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          borderLeft: "1px solid rgba(138,154,181,0.15)",
          paddingLeft: "1.25rem",
          color: "var(--brand-muted)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
