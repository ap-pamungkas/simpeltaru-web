"use client";

import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  image: string;
}

export default function PageBanner({ title, image }: BannerProps) {
  return (
    <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden">

      {/* Background animasi zoom + fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Judul dan Garis Bawah */}
      <div className="absolute inset-0 md:ml-30 flex flex-col items-center md:items-start justify-center">
        
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold tracking-wide mb-4 " // Ditambahkan mb-4 untuk jarak dengan garis
        >
          {title}
        </motion.h1>
        
        {/* Garis Bawah - Ditambahkan bagian ini */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "70%", opacity: 1 }} // Atur lebar garis
          transition={{ delay: 1, duration: 1 }} // Sesuaikan delay agar muncul setelah judul
          className="bg-white h-1 max-w-lg  mt-3" // Atur warna (bg-white) dan tinggi (h-1)
        />
        
      </div>
    </div>
  );
}