# DESIGN.md — KARV

> Design system da KARV para o Claude Design. **Fonte única dos tokens = este arquivo**, versionado no `karv-lps`. Importe daqui via `/design-sync`; não regenere do zero.
> Status: **proposta estrutural (aguardando sign-off)**. Refinamento só após confirmação.

---

## 1. Essência da marca

- **Nome:** deriva de *carve* (esculpir). Tudo comunica material trabalhado, não estampado.
- **Símbolo:** o "A" do logo tem a barra central substituída por um **ponto central** = estrutura encontra identidade. É o elemento gráfico assinatura.
- **Arquétipos:** Creator + Visionary.
- **Posicionamento:** poltrona premium **customizável**, editorial e escultural. Nunca "moderno genérico".
- **Regra dura:** o nome do fornecedor de tecido **nunca** aparece em nenhum output.

## 2. Direção visual

KARV deve parecer uma peça de mobiliário premium em um espaço cuidadosamente iluminado: material, volume, sombra e respiro. A interface não pode ser plana, genérica ou excessivamente minimalista.

- **Profundidade antes de decoração:** use camadas de fundo, luz ambiente, textura e sombra suave para criar volume.
- **Conforto visual:** contraste legível, blocos de leitura acolhedores e ritmo entre áreas escuras e claras.
- **Presença editorial:** imagens grandes, títulos expressivos e composição assimétrica com intenção.
- **Matéria visível:** tecido, madeira, metal e curvaturas da poltrona devem orientar a sensação visual.

## 3. Tom visual (faça / evite)

| Faça | Evite |
|---|---|
| Layout editorial, com alternância de compressão e respiro | Grids densos tipo dashboard/SaaS |
| Tipografia como protagonista e títulos em camadas | Ícones decorativos e interface genérica |
| Fundos tonais, luz ambiente, textura e sombra suave | Blocos chapados, sombras duras ou alto contraste agressivo |
| Bronze como acento luminoso e material | Bronze como cor de fundo dominante |
| Elevação sutil em cards e painéis | Cards brancos planos ou bordas sem intenção |
| Produto com geometria fiel e íntegra | Poltrona deformada, "estilizada" ou cropada errado |

## 4. Cores e iluminação (tokens)

> A paleta trabalha por camadas de profundidade. Não use uma cor sólida isolada como solução visual padrão.

```
--color-ink:        #181513   /* fundo escuro profundo, quente */
--color-ink-raised: #28221E   /* camada escura elevada */
--color-paper:      #F1ECE4   /* fundo claro, nunca branco puro */
--color-sand:       #D3C3AF   /* superfície quente e suave */
--color-greige:     #A89D90   /* neutro de apoio */
--color-clay:       #806B5B   /* profundidade quente e detalhes */
--color-bronze:     #A77B48   /* metal/acento e CTA */
--color-bronze-ink: #75502C   /* bronze escuro para hover */
--color-glow:       #E8D5B5   /* reflexo de luz, uso contido */
```

- **Superfícies claras:** combine `paper`, `sand` e uma textura quase imperceptível; evite áreas grandes de branco puro.
- **Superfícies escuras:** use `ink` como base e `ink-raised` para painéis, com reflexo sutil em `glow`.
- **Luz:** gradientes radiais muito suaves, vinhetas e halos atrás do produto são permitidos quando simularem iluminação de estúdio. Nunca usar gradientes vibrantes ou multicoloridos.
- **Bronze:** é um reflexo de metal, não uma cor de preenchimento. Use em CTA, linhas finas, detalhes e pontos de foco.

## 5. Tipografia

- **Display / títulos:** Fraunces (serifada editorial, pesos altos, opsz alto).
- **Texto / UI:** Inter.

```
--font-display: "Fraunces", serif;
--font-text:    "Inter", sans-serif;
--step-hero:   clamp(2.75rem, 6vw, 5.5rem);  /* Fraunces */
--step-h2:     clamp(1.75rem, 3vw, 2.75rem);
--step-body:   1.0625rem;                     /* Inter, 1.6 line-height */
```

