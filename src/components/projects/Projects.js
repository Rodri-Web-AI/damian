"use client";

import { useInView } from "@/hooks/useInView";

const FEATURES = [
  {
    title: "Seguridad primero",
    description:
      "Cumplimiento estricto de normas y estándares de seguridad eléctrica",
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
          d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        />
      </svg>
    ),
  },
  {
    title: "Trabajo prolijo",
    description:
      "Instalaciones ordenadas con terminaciones profesionales y duraderas",
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
    title: "Comunicación clara",
    description:
      "Explicaciones detalladas y actualizaciones constantes del progreso",
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
          d="M8 10h8M8 14h5m-9 6l2.5-2.5A9 9 0 1112 21a8.96 8.96 0 01-4.5-1.2L3 20z"
        />
      </svg>
    ),
  },
  {
    title: "Cumplimiento",
    description:
      "Respeto por tu tiempo y cumplimiento de plazos acordados",
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
          d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Atención personalizada",
    description:
      "Cada proyecto recibe atención dedicada y soluciones a medida",
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function Diferenciales() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="diferenciales"
      className="relative overflow-hidden bg-[#f7f7f8] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            Diferenciales
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              trabajar conmigo?
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium text-zinc-500 sm:text-xl">
            Compromiso con la excelencia en cada proyecto
          </p>
        </div>

        {/* CARDS */}
        <div
          className={`mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 transition-all duration-700 delay-150 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="mt-7">
                <h3 className="text-2xl font-black leading-tight tracking-tight text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}