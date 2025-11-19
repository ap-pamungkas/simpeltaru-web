export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#0a1a2a]">
      <div className="relative w-20 h-20">
        {/* Lingkaran dasar */}
        <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>

        {/* Animasi titik berputar */}
        <div className="absolute inset-0 animate-spin">
          <div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
