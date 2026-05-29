"use client";

import { useInView } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/5493544681747";

function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* CÍRCULO */}
      <path
        d="M16 3C8.82 3 3 8.64 3 15.6c0 2.78.94 5.34 2.52 7.42L4 29l6.2-1.6A13.2 13.2 0 0016 28.2c7.18 0 13-5.64 13-12.6C29 8.64 23.18 3 16 3z"
        fill="currentColor"
      />

      {/* TELÉFONO */}
      <path
        d="M22.2 19.6c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.13 4.55.72.3 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"
        fill="white"
      />
    </svg>
  );
}

export default function Cta() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative overflow-hidden bg-[#f7f7f8] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* BOTÓN FLOTANTE WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row-reverse items-center gap-2 rounded-full bg-[#25D366] p-3 pl-4 pr-4 shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.04] hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] active:scale-95"
        >
          {/* ICONO */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <WhatsAppIcon className="h-full w-full text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#25D366]" />

            {/* INDICADOR */}
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 group-hover:bg-emerald-400"></span>

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white group-hover:bg-emerald-500"></span>
            </span>
          </div>

          {/* TEXTO */}
          <span className="max-w-0 overflow-hidden text-xs font-bold tracking-tight text-white transition-all duration-300 group-hover:max-w-xs group-hover:text-zinc-800">
            <span className="whitespace-nowrap pr-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Hablar por WhatsApp
            </span>
          </span>
        </a>
      </div>

      {/* CTA */}
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 text-center shadow-[0_20px_80px_rgba(37,99,235,0.35)] sm:px-12 lg:px-20">
          {/* ICON */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8M8 14h5m-5 8l-3-3V5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H8z"
              />
            </svg>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Necesitas una solución eléctrica confiable?
          </h2>

          {/* SUBTITLE */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            Pedí tu presupuesto sin compromiso y recibí atención profesional,
            rápida y transparente.
          </p>

          {/* BUTTON */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-lg font-bold text-zinc-900 shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <WhatsAppIcon className="h-6 w-6" />
            </div>

            Solicitar presupuesto por WhatsApp
          </a>

          {/* FOOTER */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:text-base">
            <span>+54 9 3544-624532</span>

            <span className="hidden sm:block">•</span>

            <span>damianelectricista.villadolores@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}