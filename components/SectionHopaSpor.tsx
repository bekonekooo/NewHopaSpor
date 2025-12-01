export default function SectionHopaSpor() {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-[3rem] bg-slate-900/60 py-14 md:py-20">
      {/* Arka plan */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/hopa-main.jpg')" }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/95" />

      {/* Text mask benzeri */}
      <div className="relative mx-auto mb-10 w-full max-w-4xl px-4">
        <div className="overflow-hidden rounded-[999px] bg-slate-950/80">
          <div className="relative h-40 md:h-52 lg:h-64">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hopa-main.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
            <h2
              className="relative flex h-full items-center justify-center bg-clip-text text-center text-[3rem] font-extrabold tracking-[0.25em] text-transparent md:text-[4rem] lg:text-[5rem]"
              style={{
                backgroundImage: "url('/images/hopa-main.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              HOPASPOR
            </h2>
          </div>
        </div>
      </div>

      {/* Açıklama */}
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm text-slate-200 md:text-base md:leading-7">
          Hopa Spor’un forması, bu şehrin emeğini ve inadını temsil eder.
          Sadece sahada değil, tribünde, sokakta ve deniz kokan rüzgârda da
          hissedilen bir ruha sahibiz. Her maç, Hopa’nın güçlü duruşunu yeniden
          hatırlatıyor.
        </p>
        {/* <button className="mt-8 rounded-full border border-hopa-green/70 bg-hopa-green px-6 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-hopa-green/40 transition hover:bg-emerald-400">
          Takımı Tanı
        </button> */}
      </div>
    </div>
  );
}
