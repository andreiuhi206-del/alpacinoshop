import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-italian.jpg";
import oilImg from "@/assets/product-oliveoil.jpg";
import pastaImg from "@/assets/product-pasta.jpg";
import cheeseImg from "@/assets/product-cheese.jpg";
import sauceImg from "@/assets/product-sauce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Pacino — Authentic Italian Shop" },
      { name: "description", content: "Al Pacino: an authentic Italian shop. Handpicked olive oil, pasta, cheese & sauces imported directly from Italy." },
      { property: "og:title", content: "Al Pacino — Authentic Italian Shop" },
      { property: "og:description", content: "Handpicked Italian goods, imported with love." },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Olio Extra Vergine", region: "Toscana", price: "€18", img: oilImg },
  { name: "Spaghetti Artigianali", region: "Gragnano", price: "€6", img: pastaImg },
  { name: "Parmigiano Reggiano", region: "Emilia-Romagna", price: "€24", img: cheeseImg },
  { name: "Salsa San Marzano", region: "Campania", price: "€9", img: sauceImg },
];

const reviews = [
  { name: "Sofia M.", text: "Comme en Italie. L'huile d'olive est exceptionnelle, on sent le terroir.", role: "Cliente fidèle" },
  { name: "Marco D.", text: "Le Parmigiano est affiné à la perfection. Une boutique qui respecte la tradition.", role: "Chef" },
  { name: "Élise R.", text: "Service chaleureux, produits authentiques. Mon épicerie italienne préférée.", role: "Foodie" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Tricolor bar */}
      <div className="h-1 tricolor-bar" />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold tracking-tight">Al Pacino</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">Bottega Italiana</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="hover:text-primary transition-colors">Prodotti</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Recensioni</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contatto</a>
          </div>
          <Button size="sm" asChild>
            <a href="#products">Scopri</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="w-8 h-px bg-italian-green" />
              Dal 1987 — Importato dall'Italia
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold">
              L'Italia,
              <br />
              <span className="italic font-medium text-primary">a portata</span>
              <br />
              di mano.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Une sélection rigoureuse des meilleurs producteurs italiens. Huiles, pâtes, fromages et sauces — comme à la maison.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#products">Voir les produits</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Nous contacter</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl text-foreground font-bold">37</span> ans d'expertise</div>
              <div className="w-px h-8 bg-border" />
              <div><span className="font-display text-2xl text-foreground font-bold">120+</span> producteurs</div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 tricolor-bar opacity-10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={heroImg}
                alt="Sélection de produits italiens authentiques"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl hidden md:block">
              <div className="flex items-center gap-2 text-italian-green">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">4.9/5 — 2 300 clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-italian-red mb-3">La Selezione</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Nos produits phares</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Choisis un par un, directement chez les artisans italiens.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card key={p.name} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 p-0">
                <div className="aspect-square bg-italian-cream overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.region}</div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-primary font-semibold">{p.price}</span>
                    <button className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                      Ajouter →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-italian-cream border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-italian-green mb-3">Le voci dei clienti</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Ils parlent de nous</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-8 bg-card border-border">
                <div className="flex gap-1 mb-4 text-italian-red">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-display italic text-lg leading-relaxed text-foreground mb-6">
                  "{r.text}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground text-xs">{r.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Contattaci</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Venez nous dire <span className="italic">ciao</span>.</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Une question, une commande spéciale, ou simplement envie de parler cuisine ? Nous sommes là.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4"><MapPin className="w-5 h-5 text-italian-green" /> 12 Via Roma, 75001 Paris</div>
              <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-italian-green" /> +33 1 23 45 67 89</div>
              <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-italian-green" /> ciao@alpacino.shop</div>
            </div>
            <div className="flex items-center gap-3 pt-10">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <Card className="p-8 border-border">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Marco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="vous@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Votre message..." />
              </div>
              <Button type="submit" size="lg" className="w-full">Envoyer</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display text-lg text-foreground font-bold">Al Pacino <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground ml-2">Bottega Italiana</span></div>
          <div>© {new Date().getFullYear()} — Fatto con ❤️ a Parigi</div>
        </div>
        <div className="h-1 tricolor-bar mt-8" />
      </footer>
    </div>
  );
}
