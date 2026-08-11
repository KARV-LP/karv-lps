# Claude Design como finalizador de LPs — Padrão KARV

> Objetivo: toda LP KARV é finalizada no Claude Design, on-brand e consistente, com o mínimo de reconfiguração.
> Governança: arquitetura primeiro; sequência fixa **estrutura → confirmação → refinamento**.

---

## Pré-requisitos (uma vez)

1. Claude Design **habilitado** na organização (admin → Organization settings; é *off by default*).
2. GitHub `KARV-LP` conectado ao Claude Design. ✅ (já confirmado — repos aparecem no seletor)
3. `DESIGN.md` canônico versionado no repo oficial `karv-lps`.

## Setup do design system canônico (uma vez)

1. Claude Design → aba **Design systems** → criar/importar novo.
2. Origem = **GitHub repo** → `KARV-LP/karv-lps` (ou upload do `DESIGN.md`).
3. Nomear **"KARV"**. Revisar tokens (cor, tipografia Fraunces/Inter, bronze) na aba de review.
4. Salvar. A partir daqui ele é reutilizável em todos os projetos.

> Alternativa via Claude Code: rodar `/design-sync` no `karv-lps` para sincronizar o sistema a partir do código.

## Configuração padrão por LP (toda vez)

| Campo | Valor padrão |
|---|---|
| Design system | **KARV** (o canônico — nunca "Modernist"/preset) |
| Codebase from GitHub | o repo **daquela** LP (ex.: `KARV-LP/KV_COLLAB_BLING`) |
| Template | **Landing** (ou *None* se basear 100% no código existente) |
| Code `</>` | **ligado** (handoff pro Claude Code) |
| Model | **Sonnet 5** (padrão/custo) · Opus só p/ exploração pesada |

## Checklist de finalização de uma LP

- [ ] Design system = **KARV** aplicado
- [ ] Codebase = repo correto anexado
- [ ] Estrutura da LP revisada **antes** de refinar (8 seções produto / 12 institucional)
- [ ] CTA principal = **WhatsApp** `https://wa.me/5511945197063?text=...`
- [ ] E-mail oficial = `comercial@k-arv.com`
- [ ] Imagens em **WebP**, geometria da poltrona **preservada** (sem crop/deformação)
- [ ] Motion só em *safe zones*; produto em movimento só se passar no gate de geometria
- [ ] Nome do fornecedor de tecido **ausente** de qualquer output
- [ ] Iterar com comentários/sliders — **não regenerar do zero**
- [ ] Export/handoff: HTML/PPTX/PDF ou de volta pro Claude Code

## Domínios canônicos (não alterar)

- Institucional: `k-arv.com` (apex)
- Loja (Shopify): `loja.k-arv.com`
- LP de produto: `kv-xxx-nome.k-arv.com`

## Custo / cota (atenção)

- Claude Design tem **cota semanal própria**, separada do chat e do Claude Code, e é *token-heavy*.
- Planeje a sessão antes; evite exploração sem rumo; itere em vez de regenerar.

## Repos KARV-LP (mapa vivo)

| Repo | Uso |
|---|---|
| `karv-lps` | Oficial · fonte do design system |
| `personalize` | LPs / experiência digital |
| `KV_COLLAB_BLING` | LP produto (estático, GitHub Pages) |
| `kv-teste` | Teste (Spline Hero) — não produção |

> Atualize esta tabela conforme novos repos de LP entrarem.
