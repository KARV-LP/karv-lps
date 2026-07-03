function normalizeValue(value) {
  return typeof value === 'string' ? value.trim() : '';
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
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: false,
        error: 'Método não permitido. Envie uma requisição POST.',
      }),
    };
  }

  let payload = {};

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: false,
        error: 'O corpo da requisição precisa ser um JSON válido.',
      }),
    };
  }

  const validation = validateBriefingData(payload);

  if (!validation.ok) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: false,
        error: 'Campos obrigatórios ausentes.',
        missing: validation.errors,
      }),
    };
  }

  let analysis = buildBriefingAnalysis(validation.data);

  if (process.env.OPENAI_API_KEY) {
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

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ok: true,
      analysis,
      source: process.env.OPENAI_API_KEY ? 'openai' : 'local',
      data: validation.data,
    }),
  };
}

export default handler;
