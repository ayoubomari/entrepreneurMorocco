import Head from "next/head";
import Link from "next/link";
import "./404.css";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 • Page introuvable</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="nf">
        <div className="scanlines" aria-hidden="true" />
        <div className="wrap">
          <div className="badge">Error</div>
          <h1 className="title" aria-label="404">
            <span className="glitch" data-text="404">404</span>
          </h1>
          
          <p className="subtitle">Page non trouvée</p>
          <p className="text">
            Il semble que cette page n'existe pas ou a été déplacée.
          </p>
          
          <div className="actions">
            <Link className="btn primary" href="/">
              ← Retour à l'accueil
            </Link>
            <Link href="/#contact" className="btn ghost">
              Contacter le support
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
