"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L, { Layer } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ------------------ Interfaces ------------------ */
interface Zona {
  id: number;
  nama_zonasi: string;
  file_geojson: any;
}

interface ColorMap {
  [kode: string]: string;
}

/* ------------------ MAIN COMPONENT ------------------ */

export default function MapWithSidebar() {
  // State
  const [zonas, setZonas] = useState<Zona[]>([]);
  const [colors, setColors] = useState<ColorMap>({});
  const [activeZonas, setActiveZonas] = useState<Set<number>>(new Set());
  const [mapVisible, setMapVisible] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadingTimer = useRef<NodeJS.Timeout | null>(null);

  /* ------------------ Lazy Load Map ------------------ */
  useEffect(() => {
    const wrapper = document.getElementById("map-lazy-wrapper");
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  /* ------------------ Fetch API ------------------ */
  useEffect(() => {
    async function loadData() {
      try {
        const c = await fetch(
          "https://simpeltaru.agpratech.my.id/api/colors"
        ).then((r) => r.json());
        setColors(c.colors || {});

        const z = await fetch(
          "https://simpeltaru.agpratech.my.id/api/peta-pola-ruang-rdtr"
        ).then((r) => r.json());

        setZonas(z || []);
        setActiveZonas(new Set(z.map((i: Zona) => i.id)));
      } catch (e) {
        console.error("Fetch error:", e);
      }
    }

    loadData();
  }, []);

  /* ------------------ Simulate Map Render Loading ------------------ */
  useEffect(() => {
    if (!mapVisible) return;
    loadingTimer.current = setTimeout(() => setMapLoading(false), 1000);
    return () => {
      if (loadingTimer.current) {
        clearTimeout(loadingTimer.current);
      }
    };
  }, [mapVisible]);

  /* ------------------ STYLE GEOJSON ------------------ */
  const getStyle = useCallback(
    (feature: any) => {
      const kode = feature.properties?.KODZON;
      return {
        color: "#ffffff",
        weight: 1,
        fillColor: colors[kode] || "#ccc",
        fillOpacity: 0.65,
      };
    },
    [colors]
  );

  /* ------------------ CUSTOM POPUP BUILDER ------------------ */
  const buildPopup = (props: any, mode: "min" | "compact" | "full") => {
    const title = props.NAMOBJ || props.NAMZON || "Detail Zonasi";

    const entries = Object.entries(props).filter(
      ([k]) => !["Shape_Leng", "Shape_Area"].includes(k)
    );

    const header = `
      <div style="
        background:#111827;
        padding:10px 14px;
        color:white;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #2d3748;
      ">
        <strong>${title}</strong>
        <div style="display:flex;gap:8px;">
          <button data-action="min" style="color:white;border:1px solid #444;background:#1f2937;padding:3px 8px;">—</button>
          <button data-action="toggle" style="color:white;border:1px solid #444;background:#1f2937;padding:3px 8px;">⛶</button>
          <button data-action="close" style="color:white;border:1px solid #b91c1c;background:#dc2626;padding:3px 8px;">✕</button>
        </div>
      </div>
    `;

    if (mode === "min") {
      return `<div style="background:#1a1a1a;border:2px solid #374151;min-width:260px;">${header}</div>`;
    }

    const sliced = mode === "compact" ? entries.slice(0, 8) : entries;

    const rows = sliced
      .map(
        ([k, v]) => `
        <div style="padding:6px 0;border-bottom:1px solid #333;color:white;font-size:13px;">
          <strong style="color:#9ca3af">${k}</strong>: ${v}
        </div>`
      )
      .join("");

    const footer =
      mode === "compact"
        ? `<div style="padding:8px;text-align:right;color:#60a5fa;font-size:12px;" data-action="toggle">Lihat Selengkapnya →</div>`
        : `<div style="padding:8px;text-align:center;color:#60a5fa;font-size:12px;" data-action="zoom">Zoom ke area</div>`;

    return `
      <div style="background:#1a1a1a;border:2px solid #374151;min-width:340px;max-width:460px;">
        ${header}
        <div style="padding:12px;max-height:350px;overflow-y:auto;">${rows}</div>
        ${footer}
      </div>
    `;
  };

  /* ------------------ POPUP HANDLER ------------------ */
  const onEachFeature = (feature: any, layer: Layer) => {
    const props = feature.properties;
    const state = { mode: "compact" as "min" | "compact" | "full" };

    const render = () =>
      layer.bindPopup(buildPopup(props, state.mode), { closeButton: false });

    render();

    layer.on("popupopen", (e: any) => {
      const el = e.popup.getElement();
      if (!el) return;

      const handler = (ev: any) => {
        const btn = ev.target.closest("[data-action]");
        if (!btn) return;

        const action = btn.dataset.action;

        if (action === "min") state.mode = "min";
        if (action === "toggle")
          state.mode = state.mode === "full" ? "compact" : "full";
        if (action === "close") return layer.closePopup();
        if (action === "zoom") {
          const map = (layer as any)._map || (layer as any).map;
          const bounds = (layer as any).getBounds();
          if (map && bounds) {
            map.fitBounds(bounds, { padding: [40, 40] });
          }
        }

        render();
        layer.openPopup();
      };

      el.addEventListener("click", handler);
      layer.once("popupclose", () => el.removeEventListener("click", handler));
    });
  };

  /* ------------------ RENDER ------------------ */
  return (
    <div className="relative flex h-[80vh] overflow-hidden">
      {/* Sidebar Toggle */}
      <button
        className="absolute border border-slate-500 cursor-pointer top-3.5 left-22 z-9999 bg-white px-2 py-1 shadow-lg rounded"
        onClick={() => setSidebarOpen((v) => !v)}
      >
        {sidebarOpen ? (
          <FiChevronLeft size={20} />
        ) : (
          <FiChevronRight size={20} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg p-4 border border-gray-200 h-full transition-all duration-300 z-999
        ${
          sidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <h2 className="font-semibold  text-lg mb-3">Zonasi</h2>
        <hr />

        {zonas.map((z) => (
          <div
            key={z.id}
            className="flex items-center mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            <input
              type="checkbox"
              checked={activeZonas.has(z.id)}
              onChange={() => {
                const next = new Set(activeZonas);
                next.has(z.id) ? next.delete(z.id) : next.add(z.id);
                setActiveZonas(next);
              }}
            />
            <span className="ml-2 text-sm">{z.nama_zonasi}</span>
          </div>
        ))}
      </div>

      {/* MAP */}
      <div id="map-lazy-wrapper" className="flex-1 h-full relative">
        {mapVisible ? (
          <>
            {mapLoading && (
              <div className="absolute inset-0 bg-white/70 z-[999] flex items-center justify-center">
                <div className="animate-pulse text-gray-700 font-semibold text-lg">
                  Memuat peta...
                </div>
              </div>
            )}

            <MapContainer
              center={[-1.83587, 109.97504]}
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {zonas.map((z) =>
                activeZonas.has(z.id) ? (
                  <GeoJSON
                    key={z.id}
                    data={z.file_geojson}
                    style={getStyle}
                    onEachFeature={onEachFeature}
                  />
                ) : null
              )}
            </MapContainer>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Loading map…
          </div>
        )}
      </div>
    </div>
  );
}
