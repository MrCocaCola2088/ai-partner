import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {ConversionCta} from '@/components/conversion-cta';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {pageMetadata, routeSeo} from '@/lib/seo';

const tools = [
  {name: 'OpenAI / ChatGPT', es: 'Borradores, clasificación de mensajes y tareas donde el equipo ya tiene cuenta.', en: 'Drafts, message classification and tasks where the team already has an account.'},
  {name: 'Claude', es: 'Lectura de documentos largos y reescritura con un tono más sobrio.', en: 'Reading long documents and rewriting in a more sober tone.'},
  {name: 'Gemini', es: 'Cuando el equipo ya trabaja en Google Workspace y quiere el modelo en ese entorno.', en: 'When the team already works in Google Workspace and wants the model in that environment.'},
  {name: 'Microsoft Copilot', es: 'Apoyo dentro de Microsoft 365 para quien vive en Word, Excel o el correo.', en: 'Support inside Microsoft 365 for people who live in Word, Excel or email.'},
  {name: 'n8n', es: 'Flujos que querés ver y mantener, incluso en un entorno propio.', en: 'Flows you want to see and maintain, including in your own environment.'},
  {name: 'Make', es: 'Conexiones entre aplicaciones cuando la prioridad es salir rápido.', en: 'Connections between apps when the priority is to move quickly.'},
  {name: 'Zapier', es: 'Automatizaciones simples sobre las herramientas que el equipo ya paga.', en: 'Simple automations on top of tools the team already pays for.'},
  {name: 'Power BI', es: 'Lectura de los datos que ya existen, no un tablero nuevo sin fuente.', en: 'Reading the data you already have, not a new dashboard without a source.'},
  {name: 'Microsoft 365 y Google Workspace', es: 'Correo, archivos y calendarios como fuente, sin pedirte que cambies de suite.', en: 'Email, files and calendars as the source, without asking you to switch suites.'},
];

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.tecnologias.en : routeSeo.tecnologias.es;
  return pageMetadata(locale, '/tecnologias', copy);
}

export default async function TechnologiesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const es = locale !== 'en';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{es ? 'Herramientas' : 'Tools'}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {es ? 'Herramientas de IA que implementamos' : 'AI tools we implement'}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {es
            ? 'OpenAI, Claude, Gemini, Copilot, n8n, Make, Zapier, Power BI y el resto de tu stack se conectan a lo que ya usás. No cambiamos el sistema de la empresa para que entre una marca.'
            : 'OpenAI, Claude, Gemini, Copilot, n8n, Make, Zapier, Power BI and the rest of your stack connect to what you already use. We do not replace the company’s system so a brand can fit.'}
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardContent className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{tool.name}</h2>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{es ? tool.es : tool.en}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 max-w-3xl space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        <p>
          {es
            ? 'La elección no es un catálogo para impresionar. En el diagnóstico gratuito miramos la tarea: si es redactar, si es leer un documento largo o si es pasar un dato de un correo a una planilla. Recién ahí se elige la herramienta. ChatGPT y Claude pueden convivir. n8n, Make y Zapier también: depende de quién va a mantener el flujo.'
            : 'The choice is not a catalog meant to impress. In the free assessment we look at the task: drafting, reading a long document or moving a fact from an email into a sheet. Only then is the tool chosen. ChatGPT and Claude can coexist. So can n8n, Make and Zapier: it depends on who will maintain the flow.'}
        </p>
        <p>
          {es ? (
            <>
              Si el siguiente paso es un flujo, está en{' '}
              <Link className="text-cyan-200 underline" href="/automatizacion-de-procesos">
                automatización de procesos
              </Link>
              . Si es un agente en el canal que ya usan tus clientes, está en{' '}
              <Link className="text-cyan-200 underline" href="/agente-ia-whatsapp">
                agente de IA para WhatsApp
              </Link>
              . Los planes siguen siendo USD 250, USD 500 y USD 900 al mes, en{' '}
              <Link className="text-cyan-200 underline" href="/precios">
                precios
              </Link>
              .
            </>
          ) : (
            <>
              If the next step is a flow, see{' '}
              <Link className="text-cyan-200 underline" href="/automatizacion-de-procesos">
                process automation
              </Link>
              . If it is an agent on the channel your customers already use, see the{' '}
              <Link className="text-cyan-200 underline" href="/agente-ia-whatsapp">
                WhatsApp AI agent
              </Link>
              . Plans remain USD 250, USD 500 and USD 900 per month, on{' '}
              <Link className="text-cyan-200 underline" href="/precios">
                pricing
              </Link>
              .
            </>
          )}
        </p>
      </div>
      <div className="mt-10">
        <ConversionCta locale={locale} />
      </div>
    </main>
  );
}
