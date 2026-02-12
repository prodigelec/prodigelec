"use client";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect, useCallback } from 'react';
import { Search, MapPin, Calculator, Trash2 } from 'lucide-react';

const BROUE_COORDS = [48.7492, 1.5234];
const MAP_CENTER = [48.74, 1.34];

const zones = [
  { radius: 60500, color: '#ef4444', label: 'Zone 4', price: '70€' },
  { radius: 40500, color: '#f97316', label: 'Zone 3', price: '50€' },
  { radius: 20500, color: '#3b82f6', label: 'Zone 2', price: '30€' },
  { radius: 5500, color: '#22c55e', label: 'Zone 1', price: 'Gratuit' }
];

const cities = [
  { name: "Broué", coords: BROUE_COORDS, isBase: true },
  { name: "Évreux", coords: [49.0238, 1.1508], isBase: false },
  { name: "Vernon", coords: [49.0917, 1.4883], isBase: false },
  { name: "Dreux", coords: [48.7303, 1.3664], isBase: false },
  { name: "Chartres", coords: [48.4438, 1.4891], isBase: false }
];

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function InterventionMap() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [mapCenter, setMapCenter] = useState(MAP_CENTER);
  const [mapZoom, setMapZoom] = useState(9);
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    // Only initialize on client side
    const initMap = async () => {
      try {
        const L = (await import('leaflet')).default;

        // Fix default icon issues
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        setIcons({
          default: new L.Icon.Default(),
          base: new L.Icon({
            iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          partner: new L.Icon({
            iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        });

        setMounted(true);
      } catch (e) {
        console.error("Map initialization error:", e);
      }
    };

    initMap();
  }, []);

  const fetchPlaces = useCallback(async (query, limit = 5) => {
    const trimmed = query.trim();
    if (trimmed.length < 3) {
      return [];
    }
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(trimmed)}&countrycodes=fr&limit=${limit}`
    );
    return response.json();
  }, []);

  useEffect(() => {
    let isActive = true;
    const fetchSuggestions = async () => {
      try {
        const data = await fetchPlaces(searchQuery, 5);
        if (isActive) {
          setSuggestions(data);
        }
      } catch (error) {
        if (isActive) {
          setSuggestions([]);
        }
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [searchQuery, fetchPlaces]);

  const calculatePrice = (distanceKm) => {
    if (distanceKm <= 5.5) return "Gratuit";
    if (distanceKm <= 20.5) return "30€";
    if (distanceKm <= 40.5) return "50€";
    if (distanceKm <= 60.5) return "70€";
    return "Sur devis (> 60km)";
  };

  const handleSelection = (city) => {
    const lat = parseFloat(city.lat);
    const lon = parseFloat(city.lon);
    const coords = [lat, lon];

    // Calculate distance Haversine
    const R = 6371;
    const dLat = (lat - BROUE_COORDS[0]) * Math.PI / 180;
    const dLon = (lon - BROUE_COORDS[1]) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(BROUE_COORDS[0] * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    setResult({
      name: city.display_name.split(',')[0],
      distance: distance.toFixed(1),
      price: calculatePrice(distance),
      coords: coords
    });

    setMapCenter(coords);
    setMapZoom(9);
    setSuggestions([]);
    setSearchQuery(city.display_name.split(',')[0]);
  };

  const handleClear = () => {
    setResult(null);
    setSearchQuery("");
    setSuggestions([]);
    setMapCenter(MAP_CENTER);
    setMapZoom(9);
    setIsSearching(false);
  };

  const handleSearch = async () => {
    if (isSearching) return;
    setIsSearching(true);
    try {
      const data = await fetchPlaces(searchQuery, 1);
      if (data.length > 0) {
        handleSelection(data[0]);
      } else {
        setResult(null);
        setSuggestions([]);
      }
    } catch (error) {
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  };

  if (!mounted || !icons) return (
    <div className="h-full w-full min-h-[500px] rounded-3xl bg-white/5 animate-pulse" />
  );

  return (
    <div className="flex flex-col gap-6 w-full h-full min-h-[600px]">
      {/* City Search Bar with Autocomplete */}
      <div className="bg-[#0b1a2a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl relative z-0">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1 flex items-center gap-2">
          <Calculator className="w-3 h-3 text-primary" /> Calculez vos frais de déplacement
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
            <input
              type="text"
              placeholder="Entrez votre ville (ex: Dreux, Chartres...)"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-10 text-sm text-white focus:outline-none focus:border-primary/50 transition-all shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
            <button
              type="button"
              onClick={handleSearch}
              disabled={isSearching || searchQuery.trim().length < 3}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-primary/15 hover:bg-primary/25 text-primary transition-all flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </button>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d1f32] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
                {suggestions.map((city, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelection(city)}
                    className="w-full text-left px-5 py-3 hover:bg-primary/10 text-gray-300 hover:text-white transition-colors border-b border-white/5 last:border-0 flex items-center gap-3"
                  >
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm truncate">{city.display_name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center text-xs text-gray-500 font-medium px-2 italic">
            Calculez vos frais de déplacement instantanément
          </div>
        </div>

        {result && (
          <div className="mt-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-white font-bold">{result.name}</div>
                <div className="text-xs text-gray-400">{result.distance} km de Broué</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Frais de déplacement</div>
                <div className="text-2xl font-black text-primary leading-none mt-1">{result.price}</div>
              </div>
              <button
                onClick={handleClear}
                className="w-8 h-8 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition-colors"
                title="Effacer le calcul"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Map Implementation */}
      <div className="relative flex-1 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
        {/* Floating Zones Badge */}
        <div className="absolute top-3 left-3 z-10 bg-[#0b1a2a]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-help">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-white uppercase tracking-tight">Zones d&apos;intervention (27 & 28)</span>
        </div>

        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          className="h-full w-full z-0"
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          minZoom={9}
          maxZoom={9}
        >
          <ChangeView center={mapCenter} zoom={mapZoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            eventHandlers={{
              add: (e) => {
                const layer = e.target;
                if (layer._container) {
                  layer._container.style.filter = 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';
                }
              }
            }}
          />

          {zones.map((zone, idx) => (
            <Circle
              key={`zone-${idx}`}
              center={BROUE_COORDS}
              radius={zone.radius}
              pathOptions={{
                fillColor: zone.color,
                color: zone.color,
                weight: 1,
                opacity: 0.8,
                fillOpacity: 0.12
              }}
            />
          ))}

          <Polygon
            positions={[[51.0, 1.56], [51.0, 10.0], [46.0, 10.0], [46.0, 1.56]]}
            pathOptions={{ fillColor: '#0b1a2a', color: 'transparent', weight: 0, fillOpacity: 0.85 }}
          />

          {cities.map((city, idx) => (
            <Marker
              key={`city-${idx}`}
              position={city.coords}
              icon={city.isBase ? icons.base : icons.partner}
            >
              <Popup><div className="font-bold text-slate-900">{city.name}</div></Popup>
            </Marker>
          ))}

          {result && (
            <Marker position={result.coords} icon={icons.default}>
              <Popup><div className="font-bold text-slate-900">{result.name}</div></Popup>
            </Marker>
          )}
        </MapContainer>

        {/* Legend Overlay - Visible only on Desktop */}
        <div className="absolute bottom-4 left-4 z-[500] bg-[#0b1a2a]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl max-w-[200px] hidden sm:block">
          <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2 flex items-center gap-2">
            <Calculator className="w-3 h-3 text-primary" /> Tarifs Déplacement
          </div>
          <div className="space-y-2">
            {zones.slice().reverse().map((zone, idx) => (
              <div key={idx} className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: zone.color }} />
                  <span className="text-gray-400">{zone.label}</span>
                </div>
                <span className="font-bold text-white ml-2">{zone.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
