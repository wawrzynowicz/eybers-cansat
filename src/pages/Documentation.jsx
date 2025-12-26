import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Target, Rocket, Lightbulb, FileText } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const Section = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <h2 className="text-2xl font-light text-white">{title}</h2>
    </div>
    <div className="pl-13 text-white/70 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
    <div className="text-white/70 space-y-3">
      {children}
    </div>
  </div>
);

export default function Documentation() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {t.docs?.sectionTitle || 'Technical Documentation'}
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t.docs?.heading || 'Project Documentation'}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.docs?.description || 'Comprehensive technical and scientific documentation for the EYBERS muon detection satellite project.'}
          </p>
        </motion.div>

        {/* Content */}
        <div className="border-l border-white/10 pl-8">
          {/* Satellite Design */}
          <Section icon={Cpu} title={t.docs?.design?.title || 'Satellite Design'} delay={0.1}>
            <SubSection title={t.docs?.design?.overview?.title || 'Overview'}>
              <p>{t.docs?.design?.overview?.content || 'The EYBERS-1 satellite follows the CanSat standard format, designed as a compact cylindrical unit measuring 66mm in diameter and 115mm in height. The total mass is carefully optimized to remain between 300-350 grams, ensuring compliance with competition requirements while maximizing scientific capability.'}</p>
            </SubSection>

            <SubSection title={t.docs?.design?.structure?.title || 'Physical Structure'}>
              <p>{t.docs?.design?.structure?.content || 'The satellite structure consists of a lightweight aluminum frame with precision-machined components. The design incorporates multiple internal compartments to house various subsystems while maintaining structural integrity during launch and descent.'}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t.docs?.design?.structure?.items?.[0] || 'Outer shell: Aluminum alloy construction'}</li>
                <li>{t.docs?.design?.structure?.items?.[1] || 'Internal bays: Modular compartments for electronics'}</li>
                <li>{t.docs?.design?.structure?.items?.[2] || 'Thermal management: Passive cooling via heat-conductive materials'}</li>
                <li>{t.docs?.design?.structure?.items?.[3] || 'Mounting points: Secure attachment for parachute and sensors'}</li>
              </ul>
            </SubSection>

            <SubSection title={t.docs?.design?.systems?.title || 'Key Subsystems'}>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t.docs?.design?.systems?.items?.[0] || 'Power system: Rechargeable lithium-polymer battery with voltage regulation'}</li>
                <li>{t.docs?.design?.systems?.items?.[1] || 'Communication: LoRa 433 MHz radio module for long-range data transmission'}</li>
                <li>{t.docs?.design?.systems?.items?.[2] || 'Onboard computer: Microcontroller for data processing and system control'}</li>
                <li>{t.docs?.design?.systems?.items?.[3] || 'Sensors: Barometer, GPS, temperature, and accelerometer'}</li>
              </ul>
            </SubSection>
          </Section>

          {/* Muon Detection Technology */}
          <Section icon={Lightbulb} title={t.docs?.detection?.title || 'Muon Detection Technology'} delay={0.2}>
            <SubSection title={t.docs?.detection?.principle?.title || 'Detection Principle'}>
              <p>{t.docs?.detection?.principle?.content || 'Our muon detection system utilizes scintillation detectors, which emit light when charged particles pass through them. Cosmic muons, traveling at near-light speeds, interact with the scintillator material, producing measurable photon signals that are converted to electrical pulses.'}</p>
            </SubSection>

            <SubSection title={t.docs?.detection?.hardware?.title || 'Hardware Components'}>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t.docs?.detection?.hardware?.items?.[0] || 'Scintillator panels: Organic plastic scintillator material'}</li>
                <li>{t.docs?.detection?.hardware?.items?.[1] || 'Photomultiplier tubes: Convert light signals to electrical current'}</li>
                <li>{t.docs?.detection?.hardware?.items?.[2] || 'Signal processing: Amplification and noise filtering circuits'}</li>
                <li>{t.docs?.detection?.hardware?.items?.[3] || 'Data acquisition: High-speed ADC for signal digitization'}</li>
              </ul>
            </SubSection>

            <SubSection title={t.docs?.detection?.calibration?.title || 'Calibration & Testing'}>
              <p>{t.docs?.detection?.calibration?.content || 'The detector system undergoes extensive ground-based calibration using known radiation sources and cosmic ray measurements. We compare our readings with reference instruments to ensure accuracy and reliability. Environmental testing includes temperature cycling and vibration tests to simulate launch conditions.'}</p>
            </SubSection>
          </Section>

          {/* Scientific Objectives */}
          <Section icon={Target} title={t.docs?.objectives?.title || 'Scientific Objectives'} delay={0.3}>
            <SubSection title={t.docs?.objectives?.primary?.title || 'Primary Mission'}>
              <p>{t.docs?.objectives?.primary?.content || 'The primary objective is to measure cosmic muon flux at various altitudes during the satellite\'s descent. This data will help us understand how muon intensity changes with atmospheric depth and validate theoretical models of cosmic ray interactions.'}</p>
            </SubSection>

            <SubSection title={t.docs?.objectives?.secondary?.title || 'Secondary Objectives'}>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t.docs?.objectives?.secondary?.items?.[0] || 'Characterize muon energy spectrum at different altitudes'}</li>
                <li>{t.docs?.objectives?.secondary?.items?.[1] || 'Study atmospheric absorption effects on cosmic rays'}</li>
                <li>{t.docs?.objectives?.secondary?.items?.[2] || 'Validate detector performance in real flight conditions'}</li>
                <li>{t.docs?.objectives?.secondary?.items?.[3] || 'Correlate muon flux with atmospheric parameters'}</li>
              </ul>
            </SubSection>

            <SubSection title={t.docs?.objectives?.research?.title || 'Research Questions'}>
              <p>{t.docs?.objectives?.research?.content || 'Our mission aims to answer key questions about cosmic ray propagation: How does muon flux vary with altitude? What is the relationship between atmospheric pressure and muon detection rates? Can we observe directional variations in muon arrival angles?'}</p>
            </SubSection>
          </Section>

          {/* Mission Plan */}
          <Section icon={Rocket} title={t.docs?.mission?.title || 'Mission Plan'} delay={0.4}>
            <SubSection title={t.docs?.mission?.launch?.title || 'Launch & Ascent'}>
              <p>{t.docs?.mission?.launch?.content || 'The satellite will be launched via rocket to an altitude of approximately 1 kilometer. During ascent, the system performs pre-flight checks and initializes all sensors. The communication link with the ground station is established and tested.'}</p>
            </SubSection>

            <SubSection title={t.docs?.mission?.deployment?.title || 'Deployment Phase'}>
              <p>{t.docs?.mission?.deployment?.content || 'At apogee, the satellite separates from the rocket and begins its descent. The parachute deploys automatically to control descent rate, ensuring stable flight conditions for data collection. All scientific instruments activate and begin recording measurements.'}</p>
            </SubSection>

            <SubSection title={t.docs?.mission?.descent?.title || 'Descent & Data Collection'}>
              <p>{t.docs?.mission?.descent?.content || 'During the descent phase lasting approximately 10-15 minutes, the satellite continuously measures muon flux, atmospheric parameters, and positional data. All measurements are timestamped and transmitted in real-time to the ground station while also being stored onboard.'}</p>
            </SubSection>

            <SubSection title={t.docs?.mission?.recovery?.title || 'Landing & Recovery'}>
              <p>{t.docs?.mission?.recovery?.content || 'Upon landing, the GPS beacon activates to facilitate recovery. The satellite is designed to survive impact and protect the stored data. Post-flight analysis includes downloading all recorded data and performing hardware inspection.'}</p>
            </SubSection>
          </Section>

          {/* Expected Outcomes */}
          <Section icon={FileText} title={t.docs?.outcomes?.title || 'Expected Outcomes'} delay={0.5}>
            <SubSection title={t.docs?.outcomes?.data?.title || 'Data Products'}>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t.docs?.outcomes?.data?.items?.[0] || 'Altitude-dependent muon flux profiles'}</li>
                <li>{t.docs?.outcomes?.data?.items?.[1] || 'Time-series data of cosmic ray detection events'}</li>
                <li>{t.docs?.outcomes?.data?.items?.[2] || 'Correlation between atmospheric conditions and muon rates'}</li>
                <li>{t.docs?.outcomes?.data?.items?.[3] || 'Detector performance metrics in flight conditions'}</li>
              </ul>
            </SubSection>

            <SubSection title={t.docs?.outcomes?.scientific?.title || 'Scientific Impact'}>
              <p>{t.docs?.outcomes?.scientific?.content || 'This mission will contribute valuable data to the understanding of cosmic ray interactions with Earth\'s atmosphere. The results will be shared with the scientific community and can be used for educational purposes, demonstrating real-world applications of particle physics.'}</p>
            </SubSection>

            <SubSection title={t.docs?.outcomes?.technical?.title || 'Technical Achievements'}>
              <p>{t.docs?.outcomes?.technical?.content || 'Successfully completing this mission will demonstrate our team\'s capability in systems engineering, electronics design, software development, and project management. The experience gained will be invaluable for future aerospace projects and careers in STEM fields.'}</p>
            </SubSection>
          </Section>
        </div>
      </div>
    </div>
  );
}