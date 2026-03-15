import React from "react";
import { Menu, X, ArrowRight, Check, Instagram } from "lucide-react";




// LOGO COMPONENT 

export function FlyerPlugLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scales = { sm: 0.75, md: 1, lg: 1.35 };
  const s = scales[size];

  return (
    <svg
      width={Math.round(180 * s)}
      height={Math.round(40 * s)}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flyer Plug GH"
    >
      {/* ── Icon tile ── */}
      <rect x="0" y="2" width="36" height="36" rx="9" fill="#1a1a1a" stroke="#333" strokeWidth="1" />

      {/* Ghana flag tri-color bar across bottom of tile */}
      <clipPath id="tileClip">
        <rect x="0" y="2" width="36" height="36" rx="9" />
      </clipPath>
      <g clipPath="url(#tileClip)">
        <rect x="0" y="29" width="12" height="9" fill="#CE1126" /> {/* Red */}
        <rect x="12" y="29" width="12" height="9" fill="#FCD116" /> {/* Gold */}
        <rect x="24" y="29" width="12" height="9" fill="#006B3F" /> {/* Green */}
      </g>

      {/* Ghana Black Star — centered in tile */}
      <polygon
        points="18,7 19.8,13 26,13 21,16.8 22.8,23 18,19.2 13.2,23 15,16.8 10,13 16.2,13"
        fill="#FCD116"
      />

      {/* ── Wordmark ── */}
      {/* FLYER */}
      <text
        x="46"
        y="26"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        FLYER
      </text>

      {/* PLUG — in Ghana gold */}
      <text
        x="105"
        y="26"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="-0.5"
        fill="#FCD116"
      >
        PLUG 
      </text>

      {/* GH tag */}
      <text
        x="152"
        y="33"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="8"
        letterSpacing="1.5"
        fill="#FCD116"
        opacity="0.7"
      >
        GH
      </text>

      {/* Small Ghana flag dot next to GH */}
      <circle cx="148" cy="31" r="2.5" fill="#CE1126" opacity="0.8" />
    </svg>
  );
}

