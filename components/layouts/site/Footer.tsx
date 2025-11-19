import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Kontak */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-white/30 pb-1">
            Kontak
          </h2>

          <p className="text-sm leading-relaxed">
            Jl. Jend. Sudirman No.9, Tengah, Kec. Delta Pawan,  
            Kabupaten Ketapang, Kalimantan Barat 78813
          </p>

          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Link Terkait */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-white/30 pb-1">
            Link Terkait
          </h2>

          <ul className="text-sm space-y-2">
            <li>Pemerintah Provinsi Kalimantan Barat</li>
            <li>Pemerintah Kabupaten Ketapang</li>
            <li>Dinas PUPR Prov. KALBAR</li>
            <li>Dinas PUPR Kabupaten Ketapang</li>
          </ul>
        </div>

        {/* Peta Lokasi */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-white/30 pb-1">
            Peta Lokasi
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.8767796140119!2d109.9767793639907!3d-1.8433793050058327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0518439f9846f3%3A0x94f8ce420e7fc17b!2sDinas%20Pekerjaan%20Umum%20dan%20Tata%20Ruang%20Kab.%20Ketapang!5e0!3m2!1sid!2sid!4v1763564837569!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm mt-10">
        Copyright © 2024 | DINAS KOMUNIKASI DAN INFORMATIKA KETAPANG
      </div>
    </footer>
  );
}
