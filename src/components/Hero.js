"use client";

import { useState } from "react";
import { scrollToAnchor } from "@/lib/scrollToAnchor";

const WHATSAPP_URL = "https://wa.me/5493544624532";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portfolio", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

const FEATURES = [
  {
    icon: (
      <svg
        className="h-4 w-4 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Atención rápida",
  },
  {
    icon: (
      <svg
        className="h-4 w-4 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    label: "Trabajo garantizado",
  },
  {
    icon: (
      <svg
        className="h-4 w-4 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    label: "Instalaciones seguras",
  },
  {
    icon: (
      <svg
        className="h-4 w-4 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    label: "Presupuesto claro",
  },
];

function NavLink({ href, label, className, onNavigate }) {
  function handleClick(e) {
    e.preventDefault();
    scrollToAnchor(href);
    onNavigate?.();
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col overflow-hidden bg-[#fbfbfa] text-zinc-900"
    >
      {/* FONDOS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(37,99,235,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_20%,rgba(37,99,235,0.02),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      </div>

      {/* HEADER */}
      <header className="relative z-20 animate-fade-in">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex w-full items-center justify-end gap-8 md:gap-10">
            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Navegación principal"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                />
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:inline-flex"
              >
                WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 md:hidden"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {menuOpen ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <nav className="border-t border-zinc-100 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onNavigate={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                  />
                </li>
              ))}

              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* HERO */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-16 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
          
          {/* LEFT */}
          <div className="z-10 text-left lg:col-span-5">
            <div
              className="mb-6 inline-flex animate-fade-in-up items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              style={{ animationDelay: "0.1s" }}
            >
              <svg
                className="h-3.5 w-3.5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Damian Electricista • Traslasierra
            </div>

            <h1
              className="animate-fade-in-up text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="block text-zinc-900">
                Damian,
              </span>

              <span className="block text-blue-600">
              Electricidad para hogares y negocios
              </span>

              <span className="block text-zinc-900">
                en Traslasierra.
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              ¿Tenés algún problema de electricidad en tu hogar/negocio?
              Yo me encargo. Electricista con 20 años de experiencia.<br></br><br></br>

              Servicios en:
              Villa Dolores, San José, Las Tapias, 
              San Vicente, Los Cerrillos, Las Rosas, San Pedro, Villa Sarmiento, 
              La Paz, San Javier, Piedra Pintada, entre otros
            </p>

            {/* BOTONES */}
            <div
              className="mt-10 flex animate-fade-in-up flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.55s" }}
            >
              <NavLink
                href="#portfolio"
                label="Ver trabajos"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.01] hover:bg-blue-700"
              />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-blue-600 bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* FEATURES */}
            <div
              className="mt-12 grid max-w-xl grid-cols-2 gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              {FEATURES.map((feat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 rounded-xl border border-zinc-100 bg-white p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    {feat.icon}
                  </div>

                  <span className="text-xs font-medium text-zinc-700 sm:text-sm">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex items-center justify-center animate-fade-in-up lg:col-span-7 lg:justify-end"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="relative w-full mix-blend-multiply transition-transform duration-500 sm:max-w-2xl lg:max-w-none lg:translate-x-8 lg:scale-125 xl:translate-x-12 xl:scale-[1.35]">
              <img
                src="/images/hero-render.png"
                alt="Sistema eléctrico moderno"
                className="h-auto w-full object-contain object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-fade-in sm:block"
        style={{ animationDelay: "1.2s" }}
        aria-hidden
      >
        <svg
          className="h-5 w-5 animate-bounce-slow text-zinc-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}