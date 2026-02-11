import './Card.css';

type CardProps = {
  image?: string;
  imageAlt?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ image, imageAlt, title, children, className = '' }: CardProps) {
  const alt = image ? (imageAlt ?? title) : '';
  return (
    <article className={`card ${className}`.trim()}>
      {image && (
        <div className="card-media">
          <img src={image} alt={alt} loading="lazy" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{children}</div>
      </div>
    </article>
  );
}
