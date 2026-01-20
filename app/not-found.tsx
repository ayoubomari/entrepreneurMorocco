// app/not-found.tsx
import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__wrap">
        {/* Optional heading (hide if not needed) */}
        <p className="nf__lead">La page demandée est introuvable.</p>

        {/* Exact CodePen-style 404 (4 • animated O • 4) */}
        <div className="error-container" aria-label="404">
          <span>4</span>
          <span aria-hidden="true" />
          <span>4</span>
        </div>

        <div className="link-container">
          <Link href="/" className="more-link">Retour à l’accueil</Link>

        </div>
      </div>
    </main>
  );
}
