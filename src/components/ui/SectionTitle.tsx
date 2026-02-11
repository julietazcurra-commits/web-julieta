import './SectionTitle.css';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  decorativeLine?: boolean;
  id?: string;
};

export function SectionTitle({
  title,
  subtitle,
  className = '',
  decorativeLine = false,
  id,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${className}`.trim()}>
      {decorativeLine && <div className="section-title-line" aria-hidden />}
      <h2 id={id} className="section-title-heading">{title}</h2>
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </div>
  );
}
