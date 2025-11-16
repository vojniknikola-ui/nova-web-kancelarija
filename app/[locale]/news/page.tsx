import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';
import { Locale } from '../../../i18n-config';

export const revalidate = 60;

export default function NewsPage({ params }: { params: { locale: Locale } }) {
  const posts = getSortedPostsData();
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-heading">{params.locale === 'bs' ? 'Vijesti i analize' : 'News & insights'}</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-secondary">{post.frontMatter.date}</p>
            <h2 className="mt-2 text-2xl font-serif text-primary">{post.frontMatter.title}</h2>
            <p className="mt-4 text-sm text-slate-600">{post.frontMatter.excerpt}</p>
            <Link href={`/${params.locale}/news/${post.slug}`} className="mt-4 inline-flex text-secondary">
              {params.locale === 'bs' ? 'Detaljnije' : 'Read more'}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
