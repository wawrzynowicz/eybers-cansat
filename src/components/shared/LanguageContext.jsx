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
    timeline: {
      sectionTitle: "Our Journey",
      heading: "Project Timeline",
      description: "Follow our progress from concept to launch as we work towards detecting cosmic muons from space.",
      milestones: [
        {
          title: "Project Inception",
          date: "Sep 2024",
          status: "completed",
          description: "Team formation and initial concept development. We established our mission and began planning the satellite design.",
          achievements: [
            "Formed the EYBERS team",
            "Defined project objectives",
            "Initial research on CanSat technology"
          ]
        },
        {
          title: "Design Phase",
          date: "Oct - Dec 2024",
          status: "completed",
          description: "Detailed satellite design and component selection. We created technical specifications and finalized the muon detection system.",
          achievements: [
            "Completed satellite CAD design",
            "Selected scintillation detectors",
            "Designed PCB and electronics"
          ]
        },
        {
          title: "Prototyping & Testing",
          date: "Jan - Feb 2025",
          status: "in_progress",
          description: "Building and testing the first prototype. We're currently conducting laboratory tests and refining our design.",
          achievements: [
            "Assembled first prototype",
            "Initial detector calibration",
            "Ground station setup in progress"
          ]
        },
        {
          title: "Integration & Validation",
          date: "Mar 2025",
          status: "upcoming",
          description: "Final assembly and comprehensive testing. All systems will be integrated and validated before the competition.",
        },
        {
          title: "Competition & Launch",
          date: "Apr 2026",
          status: "upcoming",
          description: "Participation in ESA CanSat Competition 2025/2026. Our satellite will be launched and we'll collect real cosmic muon data.",
        }
      ]
    },
    missions: {
      sectionTitle: "About the Project",
      heading: "Our Missions",
      primary: {
        title: "Primary Mission",
        subtitle: "CanSat Requirements",
        whatWeDo: {
          title: "What we do",
          description: "We are building and programming our CanSat so that it measures external air temperature and atmospheric pressure, stores the data on an SD card, and sends telemetry to our ground station at least once per second during launch, descent and after landing. We will then analyse all the collected data."
        },
        howWeUse: {
          title: "How we use the data",
          description: "We process the measurements to calculate altitude and visualise everything on clear graphs, such as altitude over time or temperature versus altitude."
        },
        whyMatters: {
          title: "Why it matters",
          description: "We clearly define how this data supports our primary mission goals and how it helps us better understand the CanSat's flight and environment."
        }
      },
      secondary: {
        title: "Secondary Mission",
        subtitle: "Cosmic Muon Detection",
        whatWeDo: {
          title: "What we do",
          description: "We detect and analyse cosmic-ray secondaries, specifically particles muons, using a compact two-layer segmented detector. Each layer is divided into two independent segments. An inner gimbal sphere—a rotating capsule inside the CanSat—keeps the detectors always pointing upward using a low-center-of-mass ballast. All data is stored on a micro SD card for detailed post-flight analysis."
        },
        howWeUse: {
          title: "How we use the data",
          description: "We extract genuine particle detections by measuring coincidences between layers, estimate muon arrival direction using segmented data, and correlate muon flux with altitude and atmospheric pressure during descent."
        },
        whyMatters: {
          title: "Why it matters",
          description: "This mission experimentally confirms special relativity effects through muon detection and simulates satellite measurements in varying atmospheric conditions like those on other planets."
        }
      }
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
    timeline: {
      sectionTitle: "Nasza Podróż",
      heading: "Oś Czasu Projektu",
      description: "Śledź nasz postęp od koncepcji do startu, gdy pracujemy nad wykrywaniem mionów kosmicznych z kosmosu.",
      milestones: [
        {
          title: "Początek Projektu",
          date: "Wrz 2024",
          status: "completed",
          description: "Formowanie zespołu i początkowy rozwój koncepcji. Ustaliliśmy naszą misję i rozpoczęliśmy planowanie projektu satelity.",
          achievements: [
            "Utworzenie zespołu EYBERS",
            "Określenie celów projektu",
            "Wstępne badania nad technologią CanSat"
          ]
        },
        {
          title: "Faza Projektowania",
          date: "Paź - Gru 2024",
          status: "completed",
          description: "Szczegółowy projekt satelity i dobór komponentów. Stworzyliśmy specyfikacje techniczne i sfinalizowaliśmy system wykrywania mionów.",
          achievements: [
            "Ukończenie projektu CAD satelity",
            "Wybór detektorów scyntylacyjnych",
            "Projekt PCB i elektroniki"
          ]
        },
        {
          title: "Prototypowanie i Testowanie",
          date: "Sty - Lut 2025",
          status: "in_progress",
          description: "Budowa i testowanie pierwszego prototypu. Obecnie prowadzimy testy laboratoryjne i udoskonalamy nasz projekt.",
          achievements: [
            "Zmontowanie pierwszego prototypu",
            "Wstępna kalibracja detektora",
            "Trwa konfiguracja stacji naziemnej"
          ]
        },
        {
          title: "Integracja i Walidacja",
          date: "Mar 2025",
          status: "upcoming",
          description: "Finalna integracja i kompleksowe testowanie. Wszystkie systemy zostaną zintegrowane i zwalidowane przed konkursem.",
        },
        {
          title: "Konkurs i Start",
          date: "Kwi 2026",
          status: "upcoming",
          description: "Udział w Konkursie CanSat ESA 2025/2026. Nasz satelita zostanie wystrzelony i zbierzemy prawdziwe dane o mionach kosmicznych.",
        }
      ]
    },
    missions: {
      sectionTitle: "O Projekcie",
      heading: "Nasze Misje",
      primary: {
        title: "Misja Główna",
        subtitle: "Wymagania CanSat",
        whatWeDo: {
          title: "Co robimy",
          description: "Budujemy i programujemy nasz CanSat tak, aby mierzył zewnętrzną temperaturę powietrza i ciśnienie atmosferyczne, zapisywał dane na karcie SD i wysyłał telemetrię do naszej stacji naziemnej co najmniej raz na sekundę podczas startu, opadania i po lądowaniu. Następnie przeanalizujemy wszystkie zebrane dane."
        },
        howWeUse: {
          title: "Jak wykorzystujemy dane",
          description: "Przetwarzamy pomiary w celu obliczenia wysokości i wizualizacji wszystkiego na przejrzystych wykresach, takich jak wysokość w czasie lub temperatura względem wysokości."
        },
        whyMatters: {
          title: "Dlaczego to ważne",
          description: "Jasno definiujemy, w jaki sposób te dane wspierają nasze główne cele misji i jak pomagają nam lepiej zrozumieć lot i środowisko CanSat."
        }
      },
      secondary: {
        title: "Misja Dodatkowa",
        subtitle: "Wykrywanie Mionów Kosmicznych",
        whatWeDo: {
          title: "Co robimy",
          description: "Wykrywamy i analizujemy wtórne promieniowanie kosmiczne, szczególnie cząstki miony, używając kompaktowego dwuwarstwowego segmentowanego detektora. Każda warstwa jest podzielona na dwa niezależne segmenty. Wewnętrzna kula kardanowa—obracająca się kapsuła wewnątrz CanSata—utrzymuje detektory zawsze skierowane w górę, wykorzystując balast o niskim środku ciężkości. Wszystkie dane są zapisywane na karcie micro SD do szczegółowej analizy po locie."
        },
        howWeUse: {
          title: "Jak wykorzystujemy dane",
          description: "Wyodrębniamy autentyczne detekcje cząstek mierząc koincydencje między warstwami, szacujemy kierunek przybycia mionów używając danych z segmentowanych warstw i korelujemy strumień mionów z wysokością i ciśnieniem atmosferycznym podczas opadania."
        },
        whyMatters: {
          title: "Dlaczego to ważne",
          description: "Ta misja eksperymentalnie potwierdza efekty szczególnej teorii względności poprzez wykrywanie mionów i symuluje pomiary satelitarne w różnych warunkach atmosferycznych jak na innych planetach."
        }
      }
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