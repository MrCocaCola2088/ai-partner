import type {ContentSection, FaqItem, Localized} from '@/lib/content-types';

export type LandingPage = {
  slug: string;
  metaTitle: Localized;
  metaDescription: Localized;
  h1: Localized;
  intro: Localized[];
  sections: ContentSection[];
  exampleHeading: Localized;
  example: Localized[];
  faqs: FaqItem[];
};

export const landingPages: LandingPage[] = [
  {
    slug: 'agente-ia-whatsapp',
    metaTitle: {
      es: 'Agente de WhatsApp para comercios | AI Partner',
      en: 'WhatsApp agent for shops | AI Partner',
    },
    metaDescription: {
      es: 'Un agente de IA atiende el WhatsApp de tu comercio las 24 horas: respuestas, catálogo y agenda. Suscripción desde USD 250/mes, implementación incluida.',
      en: 'An AI agent answers your shop’s WhatsApp around the clock: replies, catalog and scheduling. Subscription from USD 250/month, implementation included.',
    },
    h1: {
      es: 'Agente de WhatsApp para comercios',
      en: 'WhatsApp agent for shops',
    },
    intro: [
      {
        es: 'En un comercio de Santa Cruz las consultas llegan por WhatsApp: precio, stock, horario y si pueden pasar a retirar. Cuando el local está lleno o ya cerró, esos mensajes esperan. AI Partner es un software de agentes de IA para pymes. El agente de atención responde con tu catálogo y tus precios, y agenda si hace falta.',
        en: 'In a Santa Cruz shop, questions arrive on WhatsApp: price, stock, hours and whether someone can pick up. When the floor is busy or the shop is closed, those messages wait. AI Partner is AI agent software for small businesses. The service agent answers with your catalog and prices, and books a time when needed.',
      },
      {
        es: 'Pagás una suscripción mensual y la implementación está incluida. Cargamos tus productos, precios, horarios y preguntas frecuentes, conectamos el agente a tu WhatsApp y lo probamos antes de que hable con clientes. Vos ves las conversaciones. Cuando hace falta una persona, el agente pasa el chat a tu equipo.',
        en: 'You pay a monthly subscription and implementation is included. We load your products, prices, hours and frequent questions, connect the agent to your WhatsApp and test it before it talks to customers. You see the conversations. When a person is needed, the agent hands the chat to your team.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Qué hace el agente de atención',
          en: 'What the service agent does',
        },
        paragraphs: [
          {
            es: 'Responde al instante las preguntas que se repiten: precio, stock, horario y cómo llegar. Muestra el catálogo que vos aprobaste. No inventa un precio que no está cargado. Si el cliente pide algo que el agente no tiene, lo dice y deriva.',
            en: 'It answers the questions that repeat: price, stock, hours and how to get there. It shows the catalog you approved. It does not invent a price that was not loaded. If the customer asks for something the agent does not have, it says so and hands off.',
          },
          {
            es: 'En el plan Crecimiento se suman las cotizaciones y el seguimiento de quien preguntó y no compró. En el plan Pro se agregan facturación, inventario e integración con el sistema que ya usás. El plan Básico es un agente de atención: respuestas, catálogo y agenda.',
            en: 'The Growth plan adds quotes and follow-up for people who asked and did not buy. The Pro plan adds invoicing, inventory and integration with the system you already use. Basic is one service agent: replies, catalog and scheduling.',
          },
        ],
      },
      {
        heading: {
          es: 'Cómo se contrata',
          en: 'How you subscribe',
        },
        paragraphs: [
          {
            es: 'Elegís el plan, nos contás cómo funciona el negocio y lo dejamos andando. No hay contrato de permanencia: podés cancelar cuando quieras y no se cobra el mes siguiente. Los precios están en dólares de referencia y se facturan en bolivianos al tipo de cambio del día.',
            en: 'You choose the plan, tell us how the business works and we leave it running. There is no lock-in contract: you can cancel whenever you want and the next month is not charged. Prices are US dollars for reference and are billed in bolivianos at the day’s exchange rate.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Un ejemplo ilustrativo, no un cliente',
      en: 'An illustrative example, not a customer',
    },
    example: [
      {
        es: 'Por ejemplo, un comercio que recibe de noche preguntas de precio y stock podría dejar que el agente responda con el catálogo y ofrezca un horario de retiro para el día siguiente. Una persona del equipo seguiría cerrando los pedidos especiales. Es una forma de imaginar el flujo. No es la historia de un cliente ni una cifra de ventas.',
        en: 'For example, a shop that gets price and stock questions at night could let the agent answer from the catalog and offer a pickup time for the next day. Someone on the team would still close special orders. This is a way to picture the flow. It is not a customer story or a sales figure.',
      },
    ],
    faqs: [
      {
        question: {es: '¿El agente reemplaza a quien atiende?', en: 'Does the agent replace the person who answers?'},
        answer: {
          es: 'No. Se encarga de lo repetitivo. Cuando una conversación necesita a una persona, la pasa a tu equipo.',
          en: 'No. It handles the repetitive part. When a conversation needs a person, it hands it to your team.',
        },
      },
      {
        question: {es: '¿Funciona con el WhatsApp que ya tengo?', en: 'Does it work with the WhatsApp I already have?'},
        answer: {
          es: 'Sí. Funciona sobre WhatsApp Business, en el número que tus clientes ya tienen guardado.',
          en: 'Yes. It runs on WhatsApp Business, on the number your customers already have saved.',
        },
      },
      {
        question: {es: '¿Cuánto cuesta?', en: 'How much does it cost?'},
        answer: {
          es: 'Básico USD 250 al mes, Crecimiento USD 500 y Pro USD 900. La implementación está incluida.',
          en: 'Basic is USD 250 per month, Growth USD 500 and Pro USD 900. Implementation is included.',
        },
      },
    ],
  },
  {
    slug: 'ia-para-clinicas',
    metaTitle: {
      es: 'Agente para clínicas y consultorios | AI Partner',
      en: 'Agent for clinics and practices | AI Partner',
    },
    metaDescription: {
      es: 'Un agente de IA responde horarios, precios de consulta y agenda turnos por WhatsApp. Suscripción mensual para clínicas y consultorios de Santa Cruz, implementación incluida.',
      en: 'An AI agent answers hours, visit prices and books appointments on WhatsApp. Monthly subscription for clinics and practices in Santa Cruz, implementation included.',
    },
    h1: {
      es: 'Agente para clínicas y consultorios',
      en: 'Agent for clinics and practices',
    },
    intro: [
      {
        es: 'En una clínica o un consultorio de Santa Cruz la recepción confirma turnos, explica horarios y responde precios por WhatsApp mientras atiende la sala. El agente de AI Partner se queda con esa capa repetitiva: horarios, dirección, precios públicos y turnos que la clínica marcó como abiertos.',
        en: 'In a clinic or practice in Santa Cruz the front desk confirms visits, explains hours and answers prices on WhatsApp while the waiting room fills up. The AI Partner agent keeps that repetitive layer: hours, address, public prices and appointments the clinic marked as open.',
      },
      {
        es: 'No opina sobre síntomas, medicamentos ni tratamientos. Eso lo ve una persona del equipo. Si la conversación se sale de lo operativo, el agente la pasa. La implementación está incluida en la suscripción mensual.',
        en: 'It does not comment on symptoms, medication or treatment. A person on the team handles that. If the conversation leaves operations, the agent hands it over. Implementation is included in the monthly subscription.',
      },
    ],
    sections: [
      {
        heading: {es: 'Qué puede responder', en: 'What it can answer'},
        paragraphs: [
          {
            es: 'Horario de atención, cómo llegar, documentos para la primera visita, precio público de una evaluación y la política de reprogramación. Si la persona quiere un turno, propone franjas que la clínica dejó abiertas. No inventa disponibilidad.',
            en: 'Opening hours, how to arrive, documents for a first visit, the public price of an evaluation and the rescheduling policy. If the person wants an appointment, it offers windows the clinic left open. It does not invent availability.',
          },
        ],
      },
      {
        heading: {es: 'Qué plan encaja', en: 'Which plan fits'},
        paragraphs: [
          {
            es: 'Un solo agente de atención, con respuestas, catálogo de servicios y agenda, es el plan Básico a USD 250 al mes. Si además querés cotizaciones o seguimiento, es Crecimiento a USD 500. Varias sedes, facturación, inventario o la conexión con el sistema que ya usás entran en Pro, USD 900. Podés subir o bajar de plan cuando quieras.',
            en: 'One service agent, with replies, a service catalog and scheduling, is the Basic plan at USD 250 per month. If you also want quotes or follow-up, that is Growth at USD 500. Several sites, invoicing, inventory or a connection to the system you already use fit Pro, USD 900. You can move up or down a plan whenever you want.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de una recepción',
      en: 'Illustrative example of a front desk',
    },
    example: [
      {
        es: 'Por ejemplo, una clínica que hoy confirma turnos a mano por la tarde podría dejar que el agente responda horarios y arme una lista de turnos tentativos para la mañana. La recepción confirmaría lo que necesita una persona. Es un escenario para imaginar el flujo, no el resultado de un consultorio atendido por AI Partner.',
        en: 'For example, a clinic that currently confirms visits by hand in the afternoon could let the agent answer hours and prepare a list of tentative appointments for the morning. The front desk would confirm anything that needs a person. This is a scenario to picture the flow, not the result of a practice served by AI Partner.',
      },
    ],
    faqs: [
      {
        question: {es: '¿El agente da indicaciones de salud?', en: 'Does the agent give health guidance?'},
        answer: {
          es: 'No. Solo usa la información operativa que la clínica aprobó. Síntomas, medicamentos y tratamientos se pasan a una persona.',
          en: 'No. It only uses operational information the clinic approved. Symptoms, medication and treatment are handed to a person.',
        },
      },
      {
        question: {es: '¿Sirve si la agenda está en una planilla?', en: 'Does it work if the calendar is a spreadsheet?'},
        answer: {
          es: 'Sí. Podemos empezar con una agenda simple. En el plan Pro se puede conectar con el sistema que ya usás.',
          en: 'Yes. We can start with a simple calendar. On the Pro plan it can connect to the system you already use.',
        },
      },
      {
        question: {es: '¿Cuánto tarda en funcionar?', en: 'How long until it is running?'},
        answer: {
          es: 'Un agente de atención por WhatsApp se puede activar en pocos días si la información está lista. Las integraciones toman más tiempo.',
          en: 'A WhatsApp service agent can go live in a few days if the information is ready. Integrations take longer.',
        },
      },
    ],
  },
  {
    slug: 'ia-para-inmobiliarias',
    metaTitle: {
      es: 'Agente para inmobiliarias | AI Partner',
      en: 'Agent for real estate agencies | AI Partner',
    },
    metaDescription: {
      es: 'Un agente de IA responde por WhatsApp sobre propiedades, arma la ficha y propone visitas. Suscripción mensual para inmobiliarias, implementación incluida.',
      en: 'An AI agent answers on WhatsApp about listings, shares the card and offers visits. Monthly subscription for real estate agencies, implementation included.',
    },
    h1: {
      es: 'Agente para inmobiliarias',
      en: 'Agent for real estate agencies',
    },
    intro: [
      {
        es: 'Una inmobiliaria recibe interesados por WhatsApp de noche y el fin de semana. El agente de AI Partner hace la primera conversación con la ficha que la oficina cargó: tipo de operación, zona, precio público y horarios de visita. No inventa metros ni disponibilidad.',
        en: 'A real estate agency receives inquiries on WhatsApp at night and on weekends. The AI Partner agent handles the first conversation with the card the office loaded: sale or rent, area, public price and visit times. It does not invent square meters or availability.',
      },
      {
        es: 'El asesor entra cuando hay una persona con datos mínimos, no para contestar “¿sigue disponible?” por décima vez. La negociación y la visita siguen en el equipo. La implementación está incluida en la suscripción.',
        en: 'The salesperson steps in when someone has the minimum details, not to answer “is it still available?” for the tenth time. Negotiation and the visit stay with the team. Implementation is included in the subscription.',
      },
    ],
    sections: [
      {
        heading: {es: 'Qué queda en el agente y qué no', en: 'What stays with the agent'},
        paragraphs: [
          {
            es: 'El agente informa el precio público de la ficha y propone bloques de visita que la oficina marcó. Una contraoferta o una consulta comercial pasa a una persona. Si un dato no está en la ficha, no lo completa.',
            en: 'The agent shares the public price on the card and offers visit blocks the office marked. A counteroffer or a commercial question goes to a person. If a detail is not on the card, it does not fill it in.',
          },
        ],
      },
      {
        heading: {es: 'Planes', en: 'Plans'},
        paragraphs: [
          {
            es: 'Una oficina chica, con un agente de atención que responde fichas y agenda visitas, empieza en Básico, USD 250 al mes. Cotizaciones y seguimiento de quien preguntó y no avanzó están en Crecimiento, USD 500. Varias carteras, facturación o la integración con el sistema de la inmobiliaria están en Pro, USD 900.',
            en: 'A small office, with one service agent that answers listing cards and books visits, starts on Basic, USD 250 per month. Quotes and follow-up for people who asked and did not move forward are on Growth, USD 500. Several portfolios, invoicing or integration with the agency system are on Pro, USD 900.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de un aviso de fin de semana',
      en: 'Illustrative example of a weekend listing',
    },
    example: [
      {
        es: 'Por ejemplo, una inmobiliaria que publica un departamento el viernes podría dejar que el agente pregunte si buscan alquiler o compra y ofrezca dos bloques del lunes. El sábado el equipo vería una lista con esos datos. Sirve para imaginarse el orden del trabajo. No es la historia de un cliente ni una cifra de visitas.',
        en: 'For example, an agency that publishes an apartment on Friday could let the agent ask whether people want to rent or buy and offer two Monday windows. On Saturday the team would see a list with those details. It is a way to picture the work. It is not a customer story or a count of visits.',
      },
    ],
    faqs: [
      {
        question: {es: '¿El agente negocia el precio?', en: 'Does the agent negotiate the price?'},
        answer: {
          es: 'No. Informa el precio público de la ficha y pasa la contraoferta a una persona del equipo.',
          en: 'No. It shares the public listing price and hands the counteroffer to someone on the team.',
        },
      },
      {
        question: {es: '¿Hay que cargar cada inmueble en otro sistema?', en: 'Do we have to retype every property?'},
        answer: {
          es: 'Usamos la fuente que ya tengas. En el plan Pro conectamos el agente con ese sistema. Si el dato no está, el agente no lo inventa.',
          en: 'We use the source you already have. On the Pro plan we connect the agent to that system. If the detail is not there, the agent does not invent it.',
        },
      },
      {
        question: {es: '¿Puedo cancelar?', en: 'Can I cancel?'},
        answer: {
          es: 'Sí. No hay contrato de permanencia. Si cancelás, no se cobra el mes siguiente.',
          en: 'Yes. There is no lock-in contract. If you cancel, the next month is not charged.',
        },
      },
    ],
  },
  {
    slug: 'agente-para-ferreterias',
    metaTitle: {
      es: 'Agente para ferreterías y distribuidoras | AI Partner',
      en: 'Agent for hardware stores and distributors | AI Partner',
    },
    metaDescription: {
      es: 'Un agente de IA responde stock, precios y cotizaciones por WhatsApp para ferreterías y distribuidoras. Suscripción desde USD 250/mes, implementación incluida.',
      en: 'An AI agent answers stock, prices and quotes on WhatsApp for hardware stores and distributors. Subscription from USD 250/month, implementation included.',
    },
    h1: {
      es: 'Agente para ferreterías y distribuidoras',
      en: 'Agent for hardware stores and distributors',
    },
    intro: [
      {
        es: 'En una ferretería o una distribuidora el WhatsApp es el mostrador: “¿tienen este código?”, “¿a cómo está el bulto?”, “¿llega hoy?”. El mismo equipo cotiza, despacha y anota el stock. AI Partner pone un agente a responder con tu catálogo y tus precios, y a avisar cuando un producto se está acabando si el plan lo incluye.',
        en: 'In a hardware store or a distributor, WhatsApp is the counter: “do you have this code?”, “what’s the price of the pack?”, “does it arrive today?”. The same team quotes, dispatches and writes down stock. AI Partner puts an agent on replies from your catalog and prices, and on warnings when a product is running out if the plan includes that.',
      },
      {
        es: 'No prometemos una cantidad de horas recuperadas. Dejamos el agente funcionando con la información que nos das, lo probamos antes de atender clientes y vos ves las conversaciones. La implementación está incluida.',
        en: 'We do not promise a number of hours saved. We leave the agent running with the information you give us, we test it before it serves customers and you see the conversations. Implementation is included.',
      },
    ],
    sections: [
      {
        heading: {es: 'Atención, cotización y stock', en: 'Service, quotes and stock'},
        paragraphs: [
          {
            es: 'El plan Básico, USD 250 al mes, es un agente de atención: respuestas, catálogo y agenda. El plan Crecimiento, USD 500, suma un segundo agente para cotizaciones y seguimiento, más un reporte semanal. El plan Pro, USD 900, llega hasta cuatro agentes e incluye facturación, inventario y la integración con tu sistema.',
            en: 'The Basic plan, USD 250 per month, is one service agent: replies, catalog and scheduling. Growth, USD 500, adds a second agent for quotes and follow-up, plus a weekly report. Pro, USD 900, goes up to four agents and includes invoicing, inventory and integration with your system.',
          },
          {
            es: 'Si el precio o el stock no está cargado, el agente no lo inventa: pasa la pregunta a una persona. Eso se prueba antes de conectar el número de clientes.',
            en: 'If the price or the stock is not loaded, the agent does not invent it: it passes the question to a person. That is tested before the customer number is connected.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de un pedido por chat',
      en: 'Illustrative example of an order in chat',
    },
    example: [
      {
        es: 'Por ejemplo, una distribuidora que recibe pedidos por WhatsApp podría dejar que el agente confirme si el código está en el catálogo, arme la cotización con el precio cargado y avise al equipo cuando falte un dato. Una persona seguiría aprobando precios especiales. Es un diseño de flujo, no el resultado de un cliente.',
        en: 'For example, a distributor that receives orders on WhatsApp could let the agent confirm whether the code is in the catalog, build the quote with the loaded price and tell the team when a field is missing. A person would still approve special prices. This is a flow design, not a customer result.',
      },
    ],
    faqs: [
      {
        question: {es: '¿Tengo que dejar mi sistema actual?', en: 'Do I have to leave my current system?'},
        answer: {
          es: 'No. En el plan Pro conectamos los agentes con las planillas o el sistema de ventas o facturación que ya usás.',
          en: 'No. On the Pro plan we connect the agents to the spreadsheets or the sales or invoicing system you already use.',
        },
      },
      {
        question: {es: '¿El agente actualiza el inventario?', en: 'Does the agent update inventory?'},
        answer: {
          es: 'En el plan Pro, sí: consulta y actualiza el stock y avisa cuando un producto se está acabando. En Básico y Crecimiento esa parte no está incluida.',
          en: 'On the Pro plan, yes: it checks and updates stock and warns you when a product is running out. Basic and Growth do not include that.',
        },
      },
      {
        question: {es: '¿Cómo se paga?', en: 'How do I pay?'},
        answer: {
          es: 'Con una suscripción mensual. Los precios están en dólares de referencia y se facturan en bolivianos al tipo de cambio del día.',
          en: 'With a monthly subscription. Prices are in US dollars for reference and are billed in bolivianos at the day’s exchange rate.',
        },
      },
    ],
  },
];

export function getLanding(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
