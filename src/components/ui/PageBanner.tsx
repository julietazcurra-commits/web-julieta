import "./PageBanner.css";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** Background image URL. When set, overlay is applied and text is light. */
  backgroundImage?: string;
  /** Visual style: PDF uses light washed banners. */
  variant?: "light" | "dark";
}

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  variant = "light",
}: PageBannerProps) {
  const hasImage = Boolean(backgroundImage);
  const isDark = variant === "dark";

  return (
    <header
      className={[
        "page-banner",
        hasImage ? "page-banner--with-image" : "",
        hasImage ? (isDark ? "page-banner--dark" : "page-banner--light") : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={hasImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {hasImage && <div className="page-banner__overlay" aria-hidden />}
      <div className="page-banner__content page-container">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
