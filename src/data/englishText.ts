import en from "../locales/en.json";
import pt from "../locales/pt.json";

type TranslationMap = Record<string, string>;

function normalize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function collectTranslations(portuguese: unknown, english: unknown, translations: TranslationMap) {
  if (typeof portuguese === "string" && typeof english === "string") {
    translations[normalize(portuguese)] = english;
    return;
  }

  if (Array.isArray(portuguese) && Array.isArray(english)) {
    portuguese.forEach((value, index) => collectTranslations(value, english[index], translations));
    return;
  }

  if (
    portuguese &&
    english &&
    typeof portuguese === "object" &&
    typeof english === "object"
  ) {
    for (const key of Object.keys(portuguese)) {
      collectTranslations(
        (portuguese as Record<string, unknown>)[key],
        (english as Record<string, unknown>)[key],
        translations
      );
    }
  }
}

const bespokeTranslations: TranslationMap = {
  "Presença visual para ambientes comerciais": "Visual presence for commercial spaces",
  "Cada projeto parte do espaço, do público e da experiência que o cliente deseja construir. A poltrona entra como peça de conforto, identidade e valor percebido.":
    "Each project begins with the space, its audience and the experience the client wants to create. The armchair becomes a piece of comfort, identity and perceived value.",
  "Ver nichos": "Explore markets",
  "Ver produtos": "View products",
  "Fale com a KARV": "Talk to KARV",
  "Escolha o canal mais direto para iniciar uma proposta comercial e contar sobre o espaço que deseja transformar.":
    "Choose the most direct channel to start a commercial conversation and tell us about the space you want to transform.",
  "Navegação comercial": "Commercial navigation",
  "Acuradoria por contexto de projeto.": "Curation by project context.",
  "Use os produtos KARV como ponto de partida e navegue até o nicho ou o tecido que dá estrutura ao ambiente.":
    "Use KARV products as a starting point, then move to the market or fabric that gives the space its structure.",
  "Por nicho": "By market",
  "Clínicas": "Clinics",
  "Estética": "Beauty",
  "Por tecido": "By fabric",
  "Encontre o tecido ideal para a sua poltrona": "Find the ideal fabric for your armchair",
  "Explore a biblioteca de tecidos e revestimentos KARV e combine com a coleção certa para o seu projeto.":
    "Explore KARV's fabric and covering library and pair the right collection with your project.",
  "Ver tecidos": "View fabrics",
  "Ryujin · o dragão": "Ryujin · the dragon",
  "Poltrona autoral": "Signature armchair",
  "A poltrona que amplifica ambientes de identidade forte.":
    "The armchair that amplifies spaces with a strong identity.",
  "Solicitar orçamento": "Request a quote",
  "Ver ambientes": "View settings",
  "Conceito": "Concept",
  "Estrutura que sustenta.": "Structure that supports.",
  "Identidade que transforma.": "Identity that transforms.",
  "RYUJIN nasce de uma estampa autoral — o dragão e as peônias sobre fundo profundo — contida por laterais em bouclé cinza e base em madeira natural. A estrutura garante a qualidade da peça. Quem define a identidade é o revestimento.":
    "RYUJIN begins with a signature print — dragon and peonies over a deep background — framed by grey bouclé sides and a natural wood base. The structure ensures the piece's quality. The covering defines its identity.",
  "Arte aplicada": "Applied art",
  "O detalhe que se aproxima.": "A detail worth a closer look.",
  "Dragão & peônia": "Dragon & peony",
  "Costura bouclé × veludo": "Bouclé × velvet stitching",
  "Profundidade do vermelho": "Depth of red",
  "Ambientes": "Settings",
  "Feita para espaços que já têm o que dizer.": "Made for spaces that already have something to say.",
  "Studios de tatuagem, barbearias autorais e espaços de estética de identidade expressiva. Onde a parede já é arte, RYUJIN pertence.":
    "Tattoo studios, independent barbershops and beauty spaces with an expressive identity. Wherever the wall is already art, RYUJIN belongs.",
  "Studio de tatuagem": "Tattoo studio",
  "Barbearia autoral": "Independent barbershop",
  "Espaço expressivo": "Expressive space",
  "Valor para o espaço": "Value for the space",
  "Ela não ocupa o ambiente.": "It does not merely occupy the space.",
  "Ela o revela.": "It reveals it.",
  "Amplifica identidade": "Amplifies identity",
  "Reforça o que o espaço já comunica, sem competir com ele.":
    "Strengthens what the space already communicates without competing with it.",
  "Base estrutural em EPS": "EPS structural base",
  "Resistência a umidade, cupim e fogo. Durável para ambientes de alto giro.":
    "Resistant to moisture, termites and fire. Durable for high-traffic spaces.",
  "Sem percinta tradicional": "No traditional webbing",
  "Construção que sustenta o conforto ao longo do tempo.":
    "Construction that sustains comfort over time.",
  "Condições": "Terms",
  "Personalização sob medida.": "Tailored customization.",
  "Revestimento configurável e produção autoral. Condições comerciais e prazos definidos sob consulta, de acordo com o projeto do seu espaço.":
    "Configurable covering and signature production. Commercial terms and lead times are defined on request according to your space's project.",
  "Traga o RYUJIN para o seu espaço.": "Bring RYUJIN to your space.",
  "Solicitar orçamento da RYUJIN": "Request a RYUJIN quote",
  "Falar com a KARV": "Talk to KARV",
  "estrutura sustenta · identidade transforma": "structure supports · identity transforms",
  "Contato": "Contact",
  "WhatsApp KARV": "KARV WhatsApp",
  "Atendimento: Sul e Sudeste": "Service: South and Southeast",
  "Social": "Social",
  "Poltrona RYUJIN em estúdio de tatuagem com letreiro neon Tattoo Studio":
    "RYUJIN armchair in a tattoo studio with a Tattoo Studio neon sign",
  "Poltrona RYUJIN isolada em fundo branco, estrutura em madeira natural":
    "RYUJIN armchair isolated on a white background with a natural wood structure",
  "Detalhe da estampa autoral de dragão e peônias do revestimento RYUJIN":
    "Detail of the RYUJIN covering's signature dragon and peony print",
  "Detalhe da costura entre bouclé cinza e veludo vermelho da poltrona RYUJIN":
    "Detail of the stitching between grey bouclé and red velvet on the RYUJIN armchair",
  "Detalhe da profundidade do vermelho no revestimento da poltrona RYUJIN":
    "Detail of the depth of red in the RYUJIN armchair covering",
  "Poltrona RYUJIN em estúdio de tatuagem autoral":
    "RYUJIN armchair in an independent tattoo studio",
  "Poltrona RYUJIN em barbearia de identidade autoral":
    "RYUJIN armchair in a barbershop with a distinctive identity",
  "Poltrona RYUJIN amplificando um espaço de identidade expressiva":
    "RYUJIN armchair amplifying a space with an expressive identity",
  "Poltrona RYUJIN amplificando o espaço ao redor":
    "RYUJIN armchair amplifying the space around it",
  "Fechamento editorial: poltrona RYUJIN em estúdio de tatuagem":
    "Editorial closing: RYUJIN armchair in a tattoo studio",
  "Texto comercial": "Commercial narrative",
  "O KV_002_MANDALA traduz a força da arte em uma proposta comercial acessível e premium. A KARV atua como um elemento de reforço, destacando a intenção do ambiente sem roubar protagonismo. A peça se relaciona com o espaço e o eleva com presença e sensibilidade.":
    "KV_002_MANDALA translates the power of art into an accessible premium commercial proposition. KARV reinforces the setting's intention without taking over the scene. The piece relates to the space and elevates it with presence and sensitivity.",
  "Identidade do produto": "Product identity",
  "Aplicação em ambientes": "Application in settings",
  "Benefícios comerciais": "Commercial benefits",
  "Uma coleção para projetos que querem expressão e equilíbrio":
    "A collection for projects seeking expression and balance",
  "O KV_002_MANDALA conecta arte, ambiente e comunicação comercial com linguagem moderna e elegante.":
    "KV_002_MANDALA connects art, environment and commercial communication through a modern, elegant language.",
  "Ver catálogo": "View catalogue",
  "Explorar nichos": "Explore markets",
  "O KV_020 PURE BALANCE foi pensado para clínicas que precisam comunicar precisão e sofisticação sem perder acolhimento. A KARV entra como um reforço da identidade do ambiente, destacando o cuidado, a tecnologia e a clareza visual do espaço.":
    "KV_020 PURE BALANCE was designed for clinics that need to communicate precision and sophistication without losing warmth. KARV reinforces the space's identity, highlighting care, technology and visual clarity.",
  "Materiais e revestimentos": "Materials and coverings",
  "Um produto para clínicas que querem confiança e presença":
    "A product for clinics seeking confidence and presence",
  "O KV_020 PURE BALANCE conecta estética, tecnologia e comunicação premium em um único posicionamento.":
    "KV_020 PURE BALANCE connects aesthetics, technology and premium communication in one proposition.",
  "Explorar tecidos": "Explore fabrics",
  "O KV_021 NATURAL BEAUTY é uma solução comercial para clínicas de estética que buscam uma linguagem mais refinada, neutra e acolhedora. A KARV reforça a proposta do ambiente, revelando a intenção do espaço e elevando a percepção de cuidado e excelência.":
    "KV_021 NATURAL BEAUTY is a commercial solution for beauty clinics seeking a more refined, neutral and welcoming language. KARV reinforces the setting's proposition, revealing its intention and elevating the perception of care and excellence.",
  "Uma solução para clínicas premium e acessíveis": "A solution for premium yet accessible clinics",
  "O KV_021 NATURAL BEAUTY une sofisticação, acolhimento e posicionamento comercial em uma linguagem limpa e contemporânea.":
    "KV_021 NATURAL BEAUTY brings together sophistication, warmth and commercial positioning in a clean, contemporary language.",
  "O KV_022 SOFT TAUPE é uma resposta comercial para clínicas que precisam transmitir sofisticação sem perder acessibilidade. A KARV reforça a proposta do ambiente com delicadeza, equilíbrio e valor percebido, elevando a experiência do cliente de forma natural.":
    "KV_022 SOFT TAUPE is a commercial response for clinics that need to convey sophistication without losing accessibility. KARV reinforces the setting with delicacy, balance and perceived value, naturally elevating the client experience.",
  "Uma proposta elegante para ambientes que valorizam equilíbrio":
    "An elegant proposition for spaces that value balance",
  "O KV_022 SOFT TAUPE transforma a linguagem do espaço em uma experiência premium, acessível e sofisticada.":
    "KV_022 SOFT TAUPE turns the language of the space into a premium, accessible and sophisticated experience.",
  "Conexão comercial": "Commercial connection",
  "Aprofunde a proposta do segmento pelo produto e pelo tecido.":
    "Deepen the market proposition through product and fabric.",
  "Cada nicho ganha força quando o ambiente, a poltrona e a curadoria de revestimentos dialogam entre si.":
    "Each market gains strength when the space, armchair and covering curation speak to one another.",
  "Não encontrou o seu segmento?": "Cannot find your market?",
  "A KARV atende novos nichos sob demanda. Explore as coleções e tecidos disponíveis para o seu projeto.":
    "KARV serves new markets on demand. Explore the collections and fabrics available for your project.",
  "O ambiente precisa refletir o posicionamento da marca":
    "The setting should reflect the brand's positioning",
  "Uma barbearia de alto padrão se destaca quando a identidade do espaço acompanha a qualidade do atendimento. A poltrona certa reforça o desejo de permanência, melhora a percepção do serviço e transforma cada visita em um momento de marca.":
    "A high-end barbershop stands out when the space's identity matches the quality of its service. The right armchair encourages clients to stay, improves the perception of service and turns every visit into a brand moment.",
  "Por que esse nicho precisa de uma poltrona de identidade":
    "Why this market needs an identity-led armchair",
  "O cliente percebe o espaço antes de falar com o profissional. Uma peça de mobiliário alinhada com o conceito da barbearia reforça autoridade e torna o ambiente mais memorável.":
    "Clients perceive the space before speaking with the professional. A piece of furniture aligned with the barbershop's concept reinforces authority and makes the setting more memorable.",
  "O que o ambiente precisa comunicar": "What the setting needs to communicate",
  "Estilo contemporâneo e masculino": "Contemporary, masculine style",
  "Conforto para procedimentos longos": "Comfort for long services",
  "Presença forte para fotos, indicação e retorno": "Strong presence for photos, referrals and return visits",
  "Aplicações no ambiente": "Applications in the space",
  "A KARV se adapta a áreas que impactam diretamente na experiência do cliente.":
    "KARV adapts to areas that directly shape the client experience.",
  "Área de corte": "Cutting area",
  "Poltronas que elevam o cuidado e a presença visual do ponto principal da barbearia.":
    "Armchairs that elevate the care and visual presence of the barbershop's main area.",
  "Espaço de espera": "Waiting area",
  "Uma recepção bem proposta ajuda a construir a sensação de valor do serviço.":
    "A well-considered reception helps create a sense of the service's value.",
  "Ambiente de marca": "Brand environment",
  "Peças que reforçam um posicionamento premium em redes sociais e visitas presenciais.":
    "Pieces that reinforce premium positioning in social media and in-person visits.",
  "O mobiliário certo é um aliado para ampliar a percepção de valor do negócio.":
    "The right furniture helps expand the perceived value of the business.",
  "Eleva a percepção do serviço": "Elevates service perception",
  "Clientes associam o ambiente a mais qualidade e cuidado.": "Clients associate the space with greater quality and care.",
  "Aumenta a diferenciação": "Increases differentiation",
  "Uma proposta visual forte ajuda a se destacar em um mercado competitivo.":
    "A strong visual proposition helps the business stand out in a competitive market.",
  "Fortalece a recorrência": "Strengthens repeat business",
  "Ambientes bem construídos incentivam retorno e indicação.":
    "Well-designed spaces encourage return visits and referrals.",
  "Uma barbearia com identidade merece um móvel que faça parte do ritual":
    "A barbershop with identity deserves furniture that is part of the ritual",
  "A KARV cria poltronas e peças que unem presença de marca, conforto e um ambiente premium para cada cliente.":
    "KARV creates armchairs and pieces that bring together brand presence, comfort and a premium setting for every client.",
  "Ver coleções": "View collections",
  "Uma clínica precisa parecer tão confiável quanto o atendimento":
    "A clinic needs to feel as trustworthy as its care",
  "O mobiliário de uma clínica é parte da experiência de cuidado. Poltronas e peças de identidade ajudam a transmitir organização, confiança e um padrão de excelência que o paciente percebe imediatamente.":
    "A clinic's furniture is part of the care experience. Armchairs and identity-led pieces help convey organization, confidence and a standard of excellence that patients perceive immediately.",
  "Recepção, espera e atendimento precisam ser espaços de acolhimento. A poltrona certa reforça a sensação de cuidado e contribui para a percepção de profissionalismo da clínica.":
    "Reception, waiting and service areas need to feel welcoming. The right armchair reinforces care and contributes to the perception of the clinic's professionalism.",
  "O que o ambiente precisa reforçar": "What the setting needs to reinforce",
  "Segurança e serenidade para pacientes e acompanhantes": "Safety and serenity for patients and companions",
  "Atmosfera limpa, moderna e institucional": "A clean, modern and institutional atmosphere",
  "Valor percebido em cada ponto do espaço": "Perceived value at every point in the space",
  "O mobiliário KARV funciona em diferentes áreas da operação clínica.":
    "KARV furniture works across different areas of the clinical operation.",
  "Recepção": "Reception",
  "Peças que acolhem e organizam a primeira impressão do paciente.":
    "Pieces that welcome patients and organize their first impression.",
  "Sala de espera": "Waiting room",
  "Conforto e presença que suavizam o momento de espera.": "Comfort and presence that soften the waiting experience.",
  "Atendimento e consultas": "Service and consultations",
  "Ambientes com mais presença, cuidado e profissionalismo visual.":
    "Settings with greater presence, care and visual professionalism.",
  "Um ambiente bem estruturado reforça a percepção de valor do negócio e da marca.":
    "A well-structured setting reinforces the perceived value of the business and brand.",
  "Eleva a confiança": "Builds confidence",
  "O paciente percebe mais solidez e cuidado no espaço.": "Patients perceive greater solidity and care in the space.",
  "Melhora a experiência": "Improves the experience",
  "O atendimento se torna mais agradável, organizado e memorável.":
    "The service becomes more pleasant, organized and memorable.",
  "Fortalece a reputação": "Strengthens reputation",
  "Ambientes bem pensados reforçam a imagem da clínica no longo prazo.":
    "Thoughtfully designed settings strengthen the clinic's image over time.",
  "Quando o ambiente transmite confiança, a clínica se destaca":
    "When the setting conveys confidence, the clinic stands out",
  "A KARV desenvolve soluções que unem conforto, identidade e presença para cada espaço clínico.":
    "KARV develops solutions that unite comfort, identity and presence for every clinical space.",
  "O ambiente reforça o valor do atendimento": "The setting reinforces the value of the service",
  "Em espaços de estética, cada peça precisa equilibrar conforto, beleza e funcionalidade. Uma poltrona de identidade transforma a recepção em um ponto de diferenciação e ajuda o cliente a sentir que está em um lugar cuidado e premium.":
    "In beauty spaces, every piece needs to balance comfort, beauty and function. An identity-led armchair turns reception into a point of distinction and helps clients feel they are in a considered, premium place.",
  "O tempo de espera e o momento de atendimento devem transmitir tranquilidade. O mobiliário certo cria uma atmosfera que valoriza a proposta do profissional e a confiança do cliente.":
    "Waiting and service time should convey calm. The right furniture creates an atmosphere that values the professional's proposition and the client's confidence.",
  "O que a experiência precisa transmitir": "What the experience needs to convey",
  "Conforto visual e físico durante a espera": "Visual and physical comfort while waiting",
  "Refinamento que acompanha a identidade da marca": "Refinement aligned with brand identity",
  "Ambiente acolhedor para procedimentos e retorno": "A welcoming setting for services and return visits",
  "As soluções KARV se encaixam bem em diferentes momentos da jornada do cliente.":
    "KARV solutions fit naturally into different moments of the client journey.",
  "Recepção e acolhimento": "Reception and welcome",
  "Espaços que recebem com sofisticação e reforçam a imagem da clínica ou salão.":
    "Spaces that welcome with sophistication and reinforce the image of the clinic or salon.",
  "Salas de atendimento": "Service rooms",
  "Conforto e presença que elevam a sensação de exclusividade do procedimento.":
    "Comfort and presence that elevate the sense of exclusivity around the service.",
  "Áreas de relaxamento": "Relaxation areas",
  "Peças que ajudam o cliente a se sentir cuidado e valorizado antes e depois do atendimento.":
    "Pieces that help clients feel cared for and valued before and after the service.",
  "Investir em identidade visual do ambiente é investir em percepção de valor.":
    "Investing in the space's visual identity is investing in perceived value.",
  "Aumenta a percepção de premium": "Increases the perception of premium",
  "O espaço passa a transmitir mais sofisticação e cuidado.": "The space conveys greater sophistication and care.",
  "Melhora a retenção": "Improves retention",
  "Clientes tendem a voltar quando o espaço é acolhedor e bem pensado.":
    "Clients tend to return when the space is welcoming and well considered.",
  "Fortalece a recomendação": "Strengthens recommendations",
  "Ambientes memoráveis viram parte da narrativa da marca.": "Memorable settings become part of the brand narrative.",
  "Quando o ambiente é parte do tratamento, a marca se torna inesquecível":
    "When the setting is part of the treatment, the brand becomes unforgettable",
  "A KARV entrega soluções que unem estética, conforto e posicionamento para transformar cada espaço em uma experiência premium.":
    "KARV delivers solutions that unite aesthetics, comfort and positioning to turn every space into a premium experience.",
  "O ambiente é uma extensão do trabalho e da marca": "The setting is an extension of the work and the brand",
  "Em studios, o mobiliário precisa dialogar com criatividade, presença visual e funcionalidade. Uma poltrona de identidade transforma o espaço em um elemento de posicionamento e reforça a imagem do projeto entregue.":
    "In studios, furniture needs to speak to creativity, visual presence and function. An identity-led armchair turns the space into a positioning element and reinforces the image of the work delivered.",
  "O cliente percebe o ambiente como parte do resultado. Uma peça bem escolhida reforça a personalidade do studio e melhora a percepção de profissionalismo e cuidado.":
    "Clients perceive the setting as part of the result. A well-chosen piece reinforces the studio's personality and improves the perception of professionalism and care.",
  "O que o ambiente precisa transmitir": "What the setting needs to convey",
  "Estética contemporânea e diferenciada": "Contemporary, distinctive aesthetics",
  "Conforto para encontros, sessões e produção": "Comfort for meetings, sessions and production",
  "Presença de marca em cada detalhe visual": "Brand presence in every visual detail",
  "As soluções KARV se encaixam bem em diferentes pontos do studio.":
    "KARV solutions fit naturally into different areas of the studio.",
  "Um espaço que prepara o cliente para a experiência e transmite valor desde a entrada.":
    "A space that prepares clients for the experience and conveys value from the entrance.",
  "Espaço de reunião": "Meeting space",
  "Conforto e presença visual para conversas, apresentações e encontros.":
    "Comfort and visual presence for conversations, presentations and meetings.",
  "Produção e sessão": "Production and session",
  "Peças que combinam funcionalidade com uma estética que reforça o conceito do studio.":
    "Pieces that combine function with aesthetics that reinforce the studio concept.",
  "Ambientes bem pensados geram mais impacto e mais valor percebido.":
    "Thoughtfully designed settings create more impact and perceived value.",
  "Eleva a imagem do studio": "Elevates the studio's image",
  "O espaço passa a representar com mais força a proposta da marca.":
    "The space represents the brand proposition more strongly.",
  "Fortalece a experiência": "Strengthens the experience",
  "O cliente se sente mais envolvido e acolhido durante o atendimento.":
    "Clients feel more engaged and welcomed during the service.",
  "Amplia a percepção de valor": "Expands perceived value",
  "Um ambiente com identidade cria uma memória mais forte e uma imagem mais premium.":
    "A setting with identity creates a stronger memory and a more premium image.",
  "Quando o ambiente comunica a marca, o studio se posiciona com mais força":
    "When the setting communicates the brand, the studio positions itself more strongly",
  "A KARV cria móveis e poltronas que ajudam a transformar cada espaço em um ponto de identidade e presença.":
    "KARV creates furniture and armchairs that help turn every space into a point of identity and presence.",
  "O cliente sente o espaço antes mesmo da primeira sessão":
    "Clients feel the space before the first session even begins",
  "Em estúdios de tatuagem, o mobiliário não é apenas funcional. Ele comunica estilo, autoridade e cuidado. Uma poltrona bem pensada ajuda a criar uma experiência mais segura, confortável e memorável para o cliente.":
    "In tattoo studios, furniture is not merely functional. It communicates style, authority and care. A well-considered armchair helps create a safer, more comfortable and memorable client experience.",
  "O cliente entra em um estúdio para viver uma experiência íntima e personalizada. A poltrona precisa reforçar presença, conforto e uma estética alinhada ao trabalho do tatuador.":
    "Clients enter a studio for an intimate, personalized experience. The armchair needs to reinforce presence, comfort and aesthetics aligned with the tattoo artist's work.",
  "O que o ambiente transmite": "What the setting conveys",
  "Conforto para sessões longas e detalhadas": "Comfort for long, detailed sessions",
  "Estética marcante para fotos, redes e indicação": "Striking aesthetics for photos, social media and referrals",
  "Profissionalismo que transmite confiança": "Professionalism that conveys confidence",
  "O mobiliário KARV funciona de forma natural em diferentes pontos do estúdio.":
    "KARV furniture works naturally in different areas of the studio.",
  "Área de atendimento": "Service area",
  "Poltronas que valorizam o momento de conversa, preparação e execução.":
    "Armchairs that add value to conversation, preparation and execution.",
  "Recepção e espera": "Reception and waiting",
  "Elementos que deixam a chegada do cliente mais sofisticada e acolhedora.":
    "Elements that make the client's arrival more sophisticated and welcoming.",
  "Espaços de imagem": "Image spaces",
  "Peças fortes visualmente, ideais para reforçar o posicionamento da marca.":
    "Visually strong pieces, ideal for reinforcing the brand's positioning.",
  "Uma proposta de mobiliário com identidade transforma o ambiente em um ativo de marca.":
    "A furniture proposition with identity turns the setting into a brand asset.",
  "Eleva a percepção do espaço": "Elevates the perception of the space",
  "O cliente percebe mais valor e cuidado desde o primeiro contato.":
    "Clients perceive more value and care from the first contact.",
  "Fortalece a marca": "Strengthens the brand",
  "O ambiente passa a ser um reflexo do estilo do profissional e da sua obra.":
    "The setting becomes a reflection of the professional's style and work.",
  "Gera mais recorrência": "Creates more repeat business",
  "Experiências bem construídas aumentam a vontade de voltar e indicar.":
    "Well-designed experiences increase the desire to return and refer others.",
  "Um estúdio com identidade merece um mobiliário que acompanhe o nível da sua marca":
    "A studio with identity deserves furniture that matches the level of its brand",
  "A KARV cria soluções que unem conforto, presença e presença visual para transformar cada visita em uma experiência premium.":
    "KARV creates solutions that unite comfort, presence and visual impact to turn every visit into a premium experience.",
  "Curadoria KARV": "KARV curation",
  "Uma biblioteca organizada por ambiente, identidade e objetivo.":
    "A library organized by setting, identity and objective.",
  "A KARV desenvolve uma biblioteca própria de revestimentos para orientar a escolha com clareza e reforçar a experiência do espaço.":
    "KARV develops its own covering library to guide choice clearly and reinforce the space experience.",
  "A biblioteca funciona como guia de decisão entre ambiente, produto e nicho.":
    "The library works as a decision guide between setting, product and market.",
  "A curadoria KARV orienta a escolha do revestimento com base na aplicação, na identidade do projeto e na experiência do espaço.":
    "KARV curation guides covering selection based on application, project identity and space experience.",
  "Explorar nichos": "Explore markets",
  "Conhecer coleções": "Discover collections",
  "A experiência do ambiente começa pela curadoria certa.":
    "The space experience begins with the right curation.",
  "A Biblioteca de Tecidos KARV organiza a seleção de revestimentos com foco em identidade, aplicação e resultado final.":
    "The KARV Fabric Library organizes covering selection around identity, application and final result.",
  "Identidade marcante": "Striking identity",
  "Uma curadoria para espaços com caráter e presença.": "Curation for spaces with character and presence.",
  "Em barbearias, a experiência do ambiente é parte da marca. A Curadoria KARV ajuda a traduzir essa personalidade com clareza visual.":
    "In barbershops, the setting experience is part of the brand. KARV curation helps translate that personality with visual clarity.",
  "Aplicações recomendadas": "Recommended applications",
  "Benefícios da curadoria": "Curation benefits",
  "A presença do espaço pode ser tão importante quanto o atendimento.":
    "The presence of the space can be as important as the service.",
  "Acesse a Biblioteca de Tecidos KARV para construir uma experiência visual mais forte.":
    "Visit the KARV Fabric Library to build a stronger visual experience.",
  "Voltar à biblioteca": "Back to the library",
  "Ambientes profissionais": "Professional settings",
  "Uma seleção para quem valoriza cuidado e presença visual.":
    "A selection for those who value care and visual presence.",
  "Em clínicas e estética, cada detalhe comunica confiança. A Curadoria KARV contribui para uma experiência visual mais alinhada ao propósito do ambiente.":
    "In clinics and beauty spaces, every detail communicates confidence. KARV curation contributes to a visual experience more aligned with the setting's purpose.",
  "Cada ambiente merece uma leitura visual clara e acolhedora.":
    "Every setting deserves a clear, welcoming visual language.",
  "Explore a Biblioteca de Tecidos KARV para encontrar uma proposta alinhada ao seu projeto.":
    "Explore the KARV Fabric Library to find a proposition aligned with your project.",
  "Curadoria em expansão": "Expanding curation",
  "Uma biblioteca em constante construção.": "A library under continuous development.",
  "A Biblioteca de Tecidos KARV reúne uma seleção própria de revestimentos e abre espaço para novas coleções, sempre pensadas para fortalecer a experiência do ambiente.":
    "The KARV Fabric Library brings together its own selection of coverings and makes room for new collections, all designed to strengthen the setting experience.",
  "Hub de coleções": "Collections hub",
  "A coleção KARV funciona como ponto de entrada para a experiência do projeto.":
    "The KARV collection works as an entry point to the project experience.",
  "A partir da curadoria, o cliente consegue avançar até a biblioteca de tecidos, os produtos e os nichos mais alinhados à proposta.":
    "From curation, clients can move on to the fabric library, products and markets best aligned with the proposition.",
  "Novas coleções serão incorporadas à biblioteca conforme o projeto evolui.":
    "New collections will be added to the library as the project evolves.",
  "Enquanto isso, a Curadoria KARV já orienta a escolha por ambientes, identidade e intenção do espaço.":
    "In the meantime, KARV curation already guides choices by setting, identity and spatial intent.",
  "Explorar biblioteca": "Explore the library",
  "Rotina acolhedora": "A welcoming routine",
  "Uma curadoria para espaços que precisam de praticidade e presença.":
    "Curation for spaces that need practicality and presence.",
  "A KARV entende que o ambiente precisa funcionar bem para a rotina das pessoas e dos animais. Por isso, a biblioteca organiza opções com linguagem prática e acolhedora.":
    "KARV understands that a space needs to work well for the daily life of people and animals. The library therefore organizes options through a practical, welcoming language.",
  "Praticidade e acolhimento podem caminhar juntos.": "Practicality and warmth can go together.",
  "Conheça a Biblioteca de Tecidos KARV e escolha uma proposta alinhada à rotina do seu projeto.":
    "Discover the KARV Fabric Library and choose a proposition aligned with your project's routine.",
  "Seleção premium": "Premium selection",
  "Uma curadoria para ambientes de alto padrão.": "Curation for high-end settings.",
  "A KARV desenvolve uma biblioteca própria de revestimentos para orientar a escolha com clareza, reforçando a identidade do projeto e a experiência do espaço.":
    "KARV develops its own covering library to guide choices clearly, reinforcing project identity and the setting experience.",
  "A escolha certa começa pela narrativa do ambiente.": "The right choice begins with the setting's narrative.",
  "Explore a Biblioteca de Tecidos KARV e encontre a direção ideal para cada projeto.":
    "Explore the KARV Fabric Library and find the ideal direction for every project.",
  "Editorial KARV": "KARV editorial",
  "Artigos estruturados para SEO tradicional e respostas de IA.":
    "Articles structured for traditional SEO and AI answers.",
  "Cada publicação reforça a visão da KARV como mobiliário de identidade, com conteúdo claro, útil e comercial para quem pensa o espaço como protagonista.":
    "Each publication reinforces KARV's view of identity-led furniture, with clear, useful commercial content for those who see the space as a protagonist.",
  "Conheça o universo KARV além do conteúdo editorial.": "Discover the KARV universe beyond editorial content.",
  "Use o blog como ponto de partida para explorar produtos, segmentos e tecidos que dão forma ao ambiente.":
    "Use the blog as a starting point to explore products, markets and fabrics that shape the setting.",
  "Revestimentos não são apenas um detalhe estético. Eles participam da forma como a poltrona se encaixa no ambiente, do nível de conforto percebido e do cuidado com a aparência ao longo do tempo.":
    "Coverings are not merely an aesthetic detail. They shape how the armchair fits the setting, the perceived level of comfort and the care of its appearance over time.",
  "Comece pela aplicação": "Start with the application",
  "A primeira pergunta é simples: a poltrona será usada em um ambiente de espera, recepção, atendimento ou circulação intensa? A resposta orienta a escolha do revestimento mais adequado para o contexto.":
    "The first question is simple: will the armchair be used in a waiting area, reception, service area or high-traffic space? The answer guides the choice of the most suitable covering for the context.",
  "Considere a identidade do espaço": "Consider the space's identity",
  "O tecido pode reforçar a linguagem do projeto. Em ambientes mais premium, a proposta costuma ser mais sofisticada e equilibrada. Em espaços comerciais com personalidade forte, o revestimento pode ajudar a criar presença visual.":
    "Fabric can reinforce the project's language. In more premium settings, the proposition tends to be more sophisticated and balanced. In commercial spaces with a strong personality, the covering can help create visual presence.",
  "Observe a relação com o ambiente": "Consider the relationship with the setting",
  "A peça deve dialogar com paredes, móveis, iluminação e outros elementos do projeto. Quando a poltrona se integra ao ambiente de forma natural, o resultado costuma parecer mais pensado e estável.":
    "The piece should speak to walls, furniture, lighting and the project's other elements. When the armchair integrates naturally into the setting, the result tends to feel more considered and balanced.",
  "Escolha com base em uso e manutenção": "Choose based on use and maintenance",
  "Uma boa seleção leva em conta o cotidiano do espaço. A proposta precisa ser funcional, confortável e coerente com o tipo de operação do ambiente.":
    "A good selection considers the space's daily routine. The proposition needs to be functional, comfortable and consistent with the setting's type of operation.",
  "O tecido certo ajuda a dar forma à identidade do ambiente.": "The right fabric helps shape the setting's identity.",
  "A curadoria de revestimentos KARV orienta a escolha com foco em aplicação, linguagem visual e resultado final.":
    "KARV covering curation guides the choice with a focus on application, visual language and final result.",
  "Em muitos projetos, a escolha de mobiliário é tratada como detalhe final. No entanto, a peça certa pode reorganizar a experiência do ambiente e dar maior clareza à proposta do espaço.":
    "In many projects, furniture choice is treated as a final detail. Yet the right piece can reorganize the setting experience and bring greater clarity to the space's proposition.",
  "O que é mobiliário de identidade": "What is identity-led furniture",
  "Mobiliário de identidade é aquele que expressa a essência do ambiente. Ele ajuda a comunicar valores, tom e comportamento antes mesmo de uma conversa com o cliente ou paciente.":
    "Identity-led furniture expresses the essence of the setting. It helps communicate values, tone and behaviour before a conversation with the client or patient even begins.",
  "Quando a linguagem visual do espaço está alinhada à proposta do negócio, a percepção de profissionalismo e cuidado tende a ficar mais forte. Isso vale para recepções, salas de espera, consultórios, barbearias e ambientes premium.":
    "When the space's visual language aligns with the business proposition, the perception of professionalism and care becomes stronger. This applies to receptions, waiting rooms, consulting rooms, barbershops and premium settings.",
  "A poltrona como elemento de linguagem": "The armchair as an element of language",
  "Entre as peças de mobiliário, a poltrona tem papel estratégico. Ela ocupa espaço visual, recebe atenção de quem entra no ambiente e ajuda a criar uma atmosfera que pode ser acolhedora, sofisticada, contemporânea ou marcante.":
    "Among furniture pieces, the armchair plays a strategic role. It occupies visual space, draws the attention of people entering the setting and helps create an atmosphere that can be welcoming, sophisticated, contemporary or striking.",
  "A KARV desenvolve poltronas que atuam como parte da identidade do espaço, reforçando o posicionamento do projeto e ampliando a narrativa do ambiente.":
    "KARV develops armchairs that act as part of the space's identity, reinforcing the project's positioning and expanding the setting's narrative.",
  "Como escolher com clareza": "How to choose with clarity",
  "Defina a sensação que o ambiente deve transmitir.": "Define the feeling the setting should convey.",
  "Considere a função da peça: recepção, espera, atendimento ou descanso.":
    "Consider the piece's function: reception, waiting, service or rest.",
  "Observe o equilíbrio entre conforto, visual e durabilidade.":
    "Consider the balance between comfort, appearance and durability.",
  "Escolha revestimentos e linhas que dialoguem com a proposta comercial do espaço.":
    "Choose coverings and lines that speak to the space's commercial proposition.",
  "Conheça as soluções KARV para transformar o ambiente em identidade.":
    "Discover KARV solutions that turn the setting into identity.",
  "A escolha certa de poltrona pode dar mais presença, mais refinamento e mais autoridade ao seu projeto.":
    "The right armchair can give your project more presence, refinement and authority.",
  "Conhecer produtos": "Discover products",
  "A barbearia contemporânea vai além do corte. O ambiente comunica estilo, presença e nível de atenção ao detalhe. A poltrona é parte dessa construção.":
    "The contemporary barbershop goes beyond the haircut. The setting communicates style, presence and attention to detail. The armchair is part of that construction.",
  "O ambiente como protagonista": "The setting as protagonist",
  "Um espaço bem pensado transmite intenção. A poltrona ajuda a consolidar essa percepção, tornando o ambiente mais alinhado ao conceito de marca e à proposta de experiência do cliente.":
    "A thoughtfully designed space conveys intent. The armchair helps consolidate that perception, making the setting more aligned with the brand concept and client experience proposition.",
  "Como a peça contribui para o resultado": "How the piece contributes to the result",
  "A poltrona pode reforçar uma linguagem mais sofisticada, mais urbana ou mais acolhedora. Quando escolhida com clareza, ela ajuda o ambiente a parecer mais completo e mais intencional.":
    "The armchair can reinforce a more sophisticated, urban or welcoming language. When selected with clarity, it helps the setting feel more complete and intentional.",
  "O que considerar na escolha": "What to consider when choosing",
  "O tipo de atendimento e o fluxo de clientes.": "The type of service and client flow.",
  "A personalidade do espaço e a imagem da marca.": "The personality of the space and brand image.",
  "A relação entre design, conforto e visual geral.": "The relationship between design, comfort and overall appearance.",
  "A integração com a curadoria de tecidos e acabamento.": "Integration with fabric and finish curation.",
  "Eleve a identidade da sua barbearia com uma poltrona que fala a linguagem do ambiente.":
    "Elevate your barbershop's identity with an armchair that speaks the language of the setting.",
  "A KARV ajuda a transformar a peça em parte da estratégia visual e comercial do espaço.":
    "KARV helps turn the piece into part of the space's visual and commercial strategy.",
  "Ver nicho": "View market",
  "O ambiente de uma clínica ou estética precisa transmitir confiança. A poltrona é um dos elementos que mais contribui para essa sensação, pois acompanha o cliente em momentos de acolhimento, espera e atendimento.":
    "A clinic or beauty setting needs to convey confidence. The armchair is one of the elements that most contributes to this feeling, accompanying clients during welcome, waiting and service.",
  "O papel da poltrona no ambiente clínico": "The armchair's role in the clinical setting",
  "A peça certa ajuda a construir uma experiência mais organizada, limpa e agradável. Ela reforça a ideia de cuidado e facilita a relação entre o espaço e a proposta do negócio.":
    "The right piece helps build a more organized, clean and pleasant experience. It reinforces the idea of care and connects the space with the business proposition.",
  "Como a peça reforça a identidade": "How the piece reinforces identity",
  "Em muitos projetos, a escolha da poltrona é uma decisão estética e estratégica. O visual precisa dialogar com a linguagem do tratamento, com a imagem da clínica e com a expectativa de quem entra no espaço.":
    "In many projects, armchair selection is an aesthetic and strategic decision. Its appearance needs to speak to the treatment language, the clinic image and the expectations of everyone entering the space.",
  "O que valorizar na escolha": "What to value in the selection",
  "Conforto percebido pelo cliente.": "Comfort perceived by the client.",
  "Harmonia visual com a identidade do projeto.": "Visual harmony with project identity.",
  "Coerência com a proposta premium ou acolhedora do espaço.":
    "Consistency with the space's premium or welcoming proposition.",
  "Facilidade de integração com a curadoria de revestimentos.":
    "Ease of integration with covering curation.",
  "Encontre a poltrona certa para reforçar a imagem da sua clínica ou espaço de estética.":
    "Find the right armchair to reinforce the image of your clinic or beauty space.",
  "A KARV desenvolve soluções que unem presença visual, conforto e linguagem comercial clara.":
    "KARV develops solutions that unite visual presence, comfort and clear commercial language.",
  "Em ambientes comerciais, a poltrona é uma peça de comunicação. Ela participa da imagem do negócio, da experiência de espera e da forma como o cliente percebe o empreendimento.":
    "In commercial settings, the armchair is a communication piece. It is part of the business image, waiting experience and the way clients perceive the enterprise.",
  "Por que personalizar a poltrona": "Why customize the armchair",
  "Quando uma peça é pensada para o contexto do projeto, ela consegue reforçar o tom do espaço sem parecer genérica. Isso é especialmente importante para negócios que desejam transmitir sofisticação, confiança ou uma identidade própria.":
    "When a piece is designed for a project's context, it can reinforce the tone of the space without feeling generic. This is especially important for businesses that want to convey sophistication, confidence or their own identity.",
  "O que a personalização comunica": "What customization communicates",
  "A escolha de formato, acabamento, revestimento e visual pode indicar o posicionamento do negócio. Uma proposta mais premium, uma linguagem mais acolhedora ou um ambiente mais contemporâneo podem ser transmitidos por meio da peça certa.":
    "The choice of form, finish, covering and appearance can indicate the business's positioning. A more premium proposition, warmer language or more contemporary setting can be conveyed through the right piece.",
  "Como avaliar a escolha": "How to assess the choice",
  "Observe a função da peça dentro da rotina do espaço.": "Consider the piece's function within the space's routine.",
  "Considere se a peça precisa reforçar presença ou acolhimento.":
    "Consider whether the piece needs to reinforce presence or warmth.",
  "Verifique se o visual dialoga com a identidade da marca.": "Check whether the appearance speaks to brand identity.",
  "Escolha uma solução que combine estética, uso diário e manutenção.":
    "Choose a solution that combines aesthetics, daily use and maintenance.",
  "Descubra como a KARV ajuda a transformar a identidade do ambiente em uma experiência mais forte.":
    "Discover how KARV helps turn the setting's identity into a stronger experience.",
  "Cada projeto exige uma resposta visual e funcional. A poltrona certa pode fazer essa diferença com clareza.":
    "Each project needs a visual and functional response. The right armchair can make that difference clearly.",
  "Contato comercial": "Commercial contact",
  "Conte sobre o seu ambiente e o tipo de presença que deseja criar. A KARV desenvolve poltronas que reforçam a identidade do espaço com conforto, expressão visual e aplicação comercial.":
    "Tell us about your space and the type of presence you want to create. KARV develops armchairs that reinforce the setting's identity through comfort, visual expression and commercial application.",
  "A escolha do revestimento é parte essencial da decisão. Ela afeta a percepção do espaço, a experiência de uso e a coerência visual do projeto.":
    "Covering selection is an essential part of the decision. It affects the perception of the space, the experience of use and the project's visual coherence.",
  "Acuradoria de revestimentos para cada contexto de projeto e identidade de marca.":
    "Covering curation for every project context and brand identity.",
  "Encontre poltronas que valorizam o revestimento escolhido e a proposta do ambiente.":
    "Find armchairs that complement the selected covering and the setting's proposition.",
  "Explore linhas de poltronas pensadas para reforçar identidade e presença visual.":
    "Explore armchair lines designed to reinforce identity and visual presence.",
  "Entenda como cada segmento usa o mobiliário para comunicar valor e posicionamento.":
    "Understand how each market uses furniture to communicate value and positioning.",
  "Descubra como a curadoria de revestimentos ajuda a estruturar o ambiente.":
    "Discover how covering curation helps structure the setting.",
  "Poltronas para barbearias: identidade em cada detalhe":
    "Armchairs for barbershops: identity in every detail",
  "Na barbearia, a poltrona participa do conceito do espaço e da experiência do cliente. Ela precisa comunicar personalidade e se encaixar na rotina do atendimento.":
    "In a barbershop, the armchair is part of the space concept and client experience. It needs to communicate personality and fit into the service routine.",
  "Conheça soluções que dialogam com ambientes comerciais e de alto impacto visual.":
    "Discover solutions that speak to commercial settings with high visual impact.",
  "Aprofunde a relação entre barbearia, identidade e design de ambiente.":
    "Explore the relationship between barbershops, identity and spatial design.",
  "Explore a biblioteca de revestimentos para dar personalidade ao projeto.":
    "Explore the covering library to give the project personality.",
  "Poltronas para clínicas e estética: conforto com presença":
    "Armchairs for clinics and beauty: comfort with presence",
  "Em clínicas e espaços de estética, a poltrona participa diretamente da percepção de cuidado, sofisticação e profissionalismo.":
    "In clinics and beauty spaces, the armchair directly shapes the perception of care, sophistication and professionalism.",
  "Veja como a biblioteca KARV orienta a escolha de revestimentos para esse contexto.":
    "See how the KARV library guides covering selection for this context.",
  "Aprofunde a relação entre a identidade do segmento e o ambiente.":
    "Explore the relationship between market identity and the setting.",
  "Poltronas personalizadas para negócios: mais do que conforto":
    "Custom armchairs for businesses: more than comfort",
  "Para negócios que querem destacar o ambiente, a poltrona certa precisa dialogar com a marca, com o fluxo de uso e com a proposta do espaço.":
    "For businesses that want their setting to stand out, the right armchair needs to speak to the brand, the flow of use and the space's proposition.",
  "Conheça coleções voltadas para ambientes comerciais e projetos com identidade forte.":
    "Discover collections for commercial settings and projects with a strong identity.",
  "Veja como barbearias, clínicas e estética usam a poltrona para reforçar o conceito do espaço.":
    "See how barbershops, clinics and beauty spaces use the armchair to reinforce the space concept.",
  "Acuradoria de revestimentos para ampliar a percepção de valor do ambiente.":
    "Covering curation to expand the setting's perceived value.",
  "Na barbearia, o cliente vive um ritual. O ambiente precisa transmitir confiança, presença e um cuidado com cada detalhe, desde o atendimento até o momento da saída.":
    "In a barbershop, clients experience a ritual. The setting needs to convey confidence, presence and care in every detail, from service to departure.",
  "Conforto e confiança começam no ambiente": "Comfort and confidence begin in the setting",
  "Em clínicas, cada detalhe precisa transmitir segurança. O espaço precisa acolher o paciente, reforçar a autoridade do profissional e apoiar uma experiência organizada desde a chegada.":
    "In clinics, every detail needs to convey safety. The space needs to welcome patients, reinforce professional authority and support an organized experience from arrival.",
  "A estética do ambiente impacta a percepção da marca":
    "The setting's aesthetics shape brand perception",
  "Em estética, a experiência começa no acolhimento. O cliente entra buscando cuidado, relaxamento e um ambiente que transmita profissionalismo desde a primeira impressão.":
    "In beauty, the experience begins with welcome. Clients arrive seeking care, relaxation and a setting that conveys professionalism from the first impression.",
  "Conecte a linguagem visual do espaço à curadoria de revestimentos.":
    "Connect the space's visual language to covering curation.",
  "Use a biblioteca como base para identidade, acabamento e experiência do ambiente.":
    "Use the library as a foundation for identity, finish and setting experience.",
  "Studios criativos precisam de ambientes que carreguem a marca":
    "Creative studios need settings that carry the brand",
  "Em studios, o espaço é parte do processo criativo. A experiência do cliente, a imagem da marca e a atmosfera do trabalho precisam caminhar juntos para gerar identidade e valor.":
    "In studios, the space is part of the creative process. Client experience, brand image and working atmosphere need to work together to create identity and value.",
  "Um estúdio de tatuagem precisa falar com personalidade":
    "A tattoo studio needs to speak with personality",
  "Na tatuagem, o ambiente é parte do trabalho. Cada detalhe reforça a identidade do artista, o cuidado da execução e a impressão que o cliente leva ao sair.":
    "In tattooing, the setting is part of the work. Every detail reinforces the artist's identity, the care of execution and the impression clients take with them.",
  "Traga o RYUJIN": "Bring RYUJIN",
  "para o seu espaço.": "to your space.",
  "Linguagem artística com forte apelo visual e presença decorativa.":
    "Artistic language with strong visual appeal and decorative presence.",
  "Preserva a identidade do ambiente ao mesmo tempo em que valoriza o projeto.":
    "Preserves the setting's identity while adding value to the project.",
  "Transmite uma sensação de sensibilidade, cultura e refinamento.":
    "Conveys a sense of sensitivity, culture and refinement.",
  "Ambientes residenciais com foco em personalidade e composição.":
    "Residential settings focused on personality and composition.",
  "Projetos de arquitetura que desejam uma narrativa mais artística.":
    "Architecture projects seeking a more artistic narrative.",
  "Espaços comerciais que valorizam diferenciação e acolhimento.":
    "Commercial spaces that value differentiation and warmth.",
  "Amplia a percepção de conceito e originalidade do projeto.":
    "Expands the perception of the project's concept and originality.",
  "Conecta a peça ao ambiente de forma natural e elegante.":
    "Connects the piece to the setting naturally and elegantly.",
  "Gera valor comercial em propostas com forte identidade visual.":
    "Creates commercial value in propositions with a strong visual identity.",
  "Clean Profissional, tecnologia e sensação de limpeza para ambientes de estética com alto padrão de atendimento.":
    "Professional clarity, technology and a sense of cleanliness for beauty spaces with a high standard of service.",
  "Ir para nichos": "Go to markets",
  "Posicionamento Clean Profissional para clínicas de estética.":
    "Professional clarity positioning for beauty clinics.",
  "Trabalha com uma paleta neutra que favorece a percepção de organização.":
    "Uses a neutral palette that supports a perception of organization.",
  "Clínicas estéticas que desejam um ambiente técnico e acolhedor.":
    "Beauty clinics seeking a technical yet welcoming setting.",
  "Salas de procedimentos e consultas com linguagem contemporânea.":
    "Procedure and consultation rooms with a contemporary language.",
  "Projetos que valorizam clareza visual e experiência premium acessível.":
    "Projects that value visual clarity and an accessible premium experience.",
  "Monaco 03 Off White — tecido principal.": "Monaco 03 Off White — main fabric.",
  "Monaco 05 Bege Claro — tecido secundário.": "Monaco 05 Light Beige — secondary fabric.",
  "Reforça a sensação de limpeza e cuidado no atendimento.":
    "Reinforces a sense of cleanliness and care in service.",
  "Aumenta a percepção de profissionalismo do espaço.":
    "Increases the perception of the space's professionalism.",
  "Premium Neutro e estética avançada para clínicas que unem bem-estar, harmonização facial e sofisticação.":
    "Neutral premium and advanced aesthetics for clinics that unite wellbeing, facial harmonization and sophistication.",
  "Posicionamento Premium Neutro para clínicas que valorizam sofisticação discreta.":
    "Neutral premium positioning for clinics that value discreet sophistication.",
  "Equilibra visual sofisticado com linguagem acessível e comercial.":
    "Balances a sophisticated look with accessible commercial language.",
  "Ambientes de estética com foco em experiência premium e acolhimento.":
    "Beauty settings focused on premium experience and warmth.",
  "Consultórios, clínicas e centros de beleza com identidade refinada.":
    "Consulting rooms, clinics and beauty centers with a refined identity.",
  "Espaços que desejam comunicar tecnologia, procedimento e bem-estar.":
    "Spaces that aim to communicate technology, procedures and wellbeing.",
  "Nice 05 Areia — tecido principal.": "Nice 05 Sand — main fabric.",
  "Nice 03 Off White — tecido secundário.": "Nice 03 Off White — secondary fabric.",
  "Reforça a sensação de bem-estar e cuidado no atendimento.":
    "Reinforces a sense of wellbeing and care in service.",
  "Aproxima o posicionamento do espaço da experiência do cliente.":
    "Brings the space's positioning closer to the client experience.",
  "Sofisticação discreta para clínicas premium acessíveis, com neutralidade, elegância e presença sutil.":
    "Discreet sophistication for accessible premium clinics, with neutrality, elegance and subtle presence.",
  "Posicionamento Premium Neutro para clínicas premium acessíveis.":
    "Neutral premium positioning for accessible premium clinics.",
  "Transmite sofisticação discreta e acabamento refinado.":
    "Conveys discreet sophistication and a refined finish.",
  "Equilibra acolhimento, neutralidade e comunicação comercial forte.":
    "Balances warmth, neutrality and strong commercial communication.",
  "Clínicas estéticas que desejam uma linguagem elegante e acessível.":
    "Beauty clinics seeking an elegant, accessible language.",
  "Consultórios de beleza e procedimentos com imagem sofisticada.":
    "Beauty and procedure rooms with a sophisticated image.",
  "Projetos que priorizam discretude, conforto e identidade premium.":
    "Projects that prioritize discretion, comfort and a premium identity.",
  "Andora Taupe — tecido principal.": "Andora Taupe — main fabric.",
  "Andora Off White — tecido secundário.": "Andora Off White — secondary fabric.",
  "Aproxima o ambiente da percepção de premium sem excessos visuais.":
    "Brings the setting closer to a premium perception without visual excess.",
  "Valoriza a experiência do cliente por meio de uma estética equilibrada.":
    "Enhances the client experience through balanced aesthetics.",
  "Revestimentos para Barbearias": "Coverings for Barbershops",
  "A Curadoria KARV organiza opções com presença visual marcante para barbearias que desejam uma identidade forte e uma atmosfera masculina.":
    "KARV curation organizes options with striking visual presence for barbershops seeking a strong identity and masculine atmosphere.",
  "A seleção valoriza ambientes com presença forte, identidade marcante e linguagem mais assertiva.":
    "The selection values settings with a strong presence, striking identity and more assertive language.",
  "Tons e composições mais profundos ajudam a construir uma experiência visual distinta.":
    "Deeper tones and compositions help build a distinctive visual experience.",
  "Presença no ambiente": "Presence in the setting",
  "Os revestimentos reforçam a percepção do espaço como um lugar com caráter próprio e memorável.":
    "The coverings reinforce the perception of the space as a place with its own memorable character.",
  "Áreas de atendimento e recepção": "Service and reception areas",
  "Espaços de espera com identidade forte": "Waiting spaces with a strong identity",
  "Ambientes que desejam uma presença visual marcante": "Settings seeking striking visual presence",
  "Linguagem visual com personalidade": "Visual language with personality",
  "Posicionamento claro para o conceito do espaço": "Clear positioning for the space concept",
  "Tecidos para Clínicas e Estética": "Fabrics for Clinics and Beauty",
  "A Curadoria KARV organiza revestimentos que favorecem uma imagem limpa, acolhedora e contemporânea para clínicas e espaços de estética.":
    "KARV curation organizes coverings that support a clean, welcoming and contemporary image for clinics and beauty spaces.",
  "A seleção reforça uma imagem contemporânea, organizada e acolhedora para ambientes profissionais.":
    "The selection reinforces a contemporary, organized and welcoming image for professional settings.",
  "Acolhimento no primeiro contato": "Warmth from the first contact",
  "A proposta visual ajuda a transmitir cuidado, presença e conforto desde a recepção.":
    "The visual proposition helps convey care, presence and comfort from reception onward.",
  "Os revestimentos contribuem para uma apresentação sofisticada e alinhada ao posicionamento do espaço.":
    "The coverings contribute to a sophisticated presentation aligned with the space's positioning.",
  "Espaços que buscam uma imagem contemporânea": "Spaces seeking a contemporary image",
  "Ambiente visualmente equilibrado": "A visually balanced setting",
  "Sensação de acolhimento e cuidado": "A sense of warmth and care",
  "Apresentação profissional e atual": "A current, professional presentation",
  "A KARV desenvolve coleções exclusivas que unem identidade visual, paleta de cores, acabamento, aplicação e a experiência do ambiente.":
    "KARV develops exclusive collections that unite visual identity, colour palette, finish, application and the setting experience.",
  "Cada coleção é pensada para reforçar a linguagem do ambiente e o posicionamento da proposta.":
    "Each collection is designed to reinforce the setting's language and the proposition's positioning.",
  "A curadoria organiza a seleção com foco na harmonia e na leitura visual do projeto.":
    "Curation organizes selection around harmony and the project's visual reading.",
  "Acabamento e aplicação": "Finish and application",
  "A experiência do espaço é considerada desde a composição visual até o uso cotidiano.":
    "The space experience is considered from visual composition through daily use.",
  "Aprofunde a seleção por ambiente, aplicação e intenção do espaço.":
    "Explore the selection by setting, application and spatial intent.",
  "Para ambientes que convivem com animais no dia a dia, a Curadoria KARV organiza escolhas pensadas para facilitar a rotina e oferecer conforto.":
    "For settings shared with animals every day, KARV curation organizes choices designed to simplify routines and provide comfort.",
  "A seleção favorece ambientes que precisam de praticidade no dia a dia sem perder o conforto visual.":
    "The selection supports settings that need everyday practicality without losing visual comfort.",
  "A proposta acolhe quem vive com animais em casa ou em ambientes compartilhados.":
    "The proposition welcomes people who live with animals at home or in shared spaces.",
  "A curadoria organiza opções que dialogam com a realidade cotidiana de espaços ativos.":
    "Curation organizes options that speak to the everyday reality of active spaces.",
  "Residências com rotina intensa": "Homes with an active routine",
  "Ambientes compartilhados com animais": "Shared settings with animals",
  "Espaços que valorizam praticidade e acolhimento": "Spaces that value practicality and warmth",
  "Experiência mais prática para o cotidiano": "A more practical everyday experience",
  "Ambiente acolhedor e funcional": "A welcoming, functional setting",
  "Leitura visual equilibrada para uso frequente": "Balanced visual language for frequent use",
  "Para ambientes que valorizam sofisticação, conforto e percepção de valor, a Curadoria KARV organiza revestimentos com presença refinada e linguagem acolhedora.":
    "For settings that value sophistication, comfort and perceived value, KARV curation organizes coverings with refined presence and welcoming language.",
  "Uma linguagem visual mais elaborada, pensada para espaços que desejam presença, conforto e sofisticação.":
    "A more developed visual language for spaces seeking presence, comfort and sophistication.",
  "A seleção favorece uma sensação acolhedora, ideal para projetos que valorizam o bem-estar do ambiente.":
    "The selection supports a welcoming feeling, ideal for projects that value wellbeing in the setting.",
  "Percepção de valor": "Perceived value",
  "A curadoria ajuda a construir uma imagem de alto padrão, com identidade visual forte e acabamento cuidadoso.":
    "Curation helps build a high-end image with strong visual identity and considered finishes.",
  "Salas e recepções com proposta de destaque": "Rooms and receptions with a standout proposition",
  "Ambientes residenciais de alto padrão": "High-end residential settings",
  "Espaços que valorizam presença e sofisticação": "Spaces that value presence and sophistication",
  "Seleção com linguagem visual sofisticada": "Selection with sophisticated visual language",
  "Orientação para ambientes que desejam valor percebido": "Guidance for settings seeking perceived value"
};

let translations: TranslationMap | undefined;

export function getEnglishTextTranslations(): TranslationMap {
  if (!translations) {
    translations = {};
    collectTranslations(pt, en, translations);
    Object.assign(translations, bespokeTranslations);
  }

  return translations;
}
