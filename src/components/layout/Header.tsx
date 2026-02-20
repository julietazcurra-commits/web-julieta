import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../common/LanguageSelector";
import "./header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: t('nav.home') },
    { to: "/about", label: t('nav.about') },
    { to: "/products", label: t('nav.products') },
    { to: "/logistics", label: t('nav.logistics') },
    { to: "/markets", label: t('nav.markets') },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner page-container">
        <Link to="/" className="header__logo">
          Fruit Cascade
        </Link>

        {/* Hamburger for Mobile/Tablet */}
        <button
          type="button"
          className="header__hamburger"
          aria-label={menuOpen ? t("header.menu.close") : t("header.menu.open")}
          aria-expanded={menuOpen}
          aria-controls="main-nav-list"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation Layer */}
        <nav
          id="main-nav-list"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-label={t("header.nav.ariaLabel")}
        >
          <ul>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`header__link ${location.pathname === to ? "header__link--active" : ""
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* Mobile Language Selector */}
            <li className="mobile-only">
              <LanguageSelector />
            </li>
          </ul>

          <div className="desktop-actions">
            <Link to="/contact" className="header__cta">
              {t('hero.contact')}
            </Link>
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
