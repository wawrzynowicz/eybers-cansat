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
        p1: "Earth is constantly being hit by high-speed particles from space called cosmic rays. These particles zoom through the universe at nearly the speed of light.",
        p2: "Most of these cosmic rays are tiny pieces of atoms – mainly hydrogen and helium – traveling from distant parts of our galaxy and beyond."
      },
      birth: {
        title: "Birth of Muons",
        p1: "Muons don't come directly from space – they're created right here in Earth's atmosphere.",
        p2: "When cosmic rays crash into air molecules high above us, the collision creates new particles called muons. Think of it like cosmic dominoes – one collision triggers a chain reaction."
      },
      atmosphere: {
        title: "Atmospheric Shielding",
        p1: "Our atmosphere acts like a protective blanket, stopping the original cosmic rays from reaching the ground.",
        p2: "But the muons created by these collisions are tough enough to make it all the way down to Earth's surface, showering down on us constantly."
      },
      properties: {
        title: "What Makes Muons Special",
        p1: "Muons are tiny charged particles, similar to electrons but heavier.",
        p2: "They don't last long – just a fraction of a second before breaking apart.",
        p3: "What makes them amazing is their ability to pass through solid objects. Muons can penetrate thick layers of rock, water, and even buildings, making them perfect for our satellite detector."
      },
      reach: {
        title: "How Do They Reach Us?",
        p1: "Even though muons break apart quickly, they're created high in the atmosphere and travel incredibly fast.",
        p2: "Because they move so fast, time actually slows down for them (thanks to Einstein's relativity!). This gives them just enough time to reach the ground before disappearing."
      },
      importance: {
        title: "Why Study Muons?",
        p1: "Muons are like messengers from space, carrying information about high-energy events happening far away in the universe.",
        p2: "By detecting muons, we can learn about cosmic rays, test fundamental physics theories, and better understand our atmosphere and space environment."
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
        p1: "Ziemia jest nieustannie bombardowana szybkimi cząstkami z kosmosu zwanymi promieniowaniem kosmicznym. Te cząstki pędzą przez wszechświat z prędkością bliską prędkości światła.",
        p2: "Większość tych promieni kosmicznych to małe fragmenty atomów – głównie wodoru i helu – podróżujące z odległych części naszej galaktyki i dalej."
      },
      birth: {
        title: "Narodziny Mionów",
        p1: "Miony nie pochodzą bezpośrednio z kosmosu – powstają tutaj, w atmosferze Ziemi.",
        p2: "Gdy promienie kosmiczne zderzają się z cząsteczkami powietrza wysoko nad nami, zderzenie tworzy nowe cząstki zwane mionami. To jak kosmiczne domino – jedno zderzenie uruchamia reakcję łańcuchową."
      },
      atmosphere: {
        title: "Osłona Atmosferyczna",
        p1: "Nasza atmosfera działa jak ochronny koc, zatrzymując oryginalne promienie kosmiczne przed dotarciem do ziemi.",
        p2: "Ale miony powstałe w tych zderzeniach są na tyle wytrzymałe, że docierają aż do powierzchni Ziemi, nieustannie na nas opadając."
      },
      properties: {
        title: "Co Czyni Miony Wyjątkowymi",
        p1: "Miony to maleńkie naładowane cząstki, podobne do elektronów, ale cięższe.",
        p2: "Nie żyją długo – zaledwie ułamek sekundy, zanim się rozpadną.",
        p3: "To, co czyni je niesamowitymi, to zdolność przechodzenia przez stałe obiekty. Miony mogą przenikać przez grube warstwy skał, wody, a nawet budynki, co czyni je idealnymi dla naszego detektora satelitarnego."
      },
      reach: {
        title: "Jak Do Nas Docierają?",
        p1: "Mimo że miony szybko się rozpadają, są tworzone wysoko w atmosferze i poruszają się niesamowicie szybko.",
        p2: "Ponieważ poruszają się tak szybko, czas faktycznie dla nich zwalnia (dzięki teorii względności Einsteina!). To daje im wystarczająco dużo czasu, aby dotrzeć do ziemi, zanim znikną."
      },
      importance: {
        title: "Dlaczego Badamy Miony?",
        p1: "Miony są jak posłańcy z kosmosu, niosący informacje o wysokoenergetycznych wydarzeniach dziejących się daleko we wszechświecie.",
        p2: "Wykrywając miony, możemy dowiedzieć się więcej o promieniowaniu kosmicznym, testować fundamentalne teorie fizyki i lepiej rozumieć naszą atmosferę i środowisko kosmiczne."
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