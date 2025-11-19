"use client";

export default function ComplaintForm() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-xl ">
        <h2 className="text-3xl  mb-6 text-[#111827]">
          Form Pengaduan
        </h2>
        <hr className="text-slate-300" />

        <form className="space-y-6 mt-6">

          {/* Row 1 : Nama - Email - Telepon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nama Lengkap */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1 text-[#111827]">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1 text-[#111827]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="border  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email"
              />
            </div>

            {/* No Telepon */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1 text-[#111827]">
                No Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="border border-[#111827] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nomor telepon"
              />
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label className="font-semibold mb-1 text-[#111827]">
              Alamat <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              className="w-full border border-[#111827] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan alamat lengkap"
            ></textarea>
          </div>

          {/* Isi Pengaduan */}
          <div>
            <label className="font-semibold mb-1 text-[#111827]">
              Isi Pengaduan <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="w-full border border-[#111827] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tuliskan isi pengaduan anda"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="cursor-pointer px-6 py-2 ml-[78%] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
          >
            Kirim Pengaduan
          </button>

        </form>
      </div>
    </div>
  );
}
