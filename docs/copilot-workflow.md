# Padrão de trabalho com Copilot — KARV

## Objetivo

Transformar pedidos da KARV em alterações úteis, pequenas e verificáveis, sem criar burocracia.

## 1. O que fica no projeto

O repositório registra apenas conhecimento reutilizável e necessário para executar ou manter o produto:

| Arquivo | Conteúdo |
|---|---|
| `AGENTS.md` | Regras técnicas, comandos e forma de trabalhar no repositório |
| `DESIGN.md` | Design system e regras visuais canônicas |
| `docs/architecture.md` | Arquitetura e decisões técnicas duradouras |
| Documentação próxima ao código | Como usar ou manter uma funcionalidade específica |

Não criar documentos de status, atas, planos, checklists de acompanhamento, logs de conversa ou cópias do conhecimento institucional. Atualize a documentação existente somente quando a mudança alterar uma regra, uma decisão técnica ou o uso do produto.

## 2. Como enviar um pedido

Cada pedido deve conter somente o necessário para a tarefa:

```text
Objetivo: [resultado que você quer]
Escopo: [página, arquivo, componente ou área]
Critério de pronto: [como saber que está concluído]
Restrições: [somente se houver]
```

Exemplo:

```text
Objetivo: criar uma seção de CTA para a página de poltronas.
Escopo: página de produto.
Critério de pronto: responsiva, alinhada ao DESIGN.md e com CTA para WhatsApp.
Restrições: não alterar o cabeçalho existente.
```

Para pedidos simples, uma frase é suficiente:

```text
Ajuste o espaçamento do hero da página inicial para seguir o DESIGN.md.
```

## 3. Fluxo padrão

1. O Copilot identifica os arquivos e regras relevantes.
2. Ele implementa somente o que atende ao objetivo.
3. Ele valida a alteração com a menor verificação aplicável.
4. Ele informa o resultado, os arquivos alterados e qualquer decisão que exija sua confirmação.

## 4. Decisões e aprovações

- O Copilot pode executar mudanças técnicas e de conteúdo dentro do escopo informado.
- Peça confirmação antes de mudanças de escopo, posicionamento comercial, preço, domínio, integrações externas ou decisões visuais que não estejam no `DESIGN.md`.
- Uma instrução dada no pedido prevalece para aquela tarefa. Para torná-la permanente, registre-a no arquivo canônico apropriado.
