import en from "../locales/en.json";
import pt from "../locales/pt.json";

export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];
export type PageSlug = keyof typeof pt.pages;

type Dictionary = typeof pt;
type CommonMessages = Dictionary["common"];

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getPage(locale: Locale, slug: string) {
  return getDictionary(locale).pages[slug as PageSlug];
}

export function getPageSlugs(): PageSlug[] {
  return Object.keys(pt.pages) as PageSlug[];
}

export function t<Key extends keyof CommonMessages>(locale: Locale, key: Key): CommonMessages[Key] {
  return getDictionary(locale).common[key];
}

export function localizedPath(locale: Locale, slug = ""): string {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return normalizedSlug ? `/${locale}/${normalizedSlug}/` : `/${locale}/`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const locale = pathname.split("/").filter(Boolean)[0];
  return isLocale(locale) ? locale : "pt";
}

export function getPathFromLocalePath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  return isLocale(segments[0]) ? segments.slice(1).join("/") : segments.join("/");
}

export function localizedHref(locale: Locale, href?: string): string | undefined {
  if (!href || !href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  const [pathWithQuery, hash = ""] = href.split("#", 2);
  const [pathname, query = ""] = pathWithQuery.split("?", 2);
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    return href;
  }

  const localized = localizedPath(locale, segments.join("/"));
  const querySuffix = query ? `?${query}` : "";
  const hashSuffix = hash ? `#${hash}` : "";

  return `${localized}${querySuffix}${hashSuffix}`;
}

export function documentLanguage(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}

export function ogLocale(locale: Locale): string {
  return locale === "pt" ? "pt_BR" : "en_US";
}
