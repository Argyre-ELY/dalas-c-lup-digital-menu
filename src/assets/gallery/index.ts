/**
 * Gallery Images
 * Lokasi: src/assets/gallery/
 * 
 * Untuk mengganti gambar galeri:
 * 1. Simpan gambar baru di folder ini (src/assets/gallery/)
 * 2. Ganti import di bawah dengan nama file baru
 * 3. Pastikan format gambar: .jpg, .png, atau .webp
 * 
 * Ukuran yang disarankan: 800x600 pixels (rasio 4:3)
 */

import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";

export { gallery1, gallery2, gallery3 };

// Array untuk kemudahan penggunaan
export const galleryImages = [gallery1, gallery2, gallery3];

// Untuk menambah foto galeri baru:
// 1. Tambahkan gambar ke folder ini
// 2. Import: import gallery4 from "./gallery-4.jpg";
// 3. Tambahkan ke export dan array galleryImages
