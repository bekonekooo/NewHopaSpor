"use client";

import HeroCarousel from "@/components/HeroCarousel";
import SectionText from "@/components/SectionText";
import SectionHopaSpor from "@/components/SectionHopaSpor";
import AnnouncementsList from "@/components/AnnouncementsList";


export default function HomePage() {


  return (
    <>
      <section id="anasayfa">
        <HeroCarousel />
      </section>

      <section
        id="hakkimizda"
        className="section-animate mx-auto max-w-5xl px-4 py-20 md:py-28"
      >
        <SectionText />
      </section>

      <section
        id="hopaspor"
        className="section-animate bg-slate-900/60 px-4 py-20 md:py-28"
      >
        <SectionHopaSpor />
      </section>

      <section
        id="duyurular"
        className="section-animate bg-slate-900/40 px-4 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Duyurular
          </h2>
        <AnnouncementsList />
        </div>
      </section>

      <section
        id="iletisim"
        className="section-animate border-t border-slate-800 bg-slate-950 px-4 py-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">İletişim</h3>
            <p className="mt-3 max-w-md text-slate-300 text-sm md:text-base">
              Hopa Spor Kulübü, Artvin Hopa’nın kalbinde yer alır. Maç
              programları, altyapı çalışmaları ve sponsorluk için bizimle
              iletişime geçebilirsiniz.
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-300 md:text-base">
            <p>Adres: Hopa İlçe Stadyumu, Artvin / Hopa</p>
            <p>Telefon: 0 (xxx) xxx xx xx</p>
            <p>E-posta: info@hopaspor.org</p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Hopa Spor Kulübü. Tüm hakları saklıdır.
        </p>
      </section>
    </>
  );
}
