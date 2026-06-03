import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Shell from '../../components/Shell';
import { posts, getPost } from '../../lib/posts';
import { site } from '../../lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Article not found' };
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.png']
    }
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Dennis Klahn' },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`
  };

  return (
    <Shell>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <nav className="pt-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <a href="/" className="transition hover:text-gold">Home</a>
          <span className="px-2">/</span>
          <a href="/blog" className="transition hover:text-gold">Journal</a>
        </nav>

        <header className="border-b border-white/10 py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold">{post.category}</span>
            <span>{post.dateLabel}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-400">{post.description}</p>
        </header>

        <div className="py-10">
          {post.body.map((block, i) => {
            if (block.type === 'h2')
              return <h2 key={i} className="mt-10 font-display text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">{block.text}</h2>;
            if (block.type === 'p')
              return <p key={i} className="mt-5 text-[1.08rem] leading-8 text-slate-300">{block.text}</p>;
            if (block.type === 'quote')
              return (
                <blockquote key={i} className="my-8 border-l-2 border-gold pl-6">
                  <p className="font-display text-2xl italic leading-snug text-slate-100">{block.text}</p>
                </blockquote>
              );
            if (block.type === 'ul')
              return (
                <ul key={i} className="mt-5 space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[1.05rem] leading-7 text-slate-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}
                    </li>
                  ))}
                </ul>
              );
            return null;
          })}
        </div>

        {/* affiliate-aware note */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-slate-400">
          This article mentions tools we recommend and may contain affiliate links. We may
          earn a commission at no extra cost to you. See our{' '}
          <a href="/affiliate-disclosure" className="font-medium text-gold underline-offset-2 hover:underline">Affiliate Disclosure</a>.
          {' '}Browse the full shortlist on <a href="/#stack" className="font-medium text-gold underline-offset-2 hover:underline">the homepage</a>.
        </div>

        {/* more articles */}
        <section className="border-t border-white/10 py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50">Keep reading</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {more.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`}
                className="glass border-glow group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{p.category}</span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-50 transition group-hover:text-gold">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </Shell>
  );
}
