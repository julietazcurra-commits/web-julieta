import { useEffect } from "react";
import { useHeroTheme } from "../../context/HeroThemeContext";
import "./PageBanner.css";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** Background image URL. Full page hero, no overlay (similar to home hero). */
  backgroundImage?: string;
  /** Background video URL. Si se usa, reemplaza la imagen. Video autoplay, muted, loop. */
  backgroundVideo?: string;
  /** Texto blanco sobre fondo oscuro ("dark") o negro sobre fondo claro ("light"). */
  heroTheme?: "light" | "dark";
  /** Visual style when no image. */
  variant?: "light" | "dark";
}

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  heroTheme = "dark",
  variant = "light",
}: PageBannerProps) {
  const hasMedia = Boolean(backgroundImage || backgroundVideo);
  const isDark = variant === "dark";
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    if (hasMedia) setTheme(heroTheme);
  }, [hasMedia, heroTheme, setTheme]);

  return (
    <header
      className={[
        "page-banner",
        hasMedia ? "page-banner--with-image" : "",
        hasMedia ? (isDark ? "page-banner--dark" : "page-banner--light") : "",
        hasMedia ? `page-banner--text-${heroTheme}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasMedia ? (
        <div className="page-banner__bg">
          {backgroundVideo ? (
            <video
              className="page-banner__media"
              src={backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
            />
          ) : (
            <img
              src={backgroundImage}
              alt=""
              className="page-banner__media"
              aria-hidden
            />
          )}
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
