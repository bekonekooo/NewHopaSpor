"use client";

import { useState } from "react";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import AnnouncementsList from "./AnnouncementsList";

export default function AdminAnnouncementsForm() {
  const { announcements, addAnnouncement } = useAnnouncements();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10) // yyyy-mm-dd
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const image = imageUrl.trim() || "/images/announcement-placeholder.jpg";

    addAnnouncement({
      title: title.trim(),
      description: description.trim(),
      imageUrl: image,
      date
    });

    setTitle("");
    setDescription("");
    setImageUrl("");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm shadow-black/40">
        <h1 className="text-2xl font-bold tracking-tight">
          Duyuru Yönetimi (Admin)
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Buradan yeni duyurular ekleyebilir ve mevcut listeyi önizleyebilirsin.
          Bu demo sürümde veriler sayfa yenilense bile tarayıcında (localStorage)
          saklanır, başka cihazlarda görünmez.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <div className="space-y-4 md:col-span-1">
            <div>
              <label className="block text-xs font-medium text-slate-200">
                Başlık
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-hopa-green"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200">
                Fotoğraf URL
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-hopa-green"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                Boş bırakılırsa varsayılan bir görsel kullanılır.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200">
                Tarih
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-hopa-green"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-hopa-green px-6 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-hopa-green/40 transition hover:bg-emerald-400"
            >
              Duyuru Ekle
            </button>
          </div>

          <div className="md:col-span-1">
            <label className="block text-xs font-medium text-slate-200">
              Açıklama
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
              className="mt-1 h-full w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-hopa-green"
              required
            />
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Duyurular Önizleme</h2>
        <AnnouncementsList announcements={announcements} />
      </section>
    </div>
  );
}
