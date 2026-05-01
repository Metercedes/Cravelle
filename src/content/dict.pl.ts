// Polish (pl-PL) dictionary. Mirrors the shape of dict.en exactly.
// Slugs, ids, and registry codes are intentionally left untranslated because
// they double as URL anchors and structural keys.
//
// Any subsequent professional copy review should focus on tone (Cravelle's
// brand voice is formal-but-direct) rather than literal accuracy.

import type { Dict } from "../lib/i18n";

export const dictPl: Dict = {
  meta: {
    siteTitle: "Cravelle, B2B-owy pomost do Europy.",
    siteDescription:
      "Cravelle to działający z Polski pomost B2B łączący arabskojęzycznych dostawców, w szczególności egipskich eksporterów, z rynkiem europejskim — przez wsparcie eksportu, kontakty handlowe i koordynację wejścia na rynek.",
    pages: {
      home: {
        title: "Cravelle, B2B-owy pomost do Europy.",
        description:
          "Cravelle to działający z Polski pomost B2B łączący arabskojęzycznych dostawców, w szczególności egipskich eksporterów, z rynkiem europejskim — przez wsparcie eksportu, kontakty handlowe i koordynację wejścia na rynek.",
      },
      services: {
        title: "Usługi, Cravelle",
        description:
          "Trzy precyzyjnie określone usługi Cravelle: wsparcie eksportu i wejścia na rynek, koordynacja partnerstw B2B oraz pozyskiwanie dostawców dla branży hospitality i premium.",
      },
      sectors: {
        title: "Sektory, Cravelle",
        description:
          "Cravelle pracuje w wąskich, praktycznych sektorach: owoce, warzywa, produkty świeże, produkty rolne i wybrane partnerstwa handlowe w hospitality.",
      },
      about: {
        title: "O nas, Cravelle",
        description:
          "Cravelle to polska firma B2B specjalizująca się w handlu i partnerstwach, pomagająca arabskojęzycznym przedsiębiorstwom — zwłaszcza egipskim eksporterom — łączyć się z Europą.",
      },
      contact: {
        title: "Kontakt, Cravelle",
        description:
          "Prześlij zwięzły brief — odpowiadamy w ciągu dwóch dni roboczych. Linia bezpośrednia: +48 729 420 936. Biuro w Warszawie.",
      },
      legal: {
        title: "Informacje prawne, Cravelle",
        description:
          "Zakres usług Cravelle, ograniczenia, warunki współpracy, polityka prywatności, pliki cookie, prawo właściwe oraz dane rejestrowe spółki.",
      },
      notFound: {
        title: "Nie znaleziono, Cravelle",
        description: "Strona, której szukasz, nie istnieje w cravelle.co.",
      },
    },
  },

  nav: {
    primaryAria: "Nawigacja główna",
    home: "Start",
    services: "Usługi",
    sectors: "Sektory",
    about: "O nas",
    contact: "Kontakt",
    contactCta: "Kontakt",
    skipToContent: "Przejdź do treści",
    menu: "Menu",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    switchToDark: "Przełącz na tryb ciemny",
    switchToLight: "Przełącz na tryb jasny",
    darkTheme: "Tryb ciemny",
    lightTheme: "Tryb jasny",
    language: "Język",
    chooseLanguage: "Wybierz język",
  },

  hero: {
    eyebrow: "Warszawa, Polska. Dla arabskojęzycznych eksporterów.",
    titlePrefix: "Pomost B2B do ",
    titleAccent: "Europy",
    titleSuffix: ".",
    body: "Wsparcie eksportu, kontakty handlowe i koordynacja wejścia na rynek dla arabskojęzycznych dostawców otwierających działalność w Europie.",
    ctaPrimary: "Omów możliwość eksportu",
    ctaSecondary: "Zobacz trzy usługi",
  },

  servicesSection: {
    indexLabel: "01 / Usługi",
    eyebrow: "Co robimy",
    titleLine1: "Trzy precyzyjne usługi.",
    titleLine2: "Nic ponad to.",
    intro:
      "Cravelle łączy arabskojęzycznych dostawców z rynkiem europejskim. Każda usługa ma jasno określony zakres i wynik.",
    outcomeLabel: "Wynik",
  },

  audienceSection: {
    indexLabel: "02 / Odbiorcy",
    eyebrow: "Komu pomagamy",
    title:
      "Dla arabskojęzycznych eksporterów i europejskich partnerów, którzy od nich kupują.",
    intro:
      "Cravelle pracuje z firmami po obu stronach tej samej rozmowy. Brief zawsze jest handlowy, pisemny i konkretny.",
  },

  processSection: {
    indexLabel: "03 / Metoda",
    eyebrow: "Jak pracujemy",
    title: "Praktyczna, opisana, sześciostopniowa metoda.",
    intro:
      "Każda współpraca przebiega według tej samej, opisanej sekwencji, dzięki czemu obie strony widzą trasę, tempo i moment, w którym przejmują wykwalifikowani specjaliści.",
  },

  whyCravelle: {
    indexLabel: "04 / Pozycjonowanie",
    eyebrow: "Dlaczego Cravelle",
    heading: "Skoncentrowany pomost B2B do Europy, zakotwiczony w Polsce.",
    points: [
      {
        title: "Dwujęzyczność i kontekst kulturowy",
        body: "Angielski i arabski. Praktyczne zrozumienie tego, jak strony egipskie i europejskie zawierają transakcje.",
      },
      {
        title: "Obecność w Polsce",
        body: "Fizyczny adres w Warszawie, wskazany rozmówca i osobiste prowadzenie sprawy.",
      },
      {
        title: "Praktyczna koordynacja handlowa",
        body: "Pisemne briefy, wskazani kontrahenci, czysty zapis tego, co zostało ustalone.",
      },
      {
        title: "Doprowadzenie sprawy do końca",
        body: "Pozostajemy w temacie, aż relacja zacznie funkcjonować.",
      },
      {
        title: "Skupione pozycjonowanie B2B",
        body: "Jedna rzecz: właściwy produkt, właściwy kanał, właściwi ludzie — do Europy.",
      },
    ],
  },

  gallery: {
    indexLabel: "05 / Atmosfera",
    eyebrow: "Gdzie pracujemy",
    title: "Świat, w którym porusza się Cravelle.",
    intro:
      "Sześć wizualnych notatek z tras, którymi działa Cravelle — od egipskiej produkcji po europejskie sieci kupujących, z Warszawą jako punktem zakotwiczenia.",
    cards: [
      {
        sector: "Produkty świeże",
        title: "Skrzynki gotowe do Europy.",
        note: "Egipskie ładunki owoców i warzyw przygotowane zgodnie ze specyfikacją europejskiego handlu detalicznego i hurtowego.",
        cover: "Zarys ułożonych skrzynek z produktami",
      },
      {
        sector: "Warzywa",
        title: "Z pól do hurtowni.",
        note: "Świeże warzywa odpowiadające europejskiemu popytowi detalicznemu, z uznanych egipskich gospodarstw.",
        cover: "Stylizowane rzędy upraw biegnące ku horyzontowi",
      },
      {
        sector: "Hospitality",
        title: "Lounge i lokale premium.",
        note: "Wsparcie zakupowe, kontakty z dostawcami i koordynacja szkoleń dla hoteli, barów i lounge'y cygarowych.",
        cover: "Abstrakcyjny lounge z dymem i barową półką",
        eyebrow: "AFTER HOURS",
      },
      {
        sector: "Egipskie źródła",
        title: "Tam, gdzie zaczyna się dostawa.",
        note: "Uznani egipscy producenci i domy handlowe z wiarygodnym wolumenem na rynek europejski.",
        cover: "Słońce nad trójkątną sylwetką",
      },
      {
        sector: "Logistyka",
        title: "Trasy handlowe do Europy.",
        note: "Trasy morskie i lądowe z Afryki Północnej do polskich i unijnych sieci kupujących, koordynowane od początku do końca.",
        cover: "Łuk trasy handlowej między dwoma portami",
      },
      {
        sector: "Polska kotwica",
        title: "Warszawa na linii.",
        note: "Zarejestrowana polska spółka z fizycznym adresem, wskazanym rozmówcą i praktyczną zdolnością do prowadzenia sprawy lokalnie.",
        cover: "Mapa redakcyjna ze znacznikiem Warszawy",
      },
    ],
  },

  cta: {
    indexLabel: "06 / Kontakt",
    location: "Warszawa, Polska",
    title: "Porozmawiaj z Cravelle.",
    body:
      "Prześlij zwięzły brief — kraj, produkt lub sektor i to, co chcesz zrobić w Europie. Odpowiadamy w ciągu dwóch dni roboczych.",
    primary: "Wyślij zapytanie handlowe",
    directLines: "Linie bezpośrednie",
    whatsapp: "WhatsApp",
    hours: "Pn–Pt, 09:00–18:00 CET / CEST.",
  },

  disclaimer: {
    eyebrow: "Zakres usług",
    text:
      "Cravelle świadczy usługi koordynacji handlowej, kontaktów biznesowych i wsparcia operacyjnego. Nie udziela porad prawnych, podatkowych, celnych, imigracyjnych, finansowych ani inwestycyjnych — chyba że są one realizowane przez odpowiednio wykwalifikowanych zewnętrznych specjalistów.",
    aria: "Zastrzeżenie dotyczące zakresu usług",
  },

  servicesPage: {
    indexLabel: "Indeks / Usługi",
    countSuffix: "usługi",
    title: "Co robi Cravelle.",
    intro: "Trzy określone zlecenia handlowe. Każde z jasnym zakresem i jasnym wynikiem.",
    jumpAria: "Skoki po usługach",
    forLabel: "Dla",
    whatLabel: "Co robimy",
    outcomeLabel: "Wynik",
    pageOf: (i: number, total: number) => `${i} z ${total}`,
  },

  sectorsPage: {
    indexLabel: "Sektory",
    countSuffix: "kategorii",
    title: "Wąskie sektory. Realna wiedza handlowa.",
    intro:
      "Niewielki zestaw kategorii, w których Egipt i szerszy region mają wiarygodną podaż — a europejscy nabywcy realny popyt.",
    primary: "Omów brief sektorowy",
    secondary: "Zobacz usługi",
  },

  aboutPage: {
    indexLabel: "O nas",
    location: "Warszawa, Polska",
    title: "Skoncentrowana firma B2B robiąca jedną rzecz dobrze.",
    paragraphs: [
      "Cravelle to polska firma B2B, która pomaga arabskojęzycznym przedsiębiorstwom, w szczególności egipskim eksporterom, łączyć się z Europą — przez wsparcie eksportu, kontakty handlowe i koordynację wejścia na rynek.",
      "Rozmowa między arabskojęzycznym dostawcą a europejskim nabywcą to rzadko sama translacja. To koordynacja handlowa — dopasowanie produktu, kanału i ludzi, a potem prowadzenie tematu, aż relacja zacznie działać.",
      "Nie jesteśmy kancelarią prawną, biurem rachunkowym ani agencją celną. Tam, gdzie potrzebny jest wykwalifikowany specjalista, briefujemy zewnętrznego praktyka zakontraktowanego przez właściwą stronę.",
    ],
    primary: "Zobacz usługi",
    secondary: "Wyślij zapytanie handlowe",
    coreLaneLabel: "Kluczowy korytarz rynkowy",
    coreLaneBody: "Egipt i arabskojęzyczni dostawcy do Polski i Europy.",
    languagesLabel: "Języki robocze",
    languagesBody:
      "Pracujemy po angielsku. Po arabsku. Po polsku po stronie lokalnej. Inne języki obsługujemy przez sprawdzonych zewnętrznych tłumaczy, gdy sprawa tego wymaga.",
    credibleLabel: "Co stanowi o wiarygodności",
    credibleBody:
      "Zarejestrowana polska spółka z fizycznym adresem w Warszawie, wskazanym rozmówcą oraz praktyczną zdolnością uczestniczenia w spotkaniach, prowadzenia sprawy lokalnie i utrzymywania relacji w ruchu.",
  },

  contactPage: {
    indexLabel: "Kontakt",
    location: "Warszawa, Polska",
    heading: "Porozmawiaj z Cravelle.",
    intro:
      "Odpowiadamy w ciągu dwóch dni roboczych. Prześlij najpierw kontekst pisemnie, aby rozmowa była wartościowa dla obu stron.",
    directLines: "Linie bezpośrednie",
    whatsapp: "WhatsApp",
    hours: "Pn–Pt, 09:00–18:00 CET / CEST.",
    officeLabel: "Biuro",
  },

  contactForm: {
    fields: {
      name: "Imię i nazwisko",
      company: "Firma",
      country: "Kraj",
      email: "E-mail",
      phone: "WhatsApp lub telefon",
      businessType: "Typ działalności",
      productOrSector: "Produkt lub sektor",
      targetMarket: "Rynek docelowy",
      message: "Wiadomość",
    },
    selectPlaceholder: "Wybierz…",
    messagePlaceholder:
      "Kraj pochodzenia, produkt lub sektor, co chcesz zrobić w Europie i jakie są ewentualne ograniczenia.",
    privacyNote:
      "Wysyłając ten formularz, zgadzasz się, że możemy wykorzystać podane informacje wyłącznie w celu udzielenia odpowiedzi i przygotowania rzeczowego wsparcia. Nie udostępniamy zapytań osobom trzecim bez Twojej zgody.",
    submit: "Wyślij brief",
    submitting: "Wysyłanie…",
    fallbackEmailPrefix: "lub napisz na ",
    successEyebrow: "Wiadomość otrzymana",
    successTitle: "Dziękujemy. Mamy Twój brief.",
    successBodyPrefix: "Odpowiedź przyjdzie z adresu ",
    successBodySuffix: " w ciągu dwóch dni roboczych. Jeśli sprawa jest pilna, zadzwoń na ",
    errorMessageDefault:
      "Nie udało się wysłać wiadomości. Prosimy o kontakt mailowy.",
    errorNetwork: "Błąd sieci. Prosimy o kontakt mailowy.",
    errorGeneric: "Coś poszło nie tak.",
    businessTypes: [
      "Producent",
      "Eksporter",
      "Importer lub dystrybutor",
      "Dom handlowy",
      "Nabywca z branży hospitality",
      "Usługodawca",
      "Inne",
    ],
    targetMarkets: [
      "Polska",
      "Unia Europejska (szerzej)",
      "Polska i szersza UE",
      "Inne",
    ],
  },

  servicePillars: [
    {
      number: "01",
      slug: "export-and-market-entry",
      title: "Wsparcie eksportu i wejścia na rynek",
      shortTitle: "Eksport i wejście na rynek",
      forWhom:
        "Arabskojęzyczni eksporterzy, w szczególności egipscy producenci, wchodzący do Polski i szerszej Europy.",
      whatWeDo: [
        "Koordynacja wejścia na rynek według produktu lub kategorii",
        "Kontakty handlowe z wiarygodnymi europejskimi kontrahentami",
        "Reprezentacja po stronie polskiej w spotkaniach i kontaktach",
        "Prowadzenie procesu przez kolejne praktyczne kroki",
      ],
      outcome:
        "Udokumentowany plan wejścia, wskazani kontrahenci i jeden punkt kontaktu w Warszawie.",
      cta: "Omów możliwość eksportu",
    },
    {
      number: "02",
      slug: "b2b-partnership-facilitation",
      title: "Koordynacja partnerstw B2B",
      shortTitle: "Partnerstwa B2B",
      forWhom:
        "Relacje, które potrzebują zaufanego łącznika między stroną arabskojęzyczną a europejskim nabywcą lub dostawcą.",
      whatWeDo: [
        "Kontakty kupujący–dostawca z pisemnym kontekstem",
        "Pozyskiwanie dostawców w UE i poza nią",
        "Wsparcie negocjacji i komunikacji w wielu językach",
        "Bieżąca koordynacja relacji po jej uruchomieniu",
      ],
      outcome:
        "Działająca relacja B2B z określonym rytmem i wskazanym koordynatorem.",
      cta: "Rozpocznij wprowadzenie B2B",
    },
    {
      number: "03",
      slug: "hospitality-and-premium-supplier-sourcing",
      title: "Hospitality i pozyskiwanie dostawców premium",
      shortTitle: "Hospitality",
      forWhom:
        "Hotele, lounge'y, restauracje i wybrane lokale premium potrzebujące specjalistycznych kontaktów z dostawcami.",
      whatWeDo: [
        "Wsparcie zakupowe w określonych kategoriach hospitality",
        "Kontakty z dostawcami premium w Europie i poza nią",
        "Partnerstwa handlowe między lokalami a dostawcami",
        "Koordynacja szkoleń przez sprawdzonych zewnętrznych trenerów",
      ],
      outcome:
        "Krótka lista zweryfikowanych dostawców, zaplanowane spotkania i uporządkowane przekazanie.",
      cta: "Wyślij brief hospitality",
    },
  ],

  audiences: [
    {
      id: "egyptian-exporters",
      label: "Egipscy eksporterzy",
      note: "Producenci i domy handlowe gotowi na Polskę i szerszą UE.",
    },
    {
      id: "arabic-suppliers",
      label: "Arabskojęzyczni dostawcy",
      note: "Dostawcy poszukujący wiarygodnego europejskiego kontrahenta.",
    },
    {
      id: "hospitality",
      label: "Firmy z branży hospitality",
      note: "Hotele, lounge'y, restauracje i lokale szukające specjalistycznych dostawców.",
    },
    {
      id: "european-buyers",
      label: "Europejscy nabywcy",
      note: "Polscy i unijni nabywcy szukający zweryfikowanej podaży z Egiptu i regionu.",
    },
    {
      id: "b2b-partners",
      label: "Partnerzy B2B",
      note: "Firmy po obu stronach, które potrzebują zaufanego łącznika handlowego.",
    },
  ],

  sectors: [
    {
      id: "fruits",
      title: "Owoce",
      note: "Świeże i sezonowe owoce odpowiadające europejskiemu popytowi, z uznanych źródeł.",
    },
    {
      id: "vegetables",
      title: "Warzywa",
      note: "Świeże warzywa zgodne ze specyfikacją europejskiego handlu detalicznego i hurtowego.",
    },
    {
      id: "fresh-produce",
      title: "Produkty świeże",
      note: "Szersze kategorie produktów świeżych, w których oczekiwania kupującego i dostawcy są jasne.",
    },
    {
      id: "agricultural-products",
      title: "Produkty rolne",
      note: "Wybrane produkty rolne, w których Egipt i szerszy region oferują wiarygodną podaż.",
    },
    {
      id: "hospitality",
      title: "Hospitality (wybrane partnerstwa)",
      note: "Wsparcie zakupowe i kontakty z dostawcami dla hoteli, lounge'y, restauracji i lokali premium.",
    },
  ],

  processSteps: [
    {
      n: "01",
      title: "Zrozumieć szansę",
      body: "Krótki brief, jedna rozmowa, klarowna notatka o sukcesie i zakresie.",
    },
    {
      n: "02",
      title: "Zweryfikować kierunek handlowy",
      body: "Potwierdzamy popyt, logikę cenową, profil kontrahenta i oczywiste blokady.",
    },
    {
      n: "03",
      title: "Przygotować outreach",
      body: "Dopasowane wprowadzenia i pisemny kontekst dla obu stron.",
    },
    {
      n: "04",
      title: "Połączyć właściwe strony",
      body: "Bezpośrednie, imienne wprowadzenia z pisemnym kontekstem dla obu stron.",
    },
    {
      n: "05",
      title: "Skoordynować spotkania i kontakty",
      body: "Pilnujemy rytmu, notatek i listy zadań.",
    },
    {
      n: "06",
      title: "Przekazać do wykwalifikowanych specjalistów",
      body: "Gdy krok wymaga prawnika, księgowego lub agenta celnego, briefujemy ich i zostajemy w temacie.",
    },
  ],

  legalPage: {
    indexLabel: "Informacje prawne",
    lastUpdated: "Ostatnia aktualizacja: kwiecień 2026",
    title: "Informacje prawne i zastrzeżenia.",
    intro:
      "W prostym języku. Warunki, na jakich Cravelle podejmuje pracę i przetwarza Twoje zapytanie, oraz dane rejestrowe spółki do weryfikacji.",
    sectionsAria: "Nawigacja po sekcjach",
    sectionsLabel: "Sekcje",
    registryTitle: "8. Dane rejestrowe spółki",
    registryIntro:
      "W celach weryfikacyjnych poniżej publikujemy dane rejestrowe spółki operującej.",
    registryLink: "8. Dane rejestrowe spółki",
    sections: [
      {
        id: "scope",
        title: "1. Zakres usług",
        body: [
          "Cravelle świadczy usługi koordynacji handlowej, kontaktów biznesowych i wsparcia operacyjnego. Nie udziela porad prawnych, podatkowych, celnych, imigracyjnych, finansowych ani inwestycyjnych — chyba że są one realizowane przez odpowiednio wykwalifikowanych zewnętrznych specjalistów.",
          "Cravelle działa jako koordynator handlowy. Nie przedstawia się jako kancelaria prawna, biuro rachunkowe, agencja celna, agencja imigracyjna, pośrednik finansowy ani przedstawiciel administracji publicznej. Tam, gdzie sprawa wymaga pracy regulowanej, Cravelle koordynuje współpracę z wykwalifikowanymi zewnętrznymi specjalistami, którzy zostali zakontraktowani przez właściwą stronę.",
        ],
      },
      {
        id: "no-guarantees",
        title: "2. Wyniki i ich ograniczenia",
        body: [
          "Cravelle nie gwarantuje wyników handlowych. Negocjacje, umowy, rejestracje, zezwolenia i licencje zależą od kontrahentów, regulatorów i organów pozostających poza naszą kontrolą.",
          "Stwierdzenia dotyczące Polski, Unii Europejskiej lub państw trzecich odzwierciedlają nasze rozsądne rozumienie w chwili pisania. Nie zastępują konkretnej porady wykwalifikowanego specjalisty zaangażowanego do danej sprawy.",
        ],
      },
      {
        id: "engagements",
        title: "3. Współpraca i wynagrodzenia",
        body: [
          "Każda praca handlowa prowadzona jest na podstawie pisemnej umowy określającej zakres, rezultaty, wynagrodzenie i warunki rozwiązania. Wymiana e-maili, rozmów ani materiałów wprowadzających nie stanowi nawiązania stosunku zlecenia.",
          "Tam, gdzie jest to wymagane, wystawiamy faktury VAT zgodnie z prawem polskim z poziomu Cravelle Sp. z o.o.",
        ],
      },
      {
        id: "privacy",
        title: "4. Prywatność",
        body: [
          "Kontaktując się z nami, przetwarzamy podane przez Ciebie dane osobowe (zwykle imię i nazwisko, firma, e-mail, telefon, kraj, treść wiadomości) wyłącznie w celu udzielenia odpowiedzi i oceny, czy możemy być pomocni. Nie sprzedajemy ani nie wynajmujemy danych osobowych. Administratorem jest Cravelle Sp. z o.o., ul. Wiślana 8, 00-317 Warszawa, Polska.",
          "Możesz wystąpić o dostęp, sprostowanie, usunięcie lub przeniesienie swoich danych osobowych, pisząc na cravelle.co@protonmail.com. Zapisy zapytań przechowujemy tak długo, jak to konieczne dla obsługi relacji i zgodności z prawem.",
          "Korzystamy z zewnętrznego dostawcy formularzy (Formspree) do odbioru zapytań oraz z dostawcy hostingu (Netlify), który dostarcza tę witrynę. Przetwarzają oni dane techniczne, takie jak logi żądań, w ramach świadczenia usługi.",
        ],
      },
      {
        id: "cookies",
        title: "5. Pliki cookie i analityka",
        body: [
          "Ta witryna nie ustawia plików cookie marketingowych ani śledzących. Domyślnie podąża za jasnym lub ciemnym wyglądem systemu operacyjnego (prefers-color-scheme), bez zapisywania danych. Dwa wpisy localStorage powstają tylko wtedy, gdy dokonasz wyboru: cravelle:theme zapamiętuje preferencję jasny/ciemny, a cravelle:locale zapamiętuje wybrany język. Żadne inne wpisy localStorage, sessionStorage ani cookies nie są ustawiane.",
          "Jeśli w przyszłości wprowadzimy analitykę przyjazną prywatności, zaktualizujemy tę stronę i — jeśli jest to wymagane — poprosimy o zgodę.",
        ],
      },
      {
        id: "ip",
        title: "6. Znaki towarowe i treści",
        body: [
          "Nazwa Cravelle, logo i układy graficzne tej witryny są własnością Cravelle Sp. z o.o. Inne nazwy, marki i loga należą do ich właścicieli i są przywoływane wyłącznie w celach identyfikacyjnych.",
        ],
      },
      {
        id: "law",
        title: "7. Prawo właściwe",
        body: [
          "Niniejsze warunki podlegają prawu Rzeczypospolitej Polskiej. Spory rozstrzygane są przez sądy właściwe dla siedziby Cravelle Sp. z o.o., w zakresie dopuszczonym przez bezwzględnie obowiązujące przepisy o ochronie konsumentów.",
        ],
      },
    ],
    registryLabels: {
      legalName: "Nazwa prawna",
      office: "Siedziba",
      nip: "NIP",
      krs: "KRS",
      regon: "REGON",
      pkd: "Główny PKD",
      eDor: "e-Doręczenia",
    },
  },

  notFoundPage: {
    eyebrow: "404, nie znaleziono trasy",
    title: "Ta strona nie istnieje.",
    body: "Skorzystaj z poniższych tras lub wróć na stronę główną.",
    home: "Start",
    services: "Usługi",
    contact: "Kontakt",
  },

  footer: {
    siteHeading: "Witryna",
    officeHeading: "Biuro",
    rights: "Wszelkie prawa zastrzeżone.",
    legal: "Informacje prawne i zastrzeżenia",
  },
};
