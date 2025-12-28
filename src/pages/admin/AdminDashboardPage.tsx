import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UtensilsCrossed,
  ImageIcon,
  Settings,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Menu,
  X,
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
import { dummyMenuItems, dummyProfile, formatRupiah, MenuItem } from "@/lib/data";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("menu");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(dummyMenuItems);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const sidebarItems = [
    { id: "menu", label: "Kelola Menu", icon: UtensilsCrossed },
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
                        <TableHead>Nama</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Harga</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {menuItems.map((item) => (
                        <TableRow key={item.id}>
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

          {activeTab === "gallery" && (
            <div>
              <p className="text-muted-foreground mb-6">
                Kelola foto galeri untuk ditampilkan di website
              </p>
              <Card>
                <CardContent className="p-8 text-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Fitur upload galeri akan tersedia setelah koneksi Supabase
                  </p>
                  <Button variant="outline" disabled>
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Foto
                  </Button>
                </CardContent>
              </Card>
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
