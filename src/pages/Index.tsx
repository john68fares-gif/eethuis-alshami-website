import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/hero-mezze.jpg";
import shawarmaImg from "@/assets/dish-shawarma.jpg";
import falafelImg from "@/assets/dish-falafel.jpg";
import baklavaImg from "@/assets/dish-baklava.jpg";

const menuHighlights = [
  { name: "Shawarma Schotel", desc: "Gegrilde kip of lamsvlees met knoflooksaus, augurken en rijst.", price: "€14,50", img: shawarmaImg },
  { name: "Falafel Mezze", desc: "Knapperige falafel met tahini, hummus en versgebakken pita.", price: "€11,00", img: falafelImg },
  { name: "Baklava & Kunafa", desc: "Klassieke Syrische zoetigheden met pistache en honingsiroop.", price: "€6,50", img: baklavaImg },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-serif-display text-2xl font-semibold text-primary">
            <UtensilsCrossed className="h-5 w-5" />
            Eethuis Al-Shami
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">Over ons</a>
            <a href="#visit" className="hover:text-primary transition-colors">Bezoek</a>
          </div>
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            <a href="tel:+31000000000">Reserveren</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Syrische mezze tafel met hummus, falafel en pita"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 container text-center text-primary-foreground px-6">
          <p className="text-gold font-medium tracking-[0.3em] text-xs md:text-sm mb-6 uppercase">Authentieke Syrische Keuken</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
            Smaken van<br />
            <span className="italic text-gold">Damascus</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-primary-foreground/85 mb-10 leading-relaxed">
            Bij Eethuis Al-Shami delen we de gastvrijheid en rijke gerechten van de Levant — met liefde bereid, zoals thuis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 shadow-warm text-base h-12 px-8">
              <a href="#menu">Bekijk het menu</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground h-12 px-8">
              <a href="#visit">Bezoek ons</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 container">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">Onze Verhaal</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Een stukje Syrië<br />in het hart van de stad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al-Shami betekent "uit Damascus" — en dat proef je in elk gerecht. Onze familierecepten zijn doorgegeven over generaties, met verse kruiden, langzaam gegaard vlees en brood gebakken in eigen oven.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kom binnen voor een warme welkom, een glas verse muntthee, en de smaken die ons aan thuis herinneren.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-warm opacity-20 blur-2xl rounded-full" />
            <img
              src={falafelImg}
              alt="Verse falafel met tahini"
              loading="lazy"
              width={896}
              height={896}
              className="relative rounded-sm shadow-warm w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">Menu Hoogtepunten</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Onze specialiteiten</h2>
            <p className="text-muted-foreground">Een selectie van favorieten — van mezze tot zoete afsluiters.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuHighlights.map((item) => (
              <article key={item.name} className="group bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={896}
                    height={896}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <span className="text-gold font-serif-display text-xl font-semibold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-24 md:py-32 container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">Bezoek Ons</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Ahlan wa Sahlan — Welkom</h2>
          <p className="text-muted-foreground">Reserveer een tafel of kom gewoon langs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: MapPin, title: "Adres", lines: ["Hoofdstraat 12", "1000 AB Amsterdam"] },
            { icon: Clock, title: "Openingstijden", lines: ["Ma–Do  12:00 – 22:00", "Vr–Zo  12:00 – 23:00"] },
            { icon: Phone, title: "Contact", lines: ["+31 (0)20 000 0000", "info@al-shami.nl"] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-card border border-border rounded-sm p-8 text-center shadow-soft">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-warm text-primary-foreground mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              {lines.map((l) => (
                <p key={l} className="text-muted-foreground text-sm">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif-display text-2xl flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-gold" />
            Eethuis Al-Shami
          </div>
          <p className="text-background/60 text-sm">© {new Date().getFullYear()} Eethuis Al-Shami. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
