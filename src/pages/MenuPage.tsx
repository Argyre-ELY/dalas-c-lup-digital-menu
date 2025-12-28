import { useState } from "react";
import { MenuCard } from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { dummyMenuItems } from "@/lib/data";

const MenuPage = () => {
  const categories = ["Semua", ...new Set(dummyMenuItems.map((item) => item.kategori))];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredMenu =
    activeCategory === "Semua"
      ? dummyMenuItems
      : dummyMenuItems.filter((item) => item.kategori === activeCategory);

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Daftar Menu
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Menu Kami
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Pilih kelezatan favoritmu dari berbagai pilihan menu ayam goreng krispy kami
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenu.map((item, index) => (
              <div
                key={item.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MenuCard item={item} />
              </div>
            ))}
          </div>

          {filteredMenu.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada menu dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ingin Memesan?
          </h2>
          <p className="text-muted-foreground mb-6">
            Hubungi kami via WhatsApp untuk pemesanan cepat dan mudah
          </p>
          <Button variant="gold" size="lg" asChild>
            <a
              href="https://wa.me/6281234567890?text=Halo, saya ingin memesan Ayam Goreng Dalas C'lup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
