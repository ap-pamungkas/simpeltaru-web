import heroImage from "@/public/images/back.png";
import Header from "@/components/layouts/site/Header/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/layouts/site/Footer";
import DokumenTableWrapper from "@/components/documents/DocumentTableWrapper";


export default function Dokumen() {
  return (
    <>
      <Header />
      <PageBanner title="Dokumen" image={heroImage.src} />
      <DokumenTableWrapper />
      <Footer />
    </>
  );
}
