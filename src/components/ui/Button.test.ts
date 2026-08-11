import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Button from "./Button.astro";

test("renders localized links while preserving analytics and external-link safety", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      href: "/produtos/",
      target: "_blank",
      variant: "primary",
      "data-event": "cta_products",
      "data-location": "home-hero",
    },
    request: new Request("https://k-arv.com/en/"),
    slots: { default: "View products" },
  });

  expect(result).toContain('href="/en/produtos/"');
  expect(result).toContain('rel="noopener noreferrer"');
  expect(result).toContain('data-event="cta_products"');
  expect(result).toContain('data-location="home-hero"');
  expect(result).toContain("View products");
});
