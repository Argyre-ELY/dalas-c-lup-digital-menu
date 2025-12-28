import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dummyProfile } from "@/lib/data";

const ContactPage = () => {
  const whatsappLink = `https://wa.me/${dummyProfile.no_wa}?text=Halo, saya ingin bertanya tentang Dalas C'lup Fried Chicken`;

  const contactInfo = [
    {
      icon: MapPin,
      label: "Alamat",
      value: dummyProfile.alamat,
      action: {
        label: "Buka Maps",
        href: dummyProfile.maps_link,
      },
    },
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "+62 812-3456-7890",
      action: {
        label: "Hubungi",
        href: whatsappLink,
      },
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Setiap Hari: 10:00 - 21:00 WIB",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@dalasclup.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Kontak
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Ada pertanyaan atau ingin memesan? Jangan ragu untuk menghubungi kami
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{info.value}</p>
                      {info.action && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={info.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.action.label}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-emerald to-emerald-light text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Pesan Cepat via WhatsApp
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Cara termudah untuk memesan! Klik tombol di bawah untuk langsung chat dengan kami
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Lokasi Kami
            </h2>
            <p className="text-muted-foreground">Temukan kami di Google Maps</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-card bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Peta akan ditampilkan di sini setelah integrasi
                </p>
                <Button variant="outline" asChild>
                  <a
                    href={dummyProfile.maps_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka di Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