export function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [minutesAgo, setMinutesAgo] = React.useState(0);

  // All your hero flyer images — add/swap as many as you want here
  const heroSlides = [
    "https://picsum.photos/id/1015/620/720",
    "https://picsum.photos/id/133/620/720",
    "https://picsum.photos/id/160/620/720",
    "https://picsum.photos/id/201/620/720",
    "https://picsum.photos/id/251/620/720",
  ];

  // Pick one random image per page load — stays fixed until next refresh
  const [currentSlide] = React.useState(() => Math.floor(Math.random() * heroSlides.length));

  // Live-ticking "last order" counter
  React.useEffect(() => {
    const start = Math.floor(Math.random() * 14) + 4;
    setMinutesAgo(start);
    const interval = setInterval(() => {
      setMinutesAgo(prev => (prev >= 59 ? 1 : prev + 1));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "+233530283723";
  const instagramHandle = "@flyerplugh";

  const categories = ["All", "Business", "Events", "Birthday", "Music", "Church"];

  const portfolioItems = [
    { id: 1, category: "Business", title: "Restaurant Promo", image: "https://picsum.photos/id/1015/600/800", desc: "Modern food flyer for a local chop bar" },
    { id: 2, category: "Events", title: "Wedding Invitation", image: "https://picsum.photos/id/133/600/800", desc: "Elegant wedding announcement flyer" },
    { id: 3, category: "Birthday", title: "30th Birthday Bash", image: "https://picsum.photos/id/160/600/800", desc: "Vibrant birthday celebration design" },
    { id: 4, category: "Music", title: "DJ Night", image: "https://picsum.photos/id/201/600/800", desc: "Hip hop concert promotional flyer" },
    { id: 5, category: "Church", title: "Sunday Service", image: "https://picsum.photos/id/29/600/800", desc: "Church revival announcement" },
    { id: 6, category: "Business", title: "Salon Opening", image: "https://picsum.photos/id/251/600/800", desc: "Beauty salon launch flyer" },
  ];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const testimonials = [
    { name: "Kwame Mensah", role: "Owner, Koko's Kitchen", text: "Got my menu flyer designed in under 2 hours. Looks very professional and my sales increased! Highly recommend.", avatar: "https://picsum.photos/id/64/128/128" },
    { name: "Ama Serwaa", role: "Afrobeats Artist", text: "The flyer for my single launch was fire! Got so many streams from the design. Fast and creative.", avatar: "https://picsum.photos/id/65/128/128" },
    { name: "Yaw Boateng", role: "Event Promoter", text: "Used them for 3 different events this year. Always on time and the designs always pop. Best in Ghana.", avatar: "https://picsum.photos/id/66/128/128" },
  ];

  const faqs = [
    { q: "How long does delivery take?", a: "Most flyers are delivered within 30 minutes to 2 hours after you provide the details. Rush orders available." },
    { q: "What details do I need to send?", a: "Just send your business name or event details, colors you prefer, key information (date, time, location), and any logos or images you want included." },
    { q: "Can I request changes?", a: "Yes! You get 2 rounds of revisions included with every order. We want you to be 100% satisfied." },
    { q: "Do you design for all businesses and events?", a: "Absolutely. From small businesses, churches, parties, birthdays, music events, to personal brands and more." },
    { q: "How do I pay?", a: "We accept Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, and PayPal for international clients." },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = "Hello Flyer Plug GH! I'm interested in getting a flyer designed for GH₵30. Can we discuss?";
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const openInstagram = () => {
    window.open(`https://instagram.com/${instagramHandle.replace("@", "")}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-orange-500 rounded-xl flex items-center justify-center text-black font-bold text-2xl">F</div>
            <div>
              <div className="font-semibold tracking-tighter text-2xl">FLYER PLUG</div>
              <div className="text-[10px] text-orange-400 -mt-1">GH</div>
            </div>
          </div> */}
          <FlyerPlugLogo size="md" />

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection("why")} className="hover:text-orange-400 transition-colors">Why Us</button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-orange-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-orange-400 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection("how")} className="hover:text-orange-400 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-orange-400 transition-colors">FAQ</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={openInstagram} className="flex items-center gap-2 px-5 py-2.5 text-sm border border-white/30 hover:border-orange-400 rounded-2xl transition-all hover:text-orange-400">
              <Instagram className="w-4 h-4" />
              <span>IG</span>
            </button>
            <button onClick={openWhatsApp} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-8 py-2.5 rounded-2xl font-semibold text-sm transition-all active:scale-[0.985]">
              ORDER NOW
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-lg">
            <button onClick={() => scrollToSection("why")} className="text-left py-2">Why Choose Us</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-left py-2">Our Work</button>
            <button onClick={() => scrollToSection("pricing")} className="text-left py-2">Pricing</button>
            <button onClick={() => scrollToSection("how")} className="text-left py-2">How It Works</button>
            <button onClick={() => scrollToSection("faq")} className="text-left py-2">FAQ</button>
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <button onClick={openInstagram} className="flex items-center justify-center gap-3 py-4 border border-white/30 rounded-3xl">
                <Instagram className="w-5 h-5" /> Follow on Instagram
              </button>
              <button onClick={openWhatsApp} className="py-4 bg-orange-500 text-black font-semibold rounded-3xl flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355l-.14-.083-3.454.905.92-3.38-.223-.14a9.86 9.86 0 01-1.52-5.183c0-5.45 4.436-9.886 9.888-9.886 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.985c0 5.45-4.437 9.886-9.888 9.886z" /></svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 relative bg-[radial-gradient(at_bottom_right,#3a2a1f_0%,transparent_60%)]">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-3xl bg-white/5 px-4 py-1 text-xs tracking-[0.5px] border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              GHANA'S #1 FLYER DESIGNER
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[68px] leading-[1.05] font-semibold tracking-tighter">
              PREMIUM FLYERS.<br />JUST <span className="text-orange-400">GH₵30</span>
            </h1>

            <p className="max-w-md text-xl text-zinc-400">
              Eye-catching flyer designs for businesses, events, artists and brands across Ghana. Delivered fast.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={openWhatsApp} className="group flex items-center gap-3 bg-white text-black px-9 py-4 rounded-3xl font-semibold text-lg hover:bg-amber-200 transition-all active:scale-95 shadow-xl shadow-orange-500/20">
                ORDER ON WHATSAPP
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="flex items-center gap-3 border border-white/40 hover:bg-white/5 px-8 py-4 rounded-3xl font-medium transition-all">
                VIEW OUR WORK
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <div className="w-6 h-6 bg-zinc-700 border-2 border-zinc-950 rounded-full"></div>
                  <div className="w-6 h-6 bg-orange-400 border-2 border-zinc-950 rounded-full"></div>
                </div>
                <div>
                  <div className="text-emerald-400 text-xs">98% of clients</div>
                  <div className="text-zinc-400 text-xs -mt-0.5">re-order</div>
                </div>
              </div>
              <div className="hidden sm:block h-9 w-px bg-white/10"></div>
              <div className="text-zinc-400 text-sm flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <Check className="text-emerald-400" /> FAST •&nbsp;
                <Check className="text-emerald-400" /> CLEAN •&nbsp;
                <Check className="text-emerald-400" /> AFFORDABLE
              </div>
            </div>
          </div>

          {/* Hero Visual — random image per page load with fade+zoom */}
          <div className="md:col-span-5 relative mt-4 md:mt-0 overflow-hidden md:overflow-visible">
            <div className="relative pb-8 pr-4 md:pb-0 md:pr-0">
              <div className="hidden md:block absolute -inset-8 bg-gradient-to-br from-orange-500/10 to-transparent rounded-[4rem] -rotate-6"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-3 shadow-2xl">
                <img
                  key={currentSlide}
                  src={heroSlides[currentSlide]}
                  alt="Premium flyer design example"
                  className="w-full max-h-[420px] md:max-h-none rounded-2xl object-cover"
                  style={{ animation: "fadeIn 0.9s ease-in-out" }}
                />
                {/* Live minutes-ago badge */}
                <div className="absolute -bottom-5 right-2 md:-right-5 bg-zinc-900 border border-white/10 text-xs px-4 md:px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="text-emerald-400">✓</div>
                  <div>
                    <div className="font-mono text-orange-400">{minutesAgo}</div>
                    <div className="text-[10px] text-zinc-400 -mt-1">MINUTES AGO</div>
                  </div>
                  <div className="text-xs text-zinc-400">LAST ORDER DELIVERED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 hidden md:flex -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-zinc-500">
          SCROLL TO EXPLORE <div className="h-px w-12 bg-white/30"></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-zinc-900 py-5 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs uppercase tracking-[1px] text-zinc-400">
          <div>SERVING ACCRA • KUMASI • TAMALE • TAKORADI</div>
          <div className="hidden md:block h-2.5 w-px bg-white/30"></div>
          <div>500+ HAPPY CLIENTS</div>
          <div className="hidden md:block h-2.5 w-px bg-white/30"></div>
          <div>2HR DELIVERY GUARANTEE</div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section id="why" className="max-w-screen-2xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="uppercase text-orange-400 text-xs tracking-[2px] font-medium mb-3">WHY FLYER PLUG GH</div>
          <h2 className="text-5xl tracking-tighter font-semibold max-w-md">Flyers that convert. Service you can trust.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Most designs delivered in under 90 minutes. Perfect for last minute events." },
            { icon: "🎨", title: "Premium Quality", desc: "Clean, modern and bold designs that stand out in the feed and on the street." },
            { icon: "💰", title: "Unbeatable Price", desc: "Professional designs for only GH₵30. No hidden fees. No surprises." },
            { icon: "🌍", title: "Ghana Focused", desc: "We understand the Ghanaian market, culture and what makes our people stop scrolling." }
          ].map((feature, index) => (
            <div key={index} className="bg-zinc-900/70 border border-white/5 rounded-3xl p-8 group hover:border-orange-400/30 transition-all">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-400 text-[15px] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-zinc-900 py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-orange-400 text-sm tracking-widest">SELECTED WORKS</div>
              <h2 className="text-5xl tracking-[-2px] font-semibold">Recent Flyer Designs</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-sm rounded-3xl transition-all whitespace-nowrap ${activeCategory === cat
                    ? "bg-orange-400 text-black font-medium"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-zinc-950 border border-white/5">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/5] object-cover transition-all group-hover:scale-105 duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent h-2/5"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="inline-block uppercase text-[10px] tracking-widest bg-white/10 px-3 py-1 rounded-full mb-2 text-orange-400">{item.category}</div>
                  <div className="text-2xl font-medium tracking-tight">{item.title}</div>
                  <div className="text-zinc-400 text-sm mt-1">{item.desc}</div>
                </div>
                <div className="absolute top-6 right-6 bg-black/70 text-[10px] px-3 py-1 rounded-3xl font-mono">GH₵30</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button onClick={openWhatsApp} className="mx-auto border border-white/30 px-8 py-4 rounded-3xl text-sm inline-flex items-center gap-3 hover:border-orange-400 group">
              WANT A CUSTOM FLYER LIKE THESE?
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-screen-2xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="inline px-4 py-1.5 text-xs rounded-3xl bg-orange-400/10 text-orange-400">STARTING AT</div>
              <div className="text-[92px] leading-none font-semibold tracking-tighter mt-3 mb-6">GH₵<span className="text-orange-400">30</span></div>
              <h2 className="text-5xl font-semibold tracking-tight">One Premium Flyer</h2>
              <p className="text-zinc-400 mt-6 text-lg max-w-sm">Everything you need to promote your business, event or brand in style.</p>
              <ul className="space-y-6 mt-12">
                {[
                  "Fully custom design tailored to you",
                  "High resolution (1080x1080 or 1080x1920)",
                  "Unlimited revisions within reason",
                  "Source files available on request",
                  "Delivered via WhatsApp in 90 mins or less"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-5 h-5 rounded bg-emerald-400/10 flex items-center justify-center shrink-0">
                      <Check className="text-emerald-400 w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-2">
              <div className="bg-zinc-950 rounded-3xl p-6 sm:p-12 overflow-hidden">
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <div className="text-orange-400 font-medium">MOST POPULAR</div>
                    <div className="text-5xl sm:text-6xl font-semibold mt-2 tracking-tighter leading-none">Premium Flyer</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-6xl sm:text-7xl font-semibold tabular-nums tracking-tight text-orange-400 leading-none">30</div>
                    <div className="mt-1 sm:-mt-2 text-xs sm:text-sm text-zinc-400">GHANAIAN CEDIS</div>
                  </div>
                </div>

                <div className="my-14 h-px bg-white/10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm">
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Design concept</span>
                      <span className="font-medium">1 concept</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Revisions</span>
                      <span className="font-medium">2 free revisions</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">File formats</span>
                      <span className="font-medium">JPG + PNG</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Delivery time</span>
                      <span className="font-medium text-emerald-400">90 mins avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Print ready</span>
                      <span className="font-medium">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Social media optimized</span>
                      <span className="font-medium">Yes</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openWhatsApp}
                  className="mt-16 w-full py-6 text-lg font-semibold bg-orange-500 text-black rounded-3xl active:scale-[0.985] transition-all flex items-center justify-center gap-3"
                >
                  GET YOUR FLYER FOR GH₵30
                  <ArrowRight />
                </button>

                <p className="text-center text-xs text-zinc-500 mt-8">Bulk discounts available for 5+ flyers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-screen-2xl mx-auto px-6 py-20 bg-zinc-950">
        <div className="text-center mb-16">
          <div className="text-orange-400 text-xs font-medium tracking-widest">DON'T JUST TAKE OUR WORD</div>
          <h2 className="text-5xl font-semibold tracking-tight mt-3">Real people. Real results.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-3xl p-8 border border-white/5">
              <div className="flex gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-2xl object-cover" />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-xs text-orange-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="mt-8 text-lg leading-tight text-zinc-300">"{testimonial.text}"</div>
              <div className="mt-10 text-amber-400 text-xl">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-screen-2xl mx-auto px-6 py-24 bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm uppercase text-orange-400 tracking-widest">3 STEPS. THAT'S IT.</div>
          <h2 className="text-5xl font-semibold tracking-tighter mt-3">From idea to flyer in minutes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { num: "01", title: "Tell us what you need", desc: "Send a WhatsApp message with your event or business name, details, preferred colors and any reference images." },
            { num: "02", title: "We get to work", desc: "Our designer creates a beautiful custom flyer based on your brief. You'll get a preview within the hour." },
            { num: "03", title: "Approve & receive", desc: "Review the design. Request changes if needed. Once you're happy, we send you the final high quality files." }
          ].map((step, index) => (
            <div key={index} className="relative bg-black border border-white/10 rounded-3xl p-10">
              <div className="font-mono text-7xl font-semibold text-white/10 absolute top-8 right-8">{step.num}</div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-400 text-black rounded-2xl flex items-center justify-center text-3xl font-semibold mb-8">{index + 1}</div>
                <h3 className="text-3xl font-medium tracking-tight mb-4">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-screen-2xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="uppercase tracking-widest text-xs text-orange-400">SUPPORT</div>
            <h2 className="text-5xl font-semibold tracking-tight mt-2">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="border border-white/10 bg-zinc-900 rounded-3xl cursor-pointer overflow-hidden"
              >
                <div className="px-8 py-6 flex justify-between items-center">
                  <div className="text-lg font-medium pr-8">{faq.q}</div>
                  <div className={`text-3xl text-orange-400 transition-transform ${openFaq === index ? "rotate-45" : ""}`}>+</div>
                </div>
                <div className={`px-8 text-zinc-400 text-[15.2px] leading-relaxed overflow-hidden transition-all ${openFaq === index ? "max-h-40 pb-8" : "max-h-0"}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-24 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-semibold tracking-tight leading-none">Ready to get a flyer<br />that actually works?</h2>
          <p className="mt-8 text-xl text-zinc-400 max-w-xs mx-auto">Stop using boring templates. Get a custom design today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button onClick={openWhatsApp} className="flex-1 sm:flex-none bg-white text-black py-5 px-14 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-amber-100">
              <span>CHAT ON WHATSAPP</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355l-.14-.083-3.454.905.92-3.38-.223-.14a9.86 9.86 0 01-1.52-5.183c0-5.45 4.436-9.886 9.888-9.886 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.985c0 5.45-4.437 9.886-9.888 9.886z" /></svg>
            </button>
            <button onClick={openInstagram} className="flex-1 sm:flex-none border border-white/60 py-5 px-10 rounded-3xl font-medium flex items-center justify-center gap-2 hover:bg-white/5">
              <Instagram className="w-5 h-5" />
              DM US ON INSTAGRAM
            </button>
          </div>
          <div className="text-xs mt-12 text-zinc-500">Average response time: 4 minutes</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5">
            {/* <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-orange-500 text-black rounded-2xl flex items-center justify-center text-3xl font-black">F</div>
              <div className="font-semibold text-3xl tracking-tighter">FLYER PLUG GH</div>
            </div> */}
            <FlyerPlugLogo size="lg"/>
            <div className="mt-6 text-zinc-400 max-w-xs">Fast, clean and professional flyer designs for the modern Ghanaian entrepreneur.</div>
            <div className="mt-8 text-xs text-zinc-500">©️ {new Date().getFullYear()} Flyer Plug GH. All rights reserved.</div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-400">QUICK LINKS</div>
            <div className="flex flex-col gap-y-3 text-sm">
              <button onClick={() => scrollToSection("portfolio")} className="text-left hover:text-orange-400 w-fit">Portfolio</button>
              <button onClick={() => scrollToSection("pricing")} className="text-left hover:text-orange-400 w-fit">Pricing</button>
              <button onClick={() => scrollToSection("how")} className="text-left hover:text-orange-400 w-fit">Process</button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-400">GET IN TOUCH</div>
            <div className="flex flex-col gap-4">
              <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355l-.14-.083-3.454.905.92-3.38-.223-.14a9.86 9.86 0 01-1.52-5.183c0-5.45 4.436-9.886 9.888-9.886 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.985c0 5.45-4.437 9.886-9.888 9.886z" /></svg>
                </div>
                <div>
                  <div className="font-medium text-lg">WhatsApp</div>
                  <div className="text-zinc-400 text-sm">+233 55 123 4567</div>
                </div>
              </a>
              <a href={`https://instagram.com/${instagramHandle.replace("@", "")}`} target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-lg">Instagram</div>
                  <div className="text-zinc-400 text-sm">{instagramHandle}</div>
                </div>
              </a>
            </div>
            <div className="mt-14 text-xs text-zinc-500 leading-loose">
              Accra, Ghana<br />
              Serving clients nationwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}