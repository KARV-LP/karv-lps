function normalizeValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function createJsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function validateBriefingData(payload = {}) {
  const data = {
    nome: normalizeValue(payload.nome),
    tipoNegocio: normalizeValue(payload.tipoNegocio),
    ambiente: normalizeValue(payload.ambiente),
    objetivo: normalizeValue(payload.objetivo),
    estilo: normalizeValue(payload.estilo),
  };

  const errors = [];

  if (!data.nome) errors.push('nome');
  if (!data.tipoNegocio) errors.push('tipoNegocio');
  if (!data.ambiente) errors.push('ambiente');
  if (!data.objetivo) errors.push('objetivo');
  if (!data.estilo) errors.push('estilo');

  return {
    ok: errors.length === 0,
    errors,
    data,
  };
}

export function buildBriefingAnalysis(data) {
  const tipoNegocio = data.tipoNegocio || 'negócio';
  const ambiente = data.ambiente || 'ambiente';
  const objetivo = data.objetivo || 'objetivo';
  const estilo = data.estilo || 'estilo';

  return `O briefing aponta para um projeto de ${tipoNegocio} em ${ambiente}. O foco principal é ${objetivo.toLowerCase()}, com uma linguagem ${estilo.toLowerCase()} que reforça identidade, conforto e presença comercial.`;
}

export async function handler(event) {
  const method = event?.httpMethod || 'GET';

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (method !== 'POST') {
    return createJsonResponse(
      {
        ok: false,
        error: 'Método não permitido. Envie uma requisição POST.',
      },
      405,
    );
  }

  let payload = {};

  try {
    payload = JSON.parse(event?.body || '{}');
  } catch (error) {
    return createJsonResponse(
      {
        ok: false,
        error: 'O corpo da requisição precisa ser um JSON válido.',
      },
      400,
    );
  }

  const validation = validateBriefingData(payload);

  if (!validation.ok) {
    return createJsonResponse(
      {
        ok: false,
        error: 'Campos obrigatórios ausentes.',
        missing: validation.errors,
      },
      400,
    );
  }

  let analysis = buildBriefingAnalysis(validation.data);
  const hasOpenAiKey = Boolean(process.env.OPENAI_API_KEY);

  if (hasOpenAiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.4,
          max_tokens: 140,
          messages: [
            {
              role: 'system',
              content:
                'Você é um assistente comercial da KARV. Responda em português, em até 3 frases curtas e comerciais, sem inventar preços, prazos ou promessas técnicas.',
            },
            {
              role: 'user',
              content: `Crie uma análise inicial de briefing para a KARV com os dados: nome ${validation.data.nome}, tipo de negócio ${validation.data.tipoNegocio}, ambiente ${validation.data.ambiente}, objetivo ${validation.data.objetivo}, estilo ${validation.data.estilo}.`,
            },
          ],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const candidate = result?.choices?.[0]?.message?.content?.trim();
        if (candidate) {
          analysis = candidate;
        }
      }
    } catch (error) {
      console.warn('KARV briefing fallback activated:', error.message);
    }
  }

  return createJsonResponse(
    {
      ok: true,
      analysis,
      source: hasOpenAiKey ? 'openai' : 'local',
      data: validation.data,
    },
    200,
  );
}

export default handler;
