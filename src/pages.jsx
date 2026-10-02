import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SITE, FACTS, ROOMS, INCLUDED, GOOD_TO_KNOW, DISHES, SPOTS, GALLERY } from "./data.js";
import { Photo, Booking, PageHead, img } from "./ui.jsx";

/* Hero : deux falaises qui s'écartent quand on descend, le ciel s'élargit. */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const l = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const r = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const txt = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  return (
    <section className="hero" ref={ref}>
      <motion.div className="cliff cliff-l" style={{ x: l }} initial={{ x: "22%" }} animate={{ x: 0 }} transition={{ duration: 1.5, ease: [0.2, 0.7, 0.2, 1] }} aria-hidden />
      <motion.div className="cliff cliff-r" style={{ x: r }} initial={{ x: "-22%" }} animate={{ x: 0 }} transition={{ duration: 1.5, ease: [0.2, 0.7, 0.2, 1] }} aria-hidden />
      <motion.div className="hero-inner" style={{ y: txt }}>
        <p className="hero-kicker">Gorge du Todra, Tinghir</p>
        <h1>Dormir et manger au pied des falaises</h1>
        <p className="hero-sub">Une auberge familiale à une minute à pied de la gorge, avec 12 chambres climatisées, un restaurant, un jardin et une terrasse.</p>
        <div className="hero-cta"><Booking /><Link className="btn btn-ghost" to="/contact">Demander un devis</Link></div>
      </motion.div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <section className="facts" aria-label="Infos pratiques">
        <dl>{FACTS.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
      </section>
      <section className="section split">
        <div>
          <h2>Une auberge à l'entrée de la gorge</h2>
          <p>La Petite Gorge se trouve à Toudgha El Oulia, juste à l'entrée de la gorge du Todra. Vous posez vos valises, vous marchez une minute, et vous êtes sous des parois qui montent à plusieurs centaines de mètres.</p>
          <p>Le soir, on dîne à la table de l'auberge ou en terrasse. Le matin, le petit-déjeuner est préparé à la commande dans le jardin.</p>
          <p><Link className="link" to="/decouvrir">Voir ce qu'on peut faire autour</Link></p>
        </div>
        <Photo src="hero.jpg" label="l'auberge et la gorge" tall />
      </section>
      <section className="section tint"><div className="wrap">
        <h2>Chambres, restaurant, balades</h2>
        <div className="trio">
          {[["/chambres", "chambre-1.jpg", "une chambre", "Les chambres", "Douze chambres climatisées avec Wi-Fi gratuit, pour dormir au calme dans la vallée."],
            ["/restaurant", "restaurant-1.jpg", "la salle du restaurant", "Le restaurant", "Cuisine marocaine à la carte, servie en salle ou sur la terrasse. Petit-déjeuner inclus."],
            ["/decouvrir", "gorge-1.jpg", "la gorge du Todra", "Autour de l'auberge", "La gorge à pied, la palmeraie de Tinghir, les villages berbères et le désert plus au sud."]
          ].map(([to, src, label, t, p]) => (
            <Link key={to} className="card" to={to}><Photo src={src} label={label} /><h3>{t}</h3><p>{p}</p></Link>
          ))}
        </div>
      </div></section>
      <section className="section"><div className="wrap narrow">
        <h2>Comment venir</h2>
        <p>L'auberge est située sur la route de la gorge du Todra, à environ 8 km du centre de Tinghir. Il y a un parking gratuit sur place. Il n'y a pas de navette aéroport : contactez-nous avant votre arrivée pour organiser votre transfert depuis Tinghir, Errachidia ou Ouarzazate.</p>
        <p>Prévenez-nous au moins 24 heures avant votre arrivée pour organiser l'accueil.</p>
        <iframe className="map" title="Carte : La Petite Gorge, Tinghir" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-5.62%2C31.54%2C-5.55%2C31.60&layer=mapnik" />
        <p className="small"><a href="https://www.openstreetmap.org/search?query=La%20Petite%20Gorge%20Tinghir" target="_blank" rel="noopener noreferrer">Ouvrir la carte en grand</a></p>
      </div></section>
      <section className="cta-band">
        <h2>Votre prochaine nuit dans la gorge</h2>
        <p>Réservez directement sur Booking.com ou écrivez-nous pour un séjour sur mesure.</p>
        <div className="hero-cta"><Booking>Réserver</Booking><a className="btn btn-ghost" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp</a></div>
      </section>
    </>
  );
}

export function Rooms() {
  return (
    <>
      <PageHead title="Les chambres" lead="Douze chambres climatisées, un jardin, une terrasse et un salon commun où l'on sert café et thé." />
      <section className="section"><div className="wrap rooms">
        {ROOMS.map((r) => (
          <motion.article key={r.title} className="room" whileHover="h">
            <Photo src={r.img} label={r.title.toLowerCase()} />
            <div><h2>{r.title}</h2><p>{r.text}</p>
              <p>{r.booking ? <Booking small>Voir les tarifs</Booking> : <Link className="btn btn-small" to="/contact">Nous écrire</Link>}</p></div>
          </motion.article>
        ))}
      </div></section>
      <section className="section tint"><div className="wrap two-col">
        <div><h2>Inclus dans votre séjour</h2><ul className="ticks">{INCLUDED.map((t) => <li key={t}>{t}</li>)}</ul></div>
        <div><h2>À savoir</h2><ul className="ticks plain">{GOOD_TO_KNOW.map((t) => <li key={t}>{t}</li>)}</ul></div>
      </div></section>
    </>
  );
}

