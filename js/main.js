(function () {
  // Coordonnées utilisées par le formulaire : à modifier ici
  var CONFIG = { email: "contact@lapetitegorge.example", whatsapp: "212600000000" };

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Galerie : visionneuse
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var close = function () { lb.hidden = true; lbImg.removeAttribute("src"); };
    document.querySelectorAll("[data-lightbox]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        if (!a.querySelector("img")) return; // pas encore de photo
        lbImg.src = a.getAttribute("href");
        lb.hidden = false;
      });
    });
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  // Formulaire de contact : ouvre l'email ou WhatsApp avec le message pré-rempli
  var form = document.getElementById("contact-form");
  if (form) {
    var err = form.querySelector(".form-error");
    function build() {
      var d = new FormData(form);
      if (!d.get("nom").trim() || !d.get("message").trim()) return null;
      return [
        "Nom : " + d.get("nom"),
        "Email : " + d.get("email"),
        "Arrivée : " + (d.get("arrivee") || "à préciser"),
        "Départ : " + (d.get("depart") || "à préciser"),
        "Personnes : " + d.get("personnes"),
        "",
        d.get("message")
      ].join("\n");
    }
    function fail(msg) { err.textContent = msg; err.hidden = false; }
    form.addEventListener("submit", function (e) {
      e.preventDefault(); err.hidden = true;
      var d = new FormData(form);
      if (!/^\S+@\S+\.\S+$/.test(d.get("email"))) return fail("Entrez une adresse email valide.");
      var body = build();
      if (!body) return fail("Renseignez votre nom et votre message.");
      location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Demande - La Petite Gorge") + "&body=" + encodeURIComponent(body);
    });
    document.getElementById("send-wa").addEventListener("click", function () {
      err.hidden = true;
      var body = build();
      if (!body) return fail("Renseignez votre nom et votre message.");
      window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(body), "_blank", "noopener");
    });
  }
})();
