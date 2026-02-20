import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

/** "dark" = fondo oscuro → texto blanco. "light" = fondo claro → texto negro */
export type HeroTheme = 'dark' | 'light';

const HeroThemeContext = createContext<{
  theme: HeroTheme;
  setTheme: (theme: HeroTheme) => void;
}>({ theme: 'dark', setTheme: () => {} });

export function HeroThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<HeroTheme>('dark');
  const setTheme = useCallback((t: HeroTheme) => setThemeState(t), []);
  return (
    <HeroThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeroThemeContext.Provider>
  );
}

export function useHeroTheme() {
  return useContext(HeroThemeContext);
}
