import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      mission: "Mission",
      project: "Project",
      team: "Team",
      muons: "Muons",
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
    },
    muonInfo: {
      sectionTitle: "Scientific Background",
      heading: "Understanding Muons",
      intro: "Learn about cosmic rays, muon formation, and why these particles are essential to our research.",
      cosmicRays: {
        title: "Cosmic Rays",
        p1: "The Earth is continuously bombarded by a flux of particles called cosmic rays. These particles travel near the speed of light, carrying enormous amounts of energy.",
        p2: "Composition: ~74% ionized hydrogen (protons), ~18% helium nuclei, and trace amounts of heavier elements."
      },
      birth: {
        title: "Birth of Muons",
        p1: "Muons aren't originally from cosmic radiation – they are born in Earth's atmosphere.",
        p2: "When a primary cosmic ray collides with oxygen or nitrogen nuclei in the upper atmosphere, the collision produces short-lived particles called mesons. Muons originate from the decay of these charged mesons."
      },
      atmosphere: {
        title: "Atmospheric Shielding",
        p1: "Primary cosmic rays don't reach Earth's surface directly – our atmosphere acts as a natural shield.",
        p2: "Instead, secondary particles like muons are created in the upper atmosphere and shower down to the surface."
      },
      properties: {
        title: "Muon Properties",
        p1: "Mass: 105.65 MeV",
        p2: "Half-life: 2.2 × 10⁻⁶ seconds (2.2 microseconds)",
        p3: "Muons are particularly penetrating – they interact primarily through ionization and can pass through large amounts of material. This makes them the most numerous charged particles reaching Earth's surface."
      },
      reach: {
        title: "Why Muons Reach Earth",
        p1: "Despite their short half-life, muons created at ~15 km altitude reach the surface thanks to special relativity.",
        p2: "Cosmic ray muons with energy >2.4 GeV travel so fast that time dilation extends their lifetime (as observed from Earth). Their decay length becomes greater than 15 km, allowing them to penetrate the atmosphere before decaying."
      },
      importance: {
        title: "Why Study Muons?",
        p1: "Muons provide a window into high-energy cosmic processes and allow us to study particle physics at energies impossible to recreate in laboratories.",
        p2: "By detecting and measuring muon flux, we can better understand cosmic ray origins, atmospheric interactions, and test fundamental physics principles like relativity."
      }
    }
  },
  pl: {
    nav: {
      mission: "Misja",
      project: "Projekt",
      team: "Zespół",
      muons: "Miony",
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
    },
    muonInfo: {
      sectionTitle: "Tło Naukowe",
      heading: "Zrozumieć Miony",
      intro: "Dowiedz się o promieniowaniu kosmicznym, powstawaniu mionów i dlaczego te cząstki są kluczowe dla naszych badań.",
      cosmicRays: {
        title: "Promieniowanie Kosmiczne",
        p1: "Ziemia jest nieustannie bombardowana strumieniem cząstek zwanych promieniowaniem kosmicznym. Te cząstki poruszają się z prędkością bliską prędkości światła, niosąc ogromne ilości energii.",
        p2: "Skład: ~74% zjonizowanego wodoru (protony), ~18% jądra helu, oraz śladowe ilości cięższych pierwiastków."
      },
      birth: {
        title: "Narodziny Mionów",
        p1: "Miony nie pochodzą bezpośrednio z promieniowania kosmicznego – rodzą się w atmosferze Ziemi.",
        p2: "Gdy pierwotne promienie kosmiczne zderzają się z jądrami tlenu lub azotu w górnych warstwach atmosfery, zderzenie wytwarza krótkotrwałe cząstki zwane mezonami. Miony powstają z rozpadu tych naładowanych mezonów."
      },
      atmosphere: {
        title: "Osłona Atmosferyczna",
        p1: "Pierwotne promienie kosmiczne nie docierają bezpośrednio do powierzchni Ziemi – nasza atmosfera działa jak naturalna tarcza.",
        p2: "Zamiast tego, cząstki wtórne, takie jak miony, powstają w górnej atmosferze i opadają na powierzchnię."
      },
      properties: {
        title: "Właściwości Mionów",
        p1: "Masa: 105.65 MeV",
        p2: "Okres półtrwania: 2.2 × 10⁻⁶ sekundy (2.2 mikrosekundy)",
        p3: "Miony są szczególnie przenikliwe – oddziałują głównie poprzez jonizację i mogą przejść przez duże ilości materii. To sprawia, że są najliczniejszymi naładowanymi cząstkami docierającymi do powierzchni Ziemi."
      },
      reach: {
        title: "Dlaczego Miony Docierają do Ziemi",
        p1: "Pomimo krótkiego okresu półtrwania, miony powstające na wysokości ~15 km docierają do powierzchni dzięki szczególnej teorii względności.",
        p2: "Miony kosmiczne o energii >2.4 GeV poruszają się tak szybko, że dylatacja czasu wydłuża ich czas życia (obserwowany z Ziemi). Ich długość rozpadu staje się większa niż 15 km, pozwalając im przenikać przez atmosferę przed rozpadem."
      },
      importance: {
        title: "Dlaczego Badamy Miony?",
        p1: "Miony zapewniają okno na wysokoenergetyczne procesy kosmiczne i pozwalają badać fizykę cząstek przy energiach niemożliwych do osiągnięcia w laboratoriach.",
        p2: "Wykrywając i mierząc strumień mionów, możemy lepiej zrozumieć pochodzenie promieni kosmicznych, interakcje atmosferyczne i testować fundamentalne zasady fizyki, takie jak teoria względności."
      }
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