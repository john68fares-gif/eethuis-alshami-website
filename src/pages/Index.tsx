import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-shawarma-spit.jpg";
import kapsalonImg from "@/assets/dish-kapsalon.jpg";
import shawarmaImg from "@/assets/dish-shawarma.jpg";
import falafelImg from "@/assets/dish-falafel.jpg";
import baklavaImg from "@/assets/dish-baklava.jpg";
import manakeeshImg from "@/assets/dish-manakeesh.jpg";

type Item = { name: string; desc?: string; price: string };
type Category = { id: string; name: string; note?: string; items: Item[] };

const menu: Category[] = [
  {
    id: "kipshoarma",
    name: "Kipshoarma van het spit",
    note: "Zelfgemaakt",
    items: [
      { name: "Kapsalon kipshoarma klein", desc: "Met friet, salademix en Syrische knoflooksaus", price: "€ 9,00" },
      { name: "Kapsalon kipshoarma normaal", desc: "Met friet, salademix en Syrische knoflooksaus", price: "€ 12,00" },
      { name: "Kapsalon kipshoarma XXL", desc: "Met friet, salademix en Syrische knoflooksaus", price: "€ 15,00" },
      { name: "Schotel kipshoarma", desc: "Met Arabische aardappel of rijst, broodje, augurk, koolsalade en Syrische knoflooksaus", price: "€ 16,00" },
      { name: "Fatteh kipshoarma", desc: "Met rijst en knapperig platbrood", price: "€ 16,00" },
      { name: "Wrap kipshoarma", desc: "Met augurk en Syrische knoflooksaus", price: "€ 7,50" },
      { name: "Wrap kipshoarma dubbel", desc: "Met augurk en Syrische knoflooksaus", price: "€ 12,00" },
      { name: "Wrap kipshoarma menu", desc: "Met Arabische aardappel, koolsalade, augurk en Syrische knoflooksaus", price: "€ 13,00" },
      { name: "Dubbele wrap kipshoarma menu", desc: "Met Arabische aardappel, koolsalade, augurk en Syrische knoflooksaus", price: "€ 18,00" },
      { name: "Wrap kipshoarma kaas champignons", desc: "Met kaas, champignons, augurk en Syrische knoflooksaus", price: "€ 10,00" },
      { name: "Halve kilo kipshoarma", desc: "Met Arabische aardappel of rijst, koolsalade, augurk en Syrische knoflooksaus", price: "€ 30,00" },
      { name: "Een kilo kipshoarma", desc: "Met Arabische aardappel of rijst, koolsalade, augurk en Syrische knoflooksaus", price: "€ 60,00" },
    ],
  },
  {
    id: "kalfsshoarma",
    name: "Kalfsshoarma van het spit",
    note: "Zelfgemaakt",
    items: [
      { name: "Kapsalon kalfsshoarma klein", desc: "Met friet, salademix en tahina", price: "€ 11,00" },
      { name: "Kapsalon kalfsshoarma normaal", desc: "Met friet, salademix en tahina", price: "€ 13,00" },
      { name: "Kapsalon kalfsshoarma XXL", desc: "Met friet, salademix en tahina", price: "€ 16,00" },
      { name: "Schotel kalfsshoarma", desc: "Met Arabische aardappel of rijst, koolsalade, augurk en tahina", price: "€ 18,00" },
      { name: "Fatteh kalfsshoarma", desc: "Met rijst, knapperig platbrood en tahina", price: "€ 16,00" },
      { name: "Wrap kalfsshoarma", desc: "Met augurk en tahina", price: "€ 9,00" },
      { name: "Dubbele wrap kalfsshoarma", price: "€ 13,00" },
      { name: "Wrap kalfsshoarma menu", desc: "Met Arabische aardappel, koolsalade, augurk en tahina", price: "€ 14,00" },
      { name: "Dubbele kalfsshoarma wrap menu", desc: "Met Arabische aardappel, koolsalade, augurk en tahina", price: "€ 20,00" },
      { name: "Halve kilo kalfsshoarma", desc: "Met Arabische aardappel of rijst, koolsalade, augurk en tahina", price: "€ 35,00" },
      { name: "Een kilo kalfsshoarma", desc: "Met Arabische aardappel of rijst, koolsalade, augurk en tahina", price: "€ 65,00" },
    ],
  },
  {
    id: "gegrilde-kip",
    name: "Gegrilde kip",
    items: [
      { name: "Halve gegrilde kip gewoon", desc: "Enkel huis gegrilde kip", price: "€ 11,00" },
      { name: "Halve gegrilde kip", desc: "Huisgemaakt met Arabische kruiden, aardappel of rijst en Syrische knoflooksaus met Arabische augurk", price: "€ 13,00" },
      { name: "Hele gegrilde kip gewoon", desc: "Enkel huis gegrilde kip", price: "€ 15,00" },
      { name: "Hele gegrilde kip", desc: "Huisgemaakt met Arabische kruiden, aardappel of rijst en Syrische knoflooksaus met Arabische augurk", price: "€ 18,00" },
    ],
  },
  {
    id: "gefrituurde-kip",
    name: "Gefrituurde kip",
    items: [
      { name: "Halve gefrituurde kip", desc: "Arabische aardappel, Syrische knoflooksaus, Arabische augurk en koolsalade", price: "€ 15,00" },
      { name: "Hele gefrituurde kip", desc: "Arabische aardappel, Syrische knoflooksaus, Arabische augurk en koolsalade", price: "€ 25,00" },
    ],
  },
  {
    id: "falafel",
    name: "Falafel",
    items: [
      { name: "Falafel", desc: "10 stuks", price: "€ 6,00" },
      { name: "Wrap falafel", desc: "Sla, komkommer, tomaat, uitjes, augurk en tahina", price: "€ 6,00" },
      { name: "Wrap falafel dubbel", desc: "Sla, komkommer, tomaat, uitjes, augurk en tahina", price: "€ 9,00" },
      { name: "Schotel falafel", desc: "Sla, broodje, komkommer, tomaat, uitjes, augurk en tahina", price: "€ 12,00" },
      { name: "Bakje hummus", desc: "Gestampte kikkererwten met een kruidenmix", price: "€ 4,00" },
      { name: "Wrap friet", price: "€ 6,00" },
    ],
  },
  {
    id: "crispy-kip",
    name: "Crispy kip",
    items: [
      { name: "Crispy kip", desc: "1 stuk", price: "€ 4,00" },
      { name: "Broodje crispy kip", desc: "Met koolsalade", price: "€ 10,00" },
      { name: "Schotel crispy kip", desc: "Arabische aardappel of rijst, broodje en koolsalade", price: "€ 18,00" },
      { name: "Schotel kippenvleugels", desc: "Arabische aardappel, Syrische knoflooksaus en cola", price: "€ 15,00" },
    ],
  },
  {
    id: "kip-doner",
    name: "Kip döner",
    items: [
      { name: "Broodje döner kebab", desc: "Salademix en knoflooksaus", price: "€ 9,00" },
      { name: "Dürüm döner kebab", desc: "Salademix en knoflooksaus", price: "€ 9,50" },
      { name: "Kapsalon döner kebab klein", desc: "Friet, salademix en knoflooksaus", price: "€ 9,50" },
      { name: "Kapsalon döner kebab normaal", desc: "Friet, salademix en knoflooksaus", price: "€ 13,00" },
      { name: "Kapsalon döner kebab XXL", desc: "Friet, salademix en knoflooksaus", price: "€ 14,50" },
      { name: "Schotel döner kebab", desc: "Arabische aardappel of rijst, broodje, augurk, koolsalade en knoflooksaus", price: "€ 16,00" },
      { name: "Schotel döner kebab speciaal", desc: "Arabische aardappel of rijst, broodje, augurk, koolsalade en knoflooksaus", price: "€ 17,00" },
    ],
  },
  {
    id: "kipfilet",
    name: "Kipfilet",
    items: [
      { name: "Broodje kipfilet", desc: "Salademix en knoflooksaus", price: "€ 9,00" },
      { name: "Dürüm kipfilet", desc: "Salademix en knoflooksaus", price: "€ 10,00" },
      { name: "Kapsalon kipfilet klein", desc: "Friet, salademix en knoflooksaus", price: "€ 11,00" },
      { name: "Kapsalon kipfilet normaal", desc: "Friet, salademix en knoflooksaus", price: "€ 13,00" },
      { name: "Kapsalon kipfilet XXL", desc: "Friet, salademix en knoflooksaus", price: "€ 14,50" },
      { name: "Schotel kipfilet", desc: "Arabische aardappel of rijst, broodje, augurk, koolsalade en knoflooksaus", price: "€ 16,00" },
      { name: "Schotel kipfilet speciaal", desc: "Arabische aardappel of rijst, broodje, augurk, koolsalade en knoflooksaus", price: "€ 16,50" },
    ],
  },
  {
    id: "mix-schotels",
    name: "Mix schotels",
    items: [
      { name: "Mix schotel kipshoarma en kipfilet", desc: "Met Arabische aardappel of rijst, salademix en knoflooksaus", price: "€ 20,50" },
      { name: "Mix schotel kipshoarma en kalfsshoarma", desc: "Met Arabische aardappel of rijst, salademix en Syrische knoflooksaus", price: "€ 22,50" },
      { name: "Mix schotel kalfsshoarma, kipshoarma en kipfilet", desc: "Met Arabische aardappel of rijst, salademix en Syrische knoflooksaus", price: "€ 23,50" },
    ],
  },
  {
    id: "adana",
    name: "Adana kebab",
    items: [
      { name: "Broodje adana", desc: "Salademix en Syrische knoflooksaus", price: "€ 8,50" },
      { name: "Schotel adana", desc: "Arabische aardappel of rijst, salademix en Syrische knoflooksaus", price: "€ 16,00" },
    ],
  },
  {
    id: "hamburgers",
    name: "Hamburgers",
    items: [
      { name: "Kipburger", desc: "Broodje kipburger met salade en saus", price: "€ 8,00" },
      { name: "Cheese kipburger", desc: "Broodje kipburger met kaas, salade en saus", price: "€ 8,50" },
      { name: "Hamburger", desc: "Broodje hamburger en salade", price: "€ 8,50" },
      { name: "Cheeseburger", desc: "Broodje hamburger met kaas, salade en saus", price: "€ 9,00" },
    ],
  },
  {
    id: "kindermenus",
    name: "Kindermenu's",
    note: "Friet, mayonaise of appelmoes en Fristi of Chocomel",
    items: [
      { name: "Kindermenu kippenvleugels", desc: "Arabische aardappel, mayonaise, ketchup en Fristi of Chocomel", price: "€ 7,50" },
      { name: "Kindermenu döner kebab", desc: "Met Arabische aardappel, mayonaise of appelmoes en Fristi of Chocomel", price: "€ 8,50" },
      { name: "Kindermenu kipnuggets", desc: "Met Arabische aardappel, mayonaise of appelmoes en Fristi of Chocomel", price: "€ 8,50" },
      { name: "Kindermenu kipshoarma", desc: "Met Arabische aardappel, mayonaise of appelmoes en Fristi of Chocomel", price: "€ 8,50" },
      { name: "Kindermenu kalfsshoarma", desc: "Met Arabische aardappel, mayonaise of appelmoes en Fristi of Chocomel", price: "€ 9,50" },
    ],
  },
  {
    id: "frituur",
    name: "Frituur",
    items: [
      { name: "Kleine friet", price: "€ 4,50" },
      { name: "Grote friet", price: "€ 6,00" },
      { name: "Kleine Arabische aardappel", price: "€ 4,50" },
      { name: "Grote Arabische aardappel", price: "€ 6,00" },
      { name: "Kipnuggets", desc: "6 stuks", price: "€ 4,50" },
    ],
  },
  {
    id: "pizzas",
    name: "Pizza's",
    items: [
      { name: "Pizza margherita", desc: "Met tomatensaus, mozzarella en oregano", price: "€ 11,00" },
      { name: "Pizza funghi", desc: "Met tomatensaus, mozzarella, champignons en oregano", price: "€ 12,00" },
      { name: "Pizza olivio", desc: "Met tomatensaus, mozzarella, olijven en oregano", price: "€ 12,00" },
      { name: "Pizza salami", desc: "Met tomatensaus, mozzarella, salami en oregano", price: "€ 13,00" },
      { name: "Pizza calzone", desc: "Met tomatensaus, mozzarella, ham, paprika, champignons en ui", price: "€ 13,50" },
      { name: "Pizza pepperoni", desc: "Met tomatensaus, mozzarella, pikante salami en oregano", price: "€ 13,50" },
      { name: "Pizza tonno", desc: "Met tomatensaus, mozzarella, tonijn, olijven, uien en oregano", price: "€ 14,00" },
      { name: "Pizza vegetaria", desc: "Met tomatensaus, mozzarella, paprika, champignons, ui en oregano", price: "€ 14,00" },
      { name: "Pizza suczuk", desc: "Met tomatensaus, mozzarella, oregano en Syrische suczuk", price: "€ 14,50" },
      { name: "Pizza kipshoarma", desc: "Met tomatensaus, mozzarella, kipshoarma en oregano", price: "€ 14,50" },
      { name: "Pizza al pollo", desc: "Met tomatensaus, mozzarella, kipfilet en oregano", price: "€ 15,00" },
      { name: "Pizza al pollo speciaal", desc: "Met tomatensaus, mozzarella, kipfilet, paprika, champignons, ui en oregano", price: "€ 15,00" },
      { name: "Pizza kipshoarma speciaal", desc: "Met tomatensaus, mozzarella, kipshoarma, paprika, champignons, ui en oregano", price: "€ 15,00" },
      { name: "Pizza döner kebab", desc: "Met tomatensaus, mozzarella, döner kebab en oregano", price: "€ 15,00" },
      { name: "Pizza kalfsshoarma", desc: "Met tomatensaus, mozzarella, kalfsshoarma, paprika, champignons, ui en oregano", price: "€ 16,00" },
      { name: "Pizza alshami", desc: "Met tomatensaus, mozzarella, kipshoarma, paprika, champignons, ui oregano, friet, sla, tomaat en komkommer", price: "€ 16,00" },
      { name: "Pizza kalfsshoarma speciaal", desc: "Met tomatensaus, mozzarella, kalfsshoarma, paprika, champignons, ui en oregano", price: "€ 16,50" },
    ],
  },
  {
    id: "turkse-pizza",
    name: "Turkse pizza",
    items: [
      { name: "Turkse pizza met salade", price: "€ 6,50" },
      { name: "Turkse pizza met döner kebab", price: "€ 9,00" },
      { name: "Turkse pizza met kipshoarma", price: "€ 10,00" },
      { name: "Turkse pizza met kipfilet", price: "€ 10,00" },
      { name: "Turkse pizza met kalfs shoarma", price: "€ 11,00" },
    ],
  },
  {
    id: "manakeesh",
    name: "Manakeesh",
    note: "Huisgemaakt Syrisch deeg gevuld met diverse soorten toppings",
    items: [
      { name: "Manakeesh za'atar", desc: "Met een kruidenmengsel van onder andere oregano, tijm en zonnebloemolie", price: "€ 1,50" },
      { name: "Manakeesh jibneh", desc: "Met Arabische kaas", price: "€ 1,50" },
      { name: "Manakeesh kiri", desc: "Met Arabische fetakaas", price: "€ 1,50" },
      { name: "Manakeesh muhammara", desc: "Met een mengsel van paprika en Arabische kruiden", price: "€ 1,50" },
      { name: "Manakeesh spinazie", desc: "Met spinazie met granaatappel", price: "€ 1,50" },
      { name: "Manakeesh gekruide olijven", desc: "Met vermalen groene olijven", price: "€ 1,50" },
      { name: "Manakeesh kipfilet", desc: "Met Arabische gekruide kipfilet", price: "€ 2,00" },
      { name: "Manakeesh suare pizza", desc: "Mini pizza met paprika, olijven, oregano en champignons", price: "€ 2,00" },
      { name: "Manakeesh za'atar met kaas", desc: "Met kruidenmengsel en kaas", price: "€ 2,00" },
      { name: "Manakeesh muhammara met kaas", desc: "Met paprikamengsel en kaas", price: "€ 2,00" },
      { name: "Manakeesh Arabische sucuk", desc: "Met kalkoenvlees", price: "€ 2,00" },
      { name: "Manakeesh mozzarella", desc: "Met mozzarella met zwarte en witte sesam", price: "€ 2,00" },
      { name: "Manakeesh mortadella met kaas", desc: "Met Mortadella", price: "€ 2,00" },
      { name: "Manakeesh Sanfora", desc: "Met kaas, zwarte olijven en Syrische mayonaise", price: "€ 2,50" },
      { name: "Manakeesh lahma bajeen", desc: "Met gekruid gehakt en groenten", price: "€ 2,50" },
      { name: "Manakeesh Arabische sucuk met kaas", desc: "Met kalkoenvlees en kaas", price: "€ 2,50" },
      { name: "Manakeesh mozzarella met salami", desc: "Met mozzarella, kaas en salami", price: "€ 2,50" },
      { name: "Manakeesh kipfilet met kaas", desc: "Met Arabische gekruide kipfilet en kaas", price: "€ 2,50" },
      { name: "Halve kilo lahma bajeen", desc: "Met gekruid gehakt en groenten", price: "€ 25,00" },
      { name: "Kilo lahma bajeen", desc: "Met gekruid gehakt en groenten", price: "€ 45,00" },
    ],
  },
  {
    id: "zoetigheid",
    name: "Zoetigheid",
    items: [
      { name: "Baklava", desc: "6 stuks, filodeeg lagen van pistache en honing", price: "€ 7,00" },
      { name: "Layalina", desc: "Arabische koekjes", price: "€ 7,00" },
      { name: "Petit fours", desc: "7 stuks", price: "€ 7,00" },
      { name: "Arabische ice cream", desc: "1 stuk, met pistache", price: "€ 7,00" },
      { name: "Arabische zoetigheid", desc: "Mix met pistache", price: "€ 10,00" },
    ],
  },
  {
    id: "extras",
    name: "Extra's",
    items: [
      { name: "Arabisch brood", price: "€ 1,00" },
      { name: "Turks brood", price: "€ 1,00" },
      { name: "Knoflooksaus", price: "€ 1,00" },
      { name: "Sambal", price: "€ 1,00" },
      { name: "Andalousesaus", price: "€ 1,00" },
      { name: "Syrische knoflooksaus", price: "€ 1,50" },
      { name: "Bakje augurk", price: "€ 3,00" },
      { name: "Groot bakje syrische knoflooksaus", price: "€ 3,00" },
      { name: "Bakje salade", desc: "Dressing, sla, komkommer, tomaat, uitjes, wortel en augurk", price: "€ 4,50" },
      { name: "Bakje koolsalade", price: "€ 5,00" },
      { name: "Bakje rijst", price: "€ 5,00" },
    ],
  },
  {
    id: "drinken",
    name: "Drinken",
    items: [
      { name: "Ayran 250ml", price: "€ 2,50" },
      { name: "Coca-Cola Original Taste 330 ml", price: "€ 3,00" },
      { name: "Coca-Cola Zero Sugar 330 ml", price: "€ 3,00" },
      { name: "Pepsi 330ml", price: "€ 3,00" },
      { name: "Fanta Orange 330 ml", price: "€ 3,00" },
      { name: "Fanta Cassis 330 ml", price: "€ 3,00" },
      { name: "Fanta Exotic 330 ml", price: "€ 3,00" },
      { name: "Sprite Zero 330 ml", price: "€ 3,00" },
      { name: "Lipton Ice Tea Green 330ml", price: "€ 3,00" },
      { name: "Lipton Ice Tea Peach 330ml", price: "€ 3,00" },
      { name: "Lipton Ice Tea Sparkling 330ml", price: "€ 3,00" },
      { name: "Fernandes Super Pineapple 330 ml", price: "€ 3,00" },
      { name: "Fernandes Red Grape 0,33 L", price: "€ 3,00" },
      { name: "Fernandes Green Punch 330 ml", price: "€ 3,00" },
      { name: "Fernandes Cherry Bouquet 330 ml", price: "€ 3,00" },
      { name: "Chocomel 250ml", price: "€ 3,00" },
      { name: "Fristi 250ml", price: "€ 3,00" },
      { name: "Spa blauw 500ml", price: "€ 3,00" },
      { name: "AA Drink", price: "€ 3,00" },
      { name: "Red Bull Energy Drink 250ml", price: "€ 4,00" },
      { name: "Red Bull Sugar free 250ml", price: "€ 4,00" },
      { name: "Coca-Cola Original 1,5 L", price: "€ 5,00" },
    ],
  },
];

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
      <section className="py-24 md:py-32 container">
        <div className="text-center mb-16">
          <p className="text-gold-dark font-medium tracking-[0.3em] text-xs uppercase mb-4">Specialiteiten</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Onze populairste gerechten</h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item) => (
            <article key={item.name} className="group bg-card border border-border overflow-hidden hover:border-gold/50 transition-all duration-500 hover:shadow-gold">
              <div className="aspect-[4/3] overflow-hidden bg-primary">
                <img src={item.img} alt={item.name} loading="lazy" width={896} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="text-gradient-gold font-serif-display text-xl font-semibold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full menu */}
      <section id="menu" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-medium tracking-[0.3em] text-xs uppercase mb-4">Menukaart</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">De volledige kaart</h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
            {menu.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCat(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-4 py-2 text-sm font-medium border transition-all ${
                  activeCat === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-gold hover:text-gold-dark"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {menu.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="mb-8 text-center">
                  <h3 className="font-serif-display text-3xl md:text-4xl font-semibold mb-2">{cat.name}</h3>
                  {cat.note && <p className="text-muted-foreground text-sm italic">{cat.note}</p>}
                  <div className="gold-divider w-16 mx-auto mt-4" />
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline gap-4 border-b border-dashed border-border pb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-1">{item.name}</h4>
                        {item.desc && <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>}
                      </div>
                      <span className="font-serif-display text-lg text-gold-dark font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
