import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Gauge, Battery, Navigation2, Radio } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const MetricCard = ({ icon: Icon, label, value, unit, color, delay, trend }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg bg-${color}-500/10 border border-${color}-500/30 flex items-center justify-center`}>
          <Icon className={`w-5 h-5 text-${color}-400`} />
        </div>
        {trend && (
          <span className={`text-xs px-2 py-1 rounded ${trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      <div className="mb-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-light text-white">{value}</span>
          <span className="text-sm text-white/50">{unit}</span>
        </div>
      </div>
      <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const ProgressBar = ({ label, value, max, color, delay }) => {
  const percentage = (value / max) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="text-white font-mono">{value.toFixed(1)} / {max}</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400 rounded-full`}
        />
      </div>
    </motion.div>
  );
};

export default function TelemetrySection() {
  const { language } = useLanguage();
  const [telemetry, setTelemetry] = useState({
    altitude: 850,
    velocity: 12.4,
    temperature: -18.5,
    pressure: 850,
    battery: 87.3,
    signalStrength: 92
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        altitude: prev.altitude + (Math.random() - 0.5) * 10,
        velocity: Math.max(0, prev.velocity + (Math.random() - 0.5) * 0.5),
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        pressure: Math.max(0, prev.pressure + (Math.random() - 0.5) * 5),
        battery: Math.max(0, Math.min(100, prev.battery - 0.05)),
        signalStrength: Math.max(0, Math.min(100, prev.signalStrength + (Math.random() - 0.5) * 5))
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const t = language === 'pl' ? {
    sectionTitle: 'Dane na Żywo',
    heading: 'Telemetria Satelity',
    description: 'Symulowane dane telemetryczne w czasie rzeczywistym dla EYBERS-1. Monitorowanie kluczowych parametrów misji i stanu satelity.',
    metrics: {
      altitude: 'Wysokość',
      velocity: 'Prędkość',
      temperature: 'Temperatura',
      pressure: 'Ciśnienie',
      battery: 'Bateria',
      signal: 'Siła Sygnału'
    },
    systems: {
      title: 'Stan Systemów',
      power: 'Zasilanie',
      comms: 'Komunikacja',
      sensors: 'Sensory'
    },
    status: 'Status: Symulacja'
  } : {
    sectionTitle: 'Live Data',
    heading: 'Satellite Telemetry',
    description: 'Real-time simulated telemetry data for EYBERS-1. Monitoring key mission parameters and satellite health.',
    metrics: {
      altitude: 'Altitude',
      velocity: 'Velocity',
      temperature: 'Temperature',
      pressure: 'Pressure',
      battery: 'Battery',
      signal: 'Signal Strength'
    },
    systems: {
      title: 'System Health',
      power: 'Power',
      comms: 'Communications',
      sensors: 'Sensors'
    },
    status: 'Status: Simulation'
  };

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
            {t.sectionTitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t.heading}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-xs text-blue-400 font-mono">{t.status}</span>
          </div>
        </motion.div>

        {/* Telemetry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            icon={Navigation2}
            label={t.metrics.altitude}
            value={telemetry.altitude.toFixed(1)}
            unit="m"
            color="blue"
            delay={0.1}
            trend="up"
          />
          <MetricCard
            icon={Gauge}
            label={t.metrics.velocity}
            value={telemetry.velocity.toFixed(2)}
            unit="m/s"
            color="green"
            delay={0.2}
          />
          <MetricCard
            icon={Thermometer}
            label={t.metrics.temperature}
            value={telemetry.temperature.toFixed(1)}
            unit="°C"
            color="orange"
            delay={0.3}
          />
          <MetricCard
            icon={Activity}
            label={t.metrics.pressure}
            value={telemetry.pressure.toFixed(0)}
            unit="hPa"
            color="purple"
            delay={0.4}
          />
          <MetricCard
            icon={Battery}
            label={t.metrics.battery}
            value={telemetry.battery.toFixed(1)}
            unit="%"
            color="green"
            delay={0.5}
            trend={telemetry.battery > 50 ? 'up' : 'down'}
          />
          <MetricCard
            icon={Radio}
            label={t.metrics.signal}
            value={telemetry.signalStrength.toFixed(0)}
            unit="%"
            color="cyan"
            delay={0.6}
          />
        </div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border border-white/10 bg-white/[0.03] p-8"
        >
          <h3 className="text-white text-lg font-medium mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            {t.systems.title}
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label={t.systems.power}
              value={telemetry.battery}
              max={100}
              color="green"
              delay={0.8}
            />
            <ProgressBar
              label={t.systems.comms}
              value={telemetry.signalStrength}
              max={100}
              color="blue"
              delay={0.9}
            />
            <ProgressBar
              label={t.systems.sensors}
              value={95.5}
              max={100}
              color="purple"
              delay={1.0}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}