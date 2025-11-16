import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSortedPostsData, getPostBySlug } from '../../../../lib/posts';
import { Locale } from '../../../../i18n-config';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) return { title: 'News | Andrić Law' };
  return {
    title: `${post.frontMatter.title} | Andrić Law Blog`,
    description: post.frontMatter.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: { locale: Locale; slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) notFound();

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-secondary">{post.frontMatter.date}</p>
      <h1 className="mt-4 text-4xl font-serif text-primary">{post.frontMatter.title}</h1>
      <p className="mt-2 text-sm text-slate-500">{post.frontMatter.author}</p>
      <div className="prose prose-slate mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-10 rounded-2xl bg-primary/5 p-6 text-sm text-slate-600">
        {params.locale === 'bs'
          ? 'Imate pitanje u vezi sa ovim tekstom? Pošaljite nam poruku ili zakažite konsultacije.'
          : 'Have questions about this topic? Send us a message or schedule a consultation.'}
        <div className="mt-4 flex flex-wrap gap-4">
          <a href={`/${params.locale}/contact`} className="rounded-full bg-primary px-5 py-2 text-white">
            {params.locale === 'bs' ? 'Kontakt forma' : 'Contact form'}
          </a>
          <a href="tel:+38761111222" className="rounded-full border border-primary px-5 py-2 text-primary">
            +387 61 111 222
          </a>
        </div>
      </div>
    </article>
  );
}
