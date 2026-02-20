import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HeroThemeProvider } from "./context/HeroThemeContext";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import LogisticsPage from "./pages/LogisticsPage";
import { MarketsPage } from "./pages/MarketsPage";
import { ContactPage } from "./pages/ContactPage";

/**
 * Scrolls to top on route change.
 * If the URL has a hash, scrolls to that element (with offset for sticky header).
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the DOM to render, then scroll to the element
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <HeroThemeProvider>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="logistics" element={<LogisticsPage />} />
          <Route path="markets" element={<MarketsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      </HeroThemeProvider>
    </BrowserRouter>
  );
}

export default App;
