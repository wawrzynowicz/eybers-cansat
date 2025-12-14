import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      mission: "Mission",
      project: "Project",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      tagline: "High School Science Project",
      title: "EYBERS",
      description: "Six students building a mini-satellite to detect cosmic muons\nand unlock the mysteries of the universe.",
      exploreProject: "EXPLORE PROJECT",
      meetTeam: "MEET THE TEAM"
    },
    mission: {
      sectionTitle: "Our Purpose",
      heading: "Reaching for the",
      headingBold: "Stars",
      cards: {
        mission: {
          title: "Mission",
          description: "To design and build a mini-satellite capable of detecting cosmic muons, contributing to scientific research while inspiring the next generation."
        },
        vision: {
          title: "Vision",
          description: "A world where high school students actively participate in cutting-edge space science, proving that age is no barrier to discovery."
        },
        impact: {
          title: "Impact",
          description: "By sharing our journey and findings, we spark curiosity and demonstrate that the cosmos is accessible to all who reach for the stars."
        }
      }
    },
    stats: {
      teamMembers: "Team Members",
      activeProject: "Active Project",
      curiosity: "Curiosity",
      launchTarget: "Launch Target"
    },
    project: {
      tagline: "Flagship Project",
      title: "Muon Detection",
      titleBold: "Mini-Satellite",
      description: "A compact CubeSat designed to detect cosmic muons from space. By measuring these high-energy particles, we contribute to our understanding of cosmic rays and their origins.",
      stats: {
        detection: { label: "Detection", value: "Real-time" },
        dataLink: { label: "Data Link", value: "Ground Station" },
        status: { label: "Status", value: "In Progress" },
        target: { label: "Target", value: "2025 Launch" }
      }
    },
    projectDesc: {
      sectionTitle: "About",
      heading: "How It Works",
      description: "The EYBERS-1 satellite employs advanced scintillation detectors to capture cosmic muons. These high-energy particles pass through the satellite, generating signals that are processed, transmitted to Earth, and analyzed to understand cosmic radiation patterns.",
      features: {
        detection: { title: "Muon Detection", description: "Scintillation detectors capture cosmic particles" },
        processing: { title: "Signal Processing", description: "Electronic circuits amplify and filter signals" },
        collection: { title: "Data Collection", description: "Onboard computer logs all measurements" },
        transmission: { title: "Transmission", description: "Radio transmits data to ground station" },
        analysis: { title: "Analysis", description: "Scientists study patterns and frequencies" },
        discovery: { title: "Discovery", description: "New insights into cosmic radiation" }
      },
      specs: {
        title: "Key Specifications",
        items: {
          dimensions: { label: "Dimensions", value: "10×10×10 cm" },
          mass: { label: "Mass", value: "~1.5 kg" },
          power: { label: "Power", value: "Solar + Battery" },
          comms: { label: "Communications", value: "UHF Radio" }
        }
      }
    },
    team: {
      sectionTitle: "The Crew",
      heading: "Meet Our",
      headingBold: "Team",
      quote: "Six minds, one mission: reaching for the stars together."
    },
    contact: {
      sectionTitle: "Get In Touch",
      heading: "Let's Connect",
      description: "Have questions about our project? Want to collaborate or support our mission? We'd love to hear from you.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        successTitle: "Message Sent!",
        successMessage: "Thank you for reaching out. We'll get back to you soon."
      },
      email: "Email",
      connect: "Connect",
      sponsorTitle: "Interested in Sponsoring?",
      sponsorMessage: "We're seeking partners to help bring this mission to space. Reach out to learn about collaboration opportunities."
    },
    footer: {
      tagline: "Exploring the cosmos, one muon at a time.",
      rights: "All rights reserved.",
      navigation: "Navigation"
    }
  },
  pl: {
    nav: {
      mission: "Misja",
      project: "Projekt",
      team: "Zespół",
      contact: "Kontakt"
    },
    hero: {
      tagline: "Projekt Naukowy Szkoły Średniej",
      title: "EYBERS",
      description: "Sześciu uczniów buduje mini-satelitę do wykrywania mionów kosmicznych\ni odkrywania tajemnic wszechświata.",
      exploreProject: "ODKRYJ PROJEKT",
      meetTeam: "POZNAJ ZESPÓŁ"
    },
    mission: {
      sectionTitle: "Nasz Cel",
      heading: "Sięgając do",
      headingBold: "Gwiazd",
      cards: {
        mission: {
          title: "Misja",
          description: "Zaprojektowanie i zbudowanie mini-satelity zdolnego do wykrywania mionów kosmicznych, przyczyniając się do badań naukowych i inspirując kolejne pokolenia."
        },
        vision: {
          title: "Wizja",
          description: "Świat, w którym uczniowie szkół średnich aktywnie uczestniczą w najnowocześniejszej nauce kosmicznej, udowadniając, że wiek nie jest barierą dla odkryć."
        },
        impact: {
          title: "Wpływ",
          description: "Dzieląc się naszą podróżą i odkryciami, rozpalamy ciekawość i pokazujemy, że kosmos jest dostępny dla wszystkich, którzy sięgają po gwiazdy."
        }
      }
    },
    stats: {
      teamMembers: "Członków Zespołu",
      activeProject: "Aktywny Projekt",
      curiosity: "Ciekawość",
      launchTarget: "Cel Startu"
    },
    project: {
      tagline: "Główny Projekt",
      title: "Wykrywanie Mionów",
      titleBold: "Mini-Satelita",
      description: "Kompaktowy CubeSat zaprojektowany do wykrywania mionów kosmicznych z kosmosu. Mierząc te wysokoenergetyczne cząstki, przyczyniamy się do zrozumienia promieniowania kosmicznego i jego pochodzenia.",
      stats: {
        detection: { label: "Wykrywanie", value: "W czasie rzeczywistym" },
        dataLink: { label: "Łącze Danych", value: "Stacja Naziemna" },
        status: { label: "Status", value: "W Trakcie" },
        target: { label: "Cel", value: "Start 2025" }
      }
    },
    projectDesc: {
      sectionTitle: "O Projekcie",
      heading: "Jak To Działa",
      description: "Satelita EYBERS-1 wykorzystuje zaawansowane detektory scyntylacyjne do wychwytywania mionów kosmicznych. Te wysokoenergetyczne cząstki przenikają przez satelitę, generując sygnały, które są przetwarzane, przesyłane na Ziemię i analizowane w celu zrozumienia wzorców promieniowania kosmicznego.",
      features: {
        detection: { title: "Wykrywanie Mionów", description: "Detektory scyntylacyjne wychwytują cząstki kosmiczne" },
        processing: { title: "Przetwarzanie Sygnału", description: "Układy elektroniczne wzmacniają i filtrują sygnały" },
        collection: { title: "Zbieranie Danych", description: "Komputer pokładowy rejestruje wszystkie pomiary" },
        transmission: { title: "Transmisja", description: "Radio przesyła dane do stacji naziemnej" },
        analysis: { title: "Analiza", description: "Naukowcy badają wzorce i częstotliwości" },
        discovery: { title: "Odkrycie", description: "Nowe spojrzenie na promieniowanie kosmiczne" }
      },
      specs: {
        title: "Kluczowe Specyfikacje",
        items: {
          dimensions: { label: "Wymiary", value: "10×10×10 cm" },
          mass: { label: "Masa", value: "~1.5 kg" },
          power: { label: "Zasilanie", value: "Słoneczne + Bateria" },
          comms: { label: "Komunikacja", value: "Radio UHF" }
        }
      }
    },
    team: {
      sectionTitle: "Załoga",
      heading: "Poznaj Nasz",
      headingBold: "Zespół",
      quote: "Sześć umysłów, jedna misja: razem sięgamy po gwiazdy."
    },
    contact: {
      sectionTitle: "Skontaktuj się",
      heading: "Nawiążmy Kontakt",
      description: "Masz pytania dotyczące naszego projektu? Chcesz współpracować lub wspierać naszą misję? Chętnie usłyszymy od Ciebie.",
      form: {
        name: "Imię",
        email: "E-mail",
        message: "Wiadomość",
        send: "Wyślij Wiadomość",
        sending: "Wysyłanie...",
        successTitle: "Wiadomość Wysłana!",
        successMessage: "Dziękujemy za kontakt. Wkrótce się odezwiemy."
      },
      email: "E-mail",
      connect: "Połącz się",
      sponsorTitle: "Zainteresowany Sponsorowaniem?",
      sponsorMessage: "Poszukujemy partnerów, którzy pomogą nam wprowadzić tę misję w kosmos. Skontaktuj się, aby dowiedzieć się o możliwościach współpracy."
    },
    footer: {
      tagline: "Odkrywając kosmos, jeden mion na raz.",
      rights: "Wszelkie prawa zastrzeżone.",
      navigation: "Nawigacja"
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}