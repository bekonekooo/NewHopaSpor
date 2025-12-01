// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnnouncementsProvider } from "@/hooks/useAnnouncements";

export const metadata: Metadata = {
  title: "Hopa Spor | Artvin Hopa Spor Kulübü",
  description: "Artvin Hopa Spor taraftar ve kulüp bilgilendirme sitesi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <AnnouncementsProvider>
          <Navbar />
          <main>{children}</main>
        </AnnouncementsProvider>
      </body>
    </html>
  );
}
