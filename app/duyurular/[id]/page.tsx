// app/duyurular/[id]/page.tsx
"use client";

import { useAnnouncements } from "@/hooks/useAnnouncements";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export default function AnnouncementDetailPage() {
  const { announcements } = useAnnouncements();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  // useParams dinamik segmenti string veya string[] döndürebilir, garantiye alalım
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const announcement = announcements.find((a) => a.id === id);

  if (!announcement) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-4 text-sm text-gray-500">
          İstediğiniz duyuru bulunamadı.
        </p>
        <button
          onClick={() => router.back()}
          className="text-sm text-green-700 underline"
        >
          ← Geri dön
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl my-14 px-14 py-8 space-y-4">
      {/* <button
        onClick={() => router.back()}
        className="text-sm text-green-700 underline mb-4"
      >
        ← Duyurulara geri dön
      </button> */}

      <h1 className="text-2xl sm:text-3xl font-semibold">
        {announcement.title}
      </h1>

      <p className="text-xs text-gray-500">
        {new Date(announcement.date).toLocaleDateString("tr-TR")}
      </p>

      {announcement.imageUrl && (
        <div className="relative mt-4 h-64 w-full rounded-xl overflow-hidden">
          <Image
            src={announcement.imageUrl}
            alt={announcement.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="mt-4 text-sm sm:text-base text-white-800 leading-relaxed whitespace-pre-line">
        {announcement.description}
      </p>
    </div>
  );
}
