import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// Gambar hero bisa diedit di: src/assets/hero/
import { heroChicken as heroImage } from "@/assets/hero";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ayam Goreng Dalas C'lup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/95 via-emerald-dark/80 to-emerald-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">Sejak 2015</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Kelezatan Autentik{" "}
            <span className="text-gold">Ayam Goreng</span>{" "}
            Krispy
          </h1>

          {/* Description */}
          <p
            className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Nikmati cita rasa ayam goreng krispy yang gurih dan renyah dengan resep rahasia turun-temurun. 
            Setiap gigitan adalah pengalaman kuliner yang tak terlupakan.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">
                Lihat Menu
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan Ayam Goreng Dalas C'lup`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan via WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">9+</div>
              <div className="text-primary-foreground/60 text-sm">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">50K+</div>
              <div className="text-primary-foreground/60 text-sm">Pelanggan Puas</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">100%</div>
              <div className="text-primary-foreground/60 text-sm">Bahan Segar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
