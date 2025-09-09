import Image from "next/image";
import Link from "next/link";
import FooterBar from "@/components/navigation/Footer";

// 🏝️ Bojo Resort – Homepage with beige & white beach-inspired theme

export default function Kryefaqja() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-zinc-900">
      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bojo/hero.jpg"
            alt="Bojo Resort – bregdet, diell, dhe relaks"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#DCCBB3]/70 via-[#FAF7F2]/20 to-[#FAF7F2]/10" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-[#FDFBF7]/90">Mirë se vini te</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Bojo Resort
            </h1>
            <p className="mt-4 max-w-xl text-[#FDFBF7]/90 md:text-lg">
              Një oaz bregdetar ku mikpritja shqiptare takohet me elegancën mesdhetare. Shijoni kuzhinën sezonale, verërat vendase dhe perëndimet mahnitëse.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#rezervo" className="inline-flex items-center rounded-full bg-[#FDFBF7] px-5 py-2.5 text-sm font-medium text-[#3B3228] shadow hover:bg-[#F2EDE6]">
                Bëni Rezervim
              </Link>
              <Link href="#menu" className="inline-flex items-center rounded-full border border-[#FDFBF7]/70 bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:bg-[#FDFBF7]/10">
                Shikoni Menunë
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="border-b border-[#E5DED2] bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3">
          {[
            { title: "Kuzhinë sezonale", desc: "Produkte lokale nga bregdeti i Jugut, menu që ndryshon me stinët." },
            { title: "Ambient elegant", desc: "Hapësira të ndritshme me tone të buta dhe detaje artizanale." },
            { title: "Pranë plazhit", desc: "Hapat larg detit – mëngjese të qeta dhe mbrëmje romantike." },
          ].map((i) => (
            <div key={i.title}>
              <h3 className="text-lg font-semibold tracking-tight">{i.title}</h3>
              <p className="mt-1 text-sm text-[#6D5F50]">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="bg-[#FDFBF7]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image src="/images/bojo/dish-1.jpg" alt="Pjatë sezonale e Bojo Resort" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#B09A7D]">Kuzhina</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Shije Autentike Mesdhetare</h2>
              <p className="mt-3 text-[#6D5F50]">
                Menuja jonë ndjek udhëtimin klasik mesdhetar: antipasta, makarona të freskëta, fruta deti dhe ëmbëlsira artizanale.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { emri: "Sallatë deti", pershkrim: "Fruta deti të freskëta, agrume dhe vaj ulliri." },
                  { emri: "Ravioli shtëpie", pershkrim: "Mbushur me rikota e spinaq, salcë gjalpë e sherebelë." },
                  { emri: "Levrek i egër", pershkrim: "I pjekur lehtë me erëza mesdhetare." },
                  { emri: "Tiramisu", pershkrim: "Klasike, kremoze – përgatisur çdo ditë." },
                ].map((d) => (
                  <div key={d.emri} className="rounded-xl border border-[#E5DED2] bg-white p-4">
                    <p className="font-medium">{d.emri}</p>
                    <p className="text-sm text-[#6D5F50]">{d.pershkrim}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/learnmore" className="rounded-full bg-[#3B3228] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#52463B]">
                  Shikoni të plotë
                </Link>
                <Link href="#rezervo" className="rounded-full border border-[#E5DED2] px-5 py-2.5 text-sm font-medium text-[#3B3228] hover:bg-[#F2EDE6]">
                  Rezervoni tavolinë
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="border-y border-[#E5DED2] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {["gal-1.jpg", "gal-2.jpg", "gal-3.jpg", "gal-4.jpg"].map((g) => (
              <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={`/images/bojo/${g}`} alt="Galeria Bojo" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#B09A7D]">Evente private</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Dreka intime & mbrëmje të paharrueshme</h2>
              <p className="mt-3 text-[#6D5F50]">
                Organizoni ditëlindje, darka familjare ose evente biznesi në sallën tonë me dritare të mëdha dhe oxhak dekorativ – atmosferë e ngrohtë gjatë dimrit dhe taracë e hapur në verë.
              </p>
              <div className="mt-6">
                <Link href="/kontakt" className="rounded-full bg-[#3B3228] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#52463B]">
                  Kërkoni ofertë
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image src="/images/bojo/events.jpg" alt="Evente private në Bojo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section id="orari" className="border-t border-[#E5DED2] bg-white">
        <div className="mx-auto max-w-6xl grid gap-8 px-4 py-14 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Orari</h3>
            <ul className="mt-3 space-y-1 text-[#6D5F50]">
              <li>Hënë – Shtunë: 12:00 – 23:00</li>
              <li>E Diel: 12:00 – 22:30</li>
            </ul>

            <h3 className="mt-8 text-2xl font-semibold">Adresa</h3>
            <p className="mt-2 text-[#6D5F50]">Bojo Resort, Bregdeti i Jugut, Shqipëri</p>
            <p className="text-[#6D5F50]">Tel: +355 (***) *** ***</p>
          </div>
          
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section id="rezervo" className="bg-[#DCCBB3]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center text-[#3B3228]">
          <h2 className="text-3xl font-semibold md:text-4xl">Gati për një përvojë të veçantë?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#4A4036]">
            Rezervoni tavolinën tuaj ose dërgoni një kërkesë për event privat. Ekipi ynë do t’ju kontaktojë menjëherë.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/kontakt" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#3B3228] hover:bg-[#F2EDE6]">
              Kontakti & Rezervime
            </Link>
            <Link href="/learnmore" className="rounded-full border border-[#3B3228]/40 px-5 py-2.5 text-sm font-medium text-[#3B3228] hover:bg-[#E5DED2]">
              Mësoni më shumë
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-[#E5DED2] p-6 md:p-8">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Abonohuni në buletin</h3>
                <p className="mt-1 text-sm text-[#6D5F50]">Merrni lajmet e sezonit, evente dhe oferta speciale.</p>
              </div>
              <form className="mt-4 flex max-w-md gap-2 md:mt-0">
                <input
                  type="email"
                  required
                  placeholder="Email juaj"
                  className="w-full rounded-full border border-[#E5DED2] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B09A7D]"
                />
                <button type="submit" className="rounded-full bg-[#3B3228] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#52463B]">
                  Abonohu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterBar />
    </main>
  );
}
