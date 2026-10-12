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
  images?: ListingImage[];
  metrics: ListingMetric[];
  financials?: ListingMetric[];
  mapQuery?: string;
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
      code: "TK-2026-002",
      type: tr("Cabeleireiro / Salão", "Salon de coiffure", "Hair salon"),
      zone: tr("Eixo Amoreiras / Marquês de Pombal", "Axe Amoreiras / Marquês de Pombal", "Amoreiras / Marquês de Pombal axis"),
      kind: "trespasse" as const,
      category: "commerce" as const,
      price: "250 000 €",
      images: [
        { src: "/listings/tk-2026-002/amoreiras.jpg", alt: tr("Zona das Amoreiras", "Quartier des Amoreiras", "Amoreiras area") },
        { src: "/listings/tk-2026-002/cover.jpg", alt: tr("Receção", "Réception", "Reception") },
        { src: "/listings/tk-2026-002/stairs.jpg", alt: tr("Entrada e receção, dois pisos", "Entrée et réception, deux étages", "Entrance and reception, two floors") },
        { src: "/listings/tk-2026-002/station.jpg", alt: tr("Posto de trabalho individual", "Poste de travail individuel", "Individual styling station") },
        { src: "/listings/tk-2026-002/row.jpg", alt: tr("Sala de corte com luz natural", "Salle de coupe avec lumière naturelle", "Styling room with natural light") },
        { src: "/listings/tk-2026-002/spa.jpg", alt: tr("Sala de tratamento / spa", "Salle de soin / spa", "Treatment / spa room") },
        { src: "/listings/tk-2026-002/lounge.jpg", alt: tr("Espaço de espera", "Espace d'attente", "Waiting area") },
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
      ],
      reason: tr("Transmissão de propriedade", "Transmission de propriété", "Ownership transition"),
    },
    {
      code: "TK-2026-003",
      type: tr("Restaurante com esplanadas", "Restaurant avec terrasses", "Restaurant with terraces"),
      zone: tr("Graça / Lisboa Centro", "Graça / Lisbonne Centre", "Graça / Central Lisbon"),
      kind: "trespasse" as const,
      category: "fb" as const,
      metrics: [
        { label: tr("Capacidade total", "Capacité totale", "Total capacity"), value: tr("~90 lugares", "~90 places", "~90 seats") },
        { label: tr("Preço", "Prix", "Price"), value: tr("Sob consulta", "Sur demande", "On request") },
      ],
      strengths: [
        tr("Esplanada de rua (10 lugares)", "Terrasse de rue (10 places)", "Street terrace (10 seats)"),
        tr("Sala interior 50 lugares", "Salle intérieure 50 places", "Indoor room 50 seats"),
        tr("Jardim interior 30 lugares", "Jardin intérieur 30 places", "Indoor garden 30 seats"),
      ],
      reason: tr("Reorientação profissional", "Réorientation professionnelle", "Career change"),
    },
    {
      code: "TK-2026-004",
      type: tr("Paredes comerciais (loja)", "Murs commerciaux (local)", "Commercial walls (unit)"),
      zone: tr("Alcântara / Lisboa", "Alcântara / Lisbonne", "Alcântara / Lisbon"),
      kind: "walls" as const,
      category: "atypical" as const,
      metrics: [
        { label: tr("Área", "Surface", "Area"), value: "80 m²" },
        { label: tr("Preço", "Prix", "Price"), value: tr("Sob consulta", "Sur demande", "On request") },
      ],
      strengths: [
        tr("Investimento imobiliário puro", "Investissement immobilier pur", "Pure real-estate investment"),
        tr("Rendimento locativo potencial", "Rendement locatif potentiel", "Rental yield potential"),
        tr("Zona em revalorização", "Quartier en revalorisation", "Area in revaluation"),
      ],
      reason: tr("Venda proprietário", "Vente propriétaire", "Owner sale"),
    },
  ];
}
