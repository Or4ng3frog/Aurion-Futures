/* ==========================================================================
   AURION FUTURE — homepage.
   A dark, premium "AI Stack Command Center" experience. Server component that
   composes self-contained sections; interactivity + animation live inside the
   client section components under app/components/home.
   Tool data (incl. affiliate links) is still the single source in app/lib/tools.ts
   ========================================================================== */
import SiteBackground from './components/home/SiteBackground';
import SiteHeader from './components/home/SiteHeader';
import Hero from './components/home/Hero';
import LogoStrip from './components/home/LogoStrip';
import StackSection from './components/home/StackSection';
import WorkflowSection from './components/home/WorkflowSection';
import HowWePick from './components/home/HowWePick';
import JournalSection from './components/home/JournalSection';
import FinalCta from './components/home/FinalCta';
import SiteFooter from './components/home/SiteFooter';

export default function Home() {
  return (
    <main className="aurion-dark relative isolate min-h-screen overflow-x-clip bg-night text-slate-200 antialiased">
      <SiteBackground />

      <SiteHeader />

      {/* slim affiliate-disclosure bar (compliance — preserved) */}
      <div className="border-b border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-2 lg:px-8">
          <p className="text-center text-[0.72rem] leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-200">Advertising / Affiliate.</span>{' '}
            Some links on this page are affiliate links — we may earn a commission at no
            extra cost to you.{' '}
            <a href="/affiliate-disclosure" className="font-medium text-gold underline-offset-2 hover:underline">
              Full disclosure
            </a>
            .
          </p>
        </div>
      </div>

      <Hero />
      <LogoStrip />
      <StackSection />
      <WorkflowSection />
      <HowWePick />
      <JournalSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
