import type {BlogPost} from '@/lib/blog-posts-a';

export const blogPostsB: BlogPost[] = [
  {
    slug: 'roi-ia-medir-impacto',
    published: '2026-02-05',
    category: {es: 'Negocios', en: 'Business'},
    title: {
      es: 'ROI de la IA: cómo medir el impacto sin inventar cifras',
      en: 'AI ROI: how to measure impact without invented figures',
    },
    description: {
      es: 'Cómo mirar el retorno de una implementación de IA en una PyME: horas, errores y excepciones, antes de hablar de porcentajes.',
      en: 'How to look at the return of an AI implementation in an SMB: hours, errors and exceptions, before talking percentages.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'Preguntar por el ROI de la IA es razonable. Contratar un plan de USD 250, USD 500 o USD 900 al mes sin una forma de mirar si sirvió no lo es. El problema aparece cuando el retorno se presenta como un porcentaje cerrado antes de conocer el proceso. Esta nota propone una medición chica, observable y honesta para una PyME en Bolivia. No trae un “retorno típico” porque ese número, dicho así, sería inventado.',
            en: 'Asking about AI ROI is reasonable. Hiring a plan of USD 250, USD 500 or USD 900 per month with no way to see whether it helped is not. The problem appears when the return is presented as a closed percentage before the process is known. This note proposes a small, observable and honest measurement for an SMB in Bolivia. It does not bring a “typical return” because that number, stated that way, would be invented.',
          },
          {
            es: 'Medir no requiere un tablero sofisticado el primer mes. Requiere una línea de base: cómo se hace la tarea hoy, cuánto tarda una muestra real y qué error ya ocurre. Después se compara la misma tarea con el flujo nuevo. Si no hay línea de base, cualquier cifra posterior es un relato.',
            en: 'Measuring does not require a sophisticated dashboard in the first month. It requires a baseline: how the task is done today, how long a real sample takes and which error already happens. Then you compare the same task with the new flow. Without a baseline, any later figure is a story.',
          },
        ],
      },
      {
        heading: {es: 'Tres señales que sí se pueden anotar', en: 'Three signals you can actually write down'},
        paragraphs: [
          {
            es: 'La primera señal es el tiempo de una muestra, no el tiempo que “se siente”. Durante una semana, alguien anota cuántos minutos lleva contestar diez consultas parecidas, cargar diez pedidos o armar el reporte del lunes. No hace falta un estudio. Hace falta la misma definición antes y después: qué se incluye y qué no. Si el después incluye menos pasos porque se eliminó un duplicado, eso también cuenta, y es optimización, no magia del modelo.',
            en: 'The first signal is the time of a sample, not the time that “it feels like”. For one week, someone notes how many minutes it takes to answer ten similar questions, enter ten orders or build Monday’s report. A study is not required. The same definition before and after is required: what is included and what is not. If the after includes fewer steps because a duplicate was removed, that counts too, and it is optimization, not model magic.',
          },
          {
            es: 'La segunda señal es el error visible. ¿Se mandó un precio distinto al de la lista? ¿Se duplicó un registro? ¿El borrador inventó un plazo? Anotá la cantidad en la muestra, no un porcentaje de toda la empresa. La tercera señal es la excepción: cuántos casos tuvo que ver una persona porque el flujo no debía cerrarlos. Un sistema sano muestra excepciones. Un sistema que “no tiene excepciones” suele estar escondiéndolas.',
            en: 'The second signal is the visible error. Was a price sent that differs from the list? Was a record duplicated? Did the draft invent a deadline? Note the count in the sample, not a percentage of the whole company. The third signal is the exception: how many cases a person had to see because the flow was not supposed to close them. A healthy system shows exceptions. A system that “has no exceptions” is usually hiding them.',
          },
        ],
      },
      {
        heading: {es: 'Cómo relacionarlo con el costo del plan', en: 'How to relate it to the plan cost'},
        paragraphs: [
          {
            es: 'El costo conocido está publicado: USD 250, USD 500 o USD 900 por mes, más las licencias que ya pagues de ChatGPT, Claude o de la herramienta de automatización. El retorno no es una fórmula universal. Una forma simple es comparar ese costo mensual con las horas de la muestra extrapoladas con cuidado, y decir en voz alta qué suposición usaste. Si la suposición es frágil, el número también lo es. Preferimos esa frase a un ROI de dos decimales.',
            en: 'The known cost is published: USD 250, USD 500 or USD 900 per month, plus the ChatGPT, Claude or automation licenses you already pay. The return is not a universal formula. A simple way is to compare that monthly cost with the sample hours extrapolated carefully, and to say out loud which assumption you used. If the assumption is fragile, the number is too. We prefer that sentence to an ROI with two decimals.',
          },
          {
            es: 'También hay retorno que no es hora: una respuesta fuera de horario que sigue el texto aprobado, o un reporte que ya no depende de una sola persona. Eso se puede describir sin convertirlo en plata inventada. “El sábado el agente responde el horario y deriva las quejas” es una observación. “Eso vale USD 4.000 al mes” sin una cuenta es un adorno.',
            en: 'There is also return that is not hours: an after-hours reply that follows the approved text, or a report that no longer depends on one person. That can be described without turning it into invented money. “On Saturday the agent answers the hours and escalates complaints” is an observation. “That is worth USD 4,000 a month” without a calculation is decoration.',
          },
        ],
      },
      {
        heading: {es: 'Qué mirar a los 30 días', en: 'What to look at after 30 days'},
        paragraphs: [
          {
            es: 'A los treinta días alcanza con tres preguntas. ¿La tarea de la muestra se hace con el flujo nuevo o la gente volvió al método viejo? ¿Los errores anotados bajaron, se mantuvieron o cambiaron de tipo? ¿El dueño del contenido actualizó la fuente cuando cambió un precio o una política? Si la respuesta a la tercera es no, el problema no es el modelo. Es que nadie es dueño del texto.',
            en: 'After thirty days, three questions are enough. Is the sample task done with the new flow or did people return to the old method? Did the noted errors fall, stay or change type? Did the content owner update the source when a price or a policy changed? If the answer to the third is no, the problem is not the model. It is that nobody owns the text.',
          },
          {
            es: 'Por ejemplo, una clínica que active recordatorios podría anotar, durante dos semanas, cuántos mensajes se enviaron, cuántos confirmaron por el canal previsto y cuántos escribió igual la recepción a mano. Esa tabla no demuestra un porcentaje de inasistencias “gracias a la IA”. Demuestra si el flujo se usa. Recién con varias semanas y la definición de inasistencia que ya usa la clínica se podría hablar de ese indicador, y sería un dato de ellos, no un caso para publicar.',
            en: 'For example, a clinic that turns on reminders could note, for two weeks, how many messages were sent, how many confirmed through the intended channel and how many the front desk still wrote by hand. That table does not prove a no-show percentage “thanks to AI”. It shows whether the flow is used. Only after several weeks, and with the no-show definition the clinic already uses, could that indicator be discussed, and it would be their data, not a case to publish.',
          },
        ],
      },
      {
        heading: {es: 'Empezar por la medición, no por la herramienta', en: 'Start with the measurement, not the tool'},
        paragraphs: [
          {
            es: 'Si todavía no hay un agente, escribinos por WhatsApp para elegir la tarea juntos. Llegar con “quiero IA” obliga a adivinar. Llegar con “el lunes el reporte toma la mañana de una persona y estos son los pasos” permite decir si entra en el plan de USD 250 o si hace falta más alcance. La página de precios describe los tres planes; la medición dice cuál tiene sentido.',
            en: 'If there is no agent yet, message us on WhatsApp to choose the task together. Arriving with “I want AI” forces a guess. Arriving with “on Monday the report takes one person’s morning and these are the steps” makes it possible to say whether it fits the USD 250 plan or needs more scope. The pricing page describes the three plans; the measurement says which one makes sense.',
          },
          {
            es: 'El impacto real se parece más a una bitácora que a un gráfico de venta. Horas de una muestra, errores, excepciones y si el equipo sigue usando el flujo al mes. Con eso se decide continuar, ajustar o parar. Sin eso, cualquier testimonio bonito es ruido, incluso si viniera de una empresa conocida. Por eso en este sitio no publicamos resultados de clientes que no podemos mostrar con esa bitácora.',
            en: 'Real impact looks more like a log than a sales chart. Hours from a sample, errors, exceptions and whether the team is still using the flow a month later. With that you decide to continue, adjust or stop. Without it, any pretty testimonial is noise, even if it came from a known company. That is why this site does not publish client results we cannot show with that log.',
          },
          {
            es: 'Si la bitácora del primer mes muestra que la gente volvió al método viejo, el siguiente paso no es subir de plan. Es preguntar qué estorbó: una instrucción larga, un sistema que nadie abre o una excepción que aparece demasiado seguido. Ajustar eso suele costar menos que sumar otra herramienta. También podés escribirnos por WhatsApp para leer esa bitácora juntos y decidir si el plan de USD 250 sigue alcanzando o si hace falta el de USD 500 o el de USD 900.',
            en: 'If the first month’s log shows that people went back to the old method, the next step is not to upgrade the plan. It is to ask what got in the way: a long instruction, a system nobody opens or an exception that appears too often. Fixing that usually costs less than adding another tool. You can also message us on WhatsApp to read that log together and decide whether the USD 250 plan is still enough or you need USD 500 or USD 900.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-chatbot-whatsapp-bolivia',
    published: '2026-02-12',
    category: {es: 'WhatsApp', en: 'WhatsApp'},
    title: {
      es: '¿Cuánto cuesta un chatbot de WhatsApp con IA en Bolivia? (2026)',
      en: 'What does a WhatsApp AI chatbot cost in Bolivia? (2026)',
    },
    description: {
      es: 'Precios publicados en 2026: planes de USD 250, 500 y 900 al mes para un agente de WhatsApp, y qué entra en cada uno.',
      en: 'Published 2026 prices: USD 250, 500 and 900 per month for a WhatsApp agent, and what is included in each.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'La pregunta por el precio de un chatbot de WhatsApp en Bolivia llega antes que la pregunta por la tecnología. En 2026 la respuesta de AI Partner está publicada y no depende de una llamada para “ver el número”: el plan Básico cuesta USD 250 al mes, Crecimiento USD 500 y Pro USD 900. La implementación está incluida. Esta nota explica qué cambia entre ellos y qué costos aparte pueden existir, para que el presupuesto no tenga sorpresas escondidas en la letra chica de un tercero.',
            en: 'The question about the price of a WhatsApp chatbot in Bolivia arrives before the question about the technology. In 2026 AI Partner’s answer is published and does not depend on a call to “see the number”: the Basic plan costs USD 250 per month, Growth USD 500 and Pro USD 900. Implementation is included. This note explains what changes between them and which separate costs can exist, so the budget has no surprises hidden in a third party’s fine print.',
          },
          {
            es: 'Un chatbot con IA no es un mensaje fijo de bienvenida. Es un asistente que responde con información de tu empresa, hace preguntas y deriva lo que no debe resolver. El precio del plan cubre el trabajo de diseñarlo, probarlo y acompañarlo. No es el precio de “una app de WhatsApp” genérica descargada del store.',
            en: 'An AI chatbot is not a fixed welcome message. It is an assistant that replies with your company’s information, asks questions and escalates what it should not solve. The plan price covers the work of designing, testing and supporting it. It is not the price of a generic “WhatsApp app” downloaded from a store.',
          },
        ],
      },
      {
        heading: {es: 'Qué incluye cada plan', en: 'What each plan includes'},
        paragraphs: [
          {
            es: 'Básico, USD 250 al mes, es un agente de atención por WhatsApp: respuestas, catálogo y agenda. Alcanza, por ejemplo, para que un negocio responda horarios, precios públicos y tome datos de una consulta, con una persona al tanto de las excepciones. No es el plan para facturación, inventario o la integración con otro sistema: eso está en Pro.',
            en: 'Basic, USD 250 per month, is one WhatsApp service agent: replies, catalog and scheduling. It is enough, for example, for a business to answer hours, public prices and collect details from an inquiry, with a person watching the exceptions. It is not the plan for invoicing, inventory or integration with another system: that is Pro.',
          },
          {
            es: 'Crecimiento, USD 500 al mes, suma un segundo agente: cotizaciones, seguimiento de ventas y un reporte semanal. Pro, USD 900 al mes, llega hasta cuatro agentes e incluye facturación, inventario, integración con tu sistema y soporte prioritario. Escribinos por WhatsApp si no está claro cuál te sirve. No hay contrato de permanencia.',
            en: 'Growth, USD 500 per month, adds a second agent: quotes, sales follow-up and a weekly report. Pro, USD 900 per month, goes up to four agents and includes invoicing, inventory, integration with your system and priority support. Message us on WhatsApp if it is not clear which one you need. There is no lock-in contract.',
          },
        ],
      },
      {
        heading: {es: 'Qué puede costar aparte', en: 'What can cost extra'},
        paragraphs: [
          {
            es: 'WhatsApp Business tiene sus propias condiciones cuando se usa la API: conversaciones iniciadas por la empresa, plantillas y el proveedor de la API pueden tener tarifa. Esa tarifa no es el plan de AI Partner y no la inventamos acá con un número, porque depende del volumen y del proveedor que elijas. Lo separamos al conversar: la suscripción de AI Partner por un lado, los costos de la plataforma por el otro. La implementación de los agentes está incluida en el plan.',
            en: 'WhatsApp Business has its own conditions when the API is used: business-initiated conversations, templates and the API provider can have a fee. That fee is not the AI Partner plan and we do not invent a number for it here, because it depends on volume and on the provider you choose. We separate them in the conversation: the AI Partner subscription on one side, platform costs on the other. Agent implementation is included in the plan.',
          },
          {
            es: 'Las licencias de modelo, si el agente usa ChatGPT, Claude u otro, también pueden ir aparte según cómo se conecte. A veces entran en el uso que la empresa ya paga. A veces hay un consumo variable. Lo correcto es verlo con el flujo real, no estimarlo “porque en internet decía”. Si el número de mensajes es bajo, el plan de USD 250 suele pesar más que el consumo del modelo. Si el número es alto, el consumo se mira antes de prometer un techo.',
            en: 'Model licenses, if the agent uses ChatGPT, Claude or another, can also sit apart depending on how it is connected. Sometimes they are inside what the company already pays. Sometimes there is variable usage. The right move is to look at it with the real flow, not estimate it “because the internet said so”. If message volume is low, the USD 250 plan usually weighs more than model usage. If volume is high, usage is reviewed before promising a ceiling.',
          },
        ],
      },
      {
        heading: {es: 'Cómo no pagar de más el primer mes', en: 'How not to overpay the first month'},
        paragraphs: [
          {
            es: 'El exceso más común es pedir “que responda todo” en la primera versión. Eso alarga la base de conocimiento, multiplica las pruebas y empuja al plan más caro sin necesidad. Una primera versión útil responde lo repetido y deriva el resto. Se puede ampliar al mes siguiente si el equipo ya actualiza el contenido. Empezar en USD 900 porque suena más completo, cuando el negocio tiene un solo local y diez preguntas, es gastar alcance que no se va a usar.',
            en: 'The most common excess is asking the first version to “answer everything”. That lengthens the knowledge base, multiplies the tests and pushes you to the more expensive plan without need. A useful first version answers what repeats and escalates the rest. It can grow the next month if the team already updates the content. Starting at USD 900 because it sounds more complete, when the business has one site and ten questions, is buying scope you will not use.',
          },
          {
            es: 'Por ejemplo, una peluquería o un consultorio que hoy contesta horario, precio de la evaluación y dirección podría vivir el primer mes en el plan de USD 250, con esas tres respuestas y una derivación. Una inmobiliaria con muchos proyectos y varios asesores probablemente no. El ejemplo no es una cotización: muestra por qué el plan se elige según los mensajes reales. Llevá los tipos de mensaje reales, no el deseo de que el bot venda solo.',
            en: 'For example, a salon or a practice that today answers hours, evaluation price and address could spend the first month on the USD 250 plan, with those three replies and a handoff. A real estate agency with many projects and several agents probably could not. The example is not a quote: it shows why the plan is chosen from the real messages. Bring the real message types, not the wish that the bot will sell on its own.',
          },
        ],
      },
      {
        heading: {es: 'Dónde ver el número y el siguiente paso', en: 'Where to see the number and the next step'},
        paragraphs: [
          {
            es: 'Los tres precios están en la página de precios y en el resto del sitio a propósito, para que no haya una versión distinta en cada conversación. Si tu caso no entra limpio en un plan, lo decimos por WhatsApp en lugar de estirar la definición. También podés escribir por WhatsApp al +591 77056858 y mandar, en un mensaje, qué vendés y qué preguntas se repiten.',
            en: 'The three prices are on the pricing page and across the site on purpose, so there is not a different version in every conversation. If your case does not fit a plan cleanly, we say so on WhatsApp instead of stretching the definition. You can also write on WhatsApp at +591 77056858 and send, in one message, what you sell and which questions repeat.',
          },
          {
            es: 'El costo de no hacer nada también existe, pero no lo vamos a disfrazar de estadística. Es el tiempo de la persona que contesta el celular después de hora y el mensaje que queda sin respuesta. Si ese tiempo ya te duele, la página de precios pone un plan y un precio, no una proyección de ventas.',
            en: 'The cost of doing nothing also exists, but we will not disguise it as a statistic. It is the time of the person who answers the phone after hours and the message that stays unanswered. If that time already hurts, the pricing page puts a plan and a price on it, not a sales projection.',
          },
          {
            es: 'Un presupuesto completo de 2026, entonces, tiene tres líneas y no una. La primera es el plan de AI Partner: USD 250, USD 500 o USD 900 al mes, sin contrato largo. La segunda es la plataforma de WhatsApp, si la API aplica a tu volumen. La tercera es el uso del modelo, si no entra en una cuenta que ya pagás. Con esas tres líneas se puede comparar contra el tiempo de la persona que hoy responde el celular, sin necesidad de una proyección de ventas.',
            en: 'A complete 2026 budget, then, has three lines and not one. The first is the AI Partner plan: USD 250, USD 500 or USD 900 per month, with no long contract. The second is the WhatsApp platform, if the API applies to your volume. The third is model usage, if it is not inside an account you already pay for. With those three lines you can compare against the time of the person who answers the phone today, without a sales projection.',
          },
        ],
      },
    ],
  },
  {
    slug: 'clinica-dental-recordatorios-automaticos',
    published: '2026-02-19',
    category: {es: 'Clínicas', en: 'Clinics'},
    title: {
      es: 'Cómo una clínica dental puede reducir inasistencias con recordatorios automáticos',
      en: 'How a dental clinic can cut no-shows with automatic reminders',
    },
    description: {
      es: 'Un diseño ilustrativo de recordatorios por WhatsApp para clínicas dentales en Santa Cruz. Sin porcentajes inventados.',
      en: 'An illustrative design of WhatsApp reminders for dental clinics in Santa Cruz. No invented percentages.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'El título habla de reducir inasistencias porque es la intención de un recordatorio, no porque tengamos un porcentaje para publicar. Una clínica dental puede bajar la fricción de confirmar turnos si el mensaje sale a tiempo, dice la hora correcta y ofrece una forma simple de reprogramar. Cuánto se mueve la inasistencia en un consultorio concreto solo se sabe midiendo esa agenda, con la definición que el consultorio ya usa. Acá está el diseño, no el resultado.',
            en: 'The title talks about reducing no-shows because that is the intention of a reminder, not because we have a percentage to publish. A dental clinic can lower the friction of confirming visits if the message goes out on time, states the right hour and offers a simple way to reschedule. How much no-shows move in a specific practice is known only by measuring that calendar, with the definition the practice already uses. Here is the design, not the result.',
          },
          {
            es: 'En Santa Cruz la recepción de un consultorio dental suele confirmar por WhatsApp en la tarde, entre pacientes. El mensaje se arma a mano, se olvida alguno y, si el paciente contesta de noche, la respuesta espera al día siguiente. Un recordatorio automático no reemplaza a la recepción. Le saca la parte que es igual todos los días.',
            en: 'In Santa Cruz the front desk of a dental practice usually confirms on WhatsApp in the afternoon, between patients. The message is written by hand, someone gets missed and, if the patient replies at night, the answer waits until the next day. An automatic reminder does not replace the front desk. It removes the part that is the same every day.',
          },
        ],
      },
      {
        heading: {es: 'Qué tiene que decir el mensaje', en: 'What the message has to say'},
        paragraphs: [
          {
            es: 'Un recordatorio útil cabe en pocas líneas: nombre del paciente si ya lo tenés y corresponde usarlo, fecha, hora, sede y qué debe responder para confirmar o para pedir otro horario. No incluye consejos de tratamiento, comentarios sobre el motivo clínico ni presión. Si el paciente contesta con un síntoma o una pregunta médica, la regla es derivar a una persona, no improvisar.',
            en: 'A useful reminder fits in a few lines: the patient’s name if you already have it and it is appropriate to use, date, time, site and what they should reply to confirm or to ask for another time. It does not include treatment advice, comments about the clinical reason or pressure. If the patient replies with a symptom or a medical question, the rule is to hand off to a person, not to improvise.',
          },
          {
            es: 'Conviene tener tres textos, no uno solo: el recordatorio, la confirmación recibida y la reprogramación. Los escribe la clínica con su tono. El sistema los envía y clasifica la respuesta en confirmó, pidió cambio o no contestó. Esa clasificación es el entregable de la mañana, más valioso que un chatbot que charla sin dejar una lista.',
            en: 'It helps to have three texts, not one: the reminder, the received confirmation and the reschedule. The clinic writes them in its tone. The system sends them and classifies the reply as confirmed, asked for a change or did not answer. That classification is the morning deliverable, more valuable than a chatbot that chats without leaving a list.',
          },
        ],
      },
      {
        heading: {es: 'De dónde sale el horario', en: 'Where the time comes from'},
        paragraphs: [
          {
            es: 'El recordatorio solo puede ser correcto si la agenda es la fuente de la verdad. Si los turnos viven en un cuaderno y en un chat, primero hay que elegir uno. Puede ser una planilla o el software que el consultorio ya paga. El flujo lee de ahí. No “se acuerda” de lo que se habló el mes pasado. Cuando alguien reprograma en el mostrador, esa fuente se actualiza el mismo día o el recordatorio del día siguiente va a estar mal.',
            en: 'The reminder can only be correct if the calendar is the source of truth. If visits live in a notebook and in a chat, one of them has to be chosen first. It can be a sheet or the software the practice already pays for. The flow reads from there. It does not “remember” what was discussed last month. When someone reschedules at the desk, that source is updated the same day or the next day’s reminder will be wrong.',
          },
          {
            es: 'Por ejemplo, una clínica que confirma cuarenta turnos a la semana podría sacar la lista cada tarde, disparar el texto aprobado y revisar a la mañana solo los que no confirmaron o pidieron cambio. La recepción seguiría llamando a ese grupo corto si el consultorio lo considera necesario. El ejemplo describe una organización posible. No dice que esos cuarenta turnos existan en un cliente ni que las faltas hayan bajado.',
            en: 'For example, a clinic that confirms forty visits a week could pull the list each afternoon, send the approved text and review in the morning only those who did not confirm or asked for a change. The front desk would still call that short group if the practice considers it necessary. The example describes a possible organization. It does not say those forty visits exist at a client or that absences fell.',
          },
        ],
      },
      {
        heading: {es: 'Límites y precio', en: 'Limits and price'},
        paragraphs: [
          {
            es: 'El límite más importante es clínico: el asistente no opina de dolor, medicación ni tratamientos. El segundo es de datos: no hace falta repetir en el chat más información de la que se necesita para llegar a tiempo. El tercero es de expectativa: un recordatorio no corrige una agenda caótica ni una política de cancelación que nadie aplica. Si el paciente puede faltar sin costo y sin aviso, el mensaje ayuda a recordar, no cambia la regla del consultorio.',
            en: 'The most important limit is clinical: the assistant does not comment on pain, medication or treatments. The second is data: the chat does not need more information than what is required to arrive on time. The third is expectation: a reminder does not fix a chaotic calendar or a cancellation policy nobody applies. If a patient can miss the visit at no cost and with no notice, the message helps them remember, it does not change the practice’s rule.',
          },
          {
            es: 'Una clínica con respuestas de horario y agenda suele entrar en el plan Básico de USD 250 al mes. Si además hay cotizaciones y seguimiento, se mira Crecimiento a USD 500. Facturación, inventario o la integración con el sistema que ya usás están en Pro, a USD 900. La página de agentes para clínicas desarrolla ese alcance. Escribinos por WhatsApp con la agenda real antes de elegir.',
            en: 'A clinic with hours replies and scheduling usually fits the Basic plan at USD 250 per month. If you also want quotes and follow-up, look at Growth at USD 500. Invoicing, inventory or integration with the system you already use are on Pro, at USD 900. The page for clinic agents develops that scope. Message us on WhatsApp with the real calendar before choosing.',
          },
        ],
      },
      {
        heading: {es: 'Cómo probarlo sin prometer un porcentaje', en: 'How to try it without promising a percentage'},
        paragraphs: [
          {
            es: 'La prueba sana dura unas semanas y anota cuatro números que la clínica define: recordatorios enviados, confirmaciones, pedidos de cambio y turnos en los que el paciente no llegó. Se comparan con las semanas anteriores solo si la definición de “no llegó” es la misma. Si no lo es, se empieza la serie de cero y se espera. Publicar un “bajamos las faltas 30%” sin esa serie es exactamente lo que este sitio no hace.',
            en: 'A sound trial lasts a few weeks and notes four numbers the clinic defines: reminders sent, confirmations, change requests and visits where the patient did not arrive. They are compared with previous weeks only if the definition of “did not arrive” is the same. If it is not, the series starts from zero and you wait. Publishing “we cut absences 30%” without that series is exactly what this site does not do.',
          },
          {
            es: 'Si querés armar esos textos y esa lista con tu recepción, escribinos por WhatsApp. Llevá cómo confirman hoy y dónde está la agenda. Con eso se ve si el recordatorio es el primer flujo o si antes hay que ordenar la fuente. El precio del plan se elige después de esa conversación, dentro de los USD 250, USD 500 o USD 900 publicados.',
            en: 'If you want to build those texts and that list with your front desk, write to us on WhatsApp. Bring how you confirm today and where the calendar lives. With that we see whether the reminder is the first flow or whether the source has to be organized first. The plan price is chosen after that conversation, inside the published USD 250, USD 500 or USD 900.',
          },
          {
            es: 'También conviene avisarle al paciente, en el primer mensaje, que puede contestar para cambiar el horario y que una pregunta de salud la ve una persona. Ese aviso baja la chance de que alguien espere un consejo clínico del recordatorio. La recepción revisa la lista al abrir y no pierde la mañana redactando. Si después de unas semanas la lista no se usa, el flujo está de más y se apaga. Esa decisión es más sana que mantener un envío que nadie mira.',
            en: 'It also helps to tell the patient, in the first message, that they can reply to change the time and that a health question is seen by a person. That notice lowers the chance that someone expects clinical advice from the reminder. The front desk reviews the list at opening and does not lose the morning writing. If after a few weeks the list is not used, the flow is unnecessary and it gets turned off. That decision is healthier than keeping a send that nobody reads.',
          },
        ],
      },
    ],
  },
];
