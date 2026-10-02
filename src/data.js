// Toutes les infos à modifier sont ici.
export const SITE = {
  name: "La Petite Gorge",
  phone: "+212 6 00 00 00 00",
  phoneRaw: "+212600000000",
  whatsapp: "212600000000",
  email: "contact@lapetitegorge.example",
  address: "Gorge de Todgha, Toudgha El Oulia, Tinghir 45800, Maroc",
  booking: "https://www.booking.com/hotel/ma/auberge-restaurant-la-petite-gorge.fr.html",
};

export const FACTS = [
  ["Chambres", "12, toutes climatisées"],
  ["Petit-déjeuner", "Gratuit, préparé à la commande, 7h00 à 10h30"],
  ["Arrivée / départ", "À partir de 14h / avant 10h"],
  ["Sur place", "Wi-Fi et parking gratuits"],
];

export const ROOMS = [
  { img: "chambre-1.jpg", title: "Chambre double", text: "Un grand lit ou deux lits séparés selon votre demande, climatisation et Wi-Fi gratuit.", booking: true },
  { img: "chambre-2.jpg", title: "Chambre triple", text: "Pour trois voyageurs, avec les mêmes équipements que la chambre double.", booking: true },
  { img: "chambre-3.jpg", title: "Chambre familiale", text: "Une chambre plus grande pour les familles ou les petits groupes. Demandez-nous la disposition disponible." },
];

export const INCLUDED = [
  "Climatisation dans toutes les chambres", "Wi-Fi gratuit",
  "Petit-déjeuner gratuit préparé à la commande, de 7h00 à 10h30", "Parking gratuit",
  "Jardin et terrasse", "Café et thé dans le salon commun",
];
export const GOOD_TO_KNOW = [
  "Arrivée à partir de 14h, départ avant 10h", "Les animaux ne sont pas acceptés",
  "Pas de piscine ni de spa", "Pas de navette aéroport", "Prévenez-nous 24 heures avant une arrivée",
];

export const DISHES = [
  ["Tajine de poulet aux olives et citron confit", "Mijoté lentement, servi avec du pain maison."],
  ["Tajine d'agneau aux pruneaux", "Sucré-salé, amandes grillées."],
  ["Couscous aux sept légumes", "Semoule fine, bouillon parfumé, légumes de saison."],
  ["Brochettes grillées", "Viande marinée, grillée au charbon, salade et frites."],
  ["Omelette berbère", "Œufs, tomates, oignons, épices, cuite en tajine."],
  ["Salade marocaine", "Tomates, concombre, oignon, huile d'olive."],
];

export const SPOTS = [
  ["gorge-1.jpg", "La gorge du Todra", "À une minute à pied de l'auberge. Les parois calcaires s'élèvent à plusieurs centaines de mètres au-dessus d'un passage très étroit. Y aller tôt le matin ou en fin d'après-midi pour éviter la chaleur et les groupes."],
  ["palmeraie.jpg", "La palmeraie de Tinghir", "Une longue oasis de palmiers et de jardins en terrasses, à parcourir à pied ou à vélo entre les villages. Comptez une demi-journée."],
  ["village.jpg", "Les villages berbères", "Des ksour en pisé et des kasbahs dans la vallée du Todra. Un guide local vous aide à comprendre l'irrigation et la vie des familles."],
  ["desert.jpg", "Le désert de Merzouga", "Les dunes de l'Erg Chebbi se trouvent plus au sud-est. Tinghir est une étape classique entre Ouarzazate et Merzouga."],
  ["dades.jpg", "Les gorges du Dadès", "À l'ouest, une autre route spectaculaire avec ses falaises en « doigts de singe » et ses virages en lacets."],
];

export const GALLERY = [
  "La gorge", "L'auberge", "Le jardin", "La terrasse", "Une chambre",
  "Le restaurant", "La palmeraie", "Le petit-déjeuner", "Le village",
].map((label, i) => ({ src: `galerie-${i + 1}.jpg`, label }));
