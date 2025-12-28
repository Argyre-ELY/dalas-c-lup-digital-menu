import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MenuCard } from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { dummyMenuItems, dummyProfile } from "@/lib/data";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [gallery1, gallery2, gallery3];

const Index = () => {
  const featuredMenu = dummyMenuItems.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cita Rasa yang{" "}
              <span className="text-emerald">Tak Terlupakan</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {dummyProfile.deskripsi}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-2 block">
                Menu Favorit
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Pilihan Terbaik Kami
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/menu">
                Lihat Semua Menu
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMenu.map((item, index) => (
              <div
                key={item.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-2 block">
              Galeri
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Momen Kelezatan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Lihat suasana dan kelezatan yang kami sajikan setiap hari
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">Lihat</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/galeri">
                Lihat Semua Galeri
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Siap Menikmati Kelezatan?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Pesan sekarang dan rasakan sensasi ayam goreng krispy yang bikin ketagihan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">
                Lihat Menu Lengkap
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a
                href={`https://wa.me/${dummyProfile.no_wa}?text=Halo, saya ingin memesan Ayam Goreng Dalas C'lup`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
