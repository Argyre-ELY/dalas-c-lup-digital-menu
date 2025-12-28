import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyProfile } from "@/lib/data";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Kontak
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Lokasi Kami
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Temukan cabang Dalas C'lup Fried Chicken terdekat dari lokasi Anda
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProfile.locations.map((location, index) => {
              const whatsappLink = `https://wa.me/${location.no_wa}?text=Halo, saya ingin bertanya tentang Dalas C'lup Fried Chicken cabang ${location.nama}`;
              
              return (
                <Card
                  key={location.id}
                  className="animate-slide-up h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display">{location.nama}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Navigation className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{location.alamat}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{location.jam_operasional}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">
                          +62 {location.no_wa.slice(2, 5)}-{location.no_wa.slice(5, 9)}-{location.no_wa.slice(9)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a
                          href={location.maps_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4" />
                          Buka Maps
                        </a>
                      </Button>
                      <Button variant="whatsapp" size="sm" asChild className="flex-1">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* General WhatsApp CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-emerald to-emerald-light text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Butuh Bantuan?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Hubungi cabang pusat kami untuk informasi lebih lanjut
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a
                    href={`https://wa.me/${dummyProfile.locations[0].no_wa}?text=Halo, saya ingin bertanya tentang Dalas C'lup Fried Chicken`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
