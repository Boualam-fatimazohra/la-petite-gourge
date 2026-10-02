import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header, Footer } from "./ui.jsx";
import { Home, Rooms, Restaurant, Discover, Gallery, Contact } from "./pages.jsx";

const TITLES = { "/": "La Petite Gorge, auberge et restaurant à la gorge du Todra, Tinghir", "/chambres": "Chambres, La Petite Gorge, Tinghir", "/restaurant": "Restaurant, La Petite Gorge, gorge du Todra", "/decouvrir": "Découvrir la gorge du Todra et Tinghir", "/galerie": "Galerie photos, La Petite Gorge, Tinghir", "/contact": "Contact et réservation, La Petite Gorge, Tinghir" };

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); document.title = TITLES[pathname] || TITLES["/"]; }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Header />
      <motion.main id="main" key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chambres" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/decouvrir" element={<Discover />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.main>
      <Footer />
    </>
  );
}
