// app/peta/page.tsx
"use client";

import Footer from "@/components/layouts/site/Footer";
import Header from "@/components/layouts/site/Header/Header";

import PageBanner from "@/components/PageBanner";
import heroImage from "@/public/images/back.png";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/MapClient/MapClient"), {
  ssr: false,
});

export default function Maps() {
  return (
    <>
      <Header />
      <PageBanner title="Peta" image={heroImage.src} />

      <div className="px-4 py-10 h-auto w-full mx-auto">
        <MapClient />
      </div>

      <Footer />
    </>
  );
}
