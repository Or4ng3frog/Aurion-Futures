import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Shell from '../components/Shell';
import { posts } from '../lib/posts';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Honest reviews, comparisons and practical guides for AI tools, automation and digital growth.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <section className="py-14 lg:py-20">
          <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-glow">The Journal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl">
            Notes from <span className="text-gradient-cool">the stack.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Honest guides, comparisons and workflows for building with AI — written from
            real use, not press releases.
          </p>
        </section>

        {/* featured */}
        <a
          href={`/blog/${featured.slug}`}
          className="glass border-glow group block overflow-hidden rounded-3xl p-7 transition hover:bg-white/[0.05] md:p-9"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold">{featured.category}</span>
            <span>{featured.dateLabel}</span>
            <span aria-hidden>·</span>
            <span>{featured.readingTime}</span>
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-slate-50 transition group-hover:text-gold md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">{featured.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
            Read article
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        {/* rest */}
        <section className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass border-glow group flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold">{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-slate-50 transition group-hover:text-gold">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-400">{post.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Read article
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </section>
      </div>
    </Shell>
  );
}
