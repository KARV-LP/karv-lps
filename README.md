# KARV Landing Pages

Site institucional da KARV, desenvolvido com Astro 7 e Tailwind CSS 4.

## Setup

```sh
npm install
npm run dev
```

O projeto requer Node.js 22.12 ou superior. O servidor local fica disponível em `http://localhost:4321`.

## Tokens e Tailwind CSS 4

Os tokens canônicos da KARV ficam em `src/styles/tokens.css`. `src/styles/global.css` os importa uma única vez e os disponibiliza ao Tailwind por `@theme`; não há `tailwind.config.js`, configuração PostCSS ou `autoprefixer`.

O plugin oficial `@tailwindcss/vite` está configurado em `astro.config.mjs`. Use apenas as utilities `karv-*` para valores definidos no design system:

```astro
<section class="bg-karv-ink text-karv-paper px-karv-4 py-karv-16">
  <h1 class="font-karv-display text-karv-hero leading-karv-tight">...</h1>
  <a class="rounded-karv-pill bg-karv-bronze px-karv-6 py-karv-3">...</a>
</section>
```

As classes seguem os tokens CSS existentes: cores (`bg-karv-bronze`), tipografia (`font-karv-display`, `text-karv-h2`), espaçamento (`gap-karv-2`, `py-karv-16`), raio (`rounded-karv-md`) e sombra (`shadow-karv-contact`). Para estilos específicos de componentes, mantenha as propriedades CSS canônicas, como `var(--color-accent)`.

## Comandos

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
