import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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
    <main className="relative min-h-screen bg-paper text-ink">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="font-display text-xl font-semibold tracking-tightest text-ink">
            Aurion<span className="text-amber"> Future</span>
          </a>
          <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ink2 transition hover:text-amber">
            <span aria-hidden="true">&larr;</span> Journal
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
          <a href="/" className="hover:text-amber">Home</a>
          <span className="px-2">/</span>
          <a href="/blog" className="hover:text-amber">Journal</a>
        </div>

        <header className="border-b border-line py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
            <span className="rounded-full bg-amber/12 px-3 py-1 text-amber">{post.category}</span>
            <span>{post.dateLabel}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink2">{post.description}</p>
        </header>

        <div className="py-10">
          {post.body.map((block, i) => {
            if (block.type === 'h2')
              return <h2 key={i} className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">{block.text}</h2>;
            if (block.type === 'p')
              return <p key={i} className="mt-5 text-[1.08rem] leading-8 text-ink2">{block.text}</p>;
            if (block.type === 'quote')
              return (
                <blockquote key={i} className="my-8 border-l-2 border-amber pl-6">
                  <p className="font-display text-2xl italic leading-snug text-ink">{block.text}</p>
                </blockquote>
              );
            if (block.type === 'ul')
              return (
                <ul key={i} className="mt-5 space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[1.05rem] leading-7 text-ink2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />{item}
                    </li>
                  ))}
                </ul>
              );
            return null;
          })}
        </div>

        {/* affiliate-aware note */}
        <div className="mb-12 rounded-2xl border border-line bg-cream p-6 text-sm leading-relaxed text-ink3">
          This article mentions tools we recommend and may contain affiliate links. We may
          earn a commission at no extra cost to you. See our{' '}
          <a href="/affiliate-disclosure" className="text-amber hover:underline">Affiliate Disclosure</a>.
          {' '}Browse the full shortlist on <a href="/#tools" className="text-amber hover:underline">the homepage</a>.
        </div>

        {/* more articles */}
        <section className="border-t border-line py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Keep reading</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {more.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-line bg-cream p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">{p.category}</span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition group-hover:text-amber">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                  Read <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-line bg-paper2/50">
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-ink3 sm:flex-row sm:items-center lg:px-8">
          <p>&copy; {new Date().getFullYear()} Aurion Future. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/affiliate-disclosure" className="hover:text-amber">Affiliate Disclosure</a>
            <a href="/imprint" className="hover:text-amber">Imprint</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
