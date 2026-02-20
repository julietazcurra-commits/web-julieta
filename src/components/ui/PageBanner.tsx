import { useEffect } from "react";
import { useHeroTheme } from "../../context/HeroThemeContext";
import "./PageBanner.css";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** Background image URL. Full page hero, no overlay (similar to home hero). */
  backgroundImage?: string;
  /** Texto blanco sobre fondo oscuro ("dark") o negro sobre fondo claro ("light"). */
  heroTheme?: "light" | "dark";
  /** Visual style when no image. */
  variant?: "light" | "dark";
}

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  heroTheme = "dark",
  variant = "light",
}: PageBannerProps) {
  const hasImage = Boolean(backgroundImage);
  const isDark = variant === "dark";
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    if (hasImage) setTheme(heroTheme);
  }, [hasImage, heroTheme, setTheme]);

  return (
    <header
      className={[
        "page-banner",
        hasImage ? "page-banner--with-image" : "",
        hasImage ? (isDark ? "page-banner--dark" : "page-banner--light") : "",
        hasImage ? `page-banner--text-${heroTheme}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage ? (
        <div className="page-banner__bg">
          <img
            src={backgroundImage}
            alt=""
            className="page-banner__media"
            aria-hidden
          />
          <div
            className={`page-banner__spot page-banner__spot--${heroTheme}`}
            aria-hidden
          />
        </div>
      ) : (
        <div
          className="page-banner__bg"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        />
      )}
      <div className="page-banner__content page-container">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
