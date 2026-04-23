import {client} from '@/sanity/lib/client'
import {sponsorBySlugQuery} from '@/sanity/lib/queries'
import {notFound} from 'next/navigation'

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
  slug?: string
}

export default async function SponsorDetailPage({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params

  const sponsor: Sponsor | null = await client.fetch(sponsorBySlugQuery, {slug})

  if (!sponsor) return notFound()

  return (
    <main className="min-h-screen bg-[#030816] px-6 py-10 text-white md:px-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300"
        >
          ← Ana sayfaya dön
        </a>

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-2xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_18px_rgba(34,211,238,0.08)]">
              {sponsor.logoUrl ? (
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="h-full w-full object-contain p-3"
                />
              ) : (
                <span className="text-2xl font-bold text-cyan-200">
                  {sponsor.short || sponsor.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold md:text-5xl">{sponsor.name}</h1>

                {sponsor.featured && (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
                    Featured
                  </span>
                )}

                {sponsor.tag && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {sponsor.tag}
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Doğrulanmış • Aktif platform
              </div>

              <p className="mt-4 text-lg text-white/65">
                {sponsor.bonus || 'Güncel teklif bilgisi yakında eklenecek.'}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/50">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  {sponsor.category || 'Premium Sponsor'}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Güncel kontrol
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Hızlı erişim
                </span>
              </div>

              {sponsor.externalUrl && (
                <a
                  href={sponsor.externalUrl}
                  target="_blank"
                  className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition hover:scale-[1.02]"
                >
                  Siteye Git
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}