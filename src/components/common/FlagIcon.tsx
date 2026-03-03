import React from 'react';

type FlagProps = {
    country: 'es' | 'en';
    className?: string;
};

export function FlagIcon({ country, className = '' }: FlagProps) {
    const getSvgContent = () => {
        switch (country) {
            case 'es':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className={className}>
                        <rect width="750" height="500" fill="#c60b1e" />
                        <rect width="750" height="250" y="125" fill="#ffc400" />
                    </svg>
                );
            case 'en':
                // USA Flag for EN
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1235 650" className={className}>
                        <rect width="1235" height="650" fill="#b22234" />
                        <path d="M0,650H1235V0H0" fill="#fff" />
                        <rect width="1235" height="650" fill="#b22234" />
                        <path d="M0,50H1235M0,100H1235M0,150H1235M0,200H1235M0,250H1235M0,300H1235M0,350H1235M0,400H1235M0,450H1235M0,500H1235M0,550H1235M0,600H1235" stroke="#fff" strokeWidth="50" />
                        <rect width="494" height="350" fill="#3c3b6e" />
                        {/* Simplified stars or just box for simplicity if small, but let's try a recognizable abstraction or standard SVG */}
                        <path fill="#fff" d="M247 175l10 30h32l-25 19 9 30-26-18-25 18 9-30-25-19h32z" />
                        {/* Just one star in middle to represent? No, let's use a simpler known SVG structure or just colors. 
               Actually, for a small icon, detailed stars are messy. 
               Let's use a standard simplified US flag SVG path.
            */}
                        <path d="M0,0H1235V650H0Z" fill="#fff" />
                        <path d="M0,0H1235V50H0Z" fill="#b22234" />
                        <path d="M0,100H1235V150H0Z" fill="#b22234" />
                        <path d="M0,200H1235V250H0Z" fill="#b22234" />
                        <path d="M0,300H1235V350H0Z" fill="#b22234" />
                        <path d="M0,400H1235V450H0Z" fill="#b22234" />
                        <path d="M0,500H1235V550H0Z" fill="#b22234" />
                        <path d="M0,600H1235V650H0Z" fill="#b22234" />
                        <rect width="494" height="350" fill="#3c3b6e" />
                    </svg>
                );
            default:
                return null; // Or a globe icon
        }
    };

    return getSvgContent();
}
