import { Locale } from '../i18n-config';

type Dictionary = {
  navigation: {
    home: string;
    about: string;
    lawviewer: string;
    news: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    heading: string;
    mission: string;
  };
  contact: {
    heading: string;
    subheading: string;
    formTitle: string;
    detailsTitle: string;
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
    },
    hero: {
      title: 'Andrić Law – savremeno advokatsko iskustvo',
      subtitle:
        'Pružamo strateška pravna rješenja za preduzetnike, kompanije i pojedince u Bosni i Hercegovini.',
      cta: 'Zatražite konsultacije',
    },
    about: {
      heading: 'Odlučnost, transparentnost i posvećenost vašem slučaju',
      mission:
        'Naš pristup kombinuje dubinsko poznavanje domaćeg zakonodavstva i poslovne realnosti, uz naglasak na dostupnu i jasnu komunikaciju.',
    },
    contact: {
      heading: 'Stupite u kontakt',
      subheading: 'Otvoreni smo za telefonske pozive, e-mail i susrete u kancelariji.',
      formTitle: 'Pošaljite poruku',
      detailsTitle: 'Kontakt podaci',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      lawviewer: 'LawViewer',
      news: 'News',
      contact: 'Contact',
    },
    hero: {
      title: 'Andrić Law – contemporary legal counsel',
      subtitle:
        'We deliver strategic legal solutions for entrepreneurs, companies, and individuals across Bosnia and Herzegovina.',
      cta: 'Request a consultation',
    },
    about: {
      heading: 'Determination, transparency, and commitment to your matter',
      mission:
        'Our method blends deep knowledge of local regulations with pragmatic business sense and clear communication.',
    },
    contact: {
      heading: 'Get in touch',
      subheading: 'Reach us via phone, email, or visit our office.',
      formTitle: 'Send a message',
      detailsTitle: 'Contact details',
    },
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
