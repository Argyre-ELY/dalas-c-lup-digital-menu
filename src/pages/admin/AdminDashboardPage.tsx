import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UtensilsCrossed,
  ImageIcon,
  Settings,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Menu,
  MapPin,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { dummyMenuItems, dummyProfile, dummyGallery, formatRupiah, MenuItem, Location, GalleryItem } from "@/lib/data";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("menu");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(dummyMenuItems);
  const [locations, setLocations] = useState<Location[]>(dummyProfile.locations);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(dummyGallery);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logout Berhasil",
      description: "Anda telah keluar dari dashboard",
    });
    navigate("/admin");
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
    toast({
      title: "Menu Dihapus",
      description: "Item menu berhasil dihapus",
    });
  };

  const handleSaveItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem: MenuItem = {
      id: editingItem?.id || Date.now().toString(),
      nama: formData.get("nama") as string,
      harga: Number(formData.get("harga")),
      deskripsi: formData.get("deskripsi") as string,
      image_url: editingItem?.image_url || "/placeholder.svg",
      kategori: formData.get("kategori") as string,
    };

    if (editingItem) {
      setMenuItems(menuItems.map((item) => (item.id === editingItem.id ? newItem : item)));
      toast({ title: "Menu Diperbarui", description: "Item menu berhasil diperbarui" });
    } else {
      setMenuItems([...menuItems, newItem]);
      toast({ title: "Menu Ditambahkan", description: "Item menu baru berhasil ditambahkan" });
    }
    setIsDialogOpen(false);
    setEditingItem(null);
  };

  const handleSaveLocation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedLocation: Location = {
      id: editingLocation?.id || Date.now().toString(),
      nama: formData.get("nama") as string,
      alamat: formData.get("alamat") as string,
      no_wa: formData.get("no_wa") as string,
      no_telp: formData.get("no_telp") as string || "",
      maps_link: formData.get("maps_link") as string,
      jam_operasional: formData.get("jam_operasional") as string,
    };

    if (editingLocation) {
      setLocations(locations.map((loc) => (loc.id === editingLocation.id ? updatedLocation : loc)));
      toast({ title: "Lokasi Diperbarui", description: "Informasi lokasi berhasil diperbarui" });
    } else {
      setLocations([...locations, updatedLocation]);
      toast({ title: "Lokasi Ditambahkan", description: "Lokasi baru berhasil ditambahkan" });
    }
    setIsLocationDialogOpen(false);
    setEditingLocation(null);
  };

  const handleDeleteLocation = (id: string) => {
    setLocations(locations.filter((loc) => loc.id !== id));
    toast({
      title: "Lokasi Dihapus",
      description: "Lokasi berhasil dihapus",
    });
  };

  const sidebarItems = [
    { id: "menu", label: "Kelola Menu", icon: UtensilsCrossed },
    { id: "locations", label: "Kelola Lokasi", icon: MapPin },
    { id: "gallery", label: "Kelola Galeri", icon: ImageIcon },
    { id: "profile", label: "Profil Usaha", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-foreground text-sm leading-tight">
                  Dalas C'lup
                </span>
                <span className="text-[10px] text-gold font-medium tracking-wider">
                  ADMIN PANEL
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Keluar
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-display text-lg font-semibold text-foreground">
            {sidebarItems.find((item) => item.id === activeTab)?.label}
          </h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Lihat Website →
          </Link>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeTab === "menu" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Kelola daftar menu ayam goreng Anda
                </p>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setEditingItem(null)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Menu
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {editingItem ? "Edit Menu" : "Tambah Menu Baru"}
                      </DialogTitle>
                      <DialogDescription>
                        Isi detail menu di bawah ini
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSaveItem}>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="nama">Nama Menu</Label>
                          <Input
                            id="nama"
                            name="nama"
                            defaultValue={editingItem?.nama}
                            placeholder="contoh: Dada"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="harga">Harga (Rp)</Label>
                          <Input
                            id="harga"
                            name="harga"
                            type="number"
                            defaultValue={editingItem?.harga}
                            placeholder="contoh: 15000"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="kategori">Kategori</Label>
                          <Input
                            id="kategori"
                            name="kategori"
                            defaultValue={editingItem?.kategori}
                            placeholder="contoh: Ayam Goreng"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="deskripsi">Deskripsi</Label>
                          <Textarea
                            id="deskripsi"
                            name="deskripsi"
                            defaultValue={editingItem?.deskripsi}
                            placeholder="Deskripsi singkat menu..."
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Gambar Menu</Label>
                          {editingItem?.image_url && (
                            <div className="w-20 h-20 rounded-lg overflow-hidden border border-border">
                              <img
                                src={editingItem.image_url}
                                alt={editingItem.nama}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <Input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            disabled
                            className="cursor-not-allowed"
                          />
                          <p className="text-xs text-muted-foreground">
                            Upload gambar akan tersedia setelah koneksi Lovable Cloud
                          </p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">
                          {editingItem ? "Simpan Perubahan" : "Tambah Menu"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Gambar</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Harga</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {menuItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                              <img
                                src={item.image_url}
                                alt={item.nama}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{item.nama}</TableCell>
                          <TableCell>{item.kategori}</TableCell>
                          <TableCell className="text-gold font-semibold">
                            {formatRupiah(item.harga)}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  setEditingItem(item);
                                  setIsDialogOpen(true);
                                }}
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive"
                                onClick={() => handleDeleteItem(item.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "locations" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Kelola informasi lokasi cabang
                </p>
                <Dialog open={isLocationDialogOpen} onOpenChange={setIsLocationDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setEditingLocation(null)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Lokasi
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {editingLocation ? "Edit Lokasi" : "Tambah Lokasi Baru"}
                      </DialogTitle>
                      <DialogDescription>
                        Isi informasi lokasi cabang
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSaveLocation}>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="nama">Nama Cabang</Label>
                          <Input
                            id="nama"
                            name="nama"
                            defaultValue={editingLocation?.nama}
                            placeholder="contoh: Cabang Pusat"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="alamat">Alamat</Label>
                          <Textarea
                            id="alamat"
                            name="alamat"
                            defaultValue={editingLocation?.alamat}
                            placeholder="Alamat lengkap..."
                            rows={2}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="no_wa">Nomor WhatsApp</Label>
                          <Input
                            id="no_wa"
                            name="no_wa"
                            defaultValue={editingLocation?.no_wa}
                            placeholder="628xxxxxxxxxx"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="no_telp">Nomor Telepon</Label>
                          <Input
                            id="no_telp"
                            name="no_telp"
                            defaultValue={editingLocation?.no_telp}
                            placeholder="021-xxxxxxx"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="maps_link">Link Google Maps</Label>
                          <Input
                            id="maps_link"
                            name="maps_link"
                            defaultValue={editingLocation?.maps_link}
                            placeholder="https://maps.google.com/..."
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jam_operasional">Jam Operasional</Label>
                          <Input
                            id="jam_operasional"
                            name="jam_operasional"
                            defaultValue={editingLocation?.jam_operasional}
                            placeholder="contoh: 10:00 - 22:00"
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">
                          {editingLocation ? "Simpan Perubahan" : "Tambah Lokasi"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nama Cabang</TableHead>
                        <TableHead>Alamat</TableHead>
                        <TableHead>No. WhatsApp</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {locations.map((loc) => (
                        <TableRow key={loc.id}>
                          <TableCell className="font-medium">{loc.nama}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{loc.alamat}</TableCell>
                          <TableCell>{loc.no_wa}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  setEditingLocation(loc);
                                  setIsLocationDialogOpen(true);
                                }}
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive"
                                onClick={() => handleDeleteLocation(loc.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "gallery" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Kelola foto galeri untuk ditampilkan di website
                </p>
                <Button variant="outline" disabled>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Foto (Segera)
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden group">
                    <div className="aspect-square relative">
                      <img
                        src={item.image_url}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="icon" variant="secondary" disabled>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="destructive" disabled>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-2">
                      <p className="text-xs text-muted-foreground truncate">{item.caption}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground text-sm mt-6">
                Fitur upload & edit gambar akan tersedia setelah koneksi Lovable Cloud
              </p>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <p className="text-muted-foreground mb-6">
                Edit informasi profil usaha Anda
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Usaha</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Nama Usaha</Label>
                      <Input
                        id="businessName"
                        defaultValue={dummyProfile.nama}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat (Cabang Pusat)</Label>
                      <Textarea
                        id="address"
                        defaultValue={dummyProfile.locations[0]?.alamat}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">Nomor WhatsApp (Cabang Pusat)</Label>
                      <Input
                        id="whatsapp"
                        defaultValue={dummyProfile.locations[0]?.no_wa}
                        placeholder="628xxxxxxxxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maps">Link Google Maps (Cabang Pusat)</Label>
                      <Input
                        id="maps"
                        defaultValue={dummyProfile.locations[0]?.maps_link}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Deskripsi / Sejarah</Label>
                      <Textarea
                        id="description"
                        defaultValue={dummyProfile.deskripsi}
                        rows={4}
                      />
                    </div>
                    <Button type="button" onClick={() => toast({ title: "Tersimpan!", description: "Profil akan tersimpan setelah koneksi Supabase" })}>
                      Simpan Perubahan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
