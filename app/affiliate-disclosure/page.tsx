import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — Aurion Futures',
  description: 'How Aurion Futures uses affiliate links and earns commissions.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      intro="Transparency matters to us. Here is exactly how Aurion Futures makes money, and what that means for you."
      lastUpdated="May 2026"
    >
      <h2>The short version</h2>
      <p>
        Aurion Futures contains affiliate links. If you click one and sign up for or purchase
        a product, we may receive a commission &mdash; at no additional cost to you. The price you
        pay is exactly the same as it would be if you went to the provider directly.
      </p>

      <h2>What is an affiliate link?</h2>
      <p>
        An affiliate link is a special tracking link. When you use it to visit a tool and then
        take an action (such as starting a trial or buying a plan), the provider knows the
        referral came from us and pays us a small commission. It is one of the ways we fund the
        time spent testing, writing and maintaining this site.
      </p>

      <h2>How it affects our recommendations</h2>
      <p>
        It doesn&rsquo;t. Our editorial principle is simple: a tool only appears on this page if it
        has earned a place in our own workflow. We do not accept payment to add a tool to the
        shortlist, to rank it higher, or to remove its drawbacks from a review. Every review
        names the trade-offs honestly, including the ones a vendor would rather we left out.
      </p>
      <p>
        If we ever lose confidence in a tool, it comes off the list &mdash; regardless of whether it
        pays a commission.
      </p>

      <h2>Marked as advertising</h2>
      <p>
        In accordance with the German Act Against Unfair Competition (UWG) and the
        Telemedia/Media State Treaty rules on labelling, pages and links containing paid
        partnerships are marked as advertising (&ldquo;Werbung&rdquo; / &ldquo;Advertising / Affiliate&rdquo;).
        Affiliate links are technically marked with the <code>rel=&quot;sponsored&quot;</code> attribute.
      </p>

      <h2>Third-party tracking</h2>
      <p>
        When you follow an affiliate link, the destination provider may set cookies or process
        data to attribute the referral. This happens on their infrastructure under their own
        privacy policy. We recommend reviewing the privacy policy of any provider before
        signing up. See our <a href="/privacy-policy">Privacy Policy</a> for more on how we
        handle data on our own site.
      </p>

      <h2>Questions</h2>
      <p>
        If anything here is unclear, reach out at{' '}
        <a href="mailto:info@aurionfuture.com">info@aurionfuture.com</a> &mdash; we&rsquo;re happy to
        explain.
      </p>
    </LegalPage>
  );
}
