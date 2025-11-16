export type LawSection = {
  heading: string;
  content: string;
};

export type Law = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  category: string;
  sections: LawSection[];
};

export const laws: Law[] = [
  {
    slug: 'zakon-o-digitalnoj-sigurnosti',
    title: 'Zakon o digitalnoj sigurnosti',
    summary:
      'Savremeni okvir za zaštitu digitalnih podataka, mrežne infrastrukture i elektronskog poslovanja u Bosni i Hercegovini.',
    year: 2023,
    category: 'Privredno pravo',
    sections: [
      {
        heading: 'Opšte odredbe',
        content:
          'Član 1. Ovim zakonom uređuju se mjere kibernetičke sigurnosti i obaveze pravnih lica u vezi sa čuvanjem i obradom podataka.',
      },
      {
        heading: 'Standardi sigurnosti',
        content:
          'Član 5. Subjekti koji obrađuju osjetljive podatke moraju uspostaviti sisteme praćenja incidenata i izvještavanja CERT tijelima.',
      },
      {
        heading: 'Kaznene odredbe',
        content:
          'Član 12. Za neispunjavanje obaveza propisanih ovim zakonom predviđene su novčane kazne i zabrana obavljanja djelatnosti.',
      },
    ],
  },
  {
    slug: 'family-law-act',
    title: 'Porodični zakon Federacije BiH',
    summary:
      'Temeljni propis koji uređuje bračne i porodične odnose, starateljstvo i zaštitu prava djece.',
    year: 2015,
    category: 'Građansko pravo',
    sections: [
      {
        heading: 'Brak i bračni odnosi',
        content:
          'Član 10. Brak se zasniva slobodnom voljom supružnika i na ravnopravnosti, uz poštivanje svih zakonskih pretpostavki.',
      },
      {
        heading: 'Starateljstvo',
        content:
          'Član 67. Staratelj je dužan da djeci obezbijedi zaštitu, odgoj i imovinska prava, uz redovnu saradnju sa organom starateljstva.',
      },
      {
        heading: 'Porodična medijacija',
        content:
          'Član 120. Stranke se upućuju na medijaciju kao način mirnog rješavanja porodičnih sporova prije pokretanja sudskog postupka.',
      },
    ],
  },
];

export function getLawBySlug(slug: string) {
  return laws.find((law) => law.slug === slug);
}
