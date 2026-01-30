"use client";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icon for the main base (Broué)
const baseIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const cities = [
  { name: "Broué (Siège)", coords: [48.7492, 1.5234], isBase: true },
  { name: "Dreux", coords: [48.7366, 1.3674] },
  { name: "Chartres", coords: [48.4438, 1.4890] },
  { name: "Évreux", coords: [49.0241, 1.1508] },
  { name: "Anet", coords: [48.8556, 1.4392] },
  { name: "Nonancourt", coords: [48.7725, 1.1264] }
];

const zones = [
  { radius: 60000, color: '#ef4444', price: '70€', label: 'Zone 4 (> 40km)' }, // 65 + 5
  { radius: 40000, color: '#f97316', price: '50€', label: 'Zone 3 (< 40km)' }, // 45 + 5
  { radius: 20000, color: '#eab308', price: '30€', label: 'Zone 2 (< 20km)' }, // 25 + 5
  { radius: 5000, color: '#22c55e', price: 'Gratuit', label: 'Zone 1 (< 5km)' }   // Reste gratuit car < 5km
];

// Polygon to hide Yvelines (78)
const maskYvelines = [
  [48.7492, 1.6], // East limit point near Broué/78 border
  [49.0, 1.6],    // North-East
  [49.0, 2.0],    // Far North-East
  [48.0, 2.0],    // Far South-East
  [48.0, 1.6],    // South-East
];

export default function InterventionMap() {
  return (
    <div className="h-full w-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 z-0 relative">
      <MapContainer 
        center={[48.7492, 1.5234]} 
        zoom={9} 
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* Zones Concentriques (du plus grand au plus petit pour la superposition) */}
        {zones.map((zone, idx) => (
          <Circle 
            key={idx}
            center={[48.7492, 1.5234]}
            radius={zone.radius}
            pathOptions={{ 
              fillColor: zone.color, 
              color: zone.color, 
              weight: 1, 
              opacity: 0.8, 
              fillOpacity: 0.15 
            }}
          >
             <Popup>
              <div className="text-center">
                <div className="font-bold text-lg">{zone.price}</div>
                <div className="text-sm text-gray-600">Frais de déplacement</div>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* Masque pour cacher les Yvelines (78) */}
        <Polygon 
          positions={[
            [49.5, 1.56], // Point Nord limite 28/78
            [49.5, 3.0],  // Vers l'Est (Paris)
            [48.0, 3.0],  // Vers le Sud-Est
            [48.0, 1.56]  // Point Sud limite 28/78
          ]}
          pathOptions={{ 
            fillColor: '#0b1a2a', 
            color: '#0b1a2a', 
            weight: 2, 
            opacity: 1, 
            fillOpacity: 1
          }}
        />

        {cities.map((city, idx) => (
          <Marker 
            key={idx} 
            position={city.coords} 
            icon={city.isBase ? baseIcon : icon}
          >
            <Popup>
              <div className="font-bold">{city.name}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Légende des Tarifs */}
      <div className="absolute bottom-4 left-4 z-[400] bg-[#0b1a2a]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl space-y-2 shadow-xl max-w-[200px]">
        <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-2">Frais de déplacement</div>
        {zones.slice().reverse().map((zone, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }} />
              <span className="text-gray-300">{zone.label}</span>
            </div>
            <span className="font-bold text-white ml-2">{zone.price}</span>
          </div>
        ))}
      </div>
      
      {/* Dark mode overlay for map tiles to match site theme */}
      <style jsx global>{`
        .leaflet-layer {
          filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
        }
        .leaflet-container {
          background: #0b1a2a;
        }
      `}</style>
    </div>
  );
}
