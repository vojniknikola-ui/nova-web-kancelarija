const testimonials = [
  {
    quote:
      'Transparentan i pragmatičan pristup koji nam je omogućio da završimo transakciju bez dodatnih troškova i kašnjenja.',
    author: 'Aida, direktorica startup kompanije',
  },
  {
    quote: 'Brz odgovor i jasni savjeti pomogli su nam da zaštitimo poslovnu reputaciju tokom spora.',
    author: 'Milan, vlasnik distributerske firme',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Šta klijenti kažu</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.author} className="rounded-2xl bg-white p-8 shadow">
              <blockquote className="text-lg text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary">{item.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
