import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Star, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-shawarma-spit.jpg";
import kapsalonImg from "@/assets/dish-kapsalon.jpg";
import shawarmaImg from "@/assets/dish-shawarma.jpg";
import baklavaImg from "@/assets/dish-baklava.jpg";
import manakeeshImg from "@/assets/dish-manakeesh.jpg";


const highlights = [
  { name: "Kapsalon kipshoarma", price: "€ 12,00", img: kapsalonImg, desc: "Met friet, salademix en Syrische knoflooksaus." },
  { name: "Schotel kalfsshoarma", price: "€ 18,00", img: shawarmaImg, desc: "Arabische aardappel of rijst, broodje, augurk, koolsalade en tahina." },
  { name: "Manakeesh za'atar", price: "€ 1,50", img: manakeeshImg, desc: "Huisgemaakt Syrisch deeg met kruidenmengsel van oregano en tijm." },
  { name: "Baklava", price: "€ 7,00", img: baklavaImg, desc: "6 stuks, filodeeg lagen van pistache en honing." },
];

const reviews = [
  { name: "Linde Jarings", source: "Google", text: "Beste shawarma van NL tot nu toe! Zou zo weer naar Middelburg komen puur voor de smaak. Groetjes uit noord Holland.", meta: "Food: 5 · Service: 5 · Atmosphere: 5" },
  { name: "Mohamad Tata", source: "Google", text: "Uitstekend!", meta: "Food: 5 · Service: 5 · Atmosphere: 5" },
  { name: "Omar Omar", source: "Google", text: "Top kwaliteit en gastvrije service.", meta: "Food: 5 · Service: 5 · Atmosphere: 5" },
];

const hours = [
  { day: "Maandag", time: "11:00 – 00:00" },
  { day: "Dinsdag", time: "11:00 – 23:30" },
  { day: "Woensdag", time: "11:00 – 23:30" },
  { day: "Donderdag", time: "11:00 – 23:30" },
  { day: "Vrijdag", time: "11:00 – 01:00" },
  { day: "Zaterdag", time: "11:00 – 01:00" },
  { day: "Zondag", time: "11:00 – 00:00" },
];

const Index = () => {
  const [activeCat, setActiveCat] = useState(menu[0].id);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-gold/20">
        <nav className="container flex items-center justify-between h-16">
          <a href="#top" className="font-serif-display text-xl md:text-2xl font-semibold text-primary-foreground">
            Eethuis <span className="text-gradient-gold italic">Al Shami</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/80">
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-gold transition-colors">Beoordelingen</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-gold text-white hover:opacity-90 font-semibold">
            <a href="https://www.thuisbezorgd.nl/menu/eethuis-al-shami" target="_blank" rel="noopener">Bestellen</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        <img
          src={heroImg}
          alt="Kipshoarma van het spit met vlammen"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 container px-6 py-32">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <p className="text-gold font-medium tracking-[0.35em] text-xs md:text-sm mb-6 uppercase">Shoarma · Döner · Syrische Keuken</p>
            <h1 className="font-serif-display text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] mb-6">
              Eethuis<br />
              <span className="text-gradient-gold italic">Al Shami</span>
            </h1>
            <div className="gold-divider w-32 mb-6" />
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Authentieke shoarma van het spit, huisgemaakte manakeesh en Syrische specialiteiten —
              vers bereid in het hart van Middelburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-gold text-white hover:opacity-90 shadow-gold h-12 px-8 font-semibold">
                <a href="https://www.thuisbezorgd.nl/menu/eethuis-al-shami" target="_blank" rel="noopener">
                  Online bestellen <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-white hover:bg-primary-foreground hover:text-primary h-12 px-8">
                <a href="tel:+31681932900"><Phone className="mr-2 h-4 w-4" /> +31 6 81932900</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="bg-primary text-primary-foreground border-y border-gold/20">
        <div className="container grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {[
            { icon: MapPin, label: "Vrijlandstraat 37, 4337 EB Middelburg" },
            { icon: Clock, label: "Open vandaag · 11:00 – 23:30" },
            { icon: Star, label: "4.1 ★ op Google" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 py-5 px-4 text-sm">
              <Icon className="h-4 w-4 text-gold" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="menu" className="py-24 md:py-32 container">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] text-xs uppercase mb-4">Specialiteiten</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Onze populairste gerechten</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Een selectie uit onze kaart — bekijk de volledige menukaart op Thuisbezorgd.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item) => (
            <article key={item.name} className="group bg-card border border-border overflow-hidden hover:border-gold/50 transition-all duration-500 hover:shadow-gold flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-primary">
                <img src={item.img} alt={item.name} loading="lazy" width={896} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <span className="text-gradient-gold font-serif-display text-xl font-semibold mb-3">{item.price}</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-gold text-white hover:opacity-90 font-semibold h-12 px-8">
            <a href="https://www.thuisbezorgd.nl/menu/eethuis-al-shami" target="_blank" rel="noopener">
              Bekijk volledige menukaart <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] text-xs uppercase mb-4">Beoordelingen</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Wat onze gasten zeggen</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
              <Star className="h-5 w-5 fill-gold/40 text-gold" />
            </div>
            <p className="text-primary-foreground/70 text-sm">4.1 / 5 op Google · 141 beoordelingen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((r) => (
              <article key={r.name} className="bg-primary-foreground/5 border border-gold/20 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div>
                  <p className="font-semibold text-gold">{r.name}</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">{r.meta}</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">via {r.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 container">
        <div className="text-center mb-16">
          <p className="text-gold-dark font-medium tracking-[0.3em] text-xs uppercase mb-4">Bezoek Ons</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Contact & openingstijden</h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Adres</h3>
                <p className="text-muted-foreground">Vrijlandstraat 37<br />4337 EB Middelburg</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Telefoon</h3>
                <a href="tel:+31681932900" className="text-muted-foreground hover:text-gold-dark">+31 6 81932900</a>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                <a href="mailto:eethuisalshami@gmail.com" className="text-muted-foreground hover:text-gold-dark">eethuisalshami@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                <ExternalLink className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Online bestellen</h3>
                <a href="https://www.thuisbezorgd.nl/menu/eethuis-al-shami" target="_blank" rel="noopener" className="text-muted-foreground hover:text-gold-dark block">Thuisbezorgd</a>
                <a href="https://eethuisalshami-middelburg.nl/" target="_blank" rel="noopener" className="text-muted-foreground hover:text-gold-dark block">eethuisalshami-middelburg.nl</a>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-5 w-5 text-gold-dark" />
              <h3 className="font-serif-display text-2xl font-semibold">Openingstijden</h3>
            </div>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between items-center pb-3 border-b border-dashed border-border last:border-0">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-muted-foreground font-mono text-sm">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <iframe
            title="Locatie Eethuis Al Shami"
            src="https://www.google.com/maps?q=Vrijlandstraat+37,+4337+EB+Middelburg&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border border-border"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-gold/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif-display text-2xl">
            Eethuis <span className="text-gradient-gold italic">Al Shami</span>
          </div>
          <p className="text-primary-foreground/60 text-sm text-center">
            Vrijlandstraat 37, 4337 EB Middelburg · +31 6 81932900
          </p>
          <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} Eethuis Al Shami</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
