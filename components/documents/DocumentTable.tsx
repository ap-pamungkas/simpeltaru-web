"use client";

import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FiEye, FiDownload, FiSearch } from "react-icons/fi";

interface DokumenType {
  id: number;
  nama: string;
  deskripsi: string;
  tanggal: string;
  file: string;
}

const data: DokumenType[] = [
  {
    id: 1,
    nama: "Dokumen RTRW",
    deskripsi: "Rencana Tata Ruang Wilayah Kabupaten",
    tanggal: "2024-12-10",
    file: "/dokumen/rtrw.pdf",
  },
  {
    id: 2,
    nama: "Dokumen RDTR",
    deskripsi: "Rencana Detail Tata Ruang",
    tanggal: "2024-11-22",
    file: "/dokumen/rdtr.pdf",
  }
];

const columns: TableColumn<DokumenType>[] = [
  {
    name: "No",
    selector: (row) => row.id,
    sortable: true,
    width: "70px",
  },
  {
    name: "Nama Dokumen",
    selector: (row) => row.nama,
    sortable: true,
  },
  {
    name: "Deskripsi",
    selector: (row) => row.deskripsi,
    wrap: true,
  },
  {
    name: "Tanggal",
    selector: (row) => row.tanggal,
    sortable: true,
    width: "140px",
  },
  {
    name: "Aksi",
    cell: (row) => (
      <div className="flex gap-4">
        <a href={row.file} target="_blank" className="text-blue-400 hover:text-blue-600">
          <FiEye size={18} />
        </a>
        <a href={row.file} download className="text-green-400 hover:text-green-600">
          <FiDownload size={18} />
        </a>
      </div>
    ),
    width: "110px",
  },
];

export default function DocumentTable() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <div className=" p-6 rounded-xl shadow-lg  ">

        {/* SEARCH INPUT */}
        <div className="flex items-center mb-4  px-4 py-2 rounded-lg border border-b-blue-950  ">
          <FiSearch size={18} className="text-neutral-400" />
          <input
            type="text"
            placeholder="Cari dokumen..."
            className="w-full bg-transparent ml-3 outline-none text-neutral-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* DATA TABLE */}
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          pointerOnHover
          striped
          responsive
          customStyles={{
            table: {
              style: {
                backgroundColor: "transparent",
              },
            },
            headRow: {
              style: {
                backgroundColor: "white",
              },
            },
            rows: {
              style: {
                backgroundColor: "#ffff",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
