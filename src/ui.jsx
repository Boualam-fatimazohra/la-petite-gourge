import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE } from "./data.js";

export const img = (f) => `${import.meta.env.BASE_URL}img/${f}`;

// Vraie photo si le fichier existe, sinon bloc coloré avec le titre.
export function Photo({ src, label, tall, className = "" }) {
  const [ok, setOk] = useState(true);
  return (
    <figure className={`ph ${tall ? "tall" : ""} ${className}`} data-label={`Photo : ${label}`}>
      {ok && <img src={img(src)} alt={label} loading="lazy" onError={() => setOk(false)} />}
    </figure>
  );
}

export const Booking = ({ children = "Réserver sur Booking.com", small, ghost }) => (
  <a className={`btn ${small ? "btn-small" : ""} ${ghost ? "btn-ghost" : ""}`} href={SITE.booking} target="_blank" rel="noopener noreferrer">{children}</a>
);

export function PageHead({ title, lead }) {
  return (
    <section className="page-head">
      <div className="wrap narrow"><h1>{title}</h1><p className="lead">{lead}</p></div>
    </section>
  );
}

const LINKS = [["/", "Accueil"], ["/chambres", "Chambres"], ["/restaurant", "Restaurant"], ["/decouvrir", "Découvrir"], ["/galerie", "Galerie"], ["/contact", "Contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const home = pathname === "/";
  return (
    <header className={`site-header ${solid || !home || open ? "solid" : ""}`}>
      <Link className="brand" to="/" aria-label="La Petite Gorge, accueil">
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path d="M2 30V4l9 0 4 26zM30 30V4l-9 0-4 26z" fill="currentColor" /><path d="M13 4h6l-3 26z" fill="#8fb7d1" /></svg>
        <span>{SITE.name}</span>
      </Link>
      <button className="nav-toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}><span className="sr">Menu</span><i /></button>
      <nav id="nav" className={`nav ${open ? "open" : ""}`}>
        {LINKS.map(([to, l]) => <NavLink key={to} to={to} end>{l}</NavLink>)}
        <Booking small>Réserver</Booking>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div><p className="foot-title">Auberge Restaurant La Petite Gorge</p><p>{SITE.address}</p><p>À une minute à pied de la gorge du Todra.</p></div>
        <div><p className="foot-title">Nous joindre</p>
          <p><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></p>
          <p><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div>
        <div><p className="foot-title">Le site</p><ul>{LINKS.map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul></div>
        <div><p className="foot-title">Réserver</p><p><a href={SITE.booking} target="_blank" rel="noopener noreferrer">Page Booking.com</a></p><p><Link to="/contact">Demande directe</Link></p></div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Auberge Restaurant La Petite Gorge, Tinghir</p>
    </footer>
  );
}
