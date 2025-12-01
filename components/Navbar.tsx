"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#anasayfa", label: "Anasayfa" },
  { href: "/#duyurular", label: "Duyurular" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO – her zaman ana sayfaya götürsün */}
        <Link href="/#anasayfa" className="text-lg font-bold tracking-wide">
          <span className="text-hopa-green">ArtvinHopa</span>
          <span className="text-slate-50">Spor</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-200 hover:text-hopa-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* <Link
            href="/admin/duyurular"
            className="rounded-full border border-hopa-green/60 px-4 py-1.5 text-xs font-semibold text-hopa-green hover:bg-hopa-green hover:text-slate-950 transition-colors"
          >
            Admin Giriş
          </Link> */}
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="relative block h-[2px] w-5 bg-slate-200 before:absolute before:h-[2px] before:w-5 before:-translate-y-[6px] before:bg-slate-200 after:absolute after:h-[2px] after:w-5 after:translate-y-[4px] after:bg-slate-200" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 text-slate-200 hover:bg-slate-800/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin/duyurular"
              className="mt-2 rounded-md border border-hopa-green/70 px-2 py-1 text-center text-xs font-semibold text-hopa-green hover:bg-hopa-green hover:text-slate-950"
              onClick={() => setOpen(false)}
            >
              Admin Giriş
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
