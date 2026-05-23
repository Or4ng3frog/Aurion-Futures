import type { Metadata } from 'next';
import { posts } from '../lib/posts';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Honest reviews, comparisons and practical guides for AI tools, automation and digital growth.',
  alternates: { canonical: '/blog' }
};

function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="font-display text-xl font-semibold tracking-tightest text-ink">
            Aurion<span className="text-amber"> Future</span>
          </a>
          <a href="/#tools" className="inline-flex items-center gap-2 text-sm font-semibold text-ink2 transition hover:text-amber">
            <span aria-hidden="true">&larr;</span> Back to tools
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <section className="border-b border-line py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">Journal</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            Notes from the stack
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink2">
            Honest guides, comparisons and workflows for building with AI — written from
            real use, not press releases.
          </p>
        </section>

        {/* featured */}
        <a href={`/blog/${featured.slug}`}
          className="group block border-b border-line py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
            <span className="rounded-full bg-amber/12 px-3 py-1 text-amber">{featured.category}</span>
            <span>{featured.dateLabel}</span>
            <span>&middot;</span>
            <span>{featured.readingTime}</span>
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink transition group-hover:text-amber md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-ink2">{featured.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber">
            Read article <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </a>

        {/* rest */}
        <section className="grid gap-6 py-12 md:grid-cols-2">
          {rest.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-cream p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink3">
                <span className="rounded-full bg-amber/12 px-3 py-1 text-amber">{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink transition group-hover:text-amber">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-ink2">{post.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                Read article <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </section>
      </div>

      <footer className="border-t border-line bg-paper2/50">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-ink3 sm:flex-row sm:items-center lg:px-8">
          <p>© {new Date().getFullYear()} Aurion Future. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/affiliate-disclosure" className="hover:text-amber">Affiliate Disclosure</a>
            <a href="/imprint" className="hover:text-amber">Imprint</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
