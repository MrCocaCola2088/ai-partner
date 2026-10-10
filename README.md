# AI Partner

Sitio bilingüe (ES/EN) construido con Next.js 15 para presentar AI Partner como software de agentes de IA para pymes, por suscripción mensual, con implementación incluida.

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env.local` para desarrollo web y a `.env` si usarás Docker Compose. `NEXT_PUBLIC_BOB_EXCHANGE_RATE` parte de una referencia inicial de 6.96 BOB/USD y debe ajustarse según tu operación.

## Verificación

```bash
npm run lint
npm run build
```
