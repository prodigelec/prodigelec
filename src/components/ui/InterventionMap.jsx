"use client";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
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

// Custom polygon to exclude Yvelines (78)
const interventionZone = [
  [49.05, 1.15], // North-West (Above Evreux)
  [48.95, 1.35], // North (Between Evreux/Anet)
  [48.90, 1.48], // North-East (Near Anet)
  [48.78, 1.54], // East (Just East of Broué, strictly stopping before 78)
  [48.55, 1.55], // South-East (East of Chartres)
  [48.40, 1.50], // South (Below Chartres)
  [48.40, 1.35], // South-West
  [48.65, 1.10], // West (Below Nonancourt)
  [48.90, 1.05], // West (Above Nonancourt)
];

export default function InterventionMap() {
  return (
    <div className="h-full w-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 z-0 relative">
      <MapContainer 
        center={[48.7492, 1.45]} 
        zoom={9} 
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* Custom Zone Polygon */}
        <Polygon 
          positions={interventionZone}
          pathOptions={{ 
            fillColor: '#06b6d4', 
            color: '#06b6d4', 
            weight: 2, 
            opacity: 1, 
            fillOpacity: 0.15,
            dashArray: '5, 10'
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
      
      {/* Dark mode overlay for map tiles to match site theme */}
      <style jsx global>{`
        .leaflet-layer {
          filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
        }
        .leaflet-container {
          background: #020617;
        }
      `}</style>
    </div>
  );
}
