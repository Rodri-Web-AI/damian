"use client";

import { useInView } from "@/hooks/useInView";

const PROJECTS = [
  {
    image: "/images/Trabajos/tablero-image1.jpg",
    title: "Tableros eléctricos",
    category: "Residencial",
    description:
      "Montaje, cableado y protección eléctrica bajo normativa.",
  },
  {
    image: "/images/Trabajos/instalacion_electrica_luces_led_image2.jpg",
    title: "Iluminación interior",
    category: "Comercial",
    description:
      "Diseño de iluminación LED moderna para interiores.",
  },
  {
    image: "/images/Trabajos/luz_led_image3.jpg",
    title: "Cableado estructurado",
    category: "Residencial",
    description:
      "Distribución segura y organizada para todo el hogar.",
    featured: true,
  },
  {
    image: "/images/Trabajos/Instalacion_electrica_image4.jpg",
    title: "Instalaciones seguras",
    category: "Industrial",
    description:
      "Protección y armado profesional para sistemas eléctricos.",
  },
  {
    image: "/images/Trabajos/instalacion electrica_image5.jpg",
    title: "Diagnóstico eléctrico",
    category: "Residencial",
    description:
      "Detección de fallas y revisión integral de instalaciones.",
  },
  {
    image: "/images/Trabajos/instalacion_pilar_image6.jpg",
    title: "Instalaciones completas",
    category: "Comercial",
    description:
      "Soluciones eléctricas integrales para negocios.",
  },
  {
    image: "/images/Trabajos/Cables_image7.jpg",
    title: "Luminarias modernas",
    category: "Oficinas",
    description:
      "Instalación de luminarias eficientes y modernas.",
  },
  {
    image: "/images/Trabajos/trabajo_image8.jpg",
    title: "Distribución eléctrica",
    category: "Industrial",
    description:
      "Cableado técnico para alto rendimiento y seguridad.",
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative overflow-hidden bg-[#f7f7f8] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.04),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Trabajos{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              realizados
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium text-zinc-500 sm:text-xl">
            Instalaciones profesionales con terminaciones de primera calidad
          </p>
        </div>

        {/* GRID */}
        <div
          className={`mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-150 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className={`group rounded-[1.8rem] border border-zinc-100 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] ${
                project.featured
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[1.4rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-4">
                {/* TAG */}
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    project.category === "Residencial"
                      ? "bg-emerald-50 text-emerald-600"
                      : project.category === "Comercial"
                      ? "bg-sky-50 text-sky-600"
                      : project.category === "Industrial"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-violet-50 text-violet-600"
                  }`}
                >
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 text-lg font-black leading-tight tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}