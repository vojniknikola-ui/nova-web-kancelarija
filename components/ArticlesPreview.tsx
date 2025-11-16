import Link from 'next/link';
import { Locale } from '../i18n-config';
import { getSortedPostsData } from '../lib/posts';

export default async function ArticlesPreview({ locale }: { locale: Locale }) {
  const posts = getSortedPostsData().slice(0, 2);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="section-heading">{locale === 'bs' ? 'Aktuelni članci' : 'Latest articles'}</h2>
        <Link href={`/${locale}/news`} className="text-sm font-semibold text-secondary">
          {locale === 'bs' ? 'Pogledaj sve' : 'View all'}
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-secondary">{post.frontMatter.date}</p>
            <h3 className="mt-2 text-xl font-serif text-primary">{post.frontMatter.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{post.frontMatter.excerpt}</p>
            <Link href={`/${locale}/news/${post.slug}`} className="mt-4 inline-flex text-secondary">
              {locale === 'bs' ? 'Pročitaj više' : 'Read more'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
