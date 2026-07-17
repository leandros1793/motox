type Plan = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Gratuito",
    price: "€0",
    features: ["Noticias generales", "Acceso a categorías públicas", "Newsletter semanal"],
  },
  {
    name: "Fan",
    price: "€4,99",
    features: [
      "Todo lo del plan Gratuito",
      "Artículos y entrevistas exclusivas",
      "Galerías en alta resolución",
      "Sin publicidad",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "€9,99",
    features: [
      "Todo lo del plan Fan",
      "Retransmisiones y tests en vivo",
      "Contenido detrás de escena",
      "Acceso anticipado a coberturas",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-brand-bg-alt py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl uppercase tracking-wide">Únete a MotoX</h2>
          <p className="mt-2 text-[15px] text-brand-gray">
            Elegí tu nivel de acceso al contenido exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg border p-8 ${
                plan.highlight
                  ? "scale-100 border-brand-red bg-[#180c0c] md:scale-[1.03]"
                  : "border-brand-border bg-brand-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-brand-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  Más elegido
                </span>
              )}
              <h3 className="text-[15px] font-bold uppercase tracking-wide text-brand-gray">
                {plan.name}
              </h3>
              <div className="mt-3.5 mb-1 text-4xl font-extrabold">
                {plan.price} <span className="text-sm font-medium text-brand-gray">/ mes</span>
              </div>
              <ul className="my-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="border-b border-brand-border py-2 text-sm text-neutral-300">
                    <span className="mr-1.5 font-extrabold text-brand-red">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/suscribirse"
                className={`rounded px-5 py-2.5 text-center text-[13px] font-bold uppercase tracking-wide ${
                  plan.highlight
                    ? "bg-brand-red text-white hover:bg-brand-red-dark"
                    : "border border-neutral-700 hover:border-white"
                }`}
              >
                {plan.name === "Gratuito" ? "Crear cuenta" : "Suscribirme"}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-xs text-brand-gray">
          Pagos procesados de forma segura con Stripe · Cancelá cuando quieras
        </p>
      </div>
    </section>
  );
}
