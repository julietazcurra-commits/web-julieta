import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from './FlagIcon';
import './LanguageSelector.css';

export function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'es', label: 'ES', flag: 'es' },
        { code: 'en', label: 'EN', flag: 'en' },
        { code: 'zh', label: 'CN', flag: 'zh' }
    ] as const;

    const currentLang = languages.find(l => i18n.language.startsWith(l.code)) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button
                className="lang-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
            >
                <FlagIcon country={currentLang.flag} className="lang-flag" />
                <span className="lang-label">{currentLang.label}</span>
                <span className="lang-arrow">▼</span>
            </button>

            <ul className={`lang-dropdown ${isOpen ? 'show' : ''}`} role="listbox">
                {languages.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={currentLang.code === lang.code}>
                        <button
                            className={`lang-option ${currentLang.code === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <FlagIcon country={lang.flag} className="lang-flag-sm" />
                            {lang.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
