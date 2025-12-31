/**
 * ========================================
 * ASSET MANAGEMENT - Dalas C'lup Fried Chicken
 * ========================================
 * 
 * Struktur folder assets:
 * 
 * src/assets/
 * ├── index.ts          ← File ini (entry point)
 * ├── menu/             ← Gambar-gambar menu
 * │   ├── index.ts      ← Export semua gambar menu
 * │   ├── dada.jpg
 * │   ├── paha.jpg
 * │   ├── sayap.jpg
 * │   └── paha-bawah.jpg
 * │
 * ├── gallery/          ← Gambar-gambar galeri
 * │   ├── index.ts      ← Export semua gambar galeri
 * │   ├── gallery-1.jpg
 * │   ├── gallery-2.jpg
 * │   └── gallery-3.jpg
 * │
 * └── hero/             ← Gambar hero/banner
 *     ├── index.ts      ← Export gambar hero
 *     └── hero-chicken.jpg
 * 
 * ========================================
 * CARA MENGGANTI GAMBAR:
 * ========================================
 * 
 * 1. Buka folder yang sesuai (menu/, gallery/, atau hero/)
 * 2. Ganti file gambar dengan gambar baru (nama harus sama)
 *    ATAU tambahkan file baru dan update index.ts di folder tersebut
 * 
 * ========================================
 * CARA DOWNLOAD GAMBAR UNTUK DIEDIT:
 * ========================================
 * 
 * Via Lovable:
 * - Klik pada file gambar di panel kiri
 * - Gambar akan terbuka, klik kanan → Save Image As
 * 
 * Via GitHub (jika sudah terhubung):
 * - Buka repository → src/assets/[folder]
 * - Klik file gambar → Download
 * 
 * ========================================
 */

// Re-export semua assets dari subfolder
export * from "./menu";
export * from "./gallery";
export * from "./hero";

// Export individual untuk backward compatibility
export { menuDada, menuPaha, menuSayap, menuPahaBawah } from "./menu";
export { gallery1, gallery2, gallery3, galleryImages } from "./gallery";
export { heroChicken } from "./hero";
