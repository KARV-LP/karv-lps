# Netlify

## Configuracao versionada

O arquivo [`netlify.toml`](../netlify.toml) define somente:

- comando de build: `npm run build`;
- diretorio publicado: `dist`;
- comando de desenvolvimento: `npm run dev` na porta `4321`;
- headers de seguranca e redirects para a loja.

Ele nao contem uma configuracao de ambiente, token, identificador de site, branch de producao ou comando de deploy.

## Variaveis de ambiente

A unica variavel de ambiente consultada pelo codigo e usada pela function `netlify/functions/karv-briefing.js`:

| Variavel | Valor no Netlify |
| --- | --- |
| `OPENAI_API_KEY` | `<OPENAI_API_KEY>` |

Defina o valor somente na configuracao segura do projeto no Netlify, nos contextos em que a function deve utiliza-lo. Nunca registre um valor real em arquivos versionados, pull requests ou logs.

## Deploy Previews e producao

Este repositorio nao configura um deploy preview nem publica deploys por GitHub Actions. O workflow de CI somente executa `npm ci` e `npm run build` para pull requests direcionados a `main` e pushes para `main`.

Para gerar um Deploy Preview, a integracao Git do projeto no Netlify precisa estar habilitada fora do repositorio. Nessa configuracao externa, o Netlify executara `npm run build` e publicara `dist`, conforme `netlify.toml`.

O repositorio tambem nao define qual branch promove um deploy de producao. A promocao deve seguir a branch de producao ou o fluxo manual configurado no projeto Netlify. Sem essa configuracao externa, os arquivos versionados apenas permitem construir o site; nao determinam quando ele e publicado.
