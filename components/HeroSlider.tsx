"use client";
import  heroImage from '@/public/images/back.png';
import  heroImage2 from '@/public/images/back2.jpg';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
 heroImage.src,
  heroImage2.src,
  heroImage.src
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 detik ganti gambar

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Teks animasi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h3 className="text-2xl md:text-3xl">Selamat Datang Di</h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          SIMPELTARU KETAPANG
        </h1>
        <p className="text-lg md:text-2xl mt-3">
          Sistem Informasi Pelayanan Tata Ruang Kabupaten Ketapang
        </p>
      </motion.div>
    </div>
  );
}
