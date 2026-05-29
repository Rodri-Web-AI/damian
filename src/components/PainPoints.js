"use client";

import { useInView } from "@/hooks/useInView";

const PAIN_POINTS = [
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Cortes eléctricos constantes",
    description: "Interrupciones que afectan tu día a día",
  },
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Instalaciones inseguras",
    description: "Riesgos que ponen en peligro tu hogar",
  },
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Electricistas irresponsables",
    description: "Falta de compromiso y profesionalismo",
  },
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Presupuestos poco claros",
    description: "Costos ocultos y sorpresas desagradables",
  },
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Cableado desordenado",
    description: "Instalaciones improvisadas y poco prolijas",
  },
  {
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Trabajos mal terminados",
    description: "Soluciones temporales que generan más problemas",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="proceso"
      className="relative overflow-hidden bg-[#fbfbfa] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="pain-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Cabecera limpia y centrada */}
        <header
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2
            id="pain-heading"
            className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
          >
            ¿Te resultan <span className="text-blue-600">familiares</span> estos problemas?
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-zinc-500 sm:text-base">
            Muchos enfrentan estas situaciones al buscar servicios eléctricos
          </p>
        </header>

        {/* Grilla de 3 columnas exactamente como en Figma */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-500 ${
                inView ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Contenedor del Ícono Azul Ligero */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 mb-5">
                {item.icon}
              </div>

              {/* Título del problema */}
              <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Descripción corta */}
              <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}