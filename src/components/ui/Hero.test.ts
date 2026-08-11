import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Hero from "./Hero.astro";

test("renders CTA attributes and localized internal destinations", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Hero, {
    props: {
      eyebrow: "Crafted for your space",
      title: "A sculptural seat",
      text: "Made with material presence and comfort.",
      primaryCta: {
        label: "View products",
        href: "/produtos/",
        event: "cta_products",
        location: "home-hero",
      },
    },
    request: new Request("https://k-arv.com/en/"),
  });

  expect(result).toContain("<h1");
  expect(result).toContain("A sculptural seat");
  expect(result).toContain('href="/en/produtos/"');
  expect(result).toContain('data-event="cta_products"');
  expect(result).toContain('data-location="home-hero"');
});
