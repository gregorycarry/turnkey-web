import type { Lang } from "../i18n/ui";

export interface ListingImage {
  src: string;
  alt: string;
}

export interface ListingMetric {
  label: string;
  value: string;
}

export interface Listing {
  code: string;
  type: string;
  zone: string;
  kind: "trespasse" | "walls";
  category: "fb" | "commerce" | "atypical";
  price?: string;
  description?: string;
  images?: ListingImage[];
  /** Absolute URL to a 1200x630 image used for social-share previews (WhatsApp, etc). */
  ogImage?: string;
  metrics: ListingMetric[];
  financials?: ListingMetric[];
  mapQuery?: string;
  /** Explicit center coordinates so the embed reliably zooms to the neighbourhood instead of defaulting to a world view. */
  mapLat?: number;
  mapLng?: number;
  metro?: string;
  nearbyShops?: string;
  environment?: string[];
  strengths: string[];
  reason: string;
}

// Site-relative detail page URL for a given listing code, per language
// (slugs differ across languages, consistent with the rest of the site's routing).
export function listingDetailUrl(lang: Lang, code: string): string {
  const slug = lang === "pt" ? "mandato" : lang === "fr" ? "mandat" : "listing";
  const prefix = lang === "pt" ? "" : `/${lang}`;
  return `${prefix}/${slug}/${code}`;
}

export function listingDetailUrls(code: string): Record<Lang, string> {
  return {
    pt: listingDetailUrl("pt", code),
    fr: listingDetailUrl("fr", code),
    en: listingDetailUrl("en", code),
  };
}

