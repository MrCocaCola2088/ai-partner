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
      es: 'Agente de IA para WhatsApp en Bolivia | AI Partner',
      en: 'WhatsApp AI Agent in Bolivia | AI Partner',
    },
    metaDescription: {
      es: 'Un agente de IA responde y agenda por WhatsApp las 24 horas. Planes desde USD 250/mes en Santa Cruz. Diagnóstico gratuito.',
      en: 'An AI agent answers and books appointments on WhatsApp around the clock. Plans from USD 250/month. Free assessment.',
    },
    h1: {
      es: 'Agente de IA para WhatsApp en Bolivia: responde y agenda 24/7',
      en: 'WhatsApp AI agent in Bolivia: replies and books appointments 24/7',
    },
    intro: [
      {
        es: 'En Santa Cruz de la Sierra la mayoría de las ventas y de las consultas llegan por WhatsApp. El celular del dueño, de la recepcionista o del vendedor se convierte en el centro de la empresa: cotizaciones, horarios, precios, reclamos y seguimientos viven en el mismo chat. Cuando esa persona está en una reunión, almorzando o ya cerró el local, el cliente espera o se va con otro.',
        en: 'In Santa Cruz de la Sierra most sales and questions arrive on WhatsApp. The owner’s, receptionist’s or salesperson’s phone becomes the company’s front desk: quotes, hours, prices, complaints and follow-ups all live in the same chat. When that person is in a meeting, at lunch or the shop is closed, the customer waits or goes elsewhere.',
      },
      {
        es: 'Un agente de IA para WhatsApp no es un mensaje automático de “gracias por escribirnos”. Es un asistente entrenado con la información de tu negocio: servicios, precios públicos, zonas de cobertura, horarios, políticas de reserva y el tono con el que querés hablar. Responde en segundos, hace las preguntas que hoy hace tu equipo y deja la conversación lista para que una persona cierre, cobre o confirme.',
        en: 'A WhatsApp AI agent is not an automatic “thanks for writing” reply. It is an assistant trained on your business: services, public prices, coverage areas, hours, booking rules and the tone you want. It answers in seconds, asks the questions your team already asks and leaves the thread ready for a person to close, collect or confirm.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Qué puede hacer el agente en la primera etapa',
          en: 'What the agent can do in the first stage',
        },
        paragraphs: [
          {
            es: 'Empezamos por los mensajes que se repiten todos los días. El agente saluda, identifica si la persona quiere precio, una cita, una ubicación o hablar con alguien del equipo, y responde con la información que vos ya aprobaste. Si el caso es nuevo, ambiguo o delicado, deriva el chat a un humano con un resumen: qué pidió el cliente, qué datos ya dio y qué falta preguntar.',
            en: 'We start with the messages that repeat every day. The agent greets, identifies whether the person wants a price, an appointment, a location or a teammate, and answers with information you already approved. If the case is new, ambiguous or sensitive, it hands the chat to a human with a summary: what the customer asked, which details they already gave and what is still missing.',
          },
          {
            es: 'También puede proponer horarios, anotar nombre y motivo, y dejar la reserva marcada en la herramienta que ya usás, ya sea una hoja, un calendario o el sistema de turnos del negocio. No hace falta cambiar de WhatsApp Business ni pedirle al cliente que instale otra aplicación. La conversación sigue en el número que tus clientes ya tienen guardado.',
            en: 'It can also suggest times, record the name and reason, and leave the booking in the tool you already use, whether that is a sheet, a calendar or the shop’s appointment system. Customers do not switch away from WhatsApp or install another app. The conversation stays on the number they already have saved.',
          },
        ],
      },
      {
        heading: {
          es: 'Cómo lo implementamos en Santa Cruz',
          en: 'How we implement it in Santa Cruz',
        },
        paragraphs: [
          {
            es: 'El trabajo arranca con el diagnóstico gratuito. En unos veinte minutos listamos los tipos de mensaje, quién responde hoy y qué decisiones no pueden quedar en manos del agente: descuentos especiales, urgencias, quejas fuertes o temas clínicos y legales. Con eso armamos una base de conocimiento corta, probamos conversaciones reales y ajustamos las respuestas hasta que suenan a tu empresa y no a un texto genérico.',
            en: 'Work starts with the free assessment. In about twenty minutes we list message types, who answers today and which decisions must stay with a person: special discounts, emergencies, serious complaints or clinical and legal topics. From that we build a short knowledge base, rehearse real conversations and adjust replies until they sound like your company rather than generic text.',
          },
          {
            es: 'La puesta en marcha habitual entra en el rango de dos a cuatro semanas, según qué tan ordenada esté la información y si hay que conectar un calendario o un CRM. Los planes publicados son Emprendedor a USD 250 por mes, Profesional a USD 500 y Empresarial a USD 900. No pedimos un contrato largo: el alcance se acuerda en el diagnóstico y se puede ajustar cuando el volumen de chats cambie.',
            en: 'A typical launch fits in two to four weeks, depending on how organized the information is and whether a calendar or CRM must be connected. Published plans are Starter at USD 250 per month, Professional at USD 500 and Business at USD 900. We do not ask for a long contract: scope is agreed in the assessment and can change when chat volume changes.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Un ejemplo ilustrativo, no un caso cerrado',
      en: 'An illustrative example, not a claimed result',
    },
    example: [
      {
        es: 'Por ejemplo, una clínica que recibe por WhatsApp preguntas de horarios, precios de consulta y pedidos para reprogramar podría dejar que el agente responda lo rutinario fuera del horario de recepción y arme una lista de turnos tentativos para la mañana siguiente. Una persona del equipo seguiría confirmando los casos que necesitan criterio médico o un cambio de tratamiento. El ejemplo muestra el tipo de flujo; no es el resultado de un cliente nuestro ni una promesa de cuántos turnos se van a recuperar.',
        en: 'For example, a clinic that receives WhatsApp questions about hours, visit prices and reschedule requests could let the agent handle the routine ones after the front desk closes and prepare a list of tentative appointments for the next morning. A teammate would still confirm anything that needs clinical judgment or a treatment change. This shows the kind of flow; it is not a client result and not a promise about how many visits would be recovered.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿El agente reemplaza a la persona que atiende WhatsApp?',
          en: 'Does the agent replace the person who handles WhatsApp?',
        },
        answer: {
          es: 'No. Se queda con las preguntas repetidas y con la toma de datos. Tu equipo sigue cerrando ventas, resolviendo excepciones y hablando cuando el cliente pide una persona.',
          en: 'No. It keeps the repeated questions and the data collection. Your team still closes sales, handles exceptions and steps in when the customer asks for a person.',
        },
      },
      {
        question: {
          es: '¿Funciona con el WhatsApp que ya tenemos?',
          en: 'Does it work with the WhatsApp we already use?',
        },
        answer: {
          es: 'Sí. Trabajamos sobre WhatsApp Business y la API oficial cuando el volumen lo pide. No hace falta que tus clientes cambien de número ni de aplicación.',
          en: 'Yes. We work on WhatsApp Business and the official API when volume calls for it. Customers do not have to change numbers or apps.',
        },
      },
      {
        question: {
          es: '¿Cuánto cuesta empezar?',
          en: 'How much does it cost to start?',
        },
        answer: {
          es: 'Los planes publicados van de USD 250 a USD 900 por mes, según la cantidad de flujos, canales y el nivel de acompañamiento. El diagnóstico para ubicar el plan es gratuito.',
          en: 'Published plans run from USD 250 to USD 900 per month, depending on flows, channels and the level of support. The assessment that places you on a plan is free.',
        },
      },
    ],
  },
  {
    slug: 'ia-para-clinicas',
    metaTitle: {
      es: 'IA para clínicas y consultorios en Santa Cruz | AI Partner',
      en: 'AI for Clinics and Practices in Santa Cruz | AI Partner',
    },
    metaDescription: {
      es: 'Asistente de IA para clínicas y consultorios dentales en Santa Cruz: recordatorios, WhatsApp y agenda. Desde USD 250/mes.',
      en: 'AI assistant for clinics and dental practices in Santa Cruz: reminders, WhatsApp and scheduling. From USD 250/month.',
    },
    h1: {
      es: 'Asistente de IA para clínicas y consultorios dentales en Santa Cruz',
      en: 'AI assistant for clinics and dental practices in Santa Cruz',
    },
    intro: [
      {
        es: 'Una clínica u odontólogo en Santa Cruz suele vivir entre la agenda, el WhatsApp y la sala de espera. La recepción confirma turnos, explica precios de evaluación, manda indicaciones previas y persigue a quien no contestó. Ese trabajo es necesario, pero se come la mañana y se corta cada vez que entra un paciente.',
        en: 'A clinic or dental practice in Santa Cruz usually lives between the calendar, WhatsApp and the waiting room. The front desk confirms visits, explains evaluation prices, sends preparation notes and chases people who did not reply. The work matters, but it eats the morning and stops every time a patient walks in.',
      },
      {
        es: 'Un asistente de IA para clínicas se encarga de la capa repetitiva: responder lo que ya está en tu protocolo, recordar citas, recoger datos de un paciente nuevo y dejar anotado el motivo de consulta. No diagnostica, no recomienda tratamientos y no inventa disponibilidad. Esas decisiones siguen en el equipo de salud y en la persona que maneja la agenda.',
        en: 'An AI assistant for clinics handles the repetitive layer: answering what is already in your protocol, reminding people of visits, collecting details from a new patient and noting the reason for the visit. It does not diagnose, recommend treatments or invent availability. Those decisions stay with the clinical team and the person who owns the calendar.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Dónde suele ayudar primero',
          en: 'Where it usually helps first',
        },
        paragraphs: [
          {
            es: 'Los primeros flujos que ordenamos son los que no requieren criterio clínico: horarios de atención, dirección, cómo llegar, documentos para la primera visita, precios públicos de una evaluación y la política de reprogramación. El asistente responde por WhatsApp con esas piezas y, si la persona quiere un turno, propone franjas que la clínica marcó como abiertas.',
            en: 'The first flows we organize do not need clinical judgment: opening hours, address, how to arrive, documents for a first visit, public prices for an evaluation and the rescheduling policy. The assistant answers on WhatsApp with those pieces and, if the person wants a visit, offers windows the clinic marked as open.',
          },
          {
            es: 'El segundo flujo es el recordatorio. Un mensaje claro el día anterior, con la hora, la sede y la opción de confirmar o pedir otro horario, baja la carga de llamar uno por uno. Si alguien no contesta, el equipo ve una lista corta en lugar de revisar chat por chat. El contenido del recordatorio lo escribe la clínica; nosotros lo dejamos consistente y fácil de actualizar.',
            en: 'The second flow is the reminder. A clear message the day before, with the time, the location and a way to confirm or ask for another slot, removes the need to call everyone. If someone does not reply, the team sees a short list instead of scrolling chat by chat. The clinic writes the reminder; we keep it consistent and easy to update.',
          },
        ],
      },
      {
        heading: {
          es: 'Límites que dejamos por escrito',
          en: 'Limits we write down',
        },
        paragraphs: [
          {
            es: 'En salud el error caro es que el asistente opine de más. Por eso el alcance queda escrito: qué puede decir, qué debe escalar y qué frases están prohibidas. Ante dolor, medicación, resultados o urgencias, la respuesta es derivar a una persona o indicar el canal de emergencia que la clínica ya usa. También evitamos guardar en el chat más datos de los que el consultorio necesita para agendar.',
            en: 'In healthcare the expensive mistake is an assistant that volunteers opinions. Scope is written down: what it may say, what it must escalate and which phrases are forbidden. For pain, medication, results or emergencies, the reply is to hand off to a person or point to the emergency channel the clinic already uses. We also avoid keeping more data in the chat than the practice needs in order to schedule.',
          },
          {
            es: 'La inversión sigue la misma grilla del sitio: USD 250, USD 500 o USD 900 al mes. Una consulta con un solo sillón y pocos tipos de cita suele empezar en Emprendedor. Un centro con varias especialidades, sedes o un volumen alto de mensajes encaja mejor en Profesional o Empresarial. El diagnóstico gratuito sirve para no comprar alcance de más.',
            en: 'Investment follows the same published grid: USD 250, USD 500 or USD 900 per month. A single-chair practice with few visit types usually starts on Starter. A center with several specialties, sites or a high message volume fits Professional or Business better. The free assessment is how we avoid selling more scope than you need.',
          },
          {
            es: 'Para arrancar no hace falta un software nuevo de historia clínica. Alcanza con el horario real, los tipos de cita que sí se pueden reservar por chat y el texto que la recepción ya usa cuando le preguntan precios o indicaciones. Con eso armamos la primera versión, la probamos con mensajes de ejemplo y recién después la conectamos al número. Si algo queda fuera de alcance, el asistente lo dice y pasa la conversación. Ese es el criterio que revisamos en el diagnóstico gratuito antes de elegir entre USD 250, USD 500 o USD 900 al mes.',
            en: 'You do not need new clinical-record software to start. The real hours, the visit types that can be booked in chat and the text the front desk already uses for prices or instructions are enough. With that we build a first version, rehearse it with sample messages and only then connect it to the number. If something is out of scope, the assistant says so and hands the conversation over. That is the criterion we review in the free assessment before choosing USD 250, USD 500 or USD 900 per month.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de una semana de recepción',
      en: 'Illustrative example of a front-desk week',
    },
    example: [
      {
        es: 'Por ejemplo, una clínica dental que hoy confirma turnos a mano por la tarde podría definir tres mensajes: recordatorio, confirmación y reprogramación. El asistente los enviaría a los pacientes del día siguiente y dejaría marcados quién confirmó, quién pidió otro horario y quién no respondió. La recepción usaría esa lista al abrir, en lugar de redactar cada mensaje desde cero. Es un escenario para imaginar el flujo, no un resultado medido de un consultorio atendido por AI Partner.',
        en: 'For example, a dental clinic that currently confirms visits by hand in the afternoon could define three messages: reminder, confirmation and reschedule. The assistant would send them to the next day’s patients and mark who confirmed, who asked for another time and who did not reply. The front desk would use that list at opening instead of writing every message from scratch. This is a scenario to picture the flow, not a measured result from a practice served by AI Partner.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿El asistente da consejos médicos o de tratamiento?',
          en: 'Does the assistant give medical or treatment advice?',
        },
        answer: {
          es: 'No. Solo usa la información operativa que la clínica aprobó. Cualquier síntoma, medicamento o diagnóstico se deriva a una persona.',
          en: 'No. It only uses operational information the clinic approved. Any symptom, medication or diagnosis is handed to a person.',
        },
      },
      {
        question: {
          es: '¿Sirve si la agenda está en un cuaderno o en Excel?',
          en: 'Does it work if the calendar is a notebook or Excel?',
        },
        answer: {
          es: 'Sí. Podemos empezar con una agenda simple y, si más adelante querés, conectar el calendario o el software de turnos que ya tengas.',
          en: 'Yes. We can start with a simple calendar and later connect the scheduling software you already have, if you want that.',
        },
      },
      {
        question: {
          es: '¿En cuánto tiempo se puede probar?',
          en: 'How soon can we try it?',
        },
        answer: {
          es: 'Un primer flujo de respuestas y recordatorios suele quedar usable en dos a cuatro semanas, después del diagnóstico gratuito.',
          en: 'A first flow of replies and reminders is usually usable within two to four weeks after the free assessment.',
        },
      },
    ],
  },
  {
    slug: 'ia-para-inmobiliarias',
    metaTitle: {
      es: 'IA para inmobiliarias en Bolivia | AI Partner',
      en: 'AI for Real Estate Agencies in Bolivia | AI Partner',
    },
    metaDescription: {
      es: 'Calificá interesados y coordiná visitas con un asistente de IA para inmobiliarias. Planes desde USD 250/mes. Diagnóstico gratuito.',
      en: 'Qualify inquiries and coordinate visits with an AI assistant for real estate agencies. Plans from USD 250/month. Free assessment.',
    },
    h1: {
      es: 'IA para inmobiliarias: califica compradores y agenda visitas',
      en: 'AI for real estate agencies: qualify buyers and book visits',
    },
    intro: [
      {
        es: 'Una inmobiliaria en Santa Cruz recibe interesados por Facebook, Instagram y WhatsApp, muchas veces de noche o el domingo. El asesor responde cuando puede, repite la misma ficha y recién después se entera si la persona busca alquiler o compra, en qué zona y con qué rango. Mientras tanto, otro interesado que sí estaba listo para visitar se enfría.',
        en: 'A real estate agency in Santa Cruz receives inquiries from Facebook, Instagram and WhatsApp, often at night or on Sunday. The agent replies when they can, repeats the same listing and only later learns whether the person wants to rent or buy, in which area and in what range. Meanwhile another inquiry that was ready for a visit goes cold.',
      },
      {
        es: 'La IA para inmobiliarias ordena esa primera conversación. Pregunta lo que el equipo ya preguntaría, entrega la información pública del inmueble y propone horarios de visita que la oficina habilitó. El asesor entra cuando hay un interesado con datos mínimos, no para contestar “¿sigue disponible?” por décima vez en el día.',
        en: 'AI for agencies organizes that first conversation. It asks what the team would already ask, shares the public listing details and offers visit times the office opened. The agent steps in when an inquiry has the minimum details, not to answer “is it still available?” for the tenth time that day.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Qué datos recoge antes de pasar el chat',
          en: 'Which details it collects before handing off',
        },
        paragraphs: [
          {
            es: 'Definimos juntos el mínimo para considerar un interesado útil: tipo de operación, zona o proyecto, rango, plazo y si quiere visitar. El asistente no inventa metros, precios ni “está reservado” si esa información no está en la ficha que la inmobiliaria mantiene. Si falta un dato en la ficha, dice que un asesor lo confirma, en lugar de completar el hueco.',
            en: 'Together we define the minimum for a useful inquiry: sale or rent, area or project, range, timing and whether they want a visit. The assistant does not invent square meters, prices or “it is reserved” if that information is not on the listing the agency maintains. If a field is missing, it says an agent will confirm, instead of filling the gap.',
          },
          {
            es: 'Las visitas se proponen sobre bloques que la oficina marca, no sobre la agenda personal adivinada del asesor. Cuando la persona elige un horario, queda el registro con nombre, celular y propiedad. El asesor recibe ese resumen y decide si confirma, cambia la hora o pide más contexto.',
            en: 'Visits are offered on blocks the office marks, not on a guessed personal calendar. When the person picks a time, the record keeps the name, mobile number and property. The agent receives that summary and decides whether to confirm, move the time or ask for more context.',
          },
        ],
      },
      {
        heading: {
          es: 'Cómo se relaciona con el resto de la operación',
          en: 'How it fits the rest of the operation',
        },
        paragraphs: [
          {
            es: 'El asistente puede vivir en WhatsApp, que es donde ya conversan los interesados, y recibir el aviso cuando alguien escribe desde un anuncio. No sustituye la visita, la negociación ni el criterio comercial. Tampoco publicamos en esta página cifras de cierres: cada cartera es distinta y no vamos a inventar cuántas visitas “se consiguen”.',
            en: 'The assistant can live on WhatsApp, where inquiries already talk, and pick up when someone writes from an ad. It does not replace the visit, the negotiation or commercial judgment. We also do not publish closing figures on this page: every portfolio is different and we will not invent how many visits get booked.',
          },
          {
            es: 'El plan se elige por cantidad de proyectos, asesores y flujos. USD 250 al mes alcanza para un equipo chico con una base de fichas y un canal. USD 500 y USD 900 cubren más propiedades, más reglas de derivación y capacitación para que los asesores usen el resumen en lugar de pelearse con el bot. El diagnóstico gratuito deja eso por escrito antes de arrancar.',
            en: 'The plan depends on projects, agents and flows. USD 250 per month fits a small team with one listing base and one channel. USD 500 and USD 900 cover more properties, more handoff rules and training so agents use the summary instead of fighting the bot. The free assessment writes that down before we start.',
          },
          {
            es: 'Si hoy los avisos viven en un grupo de WhatsApp del equipo, el primer paso es sacar de ahí la ficha mínima: precio público, zona, tipo de operación y qué sí se puede coordinar sin el asesor. El asistente usa solo esa ficha. Cuando el interesado pide una visita, el chat no se cierra solo: queda a nombre de alguien de la oficina. En el diagnóstico gratuito revisamos cuántos proyectos entran en la primera versión y si corresponde el plan de USD 250, el de USD 500 o el de USD 900.',
            en: 'If listings currently live in the team WhatsApp group, the first step is to pull out a minimum card: public price, area, sale or rent and what can be coordinated without the agent. The assistant uses only that card. When someone asks for a visit, the chat does not close by itself: it stays assigned to someone in the office. In the free assessment we review how many projects fit the first version and whether the USD 250, USD 500 or USD 900 plan is the right one.',
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
        es: 'Por ejemplo, una inmobiliaria que publica un departamento el viernes podría dejar que el asistente pregunte si buscan alquiler o compra, en qué rango y cuándo pueden visitar, y que ofrezca dos bloques del lunes. El sábado el asesor vería una lista de personas con esos datos, en lugar de un chat largo que empieza con “info”. Sirve para imaginarse el orden del trabajo. No es la historia de un cliente ni una cifra de visitas concretadas.',
        en: 'For example, an agency that publishes an apartment on Friday could let the assistant ask whether people want to rent or buy, in what range and when they can visit, and offer two Monday windows. On Saturday the agent would see a list of people with those details, instead of a long chat that starts with “info”. It is a way to picture the work order. It is not a client story or a count of completed visits.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿El asistente puede negociar el precio?',
          en: 'Can the assistant negotiate the price?',
        },
        answer: {
          es: 'No. Informa el precio público de la ficha y pasa la contraoferta o la consulta comercial a un asesor.',
          en: 'No. It shares the public listing price and hands counteroffers or commercial questions to an agent.',
        },
      },
      {
        question: {
          es: '¿Hay que cargar cada inmueble a mano en un bot?',
          en: 'Do we have to type every property into a bot by hand?',
        },
        answer: {
          es: 'Usamos la fuente que ya tengas: planilla, fichas o el sistema de la inmobiliaria. Si el dato no está ahí, el asistente no lo inventa.',
          en: 'We use the source you already have: a sheet, listing cards or the agency system. If the detail is not there, the assistant does not invent it.',
        },
      },
      {
        question: {
          es: '¿Qué plan conviene si somos dos asesores?',
          en: 'Which plan fits a two-agent team?',
        },
        answer: {
          es: 'Muchas oficinas chicas empiezan en Emprendedor, USD 250 al mes. Si hay varios proyectos y quieren reglas distintas por asesor, lo vemos en el diagnóstico antes de pasar a USD 500 o USD 900.',
          en: 'Many small offices start on Starter, USD 250 per month. If there are several projects and different rules per agent, we decide in the assessment before moving to USD 500 or USD 900.',
        },
      },
    ],
  },
  {
    slug: 'automatizacion-de-procesos',
    metaTitle: {
      es: 'Automatización de procesos con IA en Bolivia | AI Partner',
      en: 'AI Process Automation in Bolivia | AI Partner',
    },
    metaDescription: {
      es: 'Automatizamos procesos con n8n, Make y Zapier conectados a tus herramientas actuales. Desde USD 250/mes. Diagnóstico gratuito.',
      en: 'We automate processes with n8n, Make and Zapier connected to the tools you already use. From USD 250/month. Free assessment.',
    },
    h1: {
      es: 'Automatización de procesos con IA (n8n, Make, Zapier) en Bolivia',
      en: 'Process automation with AI (n8n, Make, Zapier) in Bolivia',
    },
    intro: [
      {
        es: 'Automatizar no es comprar otra aplicación para que el equipo la ignore. Es mirar un proceso que hoy se hace a mano —copiar datos de un correo a una planilla, armar el mismo reporte, avisar por WhatsApp que llegó un pedido— y quitar los pasos que no necesitan criterio. En Bolivia muchas empresas ya pagan Microsoft 365, Google Workspace o un sistema contable; el tiempo se pierde en el puente entre esas herramientas.',
        en: 'Automation is not buying another app for the team to ignore. It is looking at a process done by hand —copying data from email into a sheet, building the same report, pinging WhatsApp when an order arrives— and removing the steps that do not need judgment. In Bolivia many companies already pay for Microsoft 365, Google Workspace or an accounting system; time disappears in the bridge between those tools.',
      },
      {
        es: 'Trabajamos con n8n, Make y Zapier porque se conectan a lo que ya existe, sin pedirte que reescribas la operación. Cuando hace falta leer un documento, clasificar un mensaje o redactar un borrador, sumamos un modelo como ChatGPT o Claude en un punto concreto del flujo. El resto sigue siendo reglas claras: si pasa esto, hacé aquello.',
        en: 'We use n8n, Make and Zapier because they connect to what already exists, without asking you to rewrite the operation. When a document must be read, a message classified or a draft written, we add a model such as ChatGPT or Claude at one specific point in the flow. The rest stays clear rules: if this happens, do that.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Qué ordenamos antes de conectar nada',
          en: 'What we sort out before connecting anything',
        },
        paragraphs: [
          {
            es: 'El marco que usamos es simple: auditar cómo se hace el trabajo hoy, optimizar los pasos que sobran y recién después automatizar. Automatizar un proceso confuso solo hace más rápido el desorden. En el diagnóstico gratuito elegimos un flujo con dueño, frecuencia y un resultado visible, por ejemplo “cada lead del formulario queda en la planilla y alguien recibe un aviso”.',
            en: 'The frame we use is simple: audit how the work happens today, remove steps that should not exist and only then automate. Automating a confused process only speeds up the mess. In the free assessment we pick a flow with an owner, a frequency and a visible result, for example “every lead from the form lands in the sheet and someone gets a notice”.',
          },
          {
            es: 'Documentamos qué sistema es la fuente de la verdad, qué pasa si una herramienta falla y quién revisa las excepciones. Un flujo bueno se puede pausar. No dejamos un escenario donde nadie sabe por qué se mandó un correo o se duplicó un registro.',
            en: 'We document which system is the source of truth, what happens if a tool fails and who reviews exceptions. A good flow can be paused. We do not leave a setup where nobody knows why an email went out or a record was duplicated.',
          },
        ],
      },
      {
        heading: {
          es: 'Herramientas y planes',
          en: 'Tools and plans',
        },
        paragraphs: [
          {
            es: 'n8n encaja cuando querés más control o flujos que viven en tu propio entorno. Make y Zapier encajan cuando la prioridad es conectar aplicaciones conocidas con poca fricción. No hay una marca única correcta: depende de qué sistemas ya usás, del volumen y de quién va a mantener el flujo después del acompañamiento inicial.',
            en: 'n8n fits when you want more control or flows that live in your own environment. Make and Zapier fit when the priority is connecting familiar apps with little friction. There is no single correct brand: it depends on the systems you already use, the volume and who will maintain the flow after the first stretch of support.',
          },
          {
            es: 'Los precios publicados son USD 250, USD 500 y USD 900 por mes. Emprendedor cubre el primer flujo y la capacitación para usarlo. Profesional suma más procesos y revisión. Empresarial sirve cuando hay varias áreas y hace falta un inventario de flujos, no un experimento suelto. El alcance exacto sale del diagnóstico, no de una plantilla cerrada.',
            en: 'Published prices are USD 250, USD 500 and USD 900 per month. Starter covers the first flow and training to use it. Professional adds more processes and review. Business fits when several departments need an inventory of flows, not a one-off experiment. Exact scope comes from the assessment, not from a rigid template.',
          },
          {
            es: 'Un buen primer proceso es uno que ocurre todas las semanas, tiene un responsable y duele cuando se atrasa: pasar leads a una planilla, avisar un pago recibido o armar el reporte que alguien copia a mano. No empezamos por “automatizar la empresa”. En el diagnóstico gratuito elegimos ese proceso, vemos si n8n, Make o Zapier es la vía más simple y dejamos escrito qué queda dentro de USD 250, USD 500 o USD 900 al mes.',
            en: 'A good first process happens every week, has an owner and hurts when it is late: moving leads into a sheet, notifying a received payment or building the report someone copies by hand. We do not start by “automating the company”. In the free assessment we pick that process, see whether n8n, Make or Zapier is the simplest path and write down what fits inside USD 250, USD 500 or USD 900 per month.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de un flujo administrativo',
      en: 'Illustrative example of an admin flow',
    },
    example: [
      {
        es: 'Por ejemplo, una distribuidora que recibe pedidos por correo y los vuelve a escribir en una planilla podría definir un flujo así: el correo entra, se extraen cliente, productos y cantidades, se agrega una fila y se avisa al responsable de despacho solo si falta un dato. Una persona seguiría aprobando precios especiales. Es una forma de explicar el diseño. No afirmamos que una empresa concreta haya ahorrado una cantidad de horas con nosotros.',
        en: 'For example, a distributor that receives orders by email and retypes them into a sheet could define this flow: the email arrives, customer, products and quantities are extracted, a row is added and dispatch is notified only if a field is missing. A person would still approve special prices. This explains the design. We are not claiming that a specific company saved a certain number of hours with us.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿Tengo que dejar Excel o mi sistema actual?',
          en: 'Do I have to leave Excel or my current system?',
        },
        answer: {
          es: 'No. Conectamos lo que ya usás. Si más adelante conviene cambiar una herramienta, es una decisión aparte, no un requisito para empezar.',
          en: 'No. We connect what you already use. If a tool should change later, that is a separate decision, not a requirement to start.',
        },
      },
      {
        question: {
          es: '¿Qué pasa si el flujo se equivoca?',
          en: 'What if the flow makes a mistake?',
        },
        answer: {
          es: 'Las excepciones quedan en una bandeja para una persona. Además dejamos registro de qué se ejecutó, para poder corregir sin adivinar.',
          en: 'Exceptions land in a queue for a person. We also keep a record of what ran, so you can correct it without guessing.',
        },
      },
      {
        question: {
          es: '¿Puedo empezar con un solo proceso?',
          en: 'Can I start with a single process?',
        },
        answer: {
          es: 'Sí. Es lo que recomendamos. El plan Emprendedor, desde USD 250 al mes, está pensado para ese primer flujo bien hecho.',
          en: 'Yes. That is what we recommend. The Starter plan, from USD 250 per month, is meant for that first flow done properly.',
        },
      },
    ],
  },
  {
    slug: 'capacitacion-ia-empresas',
    metaTitle: {
      es: 'Capacitación en ChatGPT y Claude para empresas | AI Partner',
      en: 'ChatGPT and Claude Training for Companies | AI Partner',
    },
    metaDescription: {
      es: 'Capacitamos equipos de empresa en ChatGPT y Claude con talleres prácticos sobre sus tareas reales. Desde USD 250/mes.',
      en: 'We train company teams on ChatGPT and Claude with workshops built on their real tasks. From USD 250/month.',
    },
    h1: {
      es: 'Capacitación en ChatGPT y Claude para equipos de empresa',
      en: 'ChatGPT and Claude training for company teams',
    },
    intro: [
      {
        es: 'Comprar cuentas de ChatGPT o Claude no ordena solo el uso. En una empresa de Santa Cruz es común que una persona del equipo escriba prompts muy bien y el resto pegue textos largos, reciba respuestas genéricas y concluya que “la IA no sirve para nosotros”. La diferencia suele estar en el método, no en la herramienta.',
        en: 'Buying ChatGPT or Claude seats does not organize the use by itself. In a Santa Cruz company it is common that one teammate writes strong prompts and everyone else pastes long texts, gets generic answers and concludes that “AI does not work for us”. The gap is usually the method, not the tool.',
      },
      {
        es: 'La capacitación que damos es práctica y sobre el trabajo de esa empresa: correos que sí se escriben, propuestas, actas, reportes, respuestas a clientes y revisión de documentos. No es una charla de tendencias. Cada participante sale con ejemplos propios, límites claros de qué no se debe pegar en un chat y una forma compartida de pedir resultados.',
        en: 'The training we deliver is practical and based on that company’s work: emails they actually write, proposals, minutes, reports, customer replies and document review. It is not a trends talk. Each participant leaves with their own examples, clear limits on what must not be pasted into a chat and a shared way to ask for results.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Cómo es una sesión',
          en: 'What a session looks like',
        },
        paragraphs: [
          {
            es: 'Antes del taller pedimos tres tareas reales que consumen tiempo. En la sesión las rehacemos en vivo: contexto, instrucción, formato de salida y revisión humana. Comparamos ChatGPT y Claude cuando el trabajo lo pide, por ejemplo un borrador corto frente a un documento largo, sin convertir la clase en una guerra de marcas.',
            en: 'Before the workshop we ask for three real tasks that take time. In the session we redo them live: context, instruction, output format and human review. We compare ChatGPT and Claude when the work calls for it, for example a short draft versus a long document, without turning the class into a brand war.',
          },
          {
            es: 'También acordamos reglas simples de uso: qué información de clientes o de salarios no se sube, cuándo hay que verificar un dato y cómo se guarda un prompt que funcionó para que no dependa de una sola persona. Eso es lo que hace que la capacitación sobreviva a la semana siguiente.',
            en: 'We also agree simple use rules: which customer or payroll information is never uploaded, when a fact must be checked and how a prompt that worked gets saved so it does not depend on one person. That is what lets the training survive the following week.',
          },
        ],
      },
      {
        heading: {
          es: 'A quién va dirigida y cuánto cuesta',
          en: 'Who it is for and what it costs',
        },
        paragraphs: [
          {
            es: 'Sirve para dueños, jefes de área y equipos operativos que ya tienen las cuentas o están por sacarlas. No hace falta saber programar. Si el grupo es chico y el objetivo es ordenar el uso diario, el plan Emprendedor de USD 250 al mes puede incluir la capacitación junto con un primer flujo. Grupos más grandes o varias áreas entran en Profesional (USD 500) o Empresarial (USD 900), con más sesiones y material de seguimiento.',
            en: 'It fits owners, department leads and operations teams who already have seats or are about to get them. Programming is not required. If the group is small and the goal is to organize daily use, the Starter plan at USD 250 per month can include training plus a first flow. Larger groups or several departments fit Professional (USD 500) or Business (USD 900), with more sessions and follow-up material.',
          },
          {
            es: 'El diagnóstico gratuito define el temario. Preferimos una sesión útil sobre los documentos de la empresa antes que un programa largo que nadie termina. Si después hace falta un agente o una automatización, eso se cotiza como implementación, no se disfraza de “curso”.',
            en: 'The free assessment sets the agenda. We prefer one useful session on the company’s own documents over a long program nobody finishes. If an agent or an automation is needed later, that is scoped as implementation, not disguised as a course.',
          },
          {
            es: 'La sesión puede ser presencial en Santa Cruz de la Sierra o remota si el equipo está en más de una ciudad. Pedimos que cada participante traiga una tarea de esa semana, no un caso inventado para la clase. Al cierre queda una mini guía interna: tres prompts que sí se usan, la lista de datos que no se pegan en el chat y el nombre de quien actualiza el material. Con eso se decide si alcanza el plan de USD 250 al mes o si el grupo necesita el acompañamiento de USD 500 o USD 900.',
            en: 'The session can be in person in Santa Cruz de la Sierra or remote if the team is in more than one city. We ask every participant to bring a task from that week, not a case invented for the class. At the end there is a short internal guide: three prompts you actually use, the list of data that must not be pasted into the chat and the name of the person who updates the material. That decides whether USD 250 per month is enough or the group needs the USD 500 or USD 900 support.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de un equipo administrativo',
      en: 'Illustrative example of an admin team',
    },
    example: [
      {
        es: 'Por ejemplo, el equipo administrativo de una empresa que cada lunes arma el mismo informe podría llegar al taller con el archivo del mes pasado y salir con una secuencia: qué contexto se le da al modelo, qué tablas no se le piden inventar y qué tiene que revisar una persona antes de enviar. El ejemplo explica el tipo de ejercicio. No describe a un cliente ni promete un porcentaje de tiempo recuperado.',
        en: 'For example, the admin team of a company that builds the same report every Monday could bring last month’s file to the workshop and leave with a sequence: what context the model gets, which tables it must not invent and what a person checks before sending. The example explains the kind of exercise. It does not describe a client or promise a percentage of time recovered.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿La capacitación es solo teórica?',
          en: 'Is the training only theoretical?',
        },
        answer: {
          es: 'No. Trabajamos sobre tareas reales del equipo. Si no hay un documento o un correo concreto, la sesión no arranca.',
          en: 'No. We work on the team’s real tasks. If there is no concrete document or email, the session does not start.',
        },
      },
      {
        question: {
          es: '¿Enseñan ChatGPT y Claude?',
          en: 'Do you teach both ChatGPT and Claude?',
        },
        answer: {
          es: 'Sí. Vemos cuál conviene para cada tipo de tarea de esa empresa, en lugar de imponer una sola marca.',
          en: 'Yes. We look at which one fits each kind of task in that company, instead of imposing a single brand.',
        },
      },
      {
        question: {
          es: '¿Se puede hacer en la oficina en Santa Cruz?',
          en: 'Can it be done at the office in Santa Cruz?',
        },
        answer: {
          es: 'Sí, de forma presencial en Santa Cruz de la Sierra o en remoto si el equipo está repartido. Lo definimos en el diagnóstico.',
          en: 'Yes, in person in Santa Cruz de la Sierra or remotely if the team is spread out. We decide that in the assessment.',
        },
      },
    ],
  },
  {
    slug: 'qa-testing-ia',
    metaTitle: {
      es: 'QA y testing de chatbots y agentes de IA | AI Partner',
      en: 'QA and Testing for AI Chatbots and Agents | AI Partner',
    },
    metaDescription: {
      es: 'Probamos chatbots, agentes y sistemas RAG antes de que hablen con clientes: precisión, límites y fallos. Desde USD 250/mes.',
      en: 'We test chatbots, agents and RAG systems before they talk to customers: accuracy, limits and failures. From USD 250/month.',
    },
    h1: {
      es: 'QA y testing de chatbots, agentes y sistemas RAG',
      en: 'QA and testing for chatbots, agents and RAG systems',
    },
    intro: [
      {
        es: 'Un chatbot puede verse bien en la demo y fallar el primer día con clientes. Inventa un precio, promete un plazo, mezcla dos políticas o contesta con seguridad algo que no está en los documentos. Si eso pasa en WhatsApp, el error lo lee una persona real y el equipo recién se entera cuando hay una queja.',
        en: 'A chatbot can look fine in the demo and fail on the first day with customers. It invents a price, promises a deadline, mixes two policies or answers confidently with something that is not in the documents. If that happens on WhatsApp, a real person reads the mistake and the team only hears about it when there is a complaint.',
      },
      {
        es: 'El QA de IA es el trabajo de buscar esos fallos antes de publicar. Armamos preguntas que un cliente haría, preguntas malintencionadas y preguntas sobre temas que el sistema no debe tocar. Revisamos si la respuesta está apoyada en la base de conocimiento, si deriva cuando corresponde y si el tono sigue siendo el de la empresa.',
        en: 'AI QA is the work of finding those failures before launch. We write questions a customer would ask, adversarial questions and questions about topics the system must not touch. We check whether the answer is supported by the knowledge base, whether it escalates when it should and whether the tone still sounds like the company.',
      },
    ],
    sections: [
      {
        heading: {
          es: 'Qué se prueba',
          en: 'What gets tested',
        },
        paragraphs: [
          {
            es: 'En un agente de respuestas revisamos exactitud, omisiones y alucinaciones: que no complete datos que no están en la fuente. En un sistema RAG revisamos si recupera el documento correcto y si la respuesta se queda dentro de ese texto. En un flujo con acciones —agendar, crear un registro, enviar un correo— revisamos que la acción solo ocurra cuando los datos están completos y que haya una persona en las excepciones.',
            en: 'For an answering agent we review accuracy, omissions and hallucinations: it must not fill in facts that are not in the source. For a RAG system we review whether it retrieves the right document and whether the answer stays inside that text. For a flow with actions —booking, creating a record, sending an email— we review that the action happens only when the data is complete and that a person owns the exceptions.',
          },
          {
            es: 'También probamos seguridad básica del diálogo: pedidos para ignorar las instrucciones, intentos de sacarle datos de otros clientes y temas que tienen que cortarse y derivarse. El informe no es un certificado eterno. Es una lista de fallos, gravedad y qué hay que corregir antes de ampliar el alcance.',
            en: 'We also test basic dialogue safety: requests to ignore the instructions, attempts to extract other customers’ data and topics that must stop and escalate. The report is not a forever certificate. It is a list of failures, severity and what must be fixed before the scope grows.',
          },
        ],
      },
      {
        heading: {
          es: 'Cuándo pedirlo y cómo se cobra',
          en: 'When to ask for it and how it is priced',
        },
        paragraphs: [
          {
            es: 'Tiene sentido antes de conectar el agente al número de clientes, después de cambiar la base de conocimiento y cuando el equipo siente que “a veces dice cualquier cosa” pero no puede mostrar ejemplos. Si todavía no hay un bot y querés construirlo con pruebas desde el día uno, el QA entra dentro de la implementación.',
            en: 'It makes sense before the agent is connected to the customer number, after the knowledge base changes and when the team feels that “sometimes it says anything” but cannot show examples. If there is no bot yet and you want it built with tests from day one, QA is part of the implementation.',
          },
          {
            es: 'Un ciclo de prueba acotado puede entrar en el plan Emprendedor de USD 250 al mes. Revisiones periódicas, más de un agente o un RAG con muchos documentos encajan en USD 500 o USD 900. El diagnóstico gratuito sirve para ver si hace falta una revisión puntual o un acompañamiento mensual.',
            en: 'A bounded test cycle can fit the Starter plan at USD 250 per month. Periodic reviews, more than one agent or a RAG system with many documents fit USD 500 or USD 900. The free assessment shows whether you need a one-off review or monthly support.',
          },
          {
            es: 'Conviene hacer la primera batería antes de que el número de clientes vea el asistente, y repetirla cuando cambie un precio, una política o el documento del que el sistema lee. No hace falta un laboratorio: alcanza con un acceso de prueba, la fuente de verdad y una hora para recorrer los fallos juntos. En el diagnóstico gratuito vemos si eso entra en USD 250 al mes o si el volumen de respuestas pide el plan de USD 500 o el de USD 900.',
            en: 'The first question set should run before customers see the assistant, and again when a price, a policy or the document the system reads from changes. A lab is not required: a test login, the source of truth and an hour to walk through the failures together are enough. In the free assessment we see whether that fits USD 250 per month or the volume of replies needs the USD 500 or USD 900 plan.',
          },
        ],
      },
    ],
    exampleHeading: {
      es: 'Ejemplo ilustrativo de una batería de preguntas',
      en: 'Illustrative example of a question set',
    },
    example: [
      {
        es: 'Por ejemplo, una empresa que está por publicar un asistente de preguntas frecuentes podría preparar veinte preguntas: diez que sí están en el manual, cinco que mezclan dos políticas y cinco que piden un descuento o un dato de otro cliente. El QA marcaría cuáles respuestas se inventaron un plazo y cuáles derivaron bien. Es un diseño de prueba, no el informe de un sistema que hayamos auditado ni una tasa de error real.',
        en: 'For example, a company about to publish an FAQ assistant could prepare twenty questions: ten that are in the manual, five that mix two policies and five that ask for a discount or another customer’s data. QA would mark which replies invented a deadline and which ones escalated correctly. This is a test design, not the report of a system we audited or a real error rate.',
      },
    ],
    faqs: [
      {
        question: {
          es: '¿El QA garantiza que el bot nunca se equivoque?',
          en: 'Does QA guarantee the bot will never be wrong?',
        },
        answer: {
          es: 'No. Reduce los fallos visibles y deja un método para encontrarlos. Un modelo puede seguir equivocándose en preguntas que no estaban en la batería.',
          en: 'No. It reduces visible failures and leaves a method to find them. A model can still be wrong on questions that were not in the set.',
        },
      },
      {
        question: {
          es: '¿Pueden probar un bot que hizo otro proveedor?',
          en: 'Can you test a bot built by another vendor?',
        },
        answer: {
          es: 'Sí. No hace falta que lo hayamos construido nosotros. Necesitamos acceso de prueba y la fuente de verdad con la que debería responder.',
          en: 'Yes. We do not have to have built it. We need a test access and the source of truth it is supposed to answer from.',
        },
      },
      {
        question: {
          es: '¿Qué entregable queda?',
          en: 'What do we receive?',
        },
        answer: {
          es: 'Una lista de casos, la respuesta obtenida, el problema y la corrección sugerida. Sirve para que tu equipo o el proveedor ajuste el sistema con evidencia.',
          en: 'A list of cases, the answer received, the problem and the suggested fix. Your team or the vendor can then adjust the system with evidence.',
        },
      },
    ],
  },
];

export function getLanding(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
