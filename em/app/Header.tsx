"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#homecontact") {
      return pathname === "/" && isContactSectionVisible;
    }
    return pathname === href || pathname?.startsWith(href);
  };

  // Enhanced scroll detection for header behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header background effect
      setScrolled(currentScrollY > 50);
      
      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent hydration mismatch with enhanced loading
  useEffect(() => {
    setIsClient(true);
    
    // Staggered loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);

  // Enhanced intersection observer for contact section
  useEffect(() => {
    if (!isClient || pathname !== "/") {
      setIsContactSectionVisible(false);
      return;
    }

    const contactElement = document.getElementById("homecontact") || 
                          document.querySelector("#homecontact") ||
                          document.querySelector("[id*='contact']") ||
                          document.querySelector(".contact");

    if (!contactElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactSectionVisible(entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      {
        threshold: [0, 0.3, 0.7, 1],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    observer.observe(contactElement);
    return () => observer.disconnect();
  }, [isClient, pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (open && target && !target.closest('.hdr__mobile') && !target.closest('.hdr__toggle')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header 
      className={`hdr ${scrolled ? 'hdr--scrolled' : ''} ${headerVisible ? 'hdr--visible' : 'hdr--hidden'} ${loaded ? 'hdr--loaded' : ''}`}
    >
      <div className="hdr__wrap">
        {/* Logo - keeping the same structure but adding interaction states */}
        <Link href="/" className="hdr__logo" aria-label="Retour à l'accueil">
          <div className={`hdr__stripe hdr__stripe--1 ${isClient && loaded ? 'hdr__stripe--loaded' : ''}`}>
            <img src="/logo-stripe-1.svg" alt="" className="hdr__stripe-svg" />
          </div>
          <div className={`hdr__stripe hdr__stripe--2 ${isClient && loaded ? 'hdr__stripe--loaded' : ''}`}>
            <img src="/logo-stripe-2.svg" alt="" className="hdr__stripe-svg" />
          </div>
          <div className={`hdr__stripe hdr__stripe--3 ${isClient && loaded ? 'hdr__stripe--loaded' : ''}`}>
            <img src="/logo-stripe-3.svg" alt="" className="hdr__stripe-svg" />
          </div>
        </Link>

        {/* Enhanced framed bar with better animations */}
        <div className="hdr__box">
          <svg
            className="hdr__frame"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 848 64"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
            aria-hidden="true"
          >
            {/* Animated background fill */}
            <polygon
              points="14 0, 848 0, 848 64, 0 64"
              fill="rgba(0,0,0,.28)"
              className="hdr__frame-fill"
            />
            {/* Enhanced stroke with animation */}
            <path
              d="M0.88208 62.99L14.142 1.23999H847.142V62.99H0.88208Z"
              fill="none"
              stroke="white"
              strokeOpacity="0.9"
              strokeWidth="1.35"
              vectorEffect="non-scaling-stroke"
              strokeMiterlimit={10}
              className="hdr__frame-stroke"
            />
          </svg>

          <div className="hdr__inner">
            <div className="hdr__brand">
              <span className="hdr__brand-text">Entrepreneurs Morocco</span>
            </div>

            <nav className="hdr__nav">
              {[
                { href: "/setup", label: "Setup" },
                { href: "/services", label: "Services" },
                { href: "/benefices", label: "Bénéfices" },
                { href: "/formations", label: "Formation" },
                { href: "/#homecontact", label: "Contact" }
              ].map((item, index) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`hdr__link ${isActive(item.href) ? "is-active" : ""}`} 
                  aria-current={isActive(item.href) ? "page" : undefined}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <span className="hdr__link-text">{item.label}</span>
                  <span className="hdr__link-underline"></span>
                </Link>
              ))}
            </nav>

            <button 
              className={`hdr__toggle ${open ? 'hdr__toggle--open' : ''}`} 
              onClick={() => setOpen(s => !s)} 
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <span className="hdr__toggle-line hdr__toggle-line--1"></span>
              <span className="hdr__toggle-line hdr__toggle-line--2"></span>
              <span className="hdr__toggle-line hdr__toggle-line--3"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced mobile menu with better animations */}
      <div className={`hdr__mobile ${open ? 'hdr__mobile--open' : ''}`}>
        <div className="hdr__mobile-backdrop" onClick={() => setOpen(false)}></div>
        <nav className="hdr__mobileNav">
          {[
            { href: "/setup", label: "Setup" },
            { href: "/services", label: "Services" },
            { href: "/benefices", label: "Bénéfices" },
            { href: "/formations", label: "Formation" },
            { href: "/#homecontact", label: "Contact" }
          ].map((item, index) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`hdr__mobileLink ${isActive(item.href) ? "is-active" : ""}`} 
              onClick={() => setOpen(false)} 
              aria-current={isActive(item.href) ? "page" : undefined}
              style={{ animationDelay: `${0.05 + index * 0.08}s` }}
            >
              <span className="hdr__mobileLink-text">{item.label}</span>
              <span className="hdr__mobileLink-accent"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {open && <div className="hdr__overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}