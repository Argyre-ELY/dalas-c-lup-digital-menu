import { dummyGallery } from "@/lib/data";

const GalleryPage = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Galeri
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Galeri Kami
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Lihat momen-momen kelezatan dan aktivitas di Dalas C'lup Fried Chicken
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image_url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/90 via-emerald-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-foreground font-medium text-sm md:text-base">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
