import React from 'react';

type FlagProps = {
    country: 'es' | 'en' | 'zh';
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
            case 'zh':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                        <rect width="900" height="600" fill="#de2910" />
                        <path fill="#ffde00" d="M128.4 171.6l45.2 13.5-38.3 27 15.6 44.8-39.7-27.6-38.6 28.5 13.6-45.5-37.4-28.1 45.6-12.4 20.3-43.2zM277.6 112.5l2.4 8.7-6.8 6.1 8.9 2-4.1 8 8.1-3.9 6.2 6.7-1.3-9 7.4-4.9-8.4-3.1 1.8-8.8-7.3 5.1zM324.9 196.4l2.4 8.6-6.8 6.1 8.9 2.1-4.2 8 8.2-3.8 6.1 6.7-1.2-9 7.3-5-8.3-3.1 1.8-8.7-7.3 5.1zM292.1 278.4l2.5 8.7-6.9 6 8.9 2-4.1 8.1 8.1-3.9 6.2 6.7-1.3-9 7.4-5-8.4-3 1.8-8.8-7.3 5.1zM216.5 329l2.4 8.6-6.7 6.1 8.9 2.1-4.2 8 8.1-3.8 6.2 6.6-1.2-8.9 7.3-5-8.3-3 1.8-8.8-7.3 5.1z" />
                    </svg>
                );
            default:
                return null; // Or a globe icon
        }
    };

    return getSvgContent();
}
