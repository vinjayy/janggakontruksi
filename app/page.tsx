"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Shield, PenToolIcon as Tool, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import FreeOfferBanner from "@/components/free-offer-banner"
import type { JSX } from "react"

function CarouselDots({ itemCount }: { itemCount: number }) {
  const { activeIndex } = useCarousel()

  return (
    <div className="flex justify-center mt-4">
      <div className="flex gap-2">
        {Array.from({ length: itemCount }).map((_, index) => (
          <button
            key={index}
            onClick={() =>
              document
                .querySelector(`.embla__slide:nth-child(${index + 1})`)
                ?.scrollIntoView({ behavior: "smooth", inline: "center" })
            }
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-zinc-800" : "bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const services = [
    {
      title: "Kanopi",
      description:
        "Kanopi berkualitas tinggi dengan berbagai model dan bahan sesuai kebutuhan Anda. Kami menawarkan berbagai pilihan material seperti baja ringan, spandek, alderon, dan polycarbonate.",
      icon: "Home",
      image: "/kanopi.jpg?height=300&width=500&text=Kanopi",
    },
    {
      title: "Pagar",
      description:
        "Pagar kokoh dan estetik, memberikan keamanan dan keindahan untuk rumah atau bangunan Anda. Tersedia dalam berbagai model seperti pagar minimalis, klasik, dan kombinasi.",
      icon: "Shield",
      image: "/pagar.jpg?height=300&width=500&text=Pagar",
    },
    {
      title: "Pintu",
      description:
        "Pintu besi dan teralis dengan desain modern dan keamanan terjamin. Kami membuat pintu yang kokoh namun tetap memiliki nilai estetika yang tinggi.",
      icon: "Lock",
      image: "/pintu.jpg?height=300&width=500&text=Pintu",
    },
    {
      title: "Tangga",
      description:
        "Tangga besi dengan desain yang kokoh dan sesuai dengan kebutuhan bangunan Anda. Kami menawarkan berbagai model tangga seperti tangga putar, tangga lurus, dan tangga kombinasi.",
      icon: "ArrowUpDown",
      image: "/tangga.png?height=300&width=500&text=Tangga",
    },
    {
      title: "Teralis",
      description:
        "Teralis jendela dan pintu yang memberikan keamanan tambahan untuk rumah Anda dengan desain yang tetap estetis dan sesuai dengan gaya rumah Anda.",
      icon: "Grid",
      image: "/tralis.jpg?height=300&width=500&text=Teralis",
    },
    {
      title: "Konstruksi Baja WF",
      description:
        "Konstruksi baja WF untuk kebutuhan bangunan komersial dan industrial. Kami menyediakan solusi konstruksi baja yang kuat dan tahan lama.",
      icon: "Construction",
      image: "/baja.png?height=300&width=500&text=Konstruksi Baja WF",
    },
    {
      title: "Booth Container",
      description:
        "Booth container untuk kebutuhan usaha atau penyimpanan. Kami membuat booth container yang fungsional dan dapat disesuaikan dengan kebutuhan Anda.",
      icon: "Box",
      image: "/container.png?height=300&width=500&text=Booth Container",
    },
    {
      title: "Menara Toren Air",
      description:
        "Menara toren air yang kokoh dan aman untuk kebutuhan penyimpanan air di rumah atau bangunan komersial Anda.",
      icon: "Droplet",
      image: "/toren.jpg?height=300&width=500&text=Menara Toren Air",
    },
    {
      title: "Plafon PVC",
      description:
        "Plafon PVC berkualitas tinggi untuk interior rumah atau bangunan Anda. Tahan air, anti rayap, dan mudah dibersihkan.",
      icon: "Layers",
      image: "/plafon.jpg?height=300&width=500&text=Plafon PVC",
    },
  ]

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      Home: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      Shield: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      Lock: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      ArrowUpDown: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="m21 16-4 4-4-4" />
          <path d="M17 20V4" />
          <path d="m3 8 4-4 4 4" />
          <path d="M7 4v16" />
        </svg>
      ),
      Grid: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <line x1="3" x2="21" y1="9" y2="9" />
          <line x1="3" x2="21" y1="15" y2="15" />
          <line x1="9" x2="9" y1="3" y2="21" />
          <line x1="15" x2="15" y1="3" y2="21" />
        </svg>
      ),
      Construction: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      ),
      Box: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      Droplet: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      Layers: (
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
          className="h-6 w-6 text-zinc-700"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.18" />
          <path d="m22 17.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.18" />
        </svg>
      ),
    }

    return iconMap[iconName] || iconMap.Home
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Welding Sparks Background */}
        <section className="relative text-white overflow-hidden min-h-[600px] flex items-center bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="hero-1.jpg"
              alt="Welding Sparks Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          <div className="container px-4 py-16 md:py-24 mx-auto relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Jasa Kanopi & Pagar
                <br />
                Ciamis, Jawa Barat
              </h1>
              <p className="text-lg text-zinc-200 mb-8 max-w-xl">
                Kami adalah Kanopi Ciamis Official, workshop bengkel las penyedia solusi kanopi, pagar, pintu, teralis,
                railing, konstruksi baja berat/wf dan produk fabrikasi besi baja lain yang terbaik di Ciamis, Jawa
                Barat!
              </p>
              <a
                href="#survey"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-md font-medium transition-all duration-200"
              >
                Survey Gratis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Free Offer Banner */}
        <FreeOfferBanner />

        {/* Services Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Layanan Workshop Kami</h2>
              <p className="text-zinc-600 mt-2">Didukung oleh tim welder ahli dan berpengalaman untuk hasil terbaik</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-zinc-100 p-2 rounded-full">{getIcon(service.icon)}</div>
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
        <section className="py-16 bg-gradient-to-br from-zinc-50 to-zinc-100 relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
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
                <Card key={index} className="border-0 shadow-lg">
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

      {/* Gallery Carousel Section */}
