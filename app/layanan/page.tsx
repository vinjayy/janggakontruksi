import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Shield, Lock, ArrowUpDown, Grid, Construction, Box, Droplet, Layers } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import FreeOfferBanner from "@/components/free-offer-banner"

export default function ServicesPage() {
  const services = [
    {
      title: "Kanopi",
      description:
        "Kanopi berkualitas tinggi dengan berbagai model dan bahan sesuai kebutuhan Anda. Kami menawarkan berbagai pilihan material seperti baja ringan, spandek, alderon, dan polycarbonate.",
      icon: <Home className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Kanopi",
    },
    {
      title: "Pagar",
      description:
        "Pagar kokoh dan estetik, memberikan keamanan dan keindahan untuk rumah atau bangunan Anda. Tersedia dalam berbagai model seperti pagar minimalis, klasik, dan kombinasi.",
      icon: <Shield className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Pagar",
    },
    {
      title: "Pintu",
      description:
        "Pintu besi dan teralis dengan desain modern dan keamanan terjamin. Kami membuat pintu yang kokoh namun tetap memiliki nilai estetika yang tinggi.",
      icon: <Lock className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Pintu",
    },
    {
      title: "Tangga",
      description:
        "Tangga besi dengan desain yang kokoh dan sesuai dengan kebutuhan bangunan Anda. Kami menawarkan berbagai model tangga seperti tangga putar, tangga lurus, dan tangga kombinasi.",
      icon: <ArrowUpDown className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Tangga",
    },
    {
      title: "Teralis",
      description:
        "Teralis jendela dan pintu yang memberikan keamanan tambahan untuk rumah Anda dengan desain yang tetap estetis dan sesuai dengan gaya rumah Anda.",
      icon: <Grid className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Teralis",
    },
    {
      title: "Konstruksi Baja WF",
      description:
        "Konstruksi baja WF untuk kebutuhan bangunan komersial dan industrial. Kami menyediakan solusi konstruksi baja yang kuat dan tahan lama.",
      icon: <Construction className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Konstruksi Baja WF",
    },
    {
      title: "Booth Container",
      description:
        "Booth container untuk kebutuhan usaha atau penyimpanan. Kami membuat booth container yang fungsional dan dapat disesuaikan dengan kebutuhan Anda.",
      icon: <Box className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Booth Container",
    },
    {
      title: "Menara Toren Air",
      description:
        "Menara toren air yang kokoh dan aman untuk kebutuhan penyimpanan air di rumah atau bangunan komersial Anda.",
      icon: <Droplet className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Menara Toren Air",
    },
    {
      title: "Plafon PVC",
      description:
        "Plafon PVC berkualitas tinggi untuk interior rumah atau bangunan Anda. Tahan air, anti rayap, dan mudah dibersihkan.",
      icon: <Layers className="h-6 w-6 text-zinc-700" />,
      image: "/placeholder.svg?height=300&width=500&text=Plafon PVC",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Services Header */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Layanan Workshop Bengkel Las</h1>
            <p className="max-w-2xl mx-auto text-zinc-300">
              Janggajayakontruksi menyediakan berbagai layanan konstruksi berkualitas tinggi dengan tim welder ahli dan
              berpengalaman
            </p>
          </div>
        </section>

        {/* Free Offer Banner */}
        <FreeOfferBanner />

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-zinc-100 p-2 rounded-full">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-zinc-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Proses Pengerjaan</h2>
              <p className="text-zinc-600 mt-2">Bagaimana kami bekerja untuk memberikan hasil terbaik</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Konsultasi",
                  description: "Diskusi kebutuhan dan konsultasi gratis untuk proyek Anda",
                },
                {
                  step: "2",
                  title: "Survey",
                  description: "Survey lokasi gratis untuk pengukuran dan perencanaan yang akurat",
                },
                {
                  step: "3",
                  title: "Pengerjaan",
                  description: "Proses pengerjaan oleh tim welder ahli dengan material berkualitas",
                },
                {
                  step: "4",
                  title: "Pemasangan",
                  description: "Pemasangan dan finishing dengan standar kualitas tinggi",
                },
              ].map((process, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                    <p className="text-zinc-600">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Untuk Proyek Anda?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan estimasi biaya tanpa biaya tambahan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" variant="default" />
              <Button asChild size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <a href="tel:+6281413215200">Telepon Kami</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
