# KARV · KV-001 RYUJIN — Blueprint de handoff (Figma + Claude Code)

**Base de adaptação:** estrutura aprovada **KV-002 MANDALA**. Fluxo comercial, ordem de seções, ritmo editorial, hierarquia visual e lógica de CTA **preservados**. Adaptados apenas: conceito, copy, imagens e atmosfera.
**Fonte visual de verdade:** `LP_KV001_RYUJIN_preview.html` (frames Desktop 1440 + Mobile 375, imagens reais embutidas).
**A confirmar:** (1) família de revestimento do RYUJIN — leitura sugere *Identidade Urbana*, não afirmado como cânone; (2) contato oficial e handle social do rodapé (usei `@karv.dna` como placeholder).

> Observação de marca: RYUJIN é peça-statement. A reconciliação com "o ambiente é o protagonista" é o eixo editorial da página — RYUJIN **não impõe cor a um espaço neutro; amplifica ambientes que já têm identidade forte** (studios de tatuagem, barbearias autorais). Por isso a moldura da página é sóbria e a cor forte vive dentro das imagens.

---

## 1. Frame names
- `LP_KV001_RYUJIN_Desktop_1440` — 1440 px
- `LP_KV001_RYUJIN_Mobile_375` — 375 px

## 2. Section order (preservada de MANDALA)
1. Product hero
2. Conceito (01)
3. Arte aplicada (02)
4. Ambientes recomendados (03)
5. Valor para o espaço (04)
6. Condições comerciais (05)
7. CTA de orçamento
8. Galeria editorial / rodapé institucional

## 3. Image placement by section
Todas as fontes são horizontais 3:2 — os slots full-bleed pedem **crop vertical no mobile** (`object-position` central).

| Seção | Imagem | Papel | Crop |
|---|---|---|---|
| 1. Hero | `KV-001_RYUJIN__13_.jpg` | Hero frontal no ambiente (neon "TATTOO STUDIO") | Desktop horizontal full-bleed · Mobile vertical (foco na poltrona) |
| 2. Conceito | `KV-001_RYUJIN__9_.jpg` | Produto isolado fundo branco (silhueta autoral, pés de madeira) | Desktop retrato/quadrado no col direito · Mobile largura cheia |
| 3. Arte aplicada | `KV-001_RYUJIN__11_.jpg`, `KV-001_RYUJIN__3_.jpg`, `KV-001_RYUJIN__5_.jpg` | Macros: dragão+peônia / costura bouclé×veludo / vermelho | Grid 3 no desktop · empilhado no mobile |
| 4. Ambientes | `KV-001_RYUJIN__12_.jpg`, `KV-001_RYUJIN__15_.jpg`, `KV-001_RYUJIN__14_.jpg` | Studio tatuagem / barbearia autoral / espaço expressivo | Grid 3 · empilhado (2 no mobile p/ ritmo) |
| 5. Valor | `KV-001_RYUJIN__14_.jpg` | Poltrona amplificando o espaço (3/4 dramático) | Full-bleed lateral no desktop · topo no mobile |
| 8. Galeria/rodapé | `KV-001_RYUJIN__12_.jpg` | Fechamento editorial antes do rodapé | Full-bleed |

*Excluído de uso institucional:* nenhuma imagem tem texto promocional embutido; todas aprovadas. Nenhuma imagem de campanha/social foi incluída.

## 4. Desktop layout direction (1440)
- Container 1200, margens laterais 120. Grid mental de 12 col.
- **Ritmo vertical:** padding de seção 150 px; alternância de fundo `off-white (#F3EEE6)` ↔ `areia (#E7DECF)` para respiro. CTA e rodapé em `preto fosco (#15120E)`.
- Hero 760 px, imagem full-bleed com scrim duplo (esquerda + base) para legibilidade; texto ancorado embaixo-esquerda dentro da margem 120; code-mark 龍神 no topo-direito.
- Conceito e Valor em split 2 col (imagem + texto). Valor usa imagem full-bleed até a borda (quebra o container) para tensão editorial.
- Arte aplicada e Ambientes em grids de 3 com legendas em caption (uppercase, tracking).

