"use client";

import { useInView } from "@/hooks/useInView";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Contacto",
    description:
      "Contáctame por WhatsApp y cuéntame tu situación",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8M8 14h5m-5 8l-3-3V5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H8z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Evaluación",
    description:
      "Visita al lugar para evaluar y diagnosticar el trabajo",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Presupuesto",
    description:
      "Presupuesto claro y detallado sin sorpresas",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6M9 8h6m3 13H6a2 2 0 01-2-2V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ejecución",
    description:
      "Trabajo profesional con seguimiento constante",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.7 6.3l3 3m0 0L9 18H6v-3l8.7-8.7zm3-3l1 1a2.121 2.121 0 010 3l-1 1-3-3 1-1a2.121 2.121 0 013 0z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Entrega final",
    description:
      "Revisión completa, limpieza y entrega ordenada",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function ProcesoTrabajo() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="proceso"
      className="relative overflow-hidden bg-[#f7f7f8] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            Proceso
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            ¿Cómo{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              trabajamos
            </span>{" "}
            juntos?
          </h2>

          <p className="mt-6 text-lg font-medium text-zinc-500 sm:text-xl">
            Un proceso simple, transparente y profesional
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-24">
          {/* LINEA */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-blue-500/30 lg:block" />

          <div
            className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 transition-all duration-700 delay-150 ${
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
              >
                {/* NUMERO */}
                <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-3xl font-black text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)]">
                  {step.number}
                </div>

                {/* CARD */}
                <div className="mt-10 w-full rounded-[2rem] border border-zinc-200 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  {/* ICON */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-black tracking-tight text-zinc-950">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}