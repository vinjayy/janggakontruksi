import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* About Header */}
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white py-16 relative overflow-hidden">
          <div className="container px-4 mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h1>
            <p className="max-w-2xl mx-auto text-zinc-300">
              Bengkel las terpercaya di Cirebon, Majakengka, Kuningan dan Indramayu 
              yang mengkhususkan diri dalam pembuatan dan pemasangan kanopi dan pagar berkualitas tinggi.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/hero-1.jpg?height=400&width=600"
                  alt="Janggajayakontruksi Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Sejarah Kami</h2>
                <p className="text-zinc-600 mb-4">
                Selamat datang di Jangga Jaya Kontruksi! Kami adalah perusahaan konstruksi yang 
                telah berpengalaman dalam membangun berbagai jenis proyek bangunan, mulai dari rumah tinggal, 
                gedung perkantoran, hingga proyek komersial dan industri. Dengan tim yang profesional dan 
                berkompeten, kami berkomitmen untuk memberikan hasil konstruksi yang berkualitas tinggi, aman, dan tepat waktu.
                </p>

                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/6281234400591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission */}
        <section className="py-16 bg-gradient-to-br from-zinc-50 to-zinc-100 relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Visi & Misi</h2>
              <p className="text-zinc-600 mt-2">Komitmen kami untuk memberikan layanan terbaik</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-zinc-700"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Visi</h3>
                  </div>
                  <p className="text-zinc-600">
                    Menjadi perusahaan konstruksi terkemuka yang dikenal karena kualitas, profesionalisme, dan keandalan dalam setiap proyek yang kami tangani.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-zinc-700"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Misi</h3>
                  </div>
                  <ul className="space-y-2 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Membangun infrastruktur yang berkualitas tinggi dengan memprioritaskan keselamatan dan kepuasan pelanggan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Menyediakan solusi konstruksi yang inovatif dan ramah lingkungan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Menjaga kepercayaan klien melalui penyelesaian proyek yang tepat waktu dan sesuai anggaran.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Informasi Kontak</h2>
              <p className="text-zinc-600 mt-2">Hubungi kami untuk konsultasi dan informasi lebih lanjut</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-zinc-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telepon / WhatsApp</h3>
                    <p className="text-zinc-600">0812-3440-0591</p>
                    <Button asChild className="mt-4 bg-green-600 hover:bg-green-700 w-full">
                      <a
                        href="https://wa.me/6281234400591"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hubungi via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-zinc-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-zinc-600">janggajayakontruksi@gmail.com</p>
                    <Button asChild className="mt-4 w-full">
                      <a
                        href="mailto:janggajayakontruksi@gmail.com"
                        className="mt-4 inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Kirim Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-zinc-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-zinc-600">Cabang 1 : Plumbon Kab. Cirebon</p>
                    <p className="text-zinc-600">Cabang 2 : Beber Kab. Cirebon </p>
                    <p className="text-zinc-600">	Cabang 3 : Sumber Jaya Majalengka</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-zinc-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Jam Operasional</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span>08:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sabtu</span>
                        <span>08:00 - 15:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Minggu</span>
                        <span>Tutup</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Layanan Kami</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Kanopi",
                      "Pagar",
                      "Pintu",
                      "Tangga",
                      "Teralis",
                      "Konstruksi Baja WF",
                      "Booth Container",
                      "Menara Toren Air",
                      "Plafon PVC",
                      "Servis Las Panggilan",
                      "Renovasi dan Pembangunan Properti",
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-zinc-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