## 5. Mobile layout direction (375)
- Margem lateral 24; imagens full-bleed quebram a margem.
- Reflow real (não é o desktop espremido): tudo empilhado, hero 600 px com crop vertical, um CTA primário à vista no hero.
- Grids viram stack de largura cheia; Ambientes reduz para 2 imagens no fluxo principal para manter ritmo.
- Padding de seção 64.

## 6. CTA placement (hierarquia consistente)
- **Primário:** `Solicitar orçamento` — bronze `#96774B`, texto claro, uppercase tracking .2em, sem raio (editorial). Aparece: (a) hero, discreto sobre imagem; (b) seção 7, bloco dedicado em preto fosco; (c) implícito no rodapé.
- **Secundário:** `Ver ambientes` (hero) e `Falar com a KARV` (CTA) — link com underline bronze, sem peso de botão.
- Mobile: primário sempre full-tap no hero e na seção 7.

## 7. Typography & spacing notes
- **Display (editorial):** serifa refinada — stack `Iowan Old Style / Palatino / Georgia`. Hero ~104 px desktop / 56 px mobile; títulos de seção 40–50 / 26–30. Leading apertado (~1.06), tracking negativo leve.
- **Corpo:** grotesca neutra (`Helvetica Neue / system-ui`), 16–18 px, leading 1.72, medida ~52ch.
- **Eyebrow/labels:** sans uppercase, tracking .28em, 11 px, cor bronze; **middot bronze `·`** recorrente = eco do ponto no "A" do logo KARV (assinatura da marca).
- **Code-mark 龍神:** mincho (`Hiragino Mincho ProN / Yu Mincho`), acento bronze — marcador de assinatura no hero e no CTA.
- No Figma/Claude Code, **substituir por tokens de tipografia do design system KARV existente** quando disponíveis (ver §9) — os stacks acima são fallback de sistema, não decisão final de fonte.

## 8. Design annotations for handoff
- Paleta como variáveis: `--ink #15120E`, `--bg #F3EEE6`, `--sand #E7DECF`, `--greige #C6BCA9`, `--line #D8CFBE`, `--bronze #96774B`, `--bronze2 #B79A6B`, `--stone #6C6357`.
- Disciplina: a cor saturada só existe dentro das imagens; nenhum acento vibrante na UI. Se surgir "cor primária de marca" saturada, é erro — remover.
- Scrims do hero são gradientes sobre a imagem (não escurecer a imagem original) para preservar a arte.
- Nada de aparência de e-commerce: sem badges, sem tabela de preço; condições "sob consulta".
- Acessibilidade: foco de teclado visível nos CTAs, contraste do texto claro sobre imagem garantido pelo scrim, respeitar `prefers-reduced-motion` se houver animação de entrada.
- Rodapé: confirmar contato/social oficiais antes de publicar.

## 9. Claude Code handoff notes
> **Com base na estrutura de código atual da landing page KARV, preserve a stack existente e aplique apenas refinamentos cirúrgicos aos arquivos, componentes, estilos e assets já presentes.**

Detalhe específico deste handoff, sobre essa base neutra:
- Reaproveitar a estrutura/seções já validadas da LP aprovada (MANDALA) e trocar somente conteúdo: conceito, copy pt-BR (deste blueprint), as 8 imagens RYUJIN e a atmosfera de paleta.
- Aplicar os tokens de cor/tipografia do design system existente; os valores em §7–§8 são referência visual, não substituição do sistema atual.
- Manter a ordem de seções (§2), a hierarquia de CTA (§6) e o comportamento de imagem full-bleed / crop mobile (§3, §5).
- Não introduzir dependências novas nem assumir framework; seguir o que já está no repositório.
