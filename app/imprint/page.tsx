import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Imprint — Aurion Futures',
  description: 'Legal information and provider identification for Aurion Futures.',
  alternates: { canonical: '/imprint' },
};

export default function ImprintPage() {
  return (
    <LegalPage
      title="Imprint"
      intro="Information pursuant to § 5 of the German Digital Services Act (DDG)."
    >
      <h2>Provider</h2>
      <p>
        Dennis Klahn<br />
        Theresenstraße 36<br />
        28203 Bremen<br />
        Germany
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:info@aurionfuture.com">info@aurionfuture.com</a>
      </p>

      <h2>Responsible for content pursuant to § 18 (2) MStV</h2>
      <p>Dennis Klahn, address as above.</p>

      <h2>EU Dispute Resolution</h2>
      <p>
        The European Commission provides a platform for online dispute resolution (ODR):{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>. Our email address can be found above.
      </p>

      <h2>Consumer Dispute Resolution / Universal Arbitration Board</h2>
      <p>
        We are neither obliged nor willing to participate in dispute resolution proceedings
        before a consumer arbitration board.
      </p>

      <h2>Liability for Content</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages in
        accordance with general laws. However, we are not obligated to monitor transmitted
        or stored third-party information, or to investigate circumstances that indicate
        illegal activity. Obligations to remove or block the use of information under general
        laws remain unaffected. Liability in this regard is only possible from the point in
        time at which a concrete infringement of the law becomes known. Upon notification of
        such violations, we will remove the content in question immediately.
      </p>

      <h2>Liability for Links</h2>
      <p>
        Our website contains links to external third-party websites over whose content we
        have no influence. Therefore, we cannot assume any liability for this external
        content. The respective provider or operator of the linked pages is always
        responsible for their content. The linked pages were checked for possible legal
        violations at the time of linking; no illegal content was identifiable at that time.
        Permanent monitoring of the content of linked pages is not reasonable without concrete
        evidence of a legal violation. Upon notification of violations, we will remove such
        links immediately.
      </p>

      <h2>Copyright</h2>
      <p>
        The content and works created by the site operator on these pages are subject to
        German copyright law. Duplication, processing, distribution and any kind of
        exploitation outside the limits of copyright require the written consent of the
        respective author or creator. Insofar as the content on this site was not created by
        the operator, the copyrights of third parties are respected. Should you nevertheless
        become aware of a copyright infringement, please inform us accordingly. Upon
        notification of violations, we will remove such content immediately.
      </p>
    </LegalPage>
  );
}
