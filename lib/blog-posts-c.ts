import type {BlogPost} from '@/lib/blog-posts-a';

export const blogPostsC: BlogPost[] = [
  {
    slug: 'whatsapp-business-vs-agente-ia',
    published: '2026-02-26',
    category: {es: 'WhatsApp', en: 'WhatsApp'},
    title: {
      es: 'WhatsApp Business vs. agente de IA: diferencias reales',
      en: 'WhatsApp Business vs. an AI agent: real differences',
    },
    description: {
      es: 'Qué hace WhatsApp Business solo y qué agrega un agente de IA. Cuándo alcanza el primero y cuándo mirar un plan desde USD 250/mes.',
      en: 'What WhatsApp Business does alone and what an AI agent adds. When the first is enough and when to look at a plan from USD 250/month.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'WhatsApp Business y un agente de IA no compiten como dos aplicaciones que hay que elegir para siempre. WhatsApp Business es el canal y el conjunto de funciones que Meta ofrece al negocio: perfil, etiquetas, respuestas rápidas, mensajes de ausencia y, según el caso, la API. Un agente de IA es una capa que lee el mensaje, responde con una base de conocimiento y decide si deriva. Se apoya en ese canal. No lo reemplaza.',
            en: 'WhatsApp Business and an AI agent do not compete as two apps you must choose between forever. WhatsApp Business is the channel and the feature set Meta offers the business: profile, labels, quick replies, away messages and, depending on the case, the API. An AI agent is a layer that reads the message, replies from a knowledge base and decides whether to hand off. It sits on that channel. It does not replace it.',
          },
          {
            es: 'La confusión aparece porque los dos pueden “contestar solos”. Una respuesta rápida es un texto fijo que alguien dispara o que sale ante una palabra clave muy simple. Un agente intenta entender la pregunta, hacer la siguiente y no repetir un párrafo entero cuando la persona ya dijo qué necesita. Esa diferencia cambia el trabajo de la persona que hoy vive en el celular.',
            en: 'The confusion appears because both can “reply on their own”. A quick reply is a fixed text someone triggers or that goes out on a very simple keyword. An agent tries to understand the question, ask the next one and not repeat a whole paragraph when the person already said what they need. That difference changes the work of the person who currently lives on the phone.',
          },
        ],
      },
      {
        heading: {es: 'Qué alcanza con WhatsApp Business', en: 'What WhatsApp Business is enough for'},
        paragraphs: [
          {
            es: 'Si las consultas son pocas y casi siempre iguales, las respuestas rápidas y el mensaje de ausencia resuelven una parte. El perfil con dirección, horario y catálogo también evita preguntas. Para un negocio que recibe diez mensajes al día y tiene a alguien mirando el teléfono, sumar un agente puede ser alcance de más. En la conversación por WhatsApp tiene que poder decirse eso. No todo el mundo necesita el plan de USD 250.',
            en: 'If inquiries are few and almost always the same, quick replies and the away message solve a part. The profile with address, hours and catalog also avoids questions. For a business that receives ten messages a day and has someone watching the phone, adding an agent can be more scope than needed. The WhatsApp conversation has to be able to say that. Not everyone needs the USD 250 plan.',
          },
          {
            es: 'El límite aparece cuando hay variantes. “Precio” puede significar evaluación, control o un servicio que no está en el catálogo. La respuesta rápida manda el mismo bloque. La persona igual tiene que leer y completar. Si eso pasa decenas de veces por día, o fuera del horario en que hay alguien disponible, el canal solo ya no ordena la cola.',
            en: 'The limit appears when there are variants. “Price” can mean an evaluation, a checkup or a service that is not in the catalog. The quick reply sends the same block. The person still has to read and complete it. If that happens dozens of times a day, or outside the hours when someone is available, the channel alone no longer organizes the queue.',
          },
        ],
      },
      {
        heading: {es: 'Qué agrega el agente', en: 'What the agent adds'},
        paragraphs: [
          {
            es: 'El agente usa textos que la empresa aprobó, pero elige cuál corresponde y pide el dato que falta: nombre, zona, tipo de turno, si quiere visitar. Deja un resumen para la persona. Puede ofrecer horarios que estén marcados como abiertos. No debería inventar disponibilidad ni un descuento. Cuando la pregunta se sale de la base, lo dice y deriva, en lugar de completar el hueco con un tono seguro.',
            en: 'The agent uses texts the company approved, but it chooses which one applies and asks for the missing detail: name, area, type of visit, whether they want to come in. It leaves a summary for the person. It can offer times marked as open. It should not invent availability or a discount. When the question leaves the base, it says so and hands off, instead of filling the gap with a confident tone.',
          },
          {
            es: 'Eso exige mantenimiento. Alguien de la empresa actualiza precios y políticas. Alguien revisa, al principio, una muestra de conversaciones. Sin ese dueño, el agente envejece igual que un mensaje de ausencia de hace un año. La diferencia es que un agente desactualizado conversa, así que el error viaja más lejos que un texto fijo que el cliente reconoce como automático.',
            en: 'That requires maintenance. Someone in the company updates prices and policies. Someone reviews, at the beginning, a sample of conversations. Without that owner, the agent goes stale the same way as an away message from a year ago. The difference is that a stale agent converses, so the mistake travels further than a fixed text the customer recognizes as automatic.',
          },
        ],
      },
      {
        heading: {es: 'Cómo elegir sin cambiar de número', en: 'How to choose without changing numbers'},
        paragraphs: [
          {
            es: 'No hace falta migrar a otro chat. Tus clientes siguen escribiendo al número que ya tienen. Se puede empezar con respuestas rápidas y, cuando el volumen o la variedad lo pidan, sumar el agente sobre el mismo WhatsApp Business. Si más adelante el volumen exige la API y plantillas, ese es un paso de plataforma, con sus tarifas propias, separado del plan de implementación.',
            en: 'You do not have to migrate to another chat. Your customers keep writing to the number they already have. You can start with quick replies and, when volume or variety calls for it, add the agent on the same WhatsApp Business. If later the volume requires the API and templates, that is a platform step, with its own fees, separate from the implementation plan.',
          },
          {
            es: 'Por ejemplo, una inmobiliaria que hoy manda la misma ficha con una respuesta rápida podría seguir usando WhatsApp Business y sumar un agente que pregunte si buscan alquiler o compra antes de pasar el chat. Una farmacia de barrio con pocos mensajes quizás se quede solo con el perfil y las respuestas rápidas. Los dos ejemplos son ilustrativos. No describen implementaciones hechas ni un antes y después medido.',
            en: 'For example, an agency that today sends the same listing with a quick reply could keep using WhatsApp Business and add an agent that asks whether people want to rent or buy before handing off the chat. A neighborhood pharmacy with few messages might stay with the profile and quick replies only. Both examples are illustrative. They do not describe finished implementations or a measured before and after.',
          },
        ],
      },
      {
        heading: {es: 'Precio y siguiente paso', en: 'Price and next step'},
        paragraphs: [
          {
            es: 'Cuando el agente sí hace falta, los planes publicados son USD 250, USD 500 y USD 900 al mes. El primero cubre un alcance acotado. Los siguientes cubren más reglas, más canales internos o más revisión. La comparación completa de precios está en la página de precios, y el detalle del agente en la página de agente de IA para WhatsApp. WhatsApp Business en sí puede tener costo cero en la app o costo de API: eso se mira aparte.',
            en: 'When the agent is actually needed, the published plans are USD 250, USD 500 and USD 900 per month. The first covers a bounded scope. The next ones cover more rules, more internal channels or more review. The full price comparison is on the pricing page, and the agent detail is on the WhatsApp AI agent page. WhatsApp Business itself can be free in the app or carry an API cost: that is looked at separately.',
          },
          {
            es: 'Si no estás seguro de en qué lado estás, anotá los tipos de mensaje de una semana o escribinos por WhatsApp. Con esa lista se ve si alcanza la respuesta rápida o si vale la pena el agente. Escribirnos por WhatsApp al +591 77056858 con tres ejemplos de conversaciones reales —sin datos sensibles— también alcanza para orientar la primera respuesta.',
            en: 'If you are not sure which side you are on, note the message types from one week or message us on WhatsApp. With that list you can see whether a quick reply is enough or the agent is worth it. Writing to us on WhatsApp at +591 77056858 with three examples of real conversations —without sensitive data— is also enough to steer the first reply.',
          },
          {
            es: 'Una diferencia más, fácil de olvidar: la respuesta rápida no se equivoca de precio si el texto está bien, porque no redacta. El agente sí puede equivocarse si la base está vieja o si completa un hueco. Por eso el agente pide una revisión que la respuesta rápida no pide. Si no hay quien mire una muestra de chats al mes, quédate con WhatsApp Business. Si hay quien lo haga y el volumen ya no entra en textos fijos, el agente de USD 250 al mes es el siguiente escalón, no un salto a un proyecto grande. La página de precios muestra los tres niveles: Básico, Crecimiento y Pro.',
            en: 'One more difference, easy to forget: the quick reply does not get the price wrong if the text is right, because it does not draft. The agent can get it wrong if the base is stale or if it fills a gap. That is why the agent asks for a review the quick reply does not ask for. If nobody can look at a sample of chats each month, stay with WhatsApp Business. If someone can, and volume no longer fits fixed texts, the USD 250 per month agent is the next step, not a jump to a large project.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tareas-oficina-automatizar-n8n',
    published: '2026-03-05',
    category: {es: 'Automatización', en: 'Automation'},
    title: {
      es: '7 tareas de oficina que podés automatizar esta semana con n8n',
      en: '7 office tasks you can automate this week with n8n',
    },
    description: {
      es: 'Siete tareas de oficina concretas para un primer flujo con n8n, Make o Zapier. Sin prometer horas ahorradas.',
      en: 'Seven concrete office tasks for a first flow with n8n, Make or Zapier. No promised hours saved.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: '“Esta semana” no significa conectar toda la empresa antes del viernes. Significa elegir una tarea que ya duele, que ocurre seguido y que tiene un resultado fácil de verificar. n8n es una buena herramienta para eso cuando querés ver el flujo y mantenerlo. Make o Zapier sirven para el mismo tipo de tarea si ya los estás pagando. La marca es secundaria al proceso.',
            en: '“This week” does not mean connecting the whole company before Friday. It means choosing one task that already hurts, that happens often and that has a result easy to verify. n8n is a good tool for that when you want to see the flow and maintain it. Make or Zapier serve the same kind of task if you are already paying for them. The brand is secondary to the process.',
          },
          {
            es: 'Las siete tareas de abajo son de oficina, no de ciencia de datos. Cada una puede ser el trabajo del agente del plan Básico, USD 250 al mes, si el alcance se queda en atención por WhatsApp. No afirmamos cuántas horas se recuperan: eso depende de cuántas veces por semana ocurra en tu empresa y de si el equipo deja de hacerla a mano.',
            en: 'The seven tasks below are office work, not data science. Each one can be the work of the Basic plan agent, USD 250 per month, if the scope stays on WhatsApp service. We do not claim how many hours come back: that depends on how many times a week it happens in your company and on whether the team stops doing it by hand.',
          },
        ],
      },
      {
        heading: {es: 'Las siete tareas', en: 'The seven tasks'},
        paragraphs: [
          {
            es: 'Primera: cuando llega un formulario o un correo de contacto, crear la fila en la planilla y avisar a la persona responsable. Segunda: guardar el adjunto de un correo en la carpeta correcta y anotar el nombre del archivo. Tercera: recordar una tarea interna —cobranza, vencimiento de un documento, seguimiento— sin depender de que alguien se acuerde de mirar el calendario. Cuarta: armar el borrador del reporte semanal con cifras que salen de celdas, y dejar el párrafo narrativo para una revisión humana.',
            en: 'First: when a contact form or email arrives, create the row in the sheet and notify the responsible person. Second: save an email attachment in the right folder and note the file name. Third: remind an internal task —collections, a document expiry, a follow-up— without depending on someone remembering to look at the calendar. Fourth: build the weekly report draft with figures that come from cells, and leave the narrative paragraph for a human review.',
          },
          {
            es: 'Quinta: clasificar un mensaje entrante en una de pocas categorías que el equipo definió, por ejemplo consulta, reclamo o factura, y enrutarlo. Sexta: copiar un lead desde el aviso o el formulario hacia la hoja que el vendedor ya usa, con los campos mínimos y sin duplicar si el correo ya existe. Séptima: avisar en un canal interno cuando un flujo falla, en lugar de enterarse porque un cliente dice que nadie le respondió. Esa séptima no se ve, y es la que evita que las otras seis mueran en silencio.',
            en: 'Fifth: classify an incoming message into one of a few categories the team defined, for example inquiry, complaint or invoice, and route it. Sixth: copy a lead from the ad or the form into the sheet the salesperson already uses, with the minimum fields and without duplicating if the email already exists. Seventh: notify an internal channel when a flow fails, instead of finding out because a customer says nobody replied. That seventh one is invisible, and it is the one that keeps the other six from dying quietly.',
          },
        ],
      },
      {
        heading: {es: 'Cómo elegir una sola para esta semana', en: 'How to choose only one for this week'},
        paragraphs: [
          {
            es: 'Elegí la que tenga dueño. Si nadie va a mirar la planilla nueva, no la automatices. Elegí la que tenga ejemplos reales de los últimos quince días, no la que queda bien en una reunión. Y elegí la que se pueda apagar: si el flujo se detiene, la persona sabe volver al método anterior el mismo día. Esas tres condiciones importan más que la cantidad de aplicaciones conectadas.',
            en: 'Choose the one that has an owner. If nobody will look at the new sheet, do not automate it. Choose the one that has real examples from the last fifteen days, not the one that looks good in a meeting. And choose the one that can be turned off: if the flow stops, the person knows how to return to the previous method the same day. Those three conditions matter more than the number of connected apps.',
          },
          {
            es: 'Por ejemplo, una oficina que recibe currículums por correo podría, esta semana, solo guardar el archivo y anotar nombre y puesto en una hoja. No hace falta que un modelo “evalúe” al candidato. Ese extra suena moderno y mete un criterio que la empresa no escribió. El flujo aburrido de archivar ya saca trabajo repetido. El criterio de contratación se queda en una persona.',
            en: 'For example, an office that receives résumés by email could, this week, only save the file and note the name and role in a sheet. A model does not need to “evaluate” the candidate. That extra sounds modern and inserts a judgment the company did not write. The boring filing flow already removes repeated work. The hiring judgment stays with a person.',
          },
        ],
      },
      {
        heading: {es: 'n8n, Make o Zapier', en: 'n8n, Make or Zapier'},
        paragraphs: [
          {
            es: 'n8n conviene si querés el flujo en un entorno que controlás y si hay alguien, aunque sea nosotros al principio, que pueda mirar un error. Make y Zapier convienen si la prioridad es conectar aplicaciones conocidas con poca fricción y el equipo ya está ahí. En los tres casos el modelo de lenguaje es opcional. Para archivar un adjunto no hace falta. Para leer un pedido escrito en prosa, sí puede hacer falta, y hay que probarlo con correos reales.',
            en: 'n8n fits if you want the flow in an environment you control and if someone, even if it is us at the beginning, can look at an error. Make and Zapier fit if the priority is connecting familiar apps with little friction and the team is already there. In all three cases the language model is optional. Filing an attachment does not need it. Reading an order written in prose might, and it has to be tested with real emails.',
          },
          {
            es: 'El plan de USD 250 al mes alcanza para dejar una de estas siete tareas funcionando y para enseñarle al dueño cómo pausarla y cómo leer un fallo. USD 500 y USD 900 entran cuando la lista crece o cuando varias áreas piden lo mismo a la vez. Los tres planes están en la página de precios. Hacer las siete en paralelo el primer mes es la forma de no terminar ninguna.',
            en: 'The USD 250 per month plan is enough to get one of these seven tasks working and to teach the owner how to pause it and how to read a failure. USD 500 and USD 900 come in when the list grows or when several departments ask for the same thing at once. The three plans are on the pricing page. Doing all seven in parallel in the first month is how you finish none of them.',
          },
        ],
      },
      {
        heading: {es: 'El encargo de esta semana', en: 'This week’s assignment'},
        paragraphs: [
          {
            es: 'Anotá la tarea, el disparador, el sistema de destino y quién revisa la excepción. Con esas cuatro líneas se puede implementar o se puede ver que todavía falta ordenar el proceso. Si querés hacerlo con nosotros, escribinos por WhatsApp y llevá un ejemplo real, aunque sea un correo con datos tapados. También podés escribir a eduardourzua2088@gmail.com o por WhatsApp. El objetivo de la semana es un flujo que se pueda mostrar, no una lista de siete deseos.',
            en: 'Write down the task, the trigger, the destination system and who reviews the exception. With those four lines it can be implemented or you can see that the process still needs to be organized. If you want to do it with us, message us on WhatsApp and bring a real example, even an email with the data covered. You can also write to eduardourzua2088@gmail.com or on WhatsApp. The goal of the week is a flow you can show, not a list of seven wishes.',
          },
          {
            es: 'Si ninguna de las siete te duele esta semana, no fuerces una. Automatizar por completar la lista deja flujos que nadie abre y que después dan miedo apagar. Mejor una tarea con dueño que siete a medias. Cuando esa primera esté estable, la segunda sale más rápido porque el equipo ya sabe leer un error y pausar el flujo. Ese aprendizaje vale más que el conector nuevo, y es parte de lo que se practica en el plan de USD 250 antes de pensar en USD 500 o USD 900. Si querés elegir el agente con alguien del equipo, escribinos por WhatsApp. Los tres precios están publicados en la página de precios.',
            en: 'If none of the seven hurts this week, do not force one. Automating to complete the list leaves flows nobody opens and that later feel scary to turn off. One task with an owner is better than seven half-finished. When that first one is stable, the second comes out faster because the team already knows how to read an error and pause the flow. That learning is worth more than the new connector, and it is part of what gets practiced on the USD 250 plan before thinking about USD 500 or USD 900.',
          },
        ],
      },
    ],
  },
  {
    slug: 'evaluar-chatbot-qa-ia',
    published: '2026-03-12',
    category: {es: 'QA', en: 'QA'},
    title: {
      es: 'Cómo evaluar si tu chatbot de IA está diciendo cosas incorrectas',
      en: 'How to evaluate whether your AI chatbot is saying incorrect things',
    },
    description: {
      es: 'Una batería simple para detectar precios inventados, políticas mezcladas y respuestas que deberían haberse derivado.',
      en: 'A simple question set to catch invented prices, mixed policies and replies that should have been escalated.',
    },
    sections: [
      {
        paragraphs: [
          {
            es: 'Un chatbot se equivoca de una forma incómoda: con buena ortografía y tono seguro. Por eso “probarlo un rato” en la demo no alcanza. Hay que hacerle preguntas cuya respuesta correcta ya conocés, y anotar cuándo inventa, cuándo omite y cuándo contesta algo que tenía que derivar. Esta nota es un método de QA para agentes, chatbots y sistemas que responden leyendo documentos. No es un certificado de que un bot quede perfecto.',
            en: 'A chatbot fails in an uncomfortable way: with good spelling and a confident tone. That is why “trying it for a while” in the demo is not enough. You have to ask questions whose correct answer you already know, and note when it invents, when it omits and when it answers something it should have escalated. This note is a QA method for agents, chatbots and systems that answer by reading documents. It is not a certificate that a bot becomes perfect.',
          },
          {
            es: 'El método cabe en una tarde si el alcance es chico. Si el bot habla de muchos productos o de muchas políticas, la batería crece y entra mejor en un plan de USD 500 o USD 900 que en una revisión casual. Un alcance de pocas preguntas puede verse dentro de los USD 250 al mes. Probar el agente antes de que hable con clientes forma parte de la implementación, que ya está incluida en la suscripción.',
            en: 'The method fits in an afternoon if the scope is small. If the bot talks about many products or many policies, the question set grows and fits a USD 500 or USD 900 plan better than a casual review. A scope of a few questions can sit inside USD 250 per month. Testing the agent before it talks to customers is part of implementation, which is already included in the subscription.',
          },
        ],
      },
      {
        heading: {es: 'Armar la batería', en: 'Build the question set'},
        paragraphs: [
          {
            es: 'Separá las preguntas en cuatro grupos. El primero son las que están contestadas en la fuente: horario, dirección, precio público, requisito. El segundo son las que mezclan dos políticas, para ver si el bot las fusiona. El tercero son las que no están en la fuente: un descuento que no existe, un plazo que nadie prometió, un servicio que no ofrecés. El cuarto son las que deben cortarse: datos de otro cliente, temas médicos o legales si no corresponden, o un pedido de ignorar las instrucciones.',
            en: 'Split the questions into four groups. The first are the ones answered in the source: hours, address, public price, requirement. The second mix two policies, to see if the bot merges them. The third are not in the source: a discount that does not exist, a deadline nobody promised, a service you do not offer. The fourth must be stopped: another customer’s data, medical or legal topics if they do not belong, or a request to ignore the instructions.',
          },
          {
            es: 'Escribí al lado la respuesta aceptable, no solo “tiene que estar bien”. Aceptable puede ser el dato textual o la frase “eso lo confirma una persona”. Si no podés escribir la respuesta aceptable, el bot tampoco va a poder. Ese hueco es de contenido, y conviene cerrarlo antes de culpar al modelo.',
            en: 'Write the acceptable reply next to it, not only “it should be fine”. Acceptable can be the literal fact or the sentence “a person confirms that”. If you cannot write the acceptable reply, the bot will not be able to either. That gap is content, and it should be closed before blaming the model.',
          },
        ],
      },
      {
        heading: {es: 'Qué anotar en cada respuesta', en: 'What to note on each reply'},
        paragraphs: [
          {
            es: 'Para cada pregunta guardá el texto que devolvió el bot y una de estas marcas: correcta, inventada, incompleta o debía derivar. Inventada es cuando aparece un número, una fecha o una condición que no está en la fuente. Incompleta es cuando omite un requisito que cambia la decisión del cliente. Debía derivar es cuando contestó de más. No hace falta un puntaje sofisticado. La lista ya muestra si se puede publicar.',
            en: 'For each question save the text the bot returned and one of these marks: correct, invented, incomplete or should have escalated. Invented is when a number, a date or a condition appears that is not in the source. Incomplete is when it omits a requirement that changes the customer’s decision. Should have escalated is when it answered too much. A sophisticated score is not required. The list already shows whether it can be published.',
          },
          {
            es: 'Repetí las preguntas que fallan después de corregir la fuente o la instrucción. Un solo intento feliz no cuenta. Y probá con la redacción de un cliente real, no solo con la frase prolija del manual. Por ejemplo, “cuanto sale” o un audio transcripto mal pueden sacar otro comportamiento que la pregunta formal. Si el canal es WhatsApp, la prueba tiene que hacerse ahí, no solo en una consola.',
            en: 'Repeat the questions that fail after the source or the instruction is fixed. A single happy attempt does not count. And test with a real customer’s wording, not only the tidy sentence from the manual. For example, a misspelled “how much” or a badly transcribed voice note can produce different behavior than the formal question. If the channel is WhatsApp, the test has to happen there, not only in a console.',
          },
        ],
      },
      {
        heading: {es: 'Cuándo no alcanza con la lista', en: 'When the list is not enough'},
        paragraphs: [
          {
            es: 'Si el bot además hace cosas —crea un turno, manda un correo, escribe en una planilla— hay que probar la acción, no solo la frase. ¿Se crea el registro con datos incompletos? ¿Se manda el correo dos veces si la persona reintenta? Esas pruebas son las que evitan un error operativo, que duele más que una respuesta floja. Dejalas en la misma planilla, con el resultado esperado.',
            en: 'If the bot also does things —creates a visit, sends an email, writes to a sheet— you have to test the action, not only the sentence. Is the record created with incomplete data? Is the email sent twice if the person retries? Those tests prevent an operational mistake, which hurts more than a weak reply. Leave them on the same sheet, with the expected result.',
          },
          {
            es: 'Por ejemplo, una empresa que está por publicar un asistente de preguntas frecuentes podría correr veinte preguntas: diez de la fuente, cinco que mezclan políticas y cinco que piden un descuento o un dato ajeno. El informe sería esa tabla, no una calificación de diez. El ejemplo explica el tamaño de una batería chica. No es el informe de un sistema auditado por nosotros ni una tasa de error de la industria.',
            en: 'For example, a company about to publish an FAQ assistant could run twenty questions: ten from the source, five that mix policies and five that ask for a discount or someone else’s data. The report would be that table, not a grade out of ten. The example explains the size of a small set. It is not the report of a system we audited or an industry error rate.',
          },
        ],
      },
      {
        heading: {es: 'Después de la primera prueba', en: 'After the first test'},
        paragraphs: [
          {
            es: 'Corregí la fuente antes de “ponerle más inteligencia”. Muchos fallos son un precio viejo o dos políticas contradichas. Cuando la fuente está clara y el bot sigue inventando, ahí sí se ajusta la instrucción o se sacan temas del alcance. Volvé a correr la batería cada vez que cambie un documento importante. Un QA de un solo día no cubre el mes siguiente.',
            en: 'Fix the source before “adding more intelligence”. Many failures are an old price or two policies that contradict each other. When the source is clear and the bot still invents, that is when the instruction is adjusted or topics are removed from scope. Run the set again whenever an important document changes. One day of QA does not cover the following month.',
          },
          {
            es: 'Si preferís revisar una muestra de preguntas juntos, escribinos por WhatsApp o mirá los planes en la página de precios. Probar el agente antes de que hable con clientes forma parte de la implementación, que ya está incluida. Escribinos por WhatsApp al +591 77056858 con el canal donde habla el asistente. El entregable es la lista de fallos y la corrección sugerida, no una promesa de que nunca más se equivoque.',
            en: 'If you would rather review a sample of questions together, message us on WhatsApp or look at the plans on the pricing page. Probar el agente antes de que hable con clientes forma parte de la implementación, que ya está incluida. Write to us on WhatsApp at +591 77056858 with the channel where the assistant speaks. The deliverable is the list of failures and the suggested fix, not a promise that it will never be wrong again.',
          },
          {
            es: 'Guardá la planilla aunque el resultado sea incómodo. Es la única forma de discutir el bot con evidencia y no con la sensación de una demo. Si aparecen muchos “inventada”, no publiques el número de clientes todavía. Si aparecen pocos y están claros, se corrigen y se vuelve a correr la misma lista. Ese ciclo es la prueba que hacemos antes de que el agente atienda clientes. Si todavía no sabés qué preguntarle, escribinos por WhatsApp y lo armamos con tu información.',
            en: 'Keep the sheet even if the result is uncomfortable. It is the only way to discuss the bot with evidence and not with the feeling of a demo. If many rows say “invented”, do not publish the customer number yet. If few appear and they are clear, they get fixed and the same list is run again. That cycle is the test we run before the agent serves customers. If you still do not know what to ask it, message us on WhatsApp and we build it with your information.',
          },
        ],
      },
    ],
  },
];
