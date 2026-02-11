type Props = {
  className?: string;
  title?: string;
  ariaHidden?: boolean;
};

export function LocationPinIcon({ className, title = "Location", ariaHidden }: Props) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={ariaHidden ? "presentation" : "img"}
      aria-hidden={ariaHidden ? true : undefined}
      aria-label={ariaHidden ? undefined : title}
    >
      <path
        d="M12 22s7-6.2 7-13a7 7 0 1 0-14 0c0 6.8 7 13 7 13Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

