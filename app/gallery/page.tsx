import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WhatsAppButton from "@/components/whatsapp-button"

export default function GalleryPage() {
  // Sample gallery items - in a real implementation, these would come from a database or CMS
  const galleryItems = [
    { id: 1, title: "Kanopi Minimalis", category: "kanopi" },
    { id: 2, title: "Pagar Klasik", category: "pagar" },
    { id: 3, title: "Kanopi Modern", category: "kanopi" },
    { id: 4, title: "Pagar Minimalis", category: "pagar" },
    { id: 5, title: "Pintu Besi", category: "pintu" },
    { id: 6, title: "Tangga Putar", category: "tangga" },
    { id: 7, title: "Teralis Jendela", category: "teralis" },
    { id: 8, title: "Konstruksi Baja", category: "konstruksi" },
    { id: 9, title: "Booth Container", category: "booth" },
    { id: 10, title: "Menara Toren", category: "toren" },
    { id: 11, title: "Plafon PVC", category: "plafon" },
    { id: 12, title: "Workshop", category: "workshop" },
  ]

  const categories = [
    { value: "all", label: "Semua" },
    { value: "kanopi", label: "Kanopi" },
    { value: "pagar", label: "Pagar" },
    { value: "pintu", label: "Pintu" },
    { value: "tangga", label: "Tangga" },
    { value: "teralis", label: "Teralis" },
    { value: "konstruksi", label: "Konstruksi Baja" },
    { value: "booth", label: "Booth Container" },
    { value: "toren", label: "Menara Toren" },
    { value: "plafon", label: "Plafon PVC" },
    { value: "workshop", label: "Workshop" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Gallery Header */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery Workshop</h1>
            <p className="max-w-2xl mx-auto text-zinc-300">
              Lihat hasil pekerjaan kami dalam pembuatan dan pemasangan berbagai produk konstruksi berkualitas tinggi
            </p>
          </div>
        </section>

        {/* Gallery Tabs */}
        <section className="py-8 bg-white">
          <div className="container px-4 mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="h-auto p-1">
                  {categories.map((category) => (
                    <TabsTrigger key={category.value} value={category.value} className="px-4 py-2">
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryItems.map((item) => (
                    <GalleryItem key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>

              {categories.slice(1).map((category) => (
                <TabsContent key={category.value} value={category.value} className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryItems
                      .filter((item) => item.category === category.value)
                      .map((item) => (
                        <GalleryItem key={item.id} item={item} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-16 bg-zinc-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Video Workshop</h2>
              <p className="text-zinc-600 mt-2">Lihat proses pengerjaan dan hasil akhir dalam bentuk video</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <div className="aspect-video bg-zinc-200 flex items-center justify-center relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Video ${index}`}
                      alt={`Video ${index}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
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
                          className="text-zinc-900"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">
                      Proses Pengerjaan {index === 1 ? "Kanopi" : index === 2 ? "Pagar" : "Teralis"}
                    </h3>
                    <p className="text-zinc-600 text-sm mt-1">
                      Lihat bagaimana tim kami mengerjakan proyek dengan detail dan presisi
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tertarik Dengan Hasil Kerja Kami?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan estimasi biaya tanpa biaya tambahan
            </p>
            <WhatsAppButton size="lg" variant="default" />
          </div>
        </section>
      </main>
    </div>
  )
}

function GalleryItem({ item }: { item: { id: number; title: string; category: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <p className="text-zinc-300 text-sm capitalize">{item.category}</p>
      </div>
    </div>
  )
}