<section className="py-16 bg-white relative overflow-hidden">
  <div className="container px-4 mx-auto relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Gallery Workshop</h2>
      <p className="text-zinc-600 mt-2">Lihat hasil pekerjaan kami</p>
    </div>

    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          autoplay: true,
          interval: 5000,
        }}
      >
        <CarouselContent>
          {[
            '/plafon.jpg',
            '/pagar.jpg',
            '/kanopi.jpg',
            '/gallery.jpg',
            '/baja.png',
            '/las.jpg',
          ].map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots itemCount={6} />
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious className="h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white" />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext className="h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white" />
        </div>
      </Carousel>
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-zinc-50 to-zinc-100 relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Testimoni Pelanggan</h2>
              <p className="text-zinc-600 mt-2">Apa kata pelanggan tentang layanan kami</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Budi Santoso",
                  location: "Ciamis",
                  text: "Hasil kanopi sangat memuaskan dan pemasangan cepat. Tim sangat profesional dan ramah.",
                },
                {
                  name: "Siti Rahayu",
                  location: "Tasikmalaya",
                  text: "Pagar rumah saya jadi lebih aman dan indah. Harga bersaing dengan kualitas terbaik.",
                },
                {
                  name: "Ahmad Hidayat",
                  location: "Banjar",
                  text: "Teralis jendela yang dibuat sangat kokoh dan desainnya sesuai dengan yang saya inginkan.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-zinc-600 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-zinc-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Mengapa Memilih Kami</h2>
              <p className="text-zinc-600 mt-2">Keunggulan layanan Janggajayakontruksi</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-zinc-100 p-3 rounded-full mb-4">
                    <Tool className="h-6 w-6 text-zinc-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Tim Ahli</h3>
                  <p className="text-zinc-600">
                    Didukung oleh tim welder profesional dan berpengalaman untuk hasil terbaik
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-zinc-100 p-3 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-zinc-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Kualitas Terjamin</h3>
                  <p className="text-zinc-600">Menggunakan material berkualitas tinggi dengan hasil yang tahan lama</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-zinc-100 p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-zinc-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Layanan Responsif</h3>
                  <p className="text-zinc-600">Respon cepat dan pelayanan yang ramah untuk setiap kebutuhan Anda</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-zinc-50 to-zinc-100 relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Komitmen Kami</h2>
                <p className="text-zinc-600 mb-6">
                  Janggajayakontruksi berkomitmen memberikan layanan terbaik untuk kebutuhan konstruksi pelanggan dengan
                  standar kualitas tinggi dan harga yang kompetitif.
                </p>
                <ul className="space-y-3">
                  {[
                    "Konsultasi dan estimasi gratis",
                    "Material berkualitas tinggi",
                    "Pengerjaan tepat waktu",
                    "Garansi untuk setiap pekerjaan",
                    "Layanan purna jual",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pintu.jpg?height=400&width=600"
                  alt="Komitmen Janggajayakontruksi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Photo Background */}
        <section id="survey" className="py-20 relative text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pagar.jpg?height=1080&width=1920&text=Workshop+Background"
              alt="Workshop Background"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
          </div>

          <div className="container px-4 mx-auto text-center relative z-10">
            <div className="max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Untuk Memulai Proyek Anda?</h2>
              <p className="text-lg text-zinc-200 mb-8">
                Hubungi kami sekarang untuk konsultasi gratis dan dapatkan estimasi biaya tanpa biaya tambahan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281413215200"
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
                <a
                  href="/tentang-kami#top"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Tentang Kami
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
