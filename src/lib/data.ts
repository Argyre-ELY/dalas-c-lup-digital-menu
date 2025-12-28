// Dummy data for development - will be replaced with Supabase data

import menuDada from "@/assets/menu-dada.jpg";
import menuPaha from "@/assets/menu-paha.jpg";
import menuSayap from "@/assets/menu-sayap.jpg";
import menuPahaBawah from "@/assets/menu-paha-bawah.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export interface MenuItem {
  id: string;
  nama: string;
  harga: number;
  deskripsi: string;
  image_url: string;
  kategori: string;
}

export interface Location {
  id: string;
  nama: string;
  alamat: string;
  no_wa: string;
  maps_link: string;
  jam_operasional: string;
}

export interface Profile {
  nama: string;
  deskripsi: string;
  locations: Location[];
}

export interface GalleryItem {
  id: string;
  image_url: string;
  caption: string;
}

export const dummyProfile: Profile = {
  nama: "Dalas C'lup Fried Chicken",
  deskripsi: "Berdiri sejak tahun 2015, Dalas C'lup Fried Chicken hadir untuk memenuhi hasrat pecinta ayam goreng krispy yang gurih dan renyah. Dengan resep rahasia turun-temurun dan bahan-bahan berkualitas pilihan, kami berkomitmen menyajikan kelezatan autentik yang tak terlupakan. Setiap potong ayam digoreng dengan sempurna hingga berwarna keemasan, renyah di luar dan juicy di dalam.",
  locations: [
    {
      id: "1",
      nama: "Cabang Pusat - Sukamaju",
      alamat: "Jl. Raya Utama No. 123, Kelurahan Sukamaju, Kecamatan Bahagia, Kota Sejahtera 12345",
      no_wa: "6281234567890",
      maps_link: "https://maps.google.com/?q=-6.2088,106.8456",
      jam_operasional: "Setiap Hari: 10:00 - 21:00 WIB",
    },
    {
      id: "2",
      nama: "Cabang Merdeka",
      alamat: "Jl. Merdeka Raya No. 45, Kelurahan Jaya, Kecamatan Makmur, Kota Sejahtera 12346",
      no_wa: "6281234567891",
      maps_link: "https://maps.google.com/?q=-6.2100,106.8500",
      jam_operasional: "Setiap Hari: 09:00 - 22:00 WIB",
    },
    {
      id: "3",
      nama: "Cabang Mall Central",
      alamat: "Mall Central Plaza Lt. 3, Food Court Area, Jl. Sudirman No. 88, Kota Sejahtera 12347",
      no_wa: "6281234567892",
      maps_link: "https://maps.google.com/?q=-6.2050,106.8400",
      jam_operasional: "Setiap Hari: 10:00 - 22:00 WIB",
    },
  ],
};

export const dummyMenuItems: MenuItem[] = [
  {
    id: "1",
    nama: "Dada",
    harga: 15000,
    deskripsi: "Potongan dada ayam dengan daging tebal dan juicy, dibalut tepung krispy gurih. Favorit pelanggan!",
    image_url: menuDada,
    kategori: "Ayam Goreng",
  },
  {
    id: "2",
    nama: "Paha Atas",
    harga: 14000,
    deskripsi: "Potongan paha atas dengan daging lembut dan kulit krispy yang sempurna. Porsi mengenyangkan.",
    image_url: menuPaha,
    kategori: "Ayam Goreng",
  },
  {
    id: "3",
    nama: "Paha Bawah",
    harga: 13000,
    deskripsi: "Potongan paha bawah dengan tulang yang mudah digenggam. Cocok untuk anak-anak dan dewasa.",
    image_url: menuPahaBawah,
    kategori: "Ayam Goreng",
  },
  {
    id: "4",
    nama: "Sayap",
    harga: 10000,
    deskripsi: "Sayap ayam krispy yang gurih, sempurna untuk camilan atau pelengkap makan siang.",
    image_url: menuSayap,
    kategori: "Ayam Goreng",
  },
  {
    id: "6",
    nama: "Paket Hemat 1",
    harga: 20000,
    deskripsi: "1 potong ayam (bebas pilih) + Nasi + Es Teh Manis. Paket ekonomis untuk makan sendiri.",
    image_url: menuDada,
    kategori: "Paket",
  },
  {
    id: "7",
    nama: "Paket Keluarga",
    harga: 75000,
    deskripsi: "5 potong ayam campur + 5 Nasi + 5 Es Teh. Cocok untuk makan bersama keluarga tercinta.",
    image_url: menuPaha,
    kategori: "Paket",
  },
  {
  id: "5",
    nama: "Bakakak",
    harga: 75000,
    deskripsi: "1 Ekor ayam utuh yang dilumuri bumbu, daging nya juicy dan kulit nya yg garing.",
    image_url: Bakakak,
    kategori: "Ayam Goreng",
  }
];

export const dummyGallery: GalleryItem[] = [
  {
    id: "1",
    image_url: gallery1,
    caption: "Ayam goreng dengan nasi hangat dan sambal pedas",
  },
  {
    id: "2",
    image_url: gallery2,
    caption: "Dapur bersih dan higienis kami",
  },
  {
    id: "3",
    image_url: gallery3,
    caption: "Pelanggan setia kami yang bahagia",
  },
];

export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
