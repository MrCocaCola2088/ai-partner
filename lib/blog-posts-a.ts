import type {ContentSection, Localized} from '@/lib/content-types';

export type BlogPost = {
  slug: string;
  published: string;
  category: Localized;
  title: Localized;
  description: Localized;
  sections: ContentSection[];
};

export const blogPostsA: BlogPost[] = [
  {
    slug: 'ia-pymes-latinoamerica',
    published: '2026-01-15',
    category: {es: 'IA', en: 'AI'},
    title: {
      es: 'Cómo la IA está transformando las PyMEs en Latinoamérica',
      en: 'How AI is changing SMBs in Latin America',
    },
    description: {
      es: 'Dónde puede ayudar la IA a una PyME en Bolivia: WhatsApp, documentos y tareas repetidas, sin prometer resultados mágicos.',
      en: 'Where AI can help an SMB in Bolivia: WhatsApp, documents and repeated tasks, without magical promises.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'Durante años se habló de inteligencia artificial como algo de corporaciones con equipos de datos. En 2026 esa conversación ya no describe a Santa Cruz ni al resto de Bolivia. Una PyME puede abrir ChatGPT o Claude el mismo día, conectar un flujo con n8n o Make y poner un asistente a responder WhatsApp. La herramienta dejó de ser el obstáculo. El obstáculo es elegir un trabajo concreto y no intentar “implementar IA” como si fuera un proyecto abstracto.',
            en: 'For years artificial intelligence was described as something for corporations with data teams. In 2026 that description no longer fits Santa Cruz or the rest of Bolivia. An SMB can open ChatGPT or Claude the same day, connect a flow with n8n or Make and put an assistant on WhatsApp. The tool is no longer the obstacle. The obstacle is choosing a concrete job instead of trying to “implement AI” as an abstract project.',
          },
          {
            es: 'Este artículo recorre las áreas donde una empresa chica o mediana suele sacar provecho primero, cómo ordenar el intento para no depender de una sola persona curiosa y qué conviene dejar en manos humanas. No hay cifras de clientes nuestros en estas líneas. Cuando aparezca un ejemplo, es un escenario ilustrativo: por ejemplo, una distribuidora o una clínica que podría organizar su semana de otra manera. Sirve para pensar, no para demostrar un resultado.',
            en: 'This article walks through the areas where a small or mid-size company usually benefits first, how to organize the attempt so it does not depend on one curious person and what should stay with humans. There are no client figures in these lines. When an example appears, it is an illustrative scenario: for example, a distributor or a clinic that could organize its week differently. It is for thinking, not for proving a result.',
          },
        ],
      },
      {
        heading: {
          es: 'Dónde aparece el trabajo repetido',
          en: 'Where the repeated work shows up',
        },
        paragraphs: [
          {
            es: 'En una PyME el tiempo no se pierde en un solo lugar dramático. Se pierde en diez lugares chicos: contestar la misma pregunta de horario, pasar un pedido del correo a la planilla, armar el reporte del lunes, redactar una cotización parecida a la de la semana pasada, buscar un archivo que “estaba en el grupo”. Ninguna de esas tareas justifica un software a medida. Juntas sí justifican mirar la operación con calma.',
            en: 'In an SMB, time is not lost in one dramatic place. It is lost in ten small places: answering the same hours question, moving an order from email into a sheet, building Monday’s report, writing a quote that looks like last week’s, searching for a file that “was in the group”. None of those tasks justifies custom software. Together they do justify looking at the operation calmly.',
          },
          {
            es: 'La IA ayuda cuando la tarea tiene materia prima escrita y un formato de salida conocido. Resumir una reunión, proponer un borrador de correo, clasificar mensajes o extraer datos de un pedido entran en ese grupo. No ayuda igual cuando la decisión depende de una relación, de un descuento que no está escrito o de un criterio técnico que solo tiene una persona. Ahí el modelo puede preparar, pero no cerrar.',
            en: 'AI helps when the task has written raw material and a known output format. Summarizing a meeting, drafting an email, classifying messages or extracting data from an order belong in that group. It helps less when the decision depends on a relationship, on a discount that is not written down or on technical judgment that only one person has. There the model can prepare, but it should not close.',
          },
        ],
      },
      {
        heading: {
          es: 'WhatsApp, documentos y reportes',
          en: 'WhatsApp, documents and reports',
        },
        paragraphs: [
          {
            es: 'En Bolivia el canal por defecto es WhatsApp. Por eso un agente de IA rinde más ahí que en un chat escondido en la web que nadie abre. El agente puede responder lo que ya está aprobado —precios públicos, cobertura, requisitos— y tomar datos para una cita o una visita. El equipo entra cuando el mensaje se sale del libreto. Ese diseño está explicado con más detalle en la página de agente de IA para WhatsApp.',
            en: 'In Bolivia the default channel is WhatsApp. That is why an AI agent does more there than in a website chat nobody opens. The agent can answer what is already approved —public prices, coverage, requirements— and collect details for an appointment or a visit. The team steps in when the message leaves the script. That design is explained in more detail on the WhatsApp AI agent page.',
          },
          {
            es: 'El segundo lugar es el documento. Propuestas, actas, manuales internos y respuestas a licitaciones se reescriben todo el tiempo. ChatGPT y Claude sirven para partir de un borrador y de un ejemplo anterior, siempre que una persona revise cifras, nombres y compromisos. La capacitación del equipo importa tanto como la licencia: si cada quien pide las cosas de una forma distinta, la calidad queda librada al azar.',
            en: 'The second place is the document. Proposals, minutes, internal manuals and bid replies get rewritten all the time. ChatGPT and Claude help start from a draft and a previous example, as long as a person reviews figures, names and commitments. Team training matters as much as the license: if everyone asks in a different way, quality is left to chance.',
          },
          {
            es: 'El tercero es el puente entre sistemas. Muchas empresas ya tienen correo, planillas y un sistema de facturación. El trabajo manual está en copiar de uno al otro. n8n, Make o Zapier cubren ese puente. Un modelo de lenguaje entra solo en el tramo donde hay que leer texto libre. El resto pueden ser reglas. Mezclar las dos cosas sin distinguirlas es la forma más común de armar un flujo que nadie se anima a tocar.',
            en: 'The third place is the bridge between systems. Many companies already have email, sheets and an invoicing system. The manual work is copying from one to the other. n8n, Make or Zapier cover that bridge. A language model belongs only in the stretch where free text must be read. The rest can be rules. Mixing the two without distinguishing them is the most common way to build a flow nobody dares to touch.',
          },
        ],
      },
      {
        heading: {
          es: 'Cómo empezar sin un proyecto eterno',
          en: 'How to start without an endless project',
        },
        paragraphs: [
          {
            es: 'Un inicio sano cabe en una página: qué proceso, quién es el dueño, qué herramienta ya existe y qué error no puede salir a un cliente. Con eso se puede decidir si el primer paso es capacitación, un flujo o un agente. Intentar las tres cosas el mismo mes, con el mismo grupo y sin dueño, es la receta para que todo quede en un grupo de WhatsApp llamado “IA” que nadie abre en marzo.',
            en: 'A healthy start fits on one page: which process, who owns it, which tool already exists and which mistake must not reach a customer. With that you can decide whether the first step is training, a flow or an agent. Trying all three in the same month, with the same group and no owner, is how everything ends up in a WhatsApp group called “AI” that nobody opens in March.',
          },
          {
            es: 'Por ejemplo, una importadora que arma cotizaciones parecidas podría dedicar las primeras dos semanas solo a dejar una plantilla de prompt y una lista de datos que no se pegan en el chat. Recién después automatizaría el paso de “cuando llega el correo del cliente, se crea la fila”. Hacerlo al revés —conectar herramientas antes de saber qué se quiere decir— produce un bot que suena seguro y está mal.',
            en: 'For example, an importer that writes similar quotes could spend the first two weeks only on a prompt template and a list of data that must not be pasted into the chat. Only then would it automate the step “when the customer email arrives, create the row”. Doing it backwards —connecting tools before knowing what should be said— produces a bot that sounds confident and is wrong.',
          },
          {
            es: 'Los planes de AI Partner son Básico a USD 250 al mes (un agente de atención por WhatsApp), Crecimiento a USD 500 (dos agentes, con cotizaciones y seguimiento) y Pro a USD 900 (hasta cuatro agentes, con facturación, inventario e integración). La implementación está incluida y no hay contrato de permanencia. El detalle está en la página de precios.',
            en: 'AI Partner plans are Basic at USD 250 per month (one WhatsApp service agent), Growth at USD 500 (two agents, with quotes and follow-up) and Pro at USD 900 (up to four agents, with invoicing, inventory and integration). Implementation is included and there is no lock-in contract. The detail is on the pricing page.',
          },
        ],
      },
      {
        heading: {
          es: 'Qué no conviene prometer',
          en: 'What is not worth promising',
        },
        paragraphs: [
          {
            es: 'Una PyME no necesita un discurso de transformación digital. Necesita que el mensaje de las 21:00 no quede sin respuesta hasta el día siguiente, o que el reporte no dependa de quien se acuerda del formato. Esas metas se pueden observar: ¿el dato quedó registrado?, ¿la respuesta salió del texto aprobado?, ¿una persona vio la excepción? Si la meta es “ser una empresa con IA”, no hay forma de saber si el mes sirvió.',
            en: 'An SMB does not need a digital-transformation speech. It needs the 9 p.m. message not to sit unanswered until the next day, or the report not to depend on whoever remembers the format. Those goals can be observed: was the data recorded, did the reply come from the approved text, did a person see the exception? If the goal is “to be an AI company”, there is no way to know whether the month helped.',
          },
          {
            es: 'Tampoco conviene copiar el stack de una empresa de otro país solo porque apareció en un video. En Santa Cruz el cliente escribe por WhatsApp, la factura puede vivir en un sistema local y el equipo es chico. La implementación útil respeta eso. Si después de leer esta guía querés verlo en tu operación, escribinos por WhatsApp. Te mostramos cómo funcionaría, sin compromiso.',
            en: 'It is also unwise to copy another country’s stack just because it appeared in a video. In Santa Cruz the customer writes on WhatsApp, the invoice may live in a local system and the team is small. A useful implementation respects that. If after this guide you want to see it in your operation, message us on WhatsApp. We show you how it would work, with no obligation.',
          },
        ],
      },
    ],
  },
  {
    slug: 'chatgpt-vs-claude',
    published: '2026-01-22',
    category: {es: 'ChatGPT', en: 'ChatGPT'},
    title: {
      es: 'ChatGPT vs Claude: ¿cuál elegir para tu empresa?',
      en: 'ChatGPT vs Claude: which one should your company choose?',
    },
    description: {
      es: 'Comparación práctica de ChatGPT y Claude para equipos en Bolivia: documentos, borradores, costos y cuándo usar los dos.',
      en: 'A practical comparison of ChatGPT and Claude for teams in Bolivia: documents, drafts, cost and when to use both.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'Una pregunta frecuente es si conviene una marca u otra de modelo. La respuesta honesta es que depende de la tarea, no de cuál marca esté más de moda ese mes. Las dos sirven para redactar, resumir y razonar sobre texto. Se diferencian en el estilo de la respuesta, en cómo manejan documentos largos, en el ecosistema de conexiones y en las cuentas que tu equipo ya tiene abiertas.',
            en: 'A frequent question is whether one model brand or another is better. The honest answer is that it depends on the task, not on which brand is more fashionable that month. Both are good at drafting, summarizing and reasoning over text. They differ in the style of the reply, how they handle long documents, the ecosystem of connections and the accounts your team already has open.',
          },
          {
            es: 'Esta guía no es una tabla de puntajes ni una recomendación única para toda Bolivia. Es una forma de decidir con el trabajo real delante: correos, propuestas, manuales, atención por WhatsApp y análisis de archivos. Al final, muchas empresas terminan con las dos herramientas, cada una en un rol, en lugar de pelear una guerra interna.',
            en: 'This guide is not a scoreboard or a single recommendation for all of Bolivia. It is a way to decide with the real work in front of you: emails, proposals, manuals, WhatsApp support and file review. In the end many companies keep both tools, each in a role, instead of fighting an internal war.',
          },
        ],
      },
      {
        heading: {es: 'Dónde ChatGPT suele entrar primero', en: 'Where ChatGPT usually comes in first'},
        paragraphs: [
          {
            es: 'ChatGPT es la herramienta que más gente del equipo ya probó por su cuenta. Eso tiene un valor práctico: hay menos resistencia para una capacitación y más ejemplos sueltos que se pueden ordenar. Funciona bien para borradores cortos, lluvia de ideas, variantes de un anuncio, explicación de una planilla y tareas de programación cuando alguien del equipo escribe código o fórmulas.',
            en: 'ChatGPT is the tool more teammates have already tried on their own. That has practical value: there is less resistance to training and more loose examples that can be organized. It works well for short drafts, brainstorming, ad variants, explaining a spreadsheet and programming tasks when someone on the team writes code or formulas.',
          },
          {
            es: 'También tiene un ecosistema amplio de conexiones y de GPTs armados para un fin. Para una PyME eso es un arma de doble filo. Se puede resolver un caso rápido, y también se puede llenar la cuenta de experimentos que nadie mantiene. Si el objetivo es operación diaria, conviene una biblioteca chica de prompts aprobados antes que un catálogo infinito.',
            en: 'It also has a wide ecosystem of connections and of GPTs built for a purpose. For an SMB that is a double-edged sword. You can solve a case quickly, and you can also fill the account with experiments nobody maintains. If the goal is daily operations, a small library of approved prompts is better than an infinite catalog.',
          },
        ],
      },
      {
        heading: {es: 'Dónde Claude se siente más cómodo', en: 'Where Claude feels more comfortable'},
        paragraphs: [
          {
            es: 'Claude suele ser más cómodo cuando el material es largo: un contrato, un pliego, una transcripción o un manual que hay que recorrer sin perder el hilo. Muchos equipos lo usan para una primera lectura estructurada y para reescribir en un tono más sobrio. No significa que “nunca se equivoque”. Significa que el tipo de trabajo donde más se lo pide es el documento extenso y la escritura cuidada.',
            en: 'Claude is often more comfortable when the material is long: a contract, a tender, a transcript or a manual that must be walked through without losing the thread. Many teams use it for a first structured reading and for rewriting in a more sober tone. That does not mean it “never makes mistakes”. It means the work it is asked for most is the long document and careful writing.',
          },
          {
            es: 'Si tu empresa vive de leer lo que manda el cliente —especificaciones, correos con historial, políticas internas— vale la pena probar el mismo archivo en las dos herramientas y comparar. La prueba correcta no es “cuál es más inteligente”. Es cuál entrega un borrador que tu gente corrige más rápido sin agregar datos que no estaban en el archivo.',
            en: 'If your company lives by reading what the customer sends —specifications, email history, internal policies— it is worth trying the same file in both tools and comparing. The right test is not “which one is smarter”. It is which one delivers a draft your people correct faster without adding facts that were not in the file.',
          },
        ],
      },
      {
        heading: {es: 'Criterios para no elegir por moda', en: 'Criteria so you do not choose by fashion'},
        paragraphs: [
          {
            es: 'El primer criterio es la tarea semanal, no el lanzamiento del modelo. Anotá tres trabajos que se repiten: por ejemplo, responder consultas de precio, resumir una reunión y revisar un contrato. Probá cada uno con la misma instrucción en ChatGPT y en Claude. Guardá la instrucción. Si el resultado cambia cada vez que alguien “le habla distinto”, el problema es el método y ninguna marca lo va a resolver sola.',
            en: 'The first criterion is the weekly task, not the model launch. Write down three jobs that repeat: for example, answering price questions, summarizing a meeting and reviewing a contract. Try each one with the same instruction in ChatGPT and in Claude. Save the instruction. If the result changes every time someone “talks to it differently”, the problem is the method and no brand will fix it alone.',
          },
          {
            es: 'El segundo criterio es el dato que no debe salir de la empresa. Antes de discutir modelos, definí qué no se pega: listas de clientes, salarios, historias clínicas, credenciales. Las dos herramientas tienen opciones de equipo y de privacidad que hay que leer con calma. Una capacitación de una tarde evita más incidentes que cambiar de proveedor cada trimestre.',
            en: 'The second criterion is the data that must not leave the company. Before debating models, define what is never pasted: customer lists, salaries, clinical histories, credentials. Both tools have team and privacy options that need a careful read. One afternoon of training prevents more incidents than switching vendors every quarter.',
          },
          {
            es: 'El tercer criterio es el costo total, no solo la suscripción. USD 20 o USD 25 por persona se ven chicos al lado de las horas del equipo. La suscripción —desde USD 250 al mes, con la implementación incluida— existe porque una licencia sola no deja el agente funcionando. En la página de precios está la diferencia entre Básico, Crecimiento y Pro.',
            en: 'The third criterion is total cost, not only the subscription. USD 20 or USD 25 per person looks small next to the team’s hours. The subscription —from USD 250 per month, with implementation included— exists because a license alone does not leave the agent running. The pricing page shows the difference between Basic, Growth and Pro.',
          },
        ],
      },
      {
        heading: {es: 'Una forma simple de decidir esta semana', en: 'A simple way to decide this week'},
        paragraphs: [
          {
            es: 'Si el equipo ya paga ChatGPT y el uso es desordenado, no cambies de marca todavía. Ordená tres prompts, una regla de datos y una revisión humana. Si el dolor es leer documentos largos y las respuestas actuales se pierden, probá Claude con esos archivos durante una semana, con la misma rúbrica. Si necesitás las dos, asigná roles: una para borradores cortos y conexiones, la otra para lectura larga. Escribir eso en una página interna vale más que una opinión de pasillo.',
            en: 'If the team already pays for ChatGPT and the use is messy, do not switch brands yet. Organize three prompts, one data rule and a human review. If the pain is reading long documents and current replies wander, try Claude on those files for a week, with the same rubric. If you need both, assign roles: one for short drafts and connections, the other for long reading. Writing that on an internal page is worth more than a hallway opinion.',
          },
          {
            es: 'Por ejemplo, un estudio contable podría dejar ChatGPT para explicar diferencias de una planilla al cliente en lenguaje simple, y Claude para una primera lectura de un contrato de servicios. Una persona del estudio seguiría firmando cualquier número. El ejemplo muestra un reparto posible. No es el esquema de un cliente ni una recomendación cerrada para todos los rubros.',
            en: 'For example, an accounting firm could keep ChatGPT to explain spreadsheet differences to a client in plain language, and Claude for a first reading of a services contract. Someone at the firm would still sign off on any number. The example shows a possible split. It is not a client setup or a closed recommendation for every industry.',
          },
          {
            es: 'Si querés ver cómo quedaría en tu negocio, escribinos por WhatsApp. En esa conversación vemos qué agente te sirve y qué plan encaja. No hace falta llegar con una herramienta elegida.',
            en: 'If you want to see how it would look in your business, message us on WhatsApp. In that conversation we see which agent you need and which plan fits. You do not have to arrive with a tool already chosen.',
          },
          {
            es: 'Una decisión que se puede revisar en treinta días es mejor que una migración anunciada con entusiasmo. Dejá escrito qué tarea se hace en cada herramienta, quién actualiza los prompts y qué señal indicaría que hay que cambiar el reparto. Con eso el equipo no vuelve a discutir de cero cada vez que sale un modelo nuevo.',
            en: 'A decision you can revisit in thirty days is better than a migration announced with enthusiasm. Write down which task lives in each tool, who updates the prompts and what signal would mean the split should change. Then the team does not restart the argument every time a new model ships.',
          },
        ],
      },
    ],
  },
  {
    slug: 'automatizacion-5-casos',
    published: '2026-01-29',
    category: {es: 'Automatización', en: 'Automation'},
    title: {
      es: 'Automatización de procesos: 5 escenarios ilustrativos con IA',
      en: 'Process automation: 5 illustrative scenarios with AI',
    },
    description: {
      es: 'Cinco escenarios ilustrativos de automatización con IA para PyMEs. No son casos de clientes ni resultados prometidos.',
      en: 'Five illustrative automation scenarios for SMBs. They are not client cases or promised results.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'Se suele pedir “casos de éxito” antes de automatizar. El problema es que un caso ajeno, con otro volumen y otro sistema, se convierte en una promesa disfrazada. En esta nota hay cinco escenarios ilustrativos. Cada uno empieza con “por ejemplo” porque no son clientes de AI Partner ni resultados medidos. Sirven para reconocer el tipo de flujo, no para calcular un ahorro que todavía no miramos en tu empresa.',
            en: 'People often ask for “success stories” before automating. The problem is that someone else’s story, with another volume and another system, turns into a disguised promise. This note has five illustrative scenarios. Each one starts with “for example” because they are not AI Partner clients or measured results. They help you recognize the kind of flow, not calculate a saving we have not looked at in your company.',
          },
          {
            es: 'En los cinco se repite la misma regla: primero se quita el paso que sobra, después se automatiza lo que queda y una persona sigue viendo las excepciones. Las herramientas típicas son n8n, Make o Zapier, con un modelo de lenguaje solo donde hay texto libre. Dejar ese agente funcionando entra en la suscripción. El detalle está en la página de agente de IA para WhatsApp.',
            en: 'All five repeat the same rule: first remove the step that should not exist, then automate what remains and a person still sees the exceptions. Typical tools are n8n, Make or Zapier, with a language model only where there is free text. Getting that agent working is part of the subscription. The detail is on the WhatsApp AI agent page.',
          },
        ],
      },
      {
        heading: {es: 'Escenario 1: la bandeja de consultas repetidas', en: 'Scenario 1: the inbox of repeated questions'},
        paragraphs: [
          {
            es: 'Por ejemplo, una empresa de servicios que recibe por WhatsApp las mismas preguntas de horario, precio de evaluación y ubicación podría dejar esas respuestas en un agente entrenado con el texto que ya usa la recepción. El agente pediría nombre y motivo, y pasaría a una persona los mensajes de queja o los pedidos fuera de lista. Nadie tiene que inventar un dato para “no dejar el chat en visto”.',
            en: 'For example, a services company that receives the same WhatsApp questions about hours, evaluation price and location could leave those replies to an agent trained on the text the front desk already uses. The agent would ask for a name and a reason, and hand complaints or off-menu requests to a person. Nobody has to invent a fact just to avoid leaving the chat on read.',
          },
          {
            es: 'El escenario se rompe si el precio cambia en el local y nadie actualiza la fuente. Por eso el flujo incluye un dueño del contenido. No es un bot que “aprende solo” el tarifario. Es un texto que alguien de la empresa puede editar sin llamar a un programador.',
            en: 'The scenario breaks if the price changes in the shop and nobody updates the source. That is why the flow includes an owner for the content. It is not a bot that “learns the price list by itself”. It is text someone in the company can edit without calling a programmer.',
          },
        ],
      },
      {
        heading: {es: 'Escenario 2: el pedido que se vuelve a tipear', en: 'Scenario 2: the order that gets retyped'},
        paragraphs: [
          {
            es: 'Por ejemplo, una distribuidora que recibe pedidos por correo con productos y cantidades en el cuerpo del mensaje podría extraer esos campos, crear una fila y avisar a despacho solo cuando falta un código. El precio especial seguiría en manos de una persona. El flujo no “cierra la venta”. Evita la doble digitación del pedido estándar.',
            en: 'For example, a distributor that receives orders by email with products and quantities in the message body could extract those fields, create a row and notify dispatch only when a code is missing. A special price would stay with a person. The flow does not “close the sale”. It avoids retyping the standard order.',
          },
          {
            es: 'Antes de conectarlo hay que mirar los correos reales de un mes, no un ejemplo perfecto. Si la mitad de los pedidos llega como foto o como audio, el diseño cambia: o se pide un formato mínimo al cliente, o una persona sigue cargando ese tramo. Automatizar solo el caso feliz y sorprenderse del resto es el error clásico.',
            en: 'Before connecting it you have to look at a month of real emails, not a perfect sample. If half the orders arrive as a photo or a voice note, the design changes: either you ask the customer for a minimum format, or a person keeps loading that stretch. Automating only the happy path and being surprised by the rest is the classic mistake.',
          },
        ],
      },
      {
        heading: {es: 'Escenario 3: el recordatorio de una agenda', en: 'Scenario 3: the calendar reminder'},
        paragraphs: [
          {
            es: 'Por ejemplo, una clínica dental podría definir un recordatorio del día anterior con hora, sede y una respuesta para confirmar o pedir otro horario. El asistente marcaría confirmados, reprogramaciones y silencios. La recepción abriría con una lista, no con la obligación de redactar cada mensaje. El contenido clínico no entra en ese texto. Si el paciente escribe un síntoma, la respuesta es derivar.',
            en: 'For example, a dental clinic could define a day-before reminder with the time, the site and a way to confirm or ask for another slot. The assistant would mark confirmations, reschedules and silences. The front desk would open with a list, not with the duty to write every message. Clinical content does not belong in that text. If the patient writes a symptom, the reply is to hand it off.',
          },
          {
            es: 'Este escenario no afirma que las inasistencias bajen un porcentaje. Afirma que el trabajo de recordar puede dejar de ser artesanal. Medir después, con los números de esa clínica, es otra conversación. Inventar el porcentaje antes de mirar la agenda es marketing, no implementación.',
            en: 'This scenario does not claim that no-shows fall by a percentage. It claims that the work of reminding can stop being handmade. Measuring later, with that clinic’s numbers, is a different conversation. Inventing the percentage before looking at the calendar is marketing, not implementation.',
          },
        ],
      },
      {
        heading: {es: 'Escenario 4: el reporte que se arma copiando', en: 'Scenario 4: the report built by copying'},
        paragraphs: [
          {
            es: 'Por ejemplo, el equipo administrativo de una empresa que cada lunes copia cifras de tres planillas a un correo para la gerencia podría dejar la consolidación en un flujo y usar un modelo solo para redactar el párrafo narrativo. Las cifras saldrían de las celdas, no de la memoria del modelo. Una persona leería el correo antes de enviarlo, porque un número inventado en un reporte duele más que un borrador flojo.',
            en: 'For example, the admin team of a company that every Monday copies figures from three sheets into an email for management could leave the consolidation to a flow and use a model only to draft the narrative paragraph. The figures would come from the cells, not from the model’s memory. A person would read the email before sending it, because an invented number in a report hurts more than a weak draft.',
          },
          {
            es: 'El paso previo, que a veces ahorra más que la herramienta, es preguntar si las tres planillas tienen que existir. Si dos son copias, optimizar es borrar una. Automatizar las tres es cementar el duplicado. Por eso el orden es auditar, optimizar y después automatizar.',
            en: 'The previous step, which sometimes saves more than the tool, is to ask whether the three sheets need to exist. If two are copies, optimizing means deleting one. Automating all three cements the duplicate. That is why the order is audit, optimize and only then automate.',
          },
        ],
      },
      {
        heading: {es: 'Escenario 5: la primera respuesta de un aviso', en: 'Scenario 5: the first reply to an ad'},
        paragraphs: [
          {
            es: 'Por ejemplo, una inmobiliaria que publica el viernes podría dejar que un asistente pregunte operación, zona, rango y disponibilidad para visitar, y que ofrezca bloques ya habilitados por la oficina. El asesor recibiría un resumen, no un chat que empieza con “info”. El precio y la disponibilidad saldrían de la ficha. Si la ficha está vieja, el asistente no adivina: dice que un asesor confirma.',
            en: 'For example, an agency that publishes on Friday could let an assistant ask about sale or rent, area, range and availability to visit, and offer blocks the office already opened. The agent would receive a summary, not a chat that starts with “info”. Price and availability would come from the listing. If the listing is stale, the assistant does not guess: it says an agent will confirm.',
          },
          {
            es: 'Los cinco escenarios se pueden empezar de a uno. El plan Básico, USD 250 al mes, es un agente de atención. Crecimiento (USD 500) y Pro (USD 900) suman cotizaciones, seguimiento y, en Pro, facturación, inventario e integración. Si uno de estos ejemplos se parece a tu semana, escribinos por WhatsApp para bajarlo a tu operación, sin convertir el ejemplo en una promesa.',
            en: 'The five scenarios can be started one at a time. The Basic plan, USD 250 per month, is one service agent. Growth (USD 500) and Pro (USD 900) add quotes, follow-up and, on Pro, invoicing, inventory and integration. If one of these examples looks like your week, message us on WhatsApp to bring it down to your operation, without turning the example into a promise.',
          },
          {
            es: 'Antes de elegir cuál de los cinco se parece más a tu operación, anotá durante una semana qué tarea se repitió, quién la hizo y qué sistema tocó. Ese inventario chico evita automatizar el proceso que duele en la reunión y no el que duele el martes a las once. Con esa nota encima de la mesa, la conversación por WhatsApp es más corta y el plan queda más claro.',
            en: 'Before choosing which of the five looks most like your operation, note for one week which task repeated, who did it and which system it touched. That small inventory keeps you from automating the process that hurts in the meeting instead of the one that hurts on Tuesday at eleven. With that note on the table, the WhatsApp conversation is shorter and the plan is clearer.',
          },
        ],
      },
    ],
  },
];
