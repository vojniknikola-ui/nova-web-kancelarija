import { Locale } from '../i18n-config';

type Dictionary = {
  navigation: {
    home: string;
    about: string;
    lawviewer: string;
    news: string;
    contact: string;
    booking: string;
    privacy: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    geoOptimized: string;
    geoDescription: string;
    geoDetails: string;
  };
  about: {
    heading: string;
    mission: string;
    founderHeading: string;
    founderBio: string;
    founderApproach: string;
    memberships: string;
    values: string;
    membershipsList: string[];
    valuesList: string[];
    founderName: string;
    founderTitle: string;
  };
  contact: {
    heading: string;
    subheading: string;
    formTitle: string;
    detailsTitle: string;
    formDescription: string;
    workingHours: string;
  };
  home: {
    services: string[];
    process: string;
    processSteps: string[];
    cta: string;
    ctaDescription: string;
    callUs: string;
    writeUs: string;
  };
  footer: {
    quickLinks: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
  };
  contactForm: {
    name: string;
    email: string;
    phone: string;
    message: string;
    sending: string;
    sendMessage: string;
    success: string;
    error: string;
  };
  booking: {
    heading: string;
    subheading: string;
    formTitle: string;
    detailsTitle: string;
    formDescription: string;
  };
  bookingForm: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    service: string;
    message: string;
    sending: string;
    bookAppointment: string;
    success: string;
    error: string;
  };
  practiceAreas: {
    heading: string;
    areas: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    heading: string;
    items: {
      quote: string;
      author: string;
    }[];
  };
  pdfDownload: {
    generating: string;
    download: string;
    error: string;
    retry: string;
  };
  mobileCall: {
    call: string;
  };
  lawviewer: {
    description: string;
  };
  api: {
    contact: {
      missingFields: string;
      messageReceived: string;
      newMessageSubject: string;
      emailBody: string;
      messageSent: string;
    };
    pdf: {
      lawNotFound: string;
      header: string;
      categoryYear: string;
      footer: string;
    };
  };
  privacy: {
    title: string;
    lastUpdated: string;
    introduction: string;
    dataCollection: string;
    dataUsage: string;
    dataSharing: string;
    dataRights: string;
    cookies: string;
    contact: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  bs: {
    navigation: {
      home: 'Početna',
      about: 'O nama',
      lawviewer: 'LawViewer',
      news: 'Vijesti',
      contact: 'Kontakt',
      booking: 'Zakazivanje',
      privacy: 'Privatnost',
    },
    hero: {
      title: 'Andrić Law – savremeno advokatsko iskustvo',
      subtitle:
        'Pružamo strateška pravna rješenja za preduzetnike, kompanije i pojedince u Bosni i Hercegovini.',
      cta: 'Zatražite konsultacije',
      geoOptimized: 'Geo optimizovano',
      geoDescription: 'Pravna kancelarija usklađena sa digitalnim očekivanjima klijenata.',
      geoDetails: 'Uključujemo lokalni SEO, strukturirane podatke i jasno istaknute CTA elemente kako bi vas klijenti lakše pronašli i kontaktirali.',
    },
    about: {
      heading: 'Odlučnost, transparentnost i posvećenost vašem slučaju',
      mission:
        'Naš pristup kombinuje dubinsko poznavanje domaćeg zakonodavstva i poslovne realnosti, uz naglasak na dostupnu i jasnu komunikaciju.',
      founderHeading: 'O osnivaču',
      founderBio: 'Advokat Amar Andrić specijalizovan je za poslovno, privredno i digitalno pravo. Tokom protekle decenije savjetovao je tehnološke kompanije, banke i startupe u regionalnim transakcijama.',
      founderApproach: 'U radu kombinujemo precizna pravna rješenja sa razumijevanjem poslovnih ciljeva. Svaki angažman započinje mapom rizika i predlogom prioriteta.',
      memberships: 'Članstva',
      values: 'Vrijednosti',
      membershipsList: ['Advokatska komora Federacije BiH', 'Udruženje za arbitražu u JIE'],
      valuesList: ['Transparentna komunikacija', 'Digitalna dostupnost', 'Diskrecija i lojalnost'],
      founderName: 'Amar Andrić',
      founderTitle: 'Osnivač / Attorney at Law',
    },
    contact: {
      heading: 'Stupite u kontakt',
      subheading: 'Otvoreni smo za telefonske pozive, e-mail i susrete u kancelariji.',
      formTitle: 'Pošaljite poruku',
      detailsTitle: 'Kontakt podaci',
      formDescription: 'Odgovaramo u roku od jednog radnog dana. Vaši podaci su zaštićeni i koriste se isključivo za povratni kontakt.',
      workingHours: 'Radno vrijeme: Pon–Pet 09:00–17:00',
    },
    home: {
      services: ['Strategija digitalne vidljivosti i lokalni SEO', 'Strukturirane pravne analize prilagođene industriji', 'Jasne ponude i transparentni troškovi'],
      process: 'Proces rada',
      processSteps: ['1. Uvodni razgovor. Procjena ciljeva i hitnosti.', '2. Mapa rješenja. Dostavljamo pisani plan koraka.', '3. Implementacija. Transparentna komunikacija i izvještaji.'],
      cta: 'CTA',
      ctaDescription: 'Spremni ste za razgovor o narednom koraku? Zakazujemo konsultacije u roku od 24 sata i obezbjeđujemo plan koji objedinjuje pravnu sigurnost i poslovnu agilnost.',
      callUs: 'Pozovite nas',
      writeUs: 'Pišite nam',
    },
    footer: {
      quickLinks: 'Quick links',
      contact: 'Kontakt',
      address: 'Ulica Maršala Tita 12, 71000 Sarajevo',
      phone: 'Telefon',
      email: 'Email',
      copyright: '© {year} Andrić Law. Sva prava zadržana.',
    },
    contactForm: {
      name: 'Ime i prezime',
      email: 'Email',
      phone: 'Telefon',
      message: 'Poruka',
      sending: 'Slanje...',
      sendMessage: 'Pošalji poruku',
      success: 'Poruka je uspješno poslana.',
      error: 'Došlo je do greške. Pokušajte ponovo.',
    },
    booking: {
      heading: 'Zakazite konsultacije',
      subheading: 'Otvoreni smo za telefonske pozive, e-mail i zakazivanje termina u kancelariji.',
      formTitle: 'Zakazite termin',
      detailsTitle: 'Kontakt podaci',
      formDescription: 'Odgovaramo u roku od jednog radnog dana. Vaši podaci su zaštićeni i koriste se isključivo za povratni kontakt.',
    },
    bookingForm: {
      name: 'Ime i prezime',
      email: 'Email',
      phone: 'Telefon',
      date: 'Datum',
      time: 'Vrijeme',
      service: 'Vrsta usluge',
      message: 'Poruka',
      sending: 'Zakazivanje...',
      bookAppointment: 'Zakazite termin',
      success: 'Termin je uspješno zakazan.',
      error: 'Došlo je do greške. Pokušajte ponovo.',
    },
    practiceAreas: {
      heading: 'Ključne oblasti rada',
      areas: [
        {
          title: 'Poslovno pravo',
          description: 'Osnivanje kompanija, ugovori sa partnerima i usklađivanje sa propisima o zaštiti podataka.',
        },
        {
          title: 'Parnice i sporovi',
          description: 'Priprema strategije, zastupanje u privrednim sporovima i brzo reagovanje na privremene mjere.',
        },
        {
          title: 'Startupi i inovacije',
          description: 'Pravne smjernice za investicione runde, intelektualnu svojinu i internacionalizaciju poslovanja.',
        },
      ],
    },
    testimonials: {
      heading: 'Šta klijenti kažu',
      items: [
        {
          quote: 'Transparentan i pragmatičan pristup koji nam je omogućio da završimo transakciju bez dodatnih troškova i kašnjenja.',
          author: 'Aida, direktorica startup kompanije',
        },
        {
          quote: 'Brz odgovor i jasni savjeti pomogli su nam da zaštitimo poslovnu reputaciju tokom spora.',
          author: 'Milan, vlasnik distributerske firme',
        },
      ],
    },
    pdfDownload: {
      generating: 'Generišem PDF...',
      download: 'Preuzmi PDF',
      error: 'Neuspjelo generisanje PDF dokumenta',
      retry: 'Trenutno nije moguće generisati PDF. Molimo pokušajte ponovo.',
    },
    mobileCall: {
      call: 'Pozovi',
    },
    lawviewer: {
      description: 'Pregledajte aktuelne propise, brzo filtrirajte sadržaj i preuzmite PDF verziju sa vizuelnim identitetom kancelarije.',
    },
    api: {
      contact: {
        missingFields: 'Nedostaju obavezna polja.',
        messageReceived: 'Poruka je zaprimljena.',
        newMessageSubject: 'Nova poruka sa web stranice od {name}',
        emailBody: 'Ime: {name}\nEmail: {email}\nTelefon: {phone}\nPoruka: {message}',
        messageSent: 'Poruka je poslana.',
      },
      pdf: {
        lawNotFound: 'Nepostojeći zakon',
        header: 'Andrić Law – LawViewer',
        categoryYear: 'Kategorija: {category} | Godina: {year}',
        footer: '© Andrić Law | andriclaw.com',
      },
    },
    privacy: {
      title: 'Politika privatnosti',
      lastUpdated: 'Posljednje ažuriranje: {date}',
      introduction: 'Ova politika privatnosti opisuje kako Andrić Law prikuplja, koristi i štiti vaše lične podatke kada koristite našu web stranicu.',
      dataCollection: 'Prikupljanje podataka: Prikupljamo podatke koje nam dobrovoljno dostavite putem kontakt forme, uključujući ime, email, telefon i poruku.',
      dataUsage: 'Upotreba podataka: Vaši podaci se koriste isključivo za odgovor na vaše upite i pružanje pravnih usluga.',
      dataSharing: 'Dijeljenje podataka: Ne dijelimo vaše podatke sa trećim stranama bez vaše saglasnosti, osim ako je zakonom obavezno.',
      dataRights: 'Vaša prava: Imate pravo na pristup, ispravku i brisanje vaših podataka. Kontaktirajte nas za više informacija.',
      cookies: 'Kolačići: Koristimo kolačiće za poboljšanje vašeg iskustva na web stranici. Možete ih kontrolisati u postavkama vašeg pregledača.',
      contact: 'Kontakt: Za pitanja o ovoj politici, kontaktirajte nas na info@andriclaw.com.',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      lawviewer: 'LawViewer',
      news: 'News',
      contact: 'Contact',
      booking: 'Booking',
      privacy: 'Privacy',
    },
    hero: {
      title: 'Andrić Law – contemporary legal counsel',
      subtitle:
        'We deliver strategic legal solutions for entrepreneurs, companies, and individuals across Bosnia and Herzegovina.',
      cta: 'Request a consultation',
      geoOptimized: 'Geo optimized',
      geoDescription: 'Law firm aligned with digital client expectations.',
      geoDetails: 'We include local SEO, structured data, and clearly highlighted CTA elements so clients can find and contact you more easily.',
    },
    about: {
      heading: 'Determination, transparency, and commitment to your matter',
      mission:
        'Our method blends deep knowledge of local regulations with pragmatic business sense and clear communication.',
      founderHeading: 'About the founder',
      founderBio: 'Attorney Amar Andrić specializes in business, commercial, and digital law. Over the past decade, he has advised technology companies, banks, and startups in regional transactions.',
      founderApproach: 'We combine precise legal solutions with an understanding of business goals. Every engagement starts with a risk map and priority proposal.',
      memberships: 'Memberships',
      values: 'Values',
      membershipsList: ['Bar Association of the Federation of BiH', 'Arbitration Association in JIE'],
      valuesList: ['Transparent communication', 'Digital accessibility', 'Discretion and loyalty'],
      founderName: 'Amar Andrić',
      founderTitle: 'Founder / Attorney at Law',
    },
    contact: {
      heading: 'Get in touch',
      subheading: 'Reach us via phone, email, or visit our office.',
      formTitle: 'Send a message',
      detailsTitle: 'Contact details',
      formDescription: 'We respond within one business day. Your information is confidential and used solely to follow up.',
      workingHours: 'Working hours: Mon–Fri 09:00–17:00',
    },
    home: {
      services: ['Digital visibility strategy and local SEO', 'Structured legal analyses tailored to the industry', 'Clear offers and transparent costs'],
      process: 'Work process',
      processSteps: ['1. Initial conversation. Assessment of goals and urgency.', '2. Solution map. We deliver a written plan of steps.', '3. Implementation. Transparent communication and reports.'],
      cta: 'CTA',
      ctaDescription: 'Ready for a conversation about the next step? We schedule consultations within 24 hours and provide a plan that combines legal security and business agility.',
      callUs: 'Call us',
      writeUs: 'Write to us',
    },
    footer: {
      quickLinks: 'Quick links',
      contact: 'Contact',
      address: 'Ulica Maršala Tita 12, 71000 Sarajevo',
      phone: 'Phone',
      email: 'Email',
      copyright: '© {year} Andrić Law. All rights reserved.',
    },
    contactForm: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sending: 'Sending...',
      sendMessage: 'Send message',
      success: 'Message sent successfully.',
      error: 'An error occurred. Please try again.',
    },
    booking: {
      heading: 'Schedule a consultation',
      subheading: 'We are available for phone calls, emails, and appointment scheduling at the office.',
      formTitle: 'Book an appointment',
      detailsTitle: 'Contact details',
      formDescription: 'We respond within one business day. Your information is confidential and used solely to follow up.',
    },
    bookingForm: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      service: 'Service type',
      message: 'Message',
      sending: 'Booking...',
      bookAppointment: 'Book appointment',
      success: 'Appointment booked successfully.',
      error: 'An error occurred. Please try again.',
    },
    practiceAreas: {
      heading: 'Key practice areas',
      areas: [
        {
          title: 'Business law',
          description: 'Company formation, partner contracts, and compliance with data protection regulations.',
        },
        {
          title: 'Litigation and disputes',
          description: 'Strategy preparation, representation in commercial disputes, and quick response to interim measures.',
        },
        {
          title: 'Startups and innovations',
          description: 'Legal guidelines for investment rounds, intellectual property, and business internationalization.',
        },
      ],
    },
    testimonials: {
      heading: 'What clients say',
      items: [
        {
          quote: 'Transparent and pragmatic approach that allowed us to complete the transaction without additional costs and delays.',
          author: 'Aida, startup company director',
        },
        {
          quote: 'Quick response and clear advice helped us protect our business reputation during the dispute.',
          author: 'Milan, owner of a distribution company',
        },
      ],
    },
    pdfDownload: {
      generating: 'Generating PDF...',
      download: 'Download PDF',
      error: 'Failed to generate PDF document',
      retry: 'Currently unable to generate PDF. Please try again.',
    },
    mobileCall: {
      call: 'Call',
    },
    lawviewer: {
      description: 'Browse current regulations, quickly filter content, and download PDF versions with the firm\'s visual identity.',
    },
    api: {
      contact: {
        missingFields: 'Required fields are missing.',
        messageReceived: 'Message received.',
        newMessageSubject: 'New message from website from {name}',
        emailBody: 'Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}',
        messageSent: 'Message sent.',
      },
      pdf: {
        lawNotFound: 'Law not found',
        header: 'Andrić Law – LawViewer',
        categoryYear: 'Category: {category} | Year: {year}',
        footer: '© Andrić Law | andriclaw.com',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: {date}',
      introduction: 'This privacy policy describes how Andrić Law collects, uses, and protects your personal data when you use our website.',
      dataCollection: 'Data Collection: We collect data that you voluntarily provide through the contact form, including name, email, phone, and message.',
      dataUsage: 'Data Usage: Your data is used solely to respond to your inquiries and provide legal services.',
      dataSharing: 'Data Sharing: We do not share your data with third parties without your consent, except as required by law.',
      dataRights: 'Your Rights: You have the right to access, correct, and delete your data. Contact us for more information.',
      cookies: 'Cookies: We use cookies to improve your experience on the website. You can control them in your browser settings.',
      contact: 'Contact: For questions about this policy, contact us at info@andriclaw.com.',
    },
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
