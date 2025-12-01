// components/AnnouncementsList.tsx
"use client";

import { useAnnouncements } from "@/hooks/useAnnouncements";
import Image from "next/image";
import Link from "next/link";

export default function AnnouncementsList() {
  const { announcements } = useAnnouncements();

  return (
    <section
      id="announcements"
      className="mx-auto max-w-5xl px-4 py-8 space-y-4"
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 border-l-4 border-green-600 pl-3">
        Duyurular
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {announcements.map((a) => (
          <Link
            key={a.id}
            href={`/duyurular/${a.id}`}
            className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-md transition"
          >
            {a.imageUrl && (
              <div className="relative h-40 w-full">
                <Image
                  src={a.imageUrl}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                  {a.title}
                </h3>
                <span className="text-xs text-gray-500 shrink-0">
                  {new Date(a.date).toLocaleDateString("tr-TR")}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">
                {a.content}
              </p>
              <span className="mt-1 text-xs text-green-700 font-medium">
                Detayları gör →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
