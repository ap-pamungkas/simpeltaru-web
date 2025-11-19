"use client";
import  heroImage from '@/public/images/back.png';
import Header from "@/components/layouts/site/Header/Header";
import PageBanner from "@/components/PageBanner";
import Footer from '@/components/layouts/site/Footer';
import ComplaintForm from '@/components/complaint/ComplaintForm';

export default function Pengaduan() {
  return (
    <>
      <Header />
      <PageBanner
        title="Pengaduan"
        image={heroImage.src}
      />

      <ComplaintForm />

      <Footer/>
    </>
  );
}
