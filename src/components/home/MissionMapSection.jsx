import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Polyline, Marker, Popup, CircleMarker } from 'react-leaflet';
import { Satellite, MapPin, Navigation, Activity } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';
import 'leaflet/dist/leaflet.css';

// Mission trajectory data (planned flight path)
const trajectoryPath = [
  [52.237049, 21.017532], // Warsaw (Launch Site)
  [52.520008, 13.404954], // Berlin
  [48.856614, 2.352222],  // Paris
  [51.507351, -0.127758], // London
  [52.237049, 21.017532], // Back to Warsaw
];

const missionPhases = [
  {
    id: 1,
    position: [52.237049, 21.017532],
    title: "Launch Site",
    titlePl: "Miejsce Startu",
    description: "Warsaw, Poland - ESA CanSat Competition 2026",
    descriptionPl: "Warszawa, Polska - Konkurs ESA CanSat 2026",
    status: "upcoming",
    altitude: "0 km",
    phase: "Pre-Launch"
  },
  {
    id: 2,
    position: [52.520008, 13.404954],
    title: "Ascent Phase",
    titlePl: "Faza Wznoszenia",
    description: "Rocket carries CanSat to deployment altitude",
    descriptionPl: "Rakieta niesie CanSat na wysokość uwolnienia",
    status: "upcoming",
    altitude: "1 km",
    phase: "Ascent"
  },
  {
    id: 3,
    position: [48.856614, 2.352222],
    title: "Deployment",
    titlePl: "Uwolnienie",
    description: "CanSat released - Parachute deployment",
    descriptionPl: "Uwolnienie CanSat - Rozwinięcie spadochronu",
    status: "upcoming",
    altitude: "1 km",
    phase: "Deployment"
  },
  {
    id: 4,
    position: [51.507351, -0.127758],
    title: "Data Collection",
    titlePl: "Zbieranie Danych",
    description: "Active muon detection during descent",
    descriptionPl: "Aktywne wykrywanie mionów podczas opadania",
    status: "upcoming",
    altitude: "0.5 km",
    phase: "Science"
  },
  {
    id: 5,
    position: [52.237049, 21.017532],
    title: "Landing & Recovery",
    titlePl: "Lądowanie i Odzyskanie",
    description: "Safe landing and data retrieval",
    descriptionPl: "Bezpieczne lądowanie i odzyskanie danych",
    status: "upcoming",
    altitude: "0 km",
    phase: "Recovery"
  }
];

const PhaseMarker = ({ phase, language }) => {
  const getStatusColor = () => {
    switch (phase.status) {
      case 'completed':
        return '#10b981';
      case 'active':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <CircleMarker
      center={phase.position}
      radius={8}
      pathOptions={{
        fillColor: getStatusColor(),
        fillOpacity: 0.8,
        color: '#fff',
        weight: 2
      }}
    >
      <Popup className="custom-popup">
        <div className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <h3 className="font-semibold text-sm">
              {language === 'pl' ? phase.titlePl : phase.title}
            </h3>
          </div>
          <p className="text-xs text-gray-600 mb-2">
            {language === 'pl' ? phase.descriptionPl : phase.description}
          </p>
          <div className="flex gap-3 text-xs">
            <span className="text-gray-500">
              <strong>Altitude:</strong> {phase.altitude}
            </span>
            <span className="text-gray-500">
              <strong>Phase:</strong> {phase.phase}
            </span>
          </div>
        </div>
      </Popup>
    </CircleMarker>
  );
};

export default function MissionMapSection() {
  const { language } = useLanguage();
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Force map re-render on mount to fix display issues
    const timer = setTimeout(() => setMapKey(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {language === 'pl' ? 'Trajektoria Misji' : 'Mission Trajectory'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {language === 'pl' ? 'Mapa Lotu' : 'Flight Path'}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {language === 'pl' 
              ? 'Planowana trajektoria lotu EYBERS-1 z kluczowymi fazami misji i punktami zbierania danych.'
              : 'Planned EYBERS-1 flight trajectory with key mission phases and data collection points.'}
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="border border-white/20 bg-white/[0.02] backdrop-blur-sm overflow-hidden rounded-lg">
            <div className="h-[600px] relative">
              <MapContainer
                key={mapKey}
                center={[51.5, 10.5]}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
                className="z-10"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                
                {/* Flight Path */}
                <Polyline
                  positions={trajectoryPath}
                  pathOptions={{
                    color: '#3b82f6',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 10'
                  }}
                />

                {/* Mission Phases */}
                {missionPhases.map(phase => (
                  <PhaseMarker key={phase.id} phase={phase} language={language} />
                ))}
              </MapContainer>

              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Satellite className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <p className="text-white text-lg font-semibold">~1 km</p>
                    <p className="text-white/50 text-xs">{language === 'pl' ? 'Max Wysokość' : 'Max Altitude'}</p>
                  </div>
                  <div>
                    <Navigation className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <p className="text-white text-lg font-semibold">~5 min</p>
                    <p className="text-white/50 text-xs">{language === 'pl' ? 'Czas Lotu' : 'Flight Time'}</p>
                  </div>
                  <div>
                    <Activity className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <p className="text-white text-lg font-semibold">5</p>
                    <p className="text-white/50 text-xs">{language === 'pl' ? 'Fazy' : 'Phases'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-white/70">{language === 'pl' ? 'Planowana Trasa' : 'Planned Route'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span className="text-white/70">{language === 'pl' ? 'Faza Misji' : 'Mission Phase'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-white/70">{language === 'pl' ? 'Ukończone' : 'Completed'}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .leaflet-container {
          background: transparent;
        }
        .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .leaflet-popup-content {
          margin: 0;
          color: white;
        }
        .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.95);
        }
      `}</style>
    </section>
  );
}