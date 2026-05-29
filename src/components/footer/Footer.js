import React from "react";

const SERVICES = [
  "Instalaciones eléctricas",
  "Reparaciones",
  "Tableros eléctricos",
  "Iluminación LED",
  "Mantenimiento",
  "Automatización",
];

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.209-.503l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h8M8 14h5m-5 8l-3-3V5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H8z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#090E1A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              Damian{" "}
              <span className="text-sky-400">
                Electricista
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
              Instalaciones eléctricas seguras, modernas y profesionales para
              hogares y negocios.
            </p>

            <button className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-white/10">
              <ChatIcon />
            </button>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              Contacto
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4 text-slate-400">
                <PhoneIcon />

                <span className="text-sm sm:text-base">
                  +54 9 3544-624532
                </span>
              </div>
                          
              <div className="flex items-center gap-4 text-slate-400">
                <LocationIcon />

                <span className="text-sm sm:text-base">
                  Villa Dolores, Córdoba
                </span>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              Servicios
            </h3>

            <ul className="mt-6 space-y-4">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="cursor-default text-sm text-slate-400 sm:text-base"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate-500">
            © 2026 Damian Electricista. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}