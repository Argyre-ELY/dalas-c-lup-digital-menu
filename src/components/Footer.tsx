import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dummyProfile } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const mainLocation = dummyProfile.locations[0];
  const whatsappLink = `https://wa.me/${mainLocation.no_wa}?text=Halo, saya ingin bertanya tentang Dalas C'lup Fried Chicken`;

  return (
    <footer className="bg-emerald-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-emerald-dark font-display font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-primary-foreground text-base leading-tight">
                  Dalas C'lup
                </span>
                <span className="text-xs text-gold font-medium tracking-wider">
                  FRIED CHICKEN
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Ayam goreng krispy gurih dan renyah dengan resep rahasia turun-temurun sejak 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-gold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/menu", label: "Daftar Menu" },
                { href: "/galeri", label: "Galeri" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-gold mb-4">Lokasi Kami</h4>
            <ul className="space-y-3">
              {dummyProfile.locations.map((location) => (
                <li key={location.id} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary-foreground text-sm font-medium block">{location.nama}</span>
                    <span className="text-primary-foreground/70 text-xs">{location.jam_operasional}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-gold mb-4">Pesan Sekarang</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Ada pertanyaan atau ingin memesan? Hubungi kami via WhatsApp!
            </p>
            <Button
              variant="gold"
              asChild
              className="w-full md:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Dalas C'lup Fried Chicken. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={dummyProfile.locations[0].maps_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-gold transition-colors text-sm flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                Lihat Semua Lokasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
