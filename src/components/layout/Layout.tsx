import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactWhySection } from '../contact/ContactWhySection';

export function Layout() {
  const { pathname } = useLocation();
  const isContact = pathname === '/contact';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      {isContact && <ContactWhySection />}
    </>
  );
}
