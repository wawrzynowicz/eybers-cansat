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
    aboutUs: {
      sectionTitle: "Reaching for the Stars",
      heading: "About Us",
      cards: {
        who: {
          title: "Who are we",
          description: "We are EYBERS, a team of six motivated students and young engineers exploring aerospace technology and turning ideas into real projects."
        },
        mission: {
          title: "Mission",
          description: "We design, build, and operate miniature satellite called CanSat, running experiments and collecting data for both primary and secondary missions."
        },
        competition: {
          title: "Competition",
          description: "We compete in the European Space Agency (ESA) CanSat competition 2025/2026, testing our designs and gaining hands-on aerospace experience."
        },
        goals: {
          title: "Our goals",
          description: "We aim to advance our technical skills, gather meaningful scientific data, and contribute innovative solutions to future space missions."
        }
      }
    },
    stats: {
      teamMembers: "Team Members",
      activeProject: "Fascinating Project",
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
        target: { label: "Target", value: "Apr 2026" }
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
          dimensions: { label: "Dimensions", value: "⌀66×115 mm" },
          mass: { label: "Mass", value: "300-350 g" },
          power: { label: "Power", value: "Battery" },
          comms: { label: "Communications", value: "LoRa 433 MHz" }
        }
      }
    },
    team: {
      sectionTitle: "The Crew",
      heading: "Meet Our",
      headingBold: "Team",
      quote: "Ad aspera per astra",
      quoteTranslation: "Through hardship to the stars"
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
    aboutUs: {
      sectionTitle: "Sięgając Gwiazd",
      heading: "O Nas",
      cards: {
        who: {
          title: "Kim jesteśmy",
          description: "Jesteśmy EYBERS, zespołem sześciu zmotywowanych studentów i młodych inżynierów eksplorujących technologie lotnicze i zamieniających pomysły w rzeczywiste projekty."
        },
        mission: {
          title: "Misja",
          description: "Projektujemy, budujemy i obsługujemy miniaturowy satelitę o nazwie CanSat, przeprowadzając eksperymenty i zbierając dane dla misji podstawowych i dodatkowych."
        },
        competition: {
          title: "Konkurs",
          description: "Konkurujemy w konkursie CanSat Europejskiej Agencji Kosmicznej (ESA) 2025/2026, testując nasze projekty i zdobywając praktyczne doświadczenie w dziedzinie lotnictwa."
        },
        goals: {
          title: "Nasze cele",
          description: "Dążymy do rozwijania naszych umiejętności technicznych, zbierania wartościowych danych naukowych i wnoszenia innowacyjnych rozwiązań do przyszłych misji kosmicznych."
        }
      }
    },
    stats: {
      teamMembers: "Członków Zespołu",
      activeProject: "Fascynujący Projekt",
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
        target: { label: "Cel", value: "Kwi 2026" }
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
          dimensions: { label: "Wymiary", value: "⌀66×115 mm" },
          mass: { label: "Masa", value: "300-350 g" },
          power: { label: "Zasilanie", value: "Bateria" },
          comms: { label: "Komunikacja", value: "LoRa 433 MHz" }
        }
      }
    },
    team: {
      sectionTitle: "Załoga",
      heading: "Poznaj Nasz",
      headingBold: "Zespół",
      quote: "Ad aspera per astra",
      quoteTranslation: "Przez trudy do gwiazd"
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