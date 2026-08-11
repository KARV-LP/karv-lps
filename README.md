# KARV Landing Pages

Site institucional da KARV, desenvolvido com Astro 7 e Tailwind CSS 4.

## Setup

O projeto requer Node.js `>=22.12.0` e npm. Instale as dependências a partir do lockfile:

```sh
npm ci
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

O servidor local fica disponível em `http://localhost:4321`.

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

Para gerar a versão de produção, execute:

```sh
npm run build
```

Os arquivos estáticos resultantes ficam em `dist/`. Para inspecionar esse build localmente:

```sh
npm run preview
```

## CI e deploy

O workflow [CI](.github/workflows/build.yml) instala as dependências com `npm ci` e executa `npm run build`. Ele é acionado em pull requests direcionados a `main` e em pushes para `main`. Esse workflow apenas valida o build; ele não publica o site.

O arquivo [netlify.toml](netlify.toml) informa ao Netlify o comando `npm run build` e o diretório publicado `dist`. Ele não configura credenciais, uma branch de produção ou um passo de deploy.

Deploy Previews de pull requests dependem da integração Git do projeto no Netlify, configurada fora deste repositório. Quando essa integração estiver habilitada, o Netlify usará o comando e o diretório definidos em `netlify.toml` para montar o preview. Nenhum workflow deste repositório cria um preview.

Da mesma forma, um deploy de produção precisa ser disparado pela configuração externa do projeto Netlify (por exemplo, pela branch de produção definida na integração Git ou por um deploy manual). O push para `main` definido no workflow de CI executa somente a validação. Consulte [docs/netlify.md](docs/netlify.md) para os valores de ambiente e os limites dessa configuração.

## QA antes de publicar

- [ ] **Acessibilidade:** testar navegação por teclado, foco visível, link para pular ao conteúdo, textos alternativos e contraste.
- [ ] **Imagens e performance:** conferir imagens em larguras mobile e desktop, o `sizes`/`srcset`, dimensões reservadas e formatos responsivos AVIF/WebP.
- [ ] **SEO localizado:** verificar `/pt/` e `/en/`, o atributo `lang`, canonicals, `hreflang`, metadados Open Graph e o sitemap gerado.
