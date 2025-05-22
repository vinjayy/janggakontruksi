import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Contact Header */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="max-w-2xl mx-auto text-zinc-300">
              Hubungi kami untuk konsultasi gratis dan dapatkan estimasi biaya tanpa biaya tambahan
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
                <p className="text-zinc-600 mb-8">
                  Silahkan hubungi kami melalui WhatsApp, telepon, atau isi formulir di samping untuk mendapatkan
                  informasi lebih lanjut tentang layanan kami.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-zinc-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-zinc-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telepon / WhatsApp</h3>
                        <p className="text-zinc-600">+62 81413215200</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-zinc-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-zinc-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-zinc-600">info@janggajayakontruksi.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-zinc-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-zinc-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Alamat</h3>
                        <p className="text-zinc-600">Jl. Raya Ciamis, Ciamis, Jawa Barat</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-zinc-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-zinc-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Jam Operasional</h3>
                        <p className="text-zinc-600">Senin - Sabtu: 08:00 - 17:00</p>
                        <p className="text-zinc-600">Minggu: Tutup</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <WhatsAppButton size="lg" variant="default" />
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                    <form className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Masukkan email Anda" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input id="phone" placeholder="Masukkan nomor telepon Anda" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="service">Layanan yang Dibutuhkan</Label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Pilih layanan</option>
                          <option value="kanopi">Kanopi</option>
                          <option value="pagar">Pagar</option>
                          <option value="pintu">Pintu</option>
                          <option value="tangga">Tangga</option>
                          <option value="teralis">Teralis</option>
                          <option value="konstruksi">Konstruksi Baja WF</option>
                          <option value="booth">Booth Container</option>
                          <option value="toren">Menara Toren Air</option>
                          <option value="plafon">Plafon PVC</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Pesan</Label>
                        <Textarea id="message" placeholder="Tuliskan pesan atau pertanyaan Anda" rows={5} />
                      </div>
                      <Button type="submit" className="w-full">
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Lokasi Kami</h2>
              <p className="text-zinc-600 mt-2">Kunjungi workshop kami di Ciamis, Jawa Barat</p>
            </div>

            <div className="aspect-video bg-zinc-200 rounded-lg flex items-center justify-center">
              <p className="text-zinc-500">Peta Lokasi Workshop</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