Títulos podem sobrepor discretamente uma imagem, bloco tonal ou linha de grade, desde que a leitura permaneça clara. Evite centralizar todas as seções: a composição deve alternar alinhamentos para criar ritmo.

## 6. Layout, ritmo e profundidade

- Grid editorial de 12 colunas, gutters largos e seções com bastante altura.
- Alinhamento assimétrico permitido (peça escultural pede tensão visual).
- Container máx. ~1200–1280px; margens laterais generosas no desktop.
- Alterne seções amplas e contemplativas com blocos mais compactos de informação; não deixe toda a página com o mesmo espaçamento.
- Crie profundidade com sobreposição controlada: uma imagem pode avançar sobre a seção seguinte, e um painel pode flutuar sobre um fundo tonal.
- Limite a duas camadas de sobreposição por seção. A sensação deve ser sofisticada, não confusa.

## 7. Componentes

- **Botão primário (CTA):** fundo `bronze`, texto `ink`, cantos levemente arredondados, borda interna clara e sombra curta, quente e difusa. No hover, aumente levemente a luz e a elevação.
- **Botão secundário:** fundo transparente ou `ink-raised`, borda de baixo contraste e texto `paper` ou `ink`, conforme o fundo.
- **CTA padrão = WhatsApp** (nunca formulário genérico). Formato: `https://wa.me/5511945197063?text=...`.
- **E-mail oficial em todas as LPs:** `comercial@k-arv.com`.
- **Cards de produto:** imagem WebP grande, título Fraunces, tag da família de estofado e foco na textura. Use fundo tonal, borda discreta e sombra de contato; não use card branco flutuando em fundo branco.
- **Painéis de conteúdo:** diferencie a superfície do fundo com tom, transparência ou ruído sutil. Bordas devem sugerir acabamento, não caixas rígidas.
- **Nav:** minimalista, logo "A"-ponto à esquerda, poucos itens e fundo com leve transparência ou contraste tonal quando sobreposto ao hero.

## 8. Movimento (motion)

- **Safe zone (liberado):** reveal do logo, fades, parallax de fundo, transições de seção.
- **Reveal do "A":** o ponto central se forma por último — é o momento-assinatura.
- **Profundidade:** use movimento de camadas em velocidades discretamente diferentes para reforçar volume; nunca mova todo o conteúdo na mesma direção.
- **Gate de geometria (restrito):** qualquer animação **do produto em movimento** (girar, explodir estrutura EPS) só entra se **passar no gate de fidelidade geométrica** — a poltrona não pode deformar. Vale também para Higgsfield (em teste).

## 9. Imagens e elementos 3D

- Sempre **preservar a geometria original** da poltrona; nada de crop que corte estrutura ou proporção.
- Entregar responsivo em **WebP**.
- Preferir ambientação com luz lateral, sombra de contato e fundo com gradiente tonal; o produto precisa parecer presente no espaço.
- Mostrar textura do estofado, curvatura e detalhes de acabamento em closes editoriais.
- Elementos 3D são complementares: formas abstratas, materiais ou volumes suaves podem criar profundidade, mas nunca competir com a poltrona.
- Um único elemento 3D ou direção de textura por LP é suficiente. Ele deve reforçar o tema daquela poltrona ou mercado.

## 10. Estrutura de LP (referência)

- **LP de produto:** 8 seções (padrão da skill *KARV Figma LP Designer*).
- **LP institucional:** 12 seções.
- Domínios canônicos: apex `k-arv.com` (institucional) · `loja.k-arv.com` (Shopify) · produto `kv-xxx-nome.k-arv.com`.

## 11. Governança

- **Arquitetura primeiro**, sem mudança automática sem sign-off.
- Este `DESIGN.md` é a **fonte única** dos tokens KARV, versionado no `karv-lps`.
- Sequência fixa: **estrutura → confirmação → refinamento**.
- Para cada nova LP, mantenha a base KARV e defina apenas: duas ou três cores de apoio, uma direção de luz/textura e um elemento 3D opcional.
