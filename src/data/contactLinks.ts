import { t, type Locale } from "../utils/i18n";

export function getContactLinks(locale: Locale) {
  const contact = t(locale, "contact");

  return {
    whatsapp: `https://wa.me/5511945197063?text=${encodeURIComponent(contact.whatsappMessage)}`,
    instagram:
      "https://www.instagram.com/karv.dna/?utm_source=site&utm_medium=cta&utm_campaign=contato_comercial",
    email: `mailto:comercial@k-arv.com?subject=${encodeURIComponent(contact.emailSubject)}&body=${encodeURIComponent(contact.emailMessage)}`,
    store: "https://loja.k-arv.com/"
  } as const;
}

export function getContactLabels(locale: Locale) {
  return t(locale, "contact");
}