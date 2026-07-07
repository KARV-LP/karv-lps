export const KARV_CONTACT_LINKS = {
  whatsapp:
    "https://wa.me/5511945197063?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20KARV%20sobre%20uma%20poltrona%20para%20meu%20ambiente.",
  instagram:
    "https://www.instagram.com/karv.dna/?utm_source=site&utm_medium=cta&utm_campaign=contato_comercial",
  email:
    "mailto:comercial.karv.sp@gmail.com?subject=Contato%20comercial%20KARV&body=Ol%C3%A1%2C%20quero%20falar%20com%20a%20KARV%20sobre%20uma%20poltrona%20para%20meu%20ambiente.",
  store: "https://www.k-arv.com/",
} as const;

export const KARV_CONTACT_LABELS = {
  whatsapp: "Conversar pelo WhatsApp",
  instagram: "Ver Instagram",
  email: "Enviar e-mail",
  store: "Ver loja KARV",
  main: "Fale com a KARV",
} as const;

// URL da página principal da KARV — destino do logo em todas as páginas/LPs.
export const KARV_HOME_URL = "https://karv-platform.netlify.app/";

// Loja Shopify da KARV. Enquanto o link individual de cada produto não
// estiver definido, os produtos usam a URL genérica da loja.
export const KARV_SHOPIFY = {
  store: "https://www.k-arv.com/",
  products: {
    KV_001_RYUJIN: "https://www.k-arv.com/", // TODO: COLOCAR_LINK_SHOPIFY_DA_KV_001
    KV_002_MANDALA: "https://www.k-arv.com/", // TODO: COLOCAR_LINK_SHOPIFY_DA_KV_002
  },
} as const;

// Retorna a URL Shopify de um produto (fallback: loja genérica).
export function shopifyUrlFor(productId?: string): string {
  const products = KARV_SHOPIFY.products as Record<string, string>;
  return (productId && products[productId]) || KARV_SHOPIFY.store;
}