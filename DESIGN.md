# DESIGN.md — KARV

> Design system da KARV para o Claude Design. Fonte única de verdade dos tokens = repositório institucional (`KARV-LP`). Importe daqui via `/design-sync`; não regenere do zero.
> Status: **proposta estrutural (aguardando sign-off)**. Refinamento só após confirmação.

---

## 1. Essência da marca

- **Nome:** deriva de *carve* (esculpir). Tudo comunica material trabalhado, não estampado.
- **Símbolo:** o "A" do logo tem a barra central substituída por um **ponto central** = estrutura encontra identidade. É o elemento gráfico assinatura.
- **Arquétipos:** Creator + Visionary.
- **Posicionamento:** poltrona premium **customizável**, editorial e escultural. Nunca "moderno genérico".
- **Regra dura:** o nome do fornecedor de tecido **nunca** aparece em nenhum output.

## 2. Tom visual (do / don't)

| Faça | Evite |
|---|---|
| Layout editorial, muito respiro (whitespace) | Grids densos tipo dashboard/SaaS |
| Tipografia como protagonista | Ícones decorativos, gradientes vibrantes |
| Matéria: textura, sombra suave, profundidade | Flat colorido, sombras duras |
| Bronze como acento pontual | Bronze como cor de fundo dominante |
| Produto com geometria fiel e íntegra | Poltrona deformada, "estilizada" ou cropada errado |

## 3. Cores (tokens)

> Valores **propostos** — substituir pelos oficiais do LP institucional na importação.

```
--color-ink:        #101010   /* preto fosco — texto e fundos escuros */
--color-paper:      #F4F1EA   /* off-white — fundo claro base */
--color-sand:       #D6C4A6   /* areia — blocos e realces quentes */
--color-greige:     #B4AA9C   /* greige — neutros de apoio */
--color-bronze:     #B08D57   /* bronze — acento/CTA, uso pontual */
--color-bronze-ink: #8C6A3F   /* bronze escuro — hover/detalhe */
```

Modo escuro é primário em heros e seções institucionais (fundo `ink`, texto `paper`, acento `bronze`).

## 4. Tipografia

- **Display / títulos:** Fraunces (serifada editorial, pesos altos, opsz alto).
- **Texto / UI:** Inter.

```
--font-display: "Fraunces", serif;
--font-text:    "Inter", sans-serif;
--step-hero:   clamp(2.75rem, 6vw, 5.5rem);  /* Fraunces */
--step-h2:     clamp(1.75rem, 3vw, 2.75rem);
--step-body:   1.0625rem;                     /* Inter, 1.6 line-height */
```

## 5. Layout & grid

- Grid editorial de 12 colunas, gutters largos, seções com bastante altura.
- Alinhamento assimétrico permitido (peça escultural pede tensão visual).
- Container máx. ~1200–1280px; margens laterais generosas no desktop.

## 6. Componentes

- **Botão primário (CTA):** fundo `bronze`, texto `ink` ou `paper`, cantos levemente arredondados, sem sombra chamativa.
- **CTA padrão = WhatsApp** (nunca formulário genérico). Formato: `https://wa.me/5511945197063?text=...`.
- **E-mail oficial em todas as LPs:** `comercial@k-arv.com`.
- **Cards de produto:** imagem WebP, título Fraunces, tag da família de estofado, foco na textura.
- **Nav:** minimalista, logo "A"-ponto à esquerda, poucos itens, muito respiro.

## 7. Movimento (motion)

- **Safe zone (liberado):** reveal do logo, fades, parallax de fundo, transições de seção.
- **Reveal do "A":** o ponto central se forma por último — é o momento-assinatura.
- **Gate de geometria (restrito):** qualquer animação **do produto em movimento** (girar, explodir estrutura EPS) só entra se **passar no gate de fidelidade geométrica** — a poltrona não pode deformar. Vale também para Higgsfield (em teste).

## 8. Imagens

- Sempre **preservar a geometria original** da poltrona; nada de crop que corte estrutura ou proporção.
- Entregar responsivo em **WebP**.
- Preferir ambientação/luz de estúdio; textura do estofado em evidência.

## 9. Estrutura de LP (referência)

- **LP de produto:** 8 seções (padrão da skill *KARV Figma LP Designer*).
- **LP institucional:** 12 seções.
- Domínios canônicos: apex `k-arv.com` (institucional) · `loja.k-arv.com` (Shopify) · produto `kv-xxx-nome.k-arv.com`.

## 10. Governança

- **Arquitetura primeiro**, sem mudança automática sem sign-off.
- Tokens reais moram no `KARV-LP` (fonte única). Este arquivo espelha e explica; não substitui.
- Sequência fixa: **estrutura → confirmação → refinamento**.
