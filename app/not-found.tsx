import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      <div className="aurora-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="text-center relative z-10 px-6">
        {/* 404 number */}
        <p
          className="font-[family-name:var(--font-montserrat)] font-black gradient-text select-none"
          style={{ fontSize: "clamp(8rem, 20vw, 14rem)", lineHeight: 0.9 }}
        >
          404
        </p>

        {/* Para bars */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="flex gap-[4px]">
            <div className="w-8 h-[3px] bg-[var(--accent)] skew-x-[-12deg]" />
            <div className="w-5 h-[3px] bg-[var(--accent)]/50 skew-x-[-12deg]" />
            <div className="w-3 h-[3px] bg-[var(--accent)]/25 skew-x-[-12deg]" />
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-lg">
          La page demandée est introuvable.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
          >
            <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
            <span className="relative z-10">Retour à l&apos;accueil</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
