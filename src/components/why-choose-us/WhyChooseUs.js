"use client";

import { useInView } from "@/hooks/useInView";

const SOLUTIONS = [
  {
    title: "Diagnóstico claro",
    description: "Evaluación completa y explicación detallada de cada situación",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Trabajo prolijo",
    description: "Instalaciones ordenadas y terminaciones profesionales",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Materiales adecuados",
    description: "Uso de componentes certificados y de calidad",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Comunicación constante",
    description: "Te mantengo informado en cada etapa del trabajo",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Entrega ordenada",
    description: "Limpieza completa y todo funcionando correctamente",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const STATS = [
  { title: "Más de 200", desc: "Trabajos Realizados" },
  { title: "100% Garantizado", desc: "Trabajo con garantía" },
  { title: "Respuesta rápida", desc: "Atención inmediata" },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="nosotros"
      className="relative overflow-hidden bg-zinc-50 px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="alert-heading"
    >
      <div className="relative mx-auto max-w-7xl space-y-20">
        
        {/* ================= SECCIÓN ALERTA SUPERIOR (AGITACIÓN) ================= */}
        <div
          className={`mx-auto max-w-4xl rounded-3xl border border-zinc-200/60 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-700 sm:p-10 md:p-12 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Icono de Alerta */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Contenido de Alerta */}
            <div className="flex-1">
              <h3
                id="alert-heading"
                className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
              >
                Una mala instalación eléctrica no solo genera problemas…
                <span className="text-blue-600"> también puede poner en riesgo tu hogar.</span>
              </h3>

              <div className="mt-6 max-w-3xl space-y-5 text-sm leading-relaxed text-zinc-500 sm:text-base md:text-lg">
                <p>
                  Cables mal conectados, tableros obsoletos o reparaciones
                  improvisadas pueden causar desde cortes frecuentes hasta
                  situaciones peligrosas.
                </p>
                <p>
                  Cada día que pasa sin una solución profesional, el riesgo
                  aumenta y los costos de reparación se multiplican.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECCIÓN INFERIOR EN DOS COLUMNAS ASIMÉTRICAS ================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start pt-4">
          
          {/* Lado Izquierdo: Textos principales y lista de soluciones con fondo blanco */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-100 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-600 mb-4">
                La solución
              </span>
              <h2 className="text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Trabajo eléctrico <span className="text-blue-600">claro, seguro</span> y bien hecho.
              </h2>
            </div>
            
            <p className="text-base font-medium leading-relaxed text-zinc-500 sm:text-lg">
              Como electricista profesional, mi objetivo es brindarte soluciones eléctricas
              confiables, con atención personalizada y resultados que superan tus expectativas.
            </p>

            {/* Listado con fondo blanco y estructura limpia */}
            <div className="flex flex-col gap-3 pt-2">
              {SOLUTIONS.map((sol, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-200/50 hover:border-zinc-300/80 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {sol.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-zinc-950 tracking-tight">
                      {sol.title}
                    </h4>
                    <p className="text-xs font-medium text-zinc-500 mt-0.5 leading-normal">
                      {sol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Tarjeta de métricas azul */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-8 transition-all duration-700 delay-200 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 p-6 sm:p-8 shadow-[0_24px_50px_rgba(37,99,235,0.2)]">
              <div className="relative z-10 flex flex-col gap-4">
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm p-5 border border-white/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-black tracking-tight leading-none">
                        {stat.title}
                      </p>
                      <p className="text-xs font-semibold text-blue-50/90 mt-1">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}