"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fix MS-5: en iOS/Android el autoplay solo se autoriza si el video
    // esta realmente muteado (propiedad + atributo) y con playsInline al
    // momento de llamar a play(). Seteamos todo explicitamente por JS
    // ademas de los props de React, que a veces no alcanzan a tiempo.
    video.muted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Si el navegador igual bloquea el autoplay (ej. ahorro de datos),
        // no rompemos nada: el fondo oscuro del hero cubre el espacio.
      });
    }
  }, []);

  return (
    <section className="relative flex h-[82vh] min-h-[520px] items-end overflow-hidden bg-brand-bg">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/xxjZutDk6A7TquH6SRLF4oU0UIc.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/55 to-brand-bg/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="mb-4 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded bg-brand-red px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            En vivo — Test Privado, Mugello
          </span>
          {/* Badge destacado (MS-7): la diferenciacion "sin publicidad" tiene
              su propio lugar visible cerca del hero, no solo en la barra fina
              de arriba del todo. */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-500 bg-black/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 flex-none">
              <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.6" />
              <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sin publicidad ni pop-ups
          </span>
        </div>
        <h1 className="max-w-3xl font-display text-[clamp(40px,7vw,84px)] uppercase leading-[0.95] tracking-wide">
          Todo el motociclismo
          <br />
          en un solo rugido
        </h1>
        <p className="mt-4 max-w-lg text-[17px] text-neutral-300">
          Noticias, entrevistas, fotografía y coberturas exclusivas del
          motociclismo de competición en todas sus categorías.
        </p>
        <div className="mt-6 flex flex-wrap gap-3.5">
          <a href="/noticias" className="rounded bg-brand-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark">
            Ver noticias
          </a>
          <a href="/fotografia" className="rounded border border-neutral-700 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide hover:border-white">
            Ver galería
          </a>
        </div>
      </div>
    </section>
  );
}
