"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/setup", label: "Setup" },
  { href: "/services", label: "Services" },
  { href: "/benefices", label: "Bénéfices" },
  { href: "/formations", label: "Formation" },
  { href: "/#homecontact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#homecontact") return false;
    return pathname === href || pathname?.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent",
          headerVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo icon */}
            <Link
              href="/"
              className="relative z-10 shrink-0"
              aria-label="Retour à l'accueil"
            >
              <Image
                src="/images/logo-icon.png"
                alt="Entrepreneurs Morocco"
                width={1000}
                height={1000}
                className="h-10 md:h-12 w-auto"
                priority
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/50 hover:text-white/90",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#dc2626]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/commencez-un-projet"
                className="group relative ml-6 inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-bold tracking-[0.1em] uppercase text-white cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#dc2626] skew-x-[-12deg] transition-all duration-400 group-hover:bg-[#ef4444] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]" />
                <span className="relative z-10">Commencer</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="relative z-10 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-6 h-[1.5px] bg-white rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col"
          >
            {/* Top spacer for header */}
            <div className="h-16" />

            <nav className="flex-1 flex flex-col justify-center px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  className="border-b border-white/[0.06]"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block text-[2rem] font-bold font-[family-name:var(--font-montserrat)] tracking-tight py-5 transition-colors duration-300",
                      isActive(item.href)
                        ? "text-[#dc2626]"
                        : "text-white/70 active:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="/commencez-un-projet"
                  onClick={() => setOpen(false)}
                  className="group relative inline-flex items-center gap-3 px-10 py-4 text-[15px] font-bold tracking-[0.1em] uppercase text-white cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[#dc2626] skew-x-[-12deg] transition-all duration-400 group-hover:bg-[#ef4444]" />
                  <span className="relative z-10">Commencer un projet</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Bottom info */}
            <div className="px-8 pb-10">
              <p className="text-xs text-white/30 tracking-wide">
                salam@entrepreneursmorocco.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
