import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Disclaimer — Aurion Futures',
  description: 'General disclaimer for the content published on Aurion Futures.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Please read the following carefully. It explains the limits of the information provided on this website."
      lastUpdated="May 2026"
    >
      <h2>No professional advice</h2>
      <p>
        The content on Aurion Futures is provided for general information and educational
        purposes only. It does not constitute professional, financial, legal, tax or
        investment advice, and should not be relied upon as such. Before making any business
        or purchasing decision, you should conduct your own research and, where appropriate,
        consult a qualified professional.
      </p>

      <h2>Reviews reflect our experience</h2>
      <p>
        Tool reviews, ratings and recommendations represent our own subjective opinion based
        on our experience at the time of writing. Software changes constantly &mdash; features,
        pricing and performance described here may differ from what you encounter. Always
        verify current details on the provider&rsquo;s own website before purchasing.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        We make no guarantee that using any tool featured on this site will produce any
        particular result, income or outcome. Results depend on many factors outside our
        control, including your own effort, skill and circumstances.
      </p>

      <h2>External links</h2>
      <p>
        This website contains links to external websites operated by third parties. We have no
        control over their content and accept no responsibility for it. The respective
        operator is solely responsible for the content of linked pages. See our{' '}
        <a href="/imprint">Imprint</a> for further detail on liability for links.
      </p>

      <h2>Affiliate relationships</h2>
      <p>
        Some links on this site are affiliate links. See our{' '}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for full details.
      </p>

      <h2>Accuracy</h2>
      <p>
        While we take care to keep information accurate and up to date, we do not warrant that
        the content is complete, current or error-free. Use of the information on this site is
        at your own risk.
      </p>
    </LegalPage>
  );
}
