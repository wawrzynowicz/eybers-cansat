import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      mission: "Mission",
      project: "Project",
      team: "Team",
      docs: "Documentation",
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
    docs: {
      sectionTitle: "Technical Documentation",
      heading: "Project Documentation",
      description: "Comprehensive technical and scientific documentation for the EYBERS muon detection satellite project.",
      design: {
        title: "Satellite Design",
        overview: {
          title: "Overview",
          content: "The EYBERS-1 satellite follows the CanSat standard format, designed as a compact cylindrical unit measuring 66mm in diameter and 115mm in height. The total mass is carefully optimized to remain between 300-350 grams, ensuring compliance with competition requirements while maximizing scientific capability."
        },
        structure: {
          title: "Physical Structure",
          content: "The satellite structure consists of a lightweight aluminum frame with precision-machined components. The design incorporates multiple internal compartments to house various subsystems while maintaining structural integrity during launch and descent.",
          items: [
            "Outer shell: Aluminum alloy construction",
            "Internal bays: Modular compartments for electronics",
            "Thermal management: Passive cooling via heat-conductive materials",
            "Mounting points: Secure attachment for parachute and sensors"
          ]
        },
        systems: {
          title: "Key Subsystems",
          items: [
            "Power system: Rechargeable lithium-polymer battery with voltage regulation",
            "Communication: LoRa 433 MHz radio module for long-range data transmission",
            "Onboard computer: Microcontroller for data processing and system control",
            "Sensors: Barometer, GPS, temperature, and accelerometer"
          ]
        }
      },
      detection: {
        title: "Muon Detection Technology",
        principle: {
          title: "Detection Principle",
          content: "Our muon detection system utilizes scintillation detectors, which emit light when charged particles pass through them. Cosmic muons, traveling at near-light speeds, interact with the scintillator material, producing measurable photon signals that are converted to electrical pulses."
        },
        hardware: {
          title: "Hardware Components",
          items: [
            "Scintillator panels: Organic plastic scintillator material",
            "Photomultiplier tubes: Convert light signals to electrical current",
            "Signal processing: Amplification and noise filtering circuits",
            "Data acquisition: High-speed ADC for signal digitization"
          ]
        },
        calibration: {
          title: "Calibration & Testing",
          content: "The detector system undergoes extensive ground-based calibration using known radiation sources and cosmic ray measurements. We compare our readings with reference instruments to ensure accuracy and reliability. Environmental testing includes temperature cycling and vibration tests to simulate launch conditions."
        }
      },
      objectives: {
        title: "Scientific Objectives",
        primary: {
          title: "Primary Mission",
          content: "The primary objective is to measure cosmic muon flux at various altitudes during the satellite's descent. This data will help us understand how muon intensity changes with atmospheric depth and validate theoretical models of cosmic ray interactions."
        },
        secondary: {
          title: "Secondary Objectives",
          items: [
            "Characterize muon energy spectrum at different altitudes",
            "Study atmospheric absorption effects on cosmic rays",
            "Validate detector performance in real flight conditions",
            "Correlate muon flux with atmospheric parameters"
          ]
        },
        research: {
          title: "Research Questions",
          content: "Our mission aims to answer key questions about cosmic ray propagation: How does muon flux vary with altitude? What is the relationship between atmospheric pressure and muon detection rates? Can we observe directional variations in muon arrival angles?"
        }
      },
      mission: {
        title: "Mission Plan",
        launch: {
          title: "Launch & Ascent",
          content: "The satellite will be launched via rocket to an altitude of approximately 1 kilometer. During ascent, the system performs pre-flight checks and initializes all sensors. The communication link with the ground station is established and tested."
        },
        deployment: {
          title: "Deployment Phase",
          content: "At apogee, the satellite separates from the rocket and begins its descent. The parachute deploys automatically to control descent rate, ensuring stable flight conditions for data collection. All scientific instruments activate and begin recording measurements."
        },
        descent: {
          title: "Descent & Data Collection",
          content: "During the descent phase lasting approximately 10-15 minutes, the satellite continuously measures muon flux, atmospheric parameters, and positional data. All measurements are timestamped and transmitted in real-time to the ground station while also being stored onboard."
        },
        recovery: {
          title: "Landing & Recovery",
          content: "Upon landing, the GPS beacon activates to facilitate recovery. The satellite is designed to survive impact and protect the stored data. Post-flight analysis includes downloading all recorded data and performing hardware inspection."
        }
      },
      outcomes: {
        title: "Expected Outcomes",
        data: {
          title: "Data Products",
          items: [
            "Altitude-dependent muon flux profiles",
            "Time-series data of cosmic ray detection events",
            "Correlation between atmospheric conditions and muon rates",
            "Detector performance metrics in flight conditions"
          ]
        },
        scientific: {
          title: "Scientific Impact",
          content: "This mission will contribute valuable data to the understanding of cosmic ray interactions with Earth's atmosphere. The results will be shared with the scientific community and can be used for educational purposes, demonstrating real-world applications of particle physics."
        },
        technical: {
          title: "Technical Achievements",
          content: "Successfully completing this mission will demonstrate our team's capability in systems engineering, electronics design, software development, and project management. The experience gained will be invaluable for future aerospace projects and careers in STEM fields."
        }
      }
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
      docs: "Dokumentacja",
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
    docs: {
      sectionTitle: "Dokumentacja Techniczna",
      heading: "Dokumentacja Projektu",
      description: "Kompleksowa dokumentacja techniczna i naukowa projektu satelity EYBERS do wykrywania mionów.",
      design: {
        title: "Projekt Satelity",
        overview: {
          title: "Przegląd",
          content: "Satelita EYBERS-1 jest zgodny ze standardem CanSat, zaprojektowany jako kompaktowa jednostka cylindryczna o średnicy 66 mm i wysokości 115 mm. Całkowita masa jest starannie zoptymalizowana, aby pozostać w przedziale 300-350 gramów, zapewniając zgodność z wymaganiami konkursu przy jednoczesnym maksymalizowaniu możliwości naukowych."
        },
        structure: {
          title: "Struktura Fizyczna",
          content: "Struktura satelity składa się z lekkiej ramy aluminiowej z precyzyjnie obrobionymi komponentami. Projekt obejmuje wiele wewnętrznych przedziałów do pomieszczenia różnych podsystemów, zachowując integralność strukturalną podczas startu i opadania.",
          items: [
            "Obudowa zewnętrzna: Konstrukcja ze stopu aluminium",
            "Przedziały wewnętrzne: Modułowe komory dla elektroniki",
            "Zarządzanie termiczne: Pasywne chłodzenie przez materiały przewodzące ciepło",
            "Punkty montażowe: Bezpieczne mocowanie spadochronu i czujników"
          ]
        },
        systems: {
          title: "Kluczowe Podsystemy",
          items: [
            "System zasilania: Akumulator litowo-polimerowy z regulacją napięcia",
            "Komunikacja: Moduł radiowy LoRa 433 MHz do transmisji danych na duże odległości",
            "Komputer pokładowy: Mikrokontroler do przetwarzania danych i sterowania systemem",
            "Czujniki: Barometr, GPS, temperatura i akcelerometr"
          ]
        }
      },
      detection: {
        title: "Technologia Wykrywania Mionów",
        principle: {
          title: "Zasada Wykrywania",
          content: "Nasz system wykrywania mionów wykorzystuje detektory scyntylacyjne, które emitują światło, gdy naładowane cząstki przez nie przechodzą. Miony kosmiczne, poruszające się z prędkościami bliskimi prędkości światła, wchodzą w interakcję z materiałem scyntylatora, wytwarzając mierzalne sygnały fotonowe, które są konwertowane na impulsy elektryczne."
        },
        hardware: {
          title: "Komponenty Sprzętowe",
          items: [
            "Panele scyntylacyjne: Organiczny materiał scyntylacyjny z tworzywa sztucznego",
            "Fotopowielacze: Konwersja sygnałów świetlnych na prąd elektryczny",
            "Przetwarzanie sygnału: Układy wzmacniające i filtrujące szumy",
            "Akwizycja danych: Szybki ADC do cyfryzacji sygnału"
          ]
        },
        calibration: {
          title: "Kalibracja i Testowanie",
          content: "System detektora przechodzi rozległą kalibrację naziemną z wykorzystaniem znanych źródeł promieniowania i pomiarów promieniowania kosmicznego. Porównujemy nasze odczyty z instrumentami referencyjnymi, aby zapewnić dokładność i niezawodność. Testy środowiskowe obejmują cykle temperaturowe i testy wibracyjne symulujące warunki startu."
        }
      },
      objectives: {
        title: "Cele Naukowe",
        primary: {
          title: "Misja Podstawowa",
          content: "Głównym celem jest pomiar strumienia mionów kosmicznych na różnych wysokościach podczas opadania satelity. Te dane pomogą nam zrozumieć, jak intensywność mionów zmienia się wraz z głębokością atmosferyczną i zwalidować teoretyczne modele interakcji promieniowania kosmicznego."
        },
        secondary: {
          title: "Cele Dodatkowe",
          items: [
            "Charakteryzacja widma energii mionów na różnych wysokościach",
            "Badanie efektów absorpcji atmosferycznej na promienie kosmiczne",
            "Walidacja wydajności detektora w rzeczywistych warunkach lotu",
            "Korelacja strumienia mionów z parametrami atmosferycznymi"
          ]
        },
        research: {
          title: "Pytania Badawcze",
          content: "Nasza misja ma na celu odpowiedź na kluczowe pytania dotyczące propagacji promieniowania kosmicznego: Jak strumień mionów zmienia się z wysokością? Jaka jest relacja między ciśnieniem atmosferycznym a wskaźnikami wykrywania mionów? Czy możemy zaobserwować kierunkowe zmiany w kątach nadejścia mionów?"
        }
      },
      mission: {
        title: "Plan Misji",
        launch: {
          title: "Start i Wznoszenie",
          content: "Satelita zostanie wystrzelony rakietą na wysokość około 1 kilometra. Podczas wznoszenia system przeprowadza kontrole przedstartowe i inicjalizuje wszystkie czujniki. Łącze komunikacyjne ze stacją naziemną jest ustanawiane i testowane."
        },
        deployment: {
          title: "Faza Rozmieszczenia",
          content: "W apogeum satelita oddziela się od rakiety i rozpoczyna opadanie. Spadochron rozłożony automatycznie kontroluje prędkość opadania, zapewniając stabilne warunki lotu do zbierania danych. Wszystkie instrumenty naukowe aktywują się i rozpoczynają rejestrację pomiarów."
        },
        descent: {
          title: "Opadanie i Zbieranie Danych",
          content: "Podczas fazy opadania trwającej około 10-15 minut satelita nieustannie mierzy strumień mionów, parametry atmosferyczne i dane pozycyjne. Wszystkie pomiary są oznaczane czasowo i transmitowane w czasie rzeczywistym do stacji naziemnej, a także zapisywane na pokładzie."
        },
        recovery: {
          title: "Lądowanie i Odzyskanie",
          content: "Po lądowaniu aktywuje się sygnał GPS ułatwiający odzyskanie. Satelita jest zaprojektowany tak, aby przetrwać uderzenie i chronić zapisane dane. Analiza po locie obejmuje pobieranie wszystkich zarejestrowanych danych i przeprowadzenie inspekcji sprzętu."
        }
      },
      outcomes: {
        title: "Oczekiwane Wyniki",
        data: {
          title: "Produkty Danych",
          items: [
            "Profile strumienia mionów zależne od wysokości",
            "Dane szeregów czasowych zdarzeń wykrywania promieniowania kosmicznego",
            "Korelacja między warunkami atmosferycznymi a wskaźnikami mionów",
            "Metryki wydajności detektora w warunkach lotu"
          ]
        },
        scientific: {
          title: "Wpływ Naukowy",
          content: "Ta misja wniesie cenne dane do zrozumienia interakcji promieniowania kosmicznego z atmosferą Ziemi. Wyniki zostaną udostępnione społeczności naukowej i mogą być wykorzystane do celów edukacyjnych, демонstrując rzeczywiste zastosowania fizyki cząstek."
        },
        technical: {
          title: "Osiągnięcia Techniczne",
          content: "Pomyślne ukończenie tej misji zademonstruje zdolności naszego zespołu w inżynierii systemów, projektowaniu elektroniki, tworzeniu oprogramowania i zarządzaniu projektami. Zdobyte doświadczenie będzie nieocenione dla przyszłych projektów lotniczych i karier w dziedzinach STEM."
        }
      }
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