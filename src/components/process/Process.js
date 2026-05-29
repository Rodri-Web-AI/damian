"use client";

import { useInView } from "@/hooks/useInView";

const SERVICES = [
  {
    title: "Instalaciones eléctricas residenciales",
    description: "Montaje completo de cañerías, cableados, bocas de iluminación y tomacorrientes en obras nuevas o refacciones.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Armado y orden de tableros",
    description: "Instalación, actualización y distribución de térmicas, disyuntores y protectores de tensión para resguardar tus artefactos.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Detección de fallas y cortocircuitos",
    description: "Diagnóstico rápido y preciso de problemas eléctricos, fugas a tierra, sobrecargas o cortes imprevistos en la red.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Certificaciones y trámites (DCI)",
    description: "Ejecución de planos, firmas de idoneidad y trámites necesarios para la solicitud de nuevos medidores ante la distribuidora.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Iluminación LED y automatización",
    description: "Diseño lumínico eficiente, instalación de reflectores, dicroicas, tiras LED y sistemas automatizados con fotocélulas o timoneras.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Mantenimiento preventivo general",
    description: "Revisión periódica de consumos, reapriete de borneras y mediciones de puesta a tierra para evitar accidentes futuros.",
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="servicios"
      className="relative overflow-hidden bg-[#fbfbfa] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Encabezado alineado a la izquierda según la imagen */}
        <header
          className={`max-w-4xl text-left transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Servicios
          </span>
          
          <h2
            id="services-heading"
            className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Soluciones eléctricas <span className="text-blue-600">profesionales</span> para tu tranquilidad.
          </h2>
          
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-zinc-500 sm:text-lg">
            Ofrezco un catálogo completo de servicios respaldados por mi matrícula profesional, 
            garantizando que cada rincón de tu hogar sea eficiente y 100% seguro.
          </p>
        </header>

        {/* Grilla de 3 columnas para las tarjetas de servicios */}
        <div
          className={`mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200/60 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
            >
              <div>
                {/* Contenedor del Icono Azul */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 shadow-sm">
                  {service.icon}
                </div>

                {/* Título del Servicio */}
                <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Descripción del Servicio */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 font-medium">
                  {service.description}
                </p>
              </div>

              {/* Botón/Enlace "Saber más" en la esquina inferior derecha */}
              <div className="mt-8 flex justify-end">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Saber más
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}