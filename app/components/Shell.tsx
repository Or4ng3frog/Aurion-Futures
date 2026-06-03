/* ==========================================================================
   AURION FUTURE — shared dark page shell.
   Wraps every subpage (legal, contact, journal, tool reviews) in the same
   premium "command center" frame the homepage uses: dark radial field,
   sticky header, and footer. Keeps the whole product visually consistent.
   ========================================================================== */
import SiteBackground from './home/SiteBackground';
import SiteHeader from './home/SiteHeader';
import SiteFooter from './home/SiteFooter';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="aurion-dark relative isolate flex min-h-screen flex-col overflow-x-clip bg-night text-slate-200 antialiased">
      <SiteBackground />
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </main>
  );
}
