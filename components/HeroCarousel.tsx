"use client";

import { useEffect, useState } from "react";

const slides = [
  { id: 1, imageUrl: "/images/hero-1.jpg" },
  { id: 2, imageUrl: "/images/hero-2.jpg" },
  { id: 3, imageUrl: "/images/hero-3.jpg" },
  { id: 4, imageUrl: "/images/hero-4.jpg" }
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      1000 // 1 saniye
    );
    return () => clearInterval(id);
  }, []);

  const handleScrollNext = () => {
    const el = document.getElementById("hakkimizda");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.imageUrl}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-hopa-green/80">
          Artvin Hopa Spor Kulübü
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Artvin Hopa&apos;nın enerjisini{" "}
          <span className="text-hopa-green">sahaya</span> taşıyoruz.
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-slate-200 md:text-base">
          Hopa’nın yağmurlu sokaklarından doğan tutku, her maçta tekrar
          canlanıyor. Gençler, aileler ve tüm Hopa halkı için spor kültürünü
          büyütüyoruz.
        </p>

        <button
          onClick={handleScrollNext}
          className="mt-8 rounded-full bg-hopa-green px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-hopa-green/30 transition hover:bg-emerald-400"
        >
          Daha Fazlası
        </button>

        <div className="mt-8 flex items-center gap-2 text-xs text-slate-300">
          <span className="h-0.5 w-6 rounded-full bg-hopa-green" />
          <span>Kaydır ve Hopa Spor ruhunu keşfet</span>
        </div>
      </div>
    </div>
  );
}
