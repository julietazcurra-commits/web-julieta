import { Link } from 'react-router-dom';
import './Button.css';

type ButtonProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classNames = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