export function Restaurant() {
  return (
    <>
      <PageHead title="Le restaurant" lead="Cuisine marocaine, servie en salle ou sur la terrasse, avec vue sur la vallée." />
      <section className="section split">
        <div>
          <h2>À table</h2>
          <p>On mange ici ce qui se cuisine dans la région : tajines, couscous, grillades, salades et pain du jour. Les plats sont préparés à la commande, donc le service demande un peu de temps. C'est normal, et c'est meilleur.</p>
          <p>Le petit-déjeuner est offert aux clients de l'auberge. Il est servi tous les jours de 7h00 à 10h30.</p>
          <p><Link className="btn" to="/contact">Réserver une table</Link></p>
        </div>
        <Photo src="restaurant-1.jpg" label="la terrasse du restaurant" tall />
      </section>
      <section className="section tint"><div className="wrap">
        <h2>Exemples de plats</h2>
        <ul className="dishes">{DISHES.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ul>
        <p className="small">La carte change selon la saison et les arrivages. Demandez-la sur place ou par message.</p>
      </div></section>
      <section className="section"><div className="wrap narrow">
        <h2>Pour les groupes</h2>
        <p>Vous venez avec un groupe ou un guide ? Écrivez-nous la veille avec le nombre de personnes et les régimes particuliers (végétarien, sans gluten). Nous préparons le repas pour votre arrivée.</p>
      </div></section>
    </>
  );
}

export function Discover() {
  return (
    <>
      <PageHead title="Découvrir la région" lead="Ce que vous pouvez faire à pied depuis l'auberge, et ce qui se visite en une journée de route." />
      <section className="section"><div className="wrap spots">
        {SPOTS.map(([src, t, p]) => (
          <article className="spot" key={t}><Photo src={src} label={t} /><div><h2>{t}</h2><p>{p}</p></div></article>
        ))}
      </div></section>
      <section className="cta-band">
        <h2>Besoin d'un guide ou d'un transfert ?</h2>
        <p>Dites-nous ce qui vous intéresse, nous vous orientons vers des guides locaux.</p>
        <div className="hero-cta"><Link className="btn" to="/contact">Nous écrire</Link></div>
      </section>
    </>
  );
}

export function Gallery() {
  const [i, setI] = useState(null);
  const [has, setHas] = useState({});
  const go = (d) => setI((n) => (n + d + GALLERY.length) % GALLERY.length);
  useEffect(() => {
    if (i === null) return;
    const k = (e) => { if (e.key === "Escape") setI(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [i]);
  return (
    <>
      <PageHead title="Galerie" lead="L'auberge, la table et la gorge en images." />
      <section className="section"><div className="wrap gallery">
        {GALLERY.map((g, n) => (
          <button key={g.src} className="g-item" onClick={() => setI(n)} aria-label={`Agrandir : ${g.label}`}>
            <Photo src={g.src} label={g.label} />
          </button>
        ))}
      </div></section>
      <AnimatePresence>
        {i !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo agrandie"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setI(null)}>
            <button className="lb-btn lb-close" aria-label="Fermer">×</button>
            <button className="lb-btn lb-prev" aria-label="Précédente" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
            <button className="lb-btn lb-next" aria-label="Suivante" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
            <motion.img key={i} src={img(GALLERY[i].src)} alt={GALLERY[i].label} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <p className="lb-cap">{GALLERY[i].label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Contact() {
  const [err, setErr] = useState("");
  const form = useRef(null);
  const build = () => {
    const d = new FormData(form.current);
    if (!/^\S+@\S+\.\S+$/.test(d.get("email"))) return setErr("Entrez une adresse email valide.");
    if (!d.get("nom").trim() || !d.get("message").trim()) return setErr("Renseignez votre nom et votre message.");
    setErr("");
    return [`Nom : ${d.get("nom")}`, `Email : ${d.get("email")}`, `Arrivée : ${d.get("arrivee") || "à préciser"}`,
      `Départ : ${d.get("depart") || "à préciser"}`, `Personnes : ${d.get("personnes")}`, "", d.get("message")].join("\n");
  };
  const mail = (e) => { e.preventDefault(); const b = build(); if (b) location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Demande - La Petite Gorge")}&body=${encodeURIComponent(b)}`; };
  const wa = () => { const b = build(); if (b) window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(b)}`, "_blank", "noopener"); };
  return (
    <>
      <PageHead title="Nous contacter" lead="Pour une demande de séjour, une table ou un transfert. Nous répondons par message dès que possible." />
      <section className="section"><div className="wrap two-col">
        <form ref={form} className="form" onSubmit={mail} noValidate>
          <label>Nom<input name="nom" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <div className="row"><label>Arrivée<input name="arrivee" type="date" /></label><label>Départ<input name="depart" type="date" /></label></div>
          <label>Nombre de personnes<input name="personnes" type="number" min="1" max="30" defaultValue="2" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          {err && <p className="form-error" role="alert">{err}</p>}
          <div className="hero-cta"><button className="btn" type="submit">Envoyer par email</button><button className="btn btn-ghost dark" type="button" onClick={wa}>Envoyer sur WhatsApp</button></div>
        </form>
        <aside className="info">
          <h2>Coordonnées</h2>
          <p>{SITE.address}</p>
          <p><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <h2>Horaires</h2>
          <p>Arrivée à partir de 14h, départ avant 10h.<br />Petit-déjeuner de 7h00 à 10h30.</p>
          <p><Booking small /></p>
        </aside>
      </div></section>
    </>
  );
}
