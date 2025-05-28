import Link from "next/link"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-400 relative overflow-hidden">
      <div className="container px-4 py-12 mx-auto relative z-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Jangga Jaya Kontruksi</h3>
            <p className="mb-4">
            Kami adalah Jangga Jaya Kontruksi Official, workshop bengkel las penyedia solusi kanopi, 
            pagar, pintu, teralis, railing, konstruksi baja berat/wf dan produk fabrikasi besi baja 
            lain yang terbaik di Cirebon, Majalengka, Kuningan dan Indramayu Jawa Barat
            </p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Cabang 1 : Plumbon Kab. Cirebon</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Cabang 2 : Beber Kab. Cirebon</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Cabang 3 : Sumber Jaya Majalengka</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-green-500" />
              <span>0812-3440-0591</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-500" />
              <span>janggajayakontruksi@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-2 grid grid-cols-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Instagram : @janggajaya_kontruksi
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Facebook : @bam.nata
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Twitter : @janggajayakontruksi
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Youtube : @janggajayakontruksi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Jam Operasional</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Senin - Jumat: 08:00 - 17:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Sabtu: 08:00 - 15:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Minggu: Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Janggajayakontruksi. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
