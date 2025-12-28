import { Card, CardContent } from "@/components/ui/card";
import { MenuItem, formatRupiah } from "@/lib/data";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card variant="menu" className="group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image_url}
          alt={item.nama}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {item.kategori}
          </span>
        </div>
        {/* Price Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="px-4 py-2 bg-gradient-to-r from-gold to-gold-light text-emerald-dark font-bold rounded-lg shadow-gold">
            {formatRupiah(item.harga)}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {item.nama}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.deskripsi}
        </p>
      </CardContent>
    </Card>
  );
}
