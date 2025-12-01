// hooks/useAnnouncements.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { Announcement } from "@/types/announcement";

const initialAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Hafta Sonu Maçı: Hopa Spor vs Rize",
    date: "2025-11-20",
    description:
      "Pazar günü saat 14:00’de Artvin Hopa Stadı’ndayız. Tüm taraftarlarımız davetlidir!\n\nBilet satışları maç günü stat gişesinden ve online sistem üzerinden yapılacaktır.",
    imageUrl: "/images/hero-1.jpg",
  },
  {
    id: "2",
    title: "Yeni Transfer Açıklandı",
    date: "2025-11-18",
    description:
      "Takımımıza katılan yeni oyuncumuzun detaylarını resmi hesaplarımızdan takip edebilirsiniz.\n\nBasın toplantısı çarşamba günü saat 13:00’te yapılacaktır.",
    imageUrl: "/images/hero-2.jpg",
  },
  {
    id: "3",
    title: "Altyapı Seçmeleri Başlıyor",
    date: "2025-11-15",
    description:
      "2008–2012 doğumlu gençler için altyapı seçmeleri başlıyor.\n\nBaşvuru için kulüp binamıza kimlik fotokopisi ile gelmeniz yeterlidir.",
    imageUrl: "/images/hero-3.jpg",
  },
];

type AnnouncementsContextType = {
  announcements: Announcement[];
  addAnnouncement: (a: Omit<Announcement, "id">) => void;
};

const AnnouncementsContext = createContext<AnnouncementsContextType | undefined>(
  undefined
);

export function AnnouncementsProvider({ children }: { children: ReactNode }) {
  const [announcements, setAnnouncements] =
    useState<Announcement[]>(initialAnnouncements);

  function addAnnouncement(a: Omit<Announcement, "id">) {
    const newAnnouncement: Announcement = {
      ...a,
      id: crypto.randomUUID(),
    };

    setAnnouncements((prev) => [newAnnouncement, ...prev]);
  }

  return (
    <AnnouncementsContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementsContext.Provider>
  );
}

export function useAnnouncements() {
  const value = useContext(AnnouncementsContext);

  if (!value) {
    throw new Error(
      "useAnnouncements sadece <AnnouncementsProvider> içinde kullanılabilir."
    );
  }

  return value;
}