// Active mandates (featured listings) — translations inline so we don't bloat ui.ts
export function getListings(lang: Lang): Listing[] {
  const tr = (pt: string, fr: string, en: string) => (lang === "pt" ? pt : lang === "fr" ? fr : en);

  return [
    {
      code: "TK-2026-005",
      type: tr("Restaurante de tapas", "Restaurant de tapas", "Tapas restaurant"),
      zone: tr("Chaves · Norte de Portugal", "Chaves · nord du Portugal", "Chaves · Northern Portugal"),
      kind: "trespasse" as const,
      category: "fb" as const,
      ogImage: "https://turnkey.pt/listings/tk-2026-005/og.jpg",
      description: tr(
        "No coração do centro histórico de Chaves, um restaurante de tapas que é também galeria de arte. Paredes de granito à vista, vigas de madeira, balcão em mármore e cozinha à vista da sala criam um ambiente quente e autêntico, onde quadros e cerâmicas fazem parte da experiência. São 80 m² e 48 lugares no interior, em duas salas distintas, com cozinha equipada e equipamento da empresa incluído. Aberto desde junho de 2026, é um conceito com identidade própria, pronto a ser continuado por quem quiser explorar um espaço com carácter.",
        "Au cœur du centre historique de Chaves, un restaurant de tapas qui est aussi une galerie d'art. Murs en granit apparent, poutres en bois, comptoir en marbre et cuisine visible depuis la salle créent une ambiance chaleureuse et authentique, où tableaux et céramiques font partie de l'expérience. Soit 80 m² et 48 couverts en salle, répartis en deux espaces distincts, avec cuisine équipée et matériel de la société inclus. Ouvert depuis juin 2026, un concept à l'identité forte, prêt à être poursuivi par un exploitant qui cherche un lieu de caractère.",
        "In the heart of Chaves' historic centre, a tapas restaurant that is also an art gallery. Exposed granite walls, wooden beams, a marble bar and a kitchen visible from the dining room create a warm, authentic atmosphere, where paintings and ceramics are part of the experience. 80 sqm with 48 indoor seats across two distinct rooms, with an equipped kitchen and company equipment included. Open since June 2026, a concept with a strong identity, ready to be carried on by an operator looking for a space with character."
      ),
      images: [
        { src: "/listings/tk-2026-005/cover.jpg", alt: tr("Sala com quadros e paredes de pedra", "Salle aux tableaux et murs en pierre", "Dining room with paintings and stone walls") },
        { src: "/listings/tk-2026-005/room.jpg", alt: tr("Sala em pedra à vista com aparador e candeeiro", "Salle en pierre apparente avec buffet et lampe", "Stone dining room with sideboard and lamp") },
        { src: "/listings/tk-2026-005/table.jpg", alt: tr("Mesa posta junto à pedra à vista", "Table dressée contre la pierre apparente", "Set table against exposed stone") },
        { src: "/listings/tk-2026-005/window.jpg", alt: tr("Mesa junto à janela com cortinas", "Table près de la fenêtre aux voilages", "Table by the window with sheer curtains") },
        { src: "/listings/tk-2026-005/ceramics.jpg", alt: tr("Cerâmicas expostas", "Céramiques exposées", "Displayed ceramics") },
        { src: "/listings/tk-2026-005/art.jpg", alt: tr("Mesa comprida e quadro de arte", "Longue table et tableau d'art", "Long table and artwork") },
        { src: "/listings/tk-2026-005/round.jpg", alt: tr("Mesa redonda em madeira e quadros", "Table ronde en bois et tableaux", "Round wooden table and paintings") },
      ],
      metrics: [
        { label: tr("Área", "Surface", "Area"), value: "80 m²" },
        { label: tr("Capacidade", "Capacité", "Capacity"), value: tr("48 lugares (interior)", "48 couverts (intérieur)", "48 seats (indoor)") },
        { label: tr("Volume de negócios", "Chiffre d'affaires", "Turnover"), value: tr("Sob consulta", "Sur demande", "On request") },
        { label: tr("Certificado energético", "Certificat énergétique", "Energy rating"), value: "C" },
        { label: tr("Preço", "Prix", "Price"), value: tr("Sob consulta", "Sur demande", "On request") },
      ],
      environment: [
        tr("Centro histórico", "Centre historique", "Historic centre"),
        tr("Perto da fronteira com a Galiza", "Proche de la frontière galicienne", "Close to the Galician border"),
      ],
      strengths: [
        tr("Conceito diferente: tapas e galeria de arte, com quadros e cerâmicas integrados", "Concept singulier : tapas et galerie d'art, tableaux et céramiques intégrés", "Distinctive concept: tapas and art gallery, with paintings and ceramics built in"),
        tr("Pedra à vista, vigas de madeira e balcão em mármore: um espaço com carácter", "Pierre apparente, poutres en bois et comptoir en marbre : un lieu de caractère", "Exposed stone, wooden beams and a marble bar: a space with character"),
        tr("48 lugares no interior, cozinha equipada e equipamento da empresa incluído", "48 couverts en salle, cuisine équipée et matériel de la société inclus", "48 indoor seats, equipped kitchen and company equipment included"),
        tr("Centro histórico de Chaves, perto da fronteira com a Galiza; aberto desde junho de 2026", "Centre historique de Chaves, proche de la frontière galicienne ; ouvert depuis juin 2026", "Historic centre of Chaves, close to the Galician border; open since June 2026"),
      ],
      reason: tr("Cedente a deixar Portugal", "Départ du Portugal de la cédante", "Seller relocating abroad"),
    },
    {
      code: "TK-2026-002",
      type: tr("Cabeleireiro / Salão", "Salon de coiffure", "Hair salon"),
      zone: tr("Eixo Amoreiras / Marquês de Pombal", "Axe Amoreiras / Marquês de Pombal", "Amoreiras / Marquês de Pombal axis"),
      kind: "trespasse" as const,
      category: "commerce" as const,
      price: "250 000 €",
      ogImage: "https://turnkey.pt/listings/tk-2026-002/og.jpg",
      description: tr(
        "Salão de cabeleireiro instalado há mais de 15 anos no eixo Amoreiras / Marquês de Pombal, uma zona que combina escritórios, residencial e forte fluxo pedonal. Os 240 m² distribuem-se por dois pisos: rés-do-chão com receção, postos de trabalho e lavatórios, e um piso dedicado a tratamentos com sala de spa/massagem. A equipa de 7 pessoas está pronta para continuar a atividade sem interrupção, com equipamento recente de marcas premium. Clientela fiel e faturação regular e constante, com forte perspetiva de evolução.",
        "Salon de coiffure installé depuis plus de 15 ans sur l'axe Amoreiras / Marquês de Pombal, un quartier qui mêle bureaux, résidentiel et fort passage piéton. Les 240 m² se répartissent sur deux niveaux : rez-de-chaussée avec réception, postes de coiffure et bacs à shampoing, et un étage dédié aux soins avec salle de spa/massage. L'équipe de 7 personnes est en place et prête à poursuivre l'activité sans interruption, avec un équipement récent de marques premium. Clientèle fidèle et facturation régulière et constante, avec une forte perspective d'évolution.",
        "Hair salon established for over 15 years on the Amoreiras / Marquês de Pombal axis, a district combining offices, residential and high foot traffic. The 240 sqm span two floors: ground floor with reception, styling stations and wash basins, and an upper floor dedicated to treatments with a spa/massage room. The 7-person team is in place and ready to continue operating without interruption, with recent premium-brand equipment. Loyal clientele with regular, steady billing and strong growth potential."
      ),
      images: [
        { src: "/listings/tk-2026-002/amoreiras.jpg", alt: tr("Zona das Amoreiras", "Quartier des Amoreiras", "Amoreiras area") },
        { src: "/listings/tk-2026-002/cover.jpg", alt: tr("Receção", "Réception", "Reception") },
        { src: "/listings/tk-2026-002/stairs.jpg", alt: tr("Entrada e receção, dois pisos", "Entrée et réception, deux étages", "Entrance and reception, two floors") },
        { src: "/listings/tk-2026-002/station.jpg", alt: tr("Posto de trabalho individual", "Poste de travail individuel", "Individual styling station") },
        { src: "/listings/tk-2026-002/row.jpg", alt: tr("Sala de corte com luz natural", "Salle de coupe avec lumière naturelle", "Styling room with natural light") },
        { src: "/listings/tk-2026-002/spa.jpg", alt: tr("Sala de tratamento / spa", "Salle de soin / spa", "Treatment / spa room") },
        { src: "/listings/tk-2026-002/lounge.jpg", alt: tr("Espaço de espera", "Espace d'attente", "Waiting area") },
        { src: "/listings/tk-2026-002/wash.jpg", alt: tr("Zona de lavagem", "Zone de lavage", "Wash station") },
      ],
      metrics: [
        { label: tr("Área (r/c + 1º andar)", "Surface (rdc + étage)", "Area (ground + 1st floor)"), value: "240 m² (90 m² + 150 m²)" },
        { label: tr("Volume de negócios", "Chiffre d'affaires", "Turnover"), value: tr("~400 000 €/ano", "~400 000 €/an", "~€400,000/year") },
        { label: tr("Certificado energético", "Certificat énergétique", "Energy rating"), value: "B" },
      ],
      financials: [
        { label: tr("Renda mensal", "Loyer mensuel", "Monthly rent"), value: "3 950 €" },
        { label: tr("Honorários de intermediação", "Honoraires d'intermédiation", "Agency fee"), value: "12 500 €" },
      ],
      mapQuery: "Amoreiras, Lisboa",
      mapLat: 38.7237,
      mapLng: -9.1634,
      metro: tr("Rato / Marquês de Pombal (~15 min a pé)", "Rato / Marquês de Pombal (~15 min à pied)", "Rato / Marquês de Pombal (~15 min walk)"),
      nearbyShops: tr("Comércio de proximidade: centro comercial, bancos, farmácias, restauração", "Commerces de proximité : centre commercial, banques, pharmacies, restauration", "Nearby amenities: shopping center, banks, pharmacies, restaurants"),
      environment: [
        tr("Zona de escritórios", "Quartier de bureaux", "Office area"),
        tr("Zona residencial", "Quartier résidentiel", "Residential area"),
        tr("Fluxo pedonal elevado", "Flux piéton important", "High foot traffic"),
      ],
      strengths: [
        tr("Equipa de 7 pessoas pronta a continuar", "Équipe de 7 personnes prête à continuer", "7-person team ready to stay"),
        tr("Contrato de arrendamento estável há mais de 15 anos", "Bail stable depuis plus de 15 ans", "Stable lease for over 15 years"),
        tr("Pronto a funcionar, sem obras necessárias", "Clé en main, aucuns travaux nécessaires", "Turnkey, no renovation needed"),
        tr("Equipamento premium incluído (Davines, Kevin Murphy)", "Équipement premium inclus (Davines, Kevin Murphy)", "Premium equipment included (Davines, Kevin Murphy)"),
        tr("Sala de spa/massagem dedicada no 1º andar", "Salle de spa/massage dédiée à l'étage", "Dedicated spa/massage room on the upper floor"),
        tr("Localização central, a 15 min a pé do Rato / Marquês de Pombal", "Emplacement central, à 15 min à pied du Rato / Marquês de Pombal", "Central location, 15-minute walk from Rato / Marquês de Pombal"),
        tr("Certificado energético B", "Certificat énergétique B", "Energy rating B"),
        tr("Clientela fidelizada ao longo de mais de 15 anos", "Clientèle fidélisée depuis plus de 15 ans", "Loyal clientele built over more than 15 years"),
      ],
      reason: tr("Transmissão de propriedade", "Transmission de propriété", "Ownership transition"),
    },
    {
      code: "TK-2026-003",
      type: tr("Restaurante com esplanadas", "Restaurant avec terrasses", "Restaurant with terraces"),
      zone: tr("Graça / Lisboa Centro", "Graça / Lisbonne Centre", "Graça / Central Lisbon"),
      kind: "trespasse" as const,
      category: "fb" as const,
      description: tr(
        "Restaurante com esplanadas no coração da Graça, um dos bairros mais vivos do centro histórico de Lisboa. Capacidade total de cerca de 90 lugares, distribuídos entre esplanada de rua, sala interior e jardim interior — uma combinação rara para este tipo de morada.",
        "Restaurant avec terrasses au cœur de Graça, l'un des quartiers les plus vivants du centre historique de Lisbonne. Capacité totale d'environ 90 couverts, répartis entre terrasse de rue, salle intérieure et jardin intérieur — une combinaison rare pour ce type d'adresse.",
        "Restaurant with terraces in the heart of Graça, one of the liveliest neighborhoods in Lisbon's historic center. Total capacity of about 90 seats, spread across a street terrace, an indoor room and an indoor garden — a rare combination for this kind of address."
      ),
      metrics: [
        { label: tr("Capacidade total", "Capacité totale", "Total capacity"), value: tr("~90 lugares", "~90 places", "~90 seats") },
        { label: tr("Preço", "Prix", "Price"), value: tr("Sob consulta", "Sur demande", "On request") },
      ],
      strengths: [
        tr("Esplanada de rua (10 lugares)", "Terrasse de rue (10 places)", "Street terrace (10 seats)"),
        tr("Sala interior 50 lugares", "Salle intérieure 50 places", "Indoor room 50 seats"),
        tr("Jardim interior 30 lugares", "Jardin intérieur 30 places", "Indoor garden 30 seats"),
        tr("Localização central na Graça, grande visibilidade", "Emplacement central à Graça, forte visibilité", "Central Graça location, high visibility"),
        tr("Três espaços distintos para modular a exploração", "Trois espaces distincts pour moduler l'exploitation", "Three distinct spaces to flex the operation"),
      ],
      reason: tr("Reorientação profissional", "Réorientation professionnelle", "Career change"),
    },
    {
      code: "TK-2026-004",
      type: tr("Paredes comerciais (loja)", "Murs commerciaux (local)", "Commercial walls (unit)"),
      zone: tr("Alcântara / Lisboa", "Alcântara / Lisbonne", "Alcântara / Lisbon"),
      kind: "walls" as const,
      category: "atypical" as const,
      description: tr(
        "Paredes comerciais de 80 m² em Alcântara, bairro lisboeta em plena revalorização. Um investimento imobiliário puro, sem exploração a retomar, com potencial de rendimento locativo interessante a médio prazo.",
        "Murs commerciaux de 80 m² à Alcântara, quartier lisboète en pleine revalorisation. Un investissement immobilier pur, sans exploitation à reprendre, avec un potentiel de rendement locatif intéressant à moyen terme.",
        "Commercial walls of 80 sqm in Alcântara, a Lisbon district undergoing strong revaluation. A pure real-estate investment with no business to take over, offering attractive medium-term rental yield potential."
      ),
      metrics: [
        { label: tr("Área", "Surface", "Area"), value: "80 m²" },
        { label: tr("Preço", "Prix", "Price"), value: tr("Sob consulta", "Sur demande", "On request") },
      ],
      strengths: [
        tr("Investimento imobiliário puro", "Investissement immobilier pur", "Pure real-estate investment"),
        tr("Rendimento locativo potencial", "Rendement locatif potentiel", "Rental yield potential"),
        tr("Zona em revalorização", "Quartier en revalorisation", "Area in revaluation"),
        tr("Sem exploração a retomar, liberdade total de arrendatário", "Aucune exploitation à reprendre, liberté totale sur le locataire", "No business to take over, full freedom on tenant choice"),
      ],
      reason: tr("Venda proprietário", "Vente propriétaire", "Owner sale"),
    },
  ];
}
