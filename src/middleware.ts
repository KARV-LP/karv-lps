import { defineMiddleware } from "astro:middleware";
import { isLocale, localizedPath } from "./utils/i18n";

export const onRequest = defineMiddleware((context, next) => {
  const segments = context.url.pathname.split("/").filter(Boolean);

  if (!isLocale(segments[0])) {
    return context.redirect(localizedPath("pt", segments.join("/")));
  }

  return next();
});
