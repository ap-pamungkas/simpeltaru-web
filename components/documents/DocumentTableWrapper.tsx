"use client";

import dynamic from "next/dynamic";

const DocumentTable = dynamic(() => import("./DocumentTable"), {
  ssr: false,
});

export default function DokumenTableWrapper() {
  return <DocumentTable />;
}
