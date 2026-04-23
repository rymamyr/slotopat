import {client} from '@/sanity/lib/client'
import {sponsorsQuery} from '@/sanity/lib/queries'

type Sponsor = {
  _id: string
  name: string
  bonus?: string
  tag?: string
  category?: string
  short?: string
  featured?: boolean
  rank?: number
  accentFrom?: string
  accentTo?: string
  externalUrl?: string
  logoUrl?: string
}

export default async function Home() {
  const sponsors: Sponsor[] = await client.fetch(sponsorsQuery)
  const featured = sponsors.find((s) => s.featured) || sponsors[0]

  return (
    <main className="min-h-screen overflow-hidden bg-[#030816] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <img
              src="/logo-clean.png"
              alt="Slotopat"
              className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            />
            <div className="hidden md:block">
              <div className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/65">
                Seçilmiş Platformlar
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#sponsors"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Sponsorlar
            </a>
            <a
              href="#featured"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Öne Çıkan
            </a>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Gerçek veri • Güncel liste • Güven filtresi
            </div>

            <h1 className="text-5xl font-bold leading-[1.02] md:text-7xl">
              En Güvenilir Slot Platformları
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Sadece seçilmiş sponsorlar
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Tüm sponsorlar filtrelenmiş, test edilmiş ve güvenilirlik odaklı seçilmiştir.
              Rastgele liste yok, sadece gerçekten öne çıkanlar.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-bold text-cyan-400">{sponsors.length}+</div>
                <div className="mt-1 text-sm text-white/50">Aktif Sponsor</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="mt-1 text-sm text-white/50">Güncel Liste</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-bold text-cyan-400">PRO</div>
                <div className="mt-1 text-sm text-white/50">Sunum Dili</div>
              </div>
            </div>
          </div>

          {featured && (
            <div id="featured" className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Öne Çıkan Sponsor</p>
                    <h3 className="text-2xl font-semibold">{featured.name}</h3>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
                    Featured
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#0b1222] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_18px_rgba(34,211,238,0.08)]">
                      {featured.logoUrl ? (
                        <img
                          src={featured.logoUrl}
                          alt={featured.name}
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-xl font-bold text-cyan-200">
                          {featured.short || featured.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-2xl font-bold">{featured.name}</div>
                      <div className="mt-1 text-sm text-white/50">{featured.bonus}</div>

                      <div className="mt-3 flex gap-2">
                        {featured.tag && (
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                            {featured.tag}
                          </span>
                        )}
                        {featured.category && (
                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                            {featured.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {featured.externalUrl && (
                    <a
                      href={featured.externalUrl}
                      target="_blank"
                      className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition hover:scale-[1.02]"
                    >
                      Siteye Git
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="sponsors" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Sponsorlar
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Güncel sponsor listesi
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {sponsors.map((s, i) => (
            <div
              key={s._id}
              className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs text-white/35">
                  {(i + 1).toString().padStart(2, '0')}
                </span>

                {s.tag && (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {s.tag}
                  </span>
                )}
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_18px_rgba(34,211,238,0.08)]">
                  {s.logoUrl ? (
                    <img
                      src={s.logoUrl}
                      alt={s.name}
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-lg font-bold text-cyan-200">
                      {s.short || s.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-lg font-semibold">{s.name}</div>
                  <div className="text-sm text-white/50">{s.bonus}</div>
                </div>
              </div>

              {s.category && (
                <div className="mt-1 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  {s.category}
                </div>
              )}

              {s.externalUrl && (
                <a
                  href={s.externalUrl}
                  target="_blank"
                  className="mt-6 inline-flex rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  Detaya Git →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}