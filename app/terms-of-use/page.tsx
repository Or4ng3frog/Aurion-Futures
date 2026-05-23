import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use — Aurion Future',
  description: 'The terms governing your use of the Aurion Future website.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By accessing and using this website, you agree to the following terms."
      lastUpdated="May 2026"
    >
      <h2>1. Acceptance</h2>
      <p>
        By accessing Aurion Future (&ldquo;the website&rdquo;), you agree to be bound by these Terms of
        Use and all applicable laws. If you do not agree, please do not use the website.
      </p>

      <h2>2. Use of content</h2>
      <p>
        The content on this website is provided for your personal, non-commercial information.
        You may view and share links to our content, but you may not reproduce, republish,
        distribute or exploit it commercially without our prior written consent. All
        trademarks, logos and brand names of third-party tools remain the property of their
        respective owners and are used for identification and editorial purposes only.
      </p>

      <h2>3. No warranty</h2>
      <p>
        The website and its content are provided &ldquo;as is&rdquo; without warranties of any kind,
        whether express or implied. We do not warrant that the website will be uninterrupted,
        secure or error-free, or that the information it contains is accurate or current. See
        our <a href="/disclaimer">Disclaimer</a> for more detail.
      </p>

      <h2>4. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any direct, indirect, incidental
        or consequential damages arising from your use of, or inability to use, this website or
        any third-party tool referenced on it. Statutory liability for intent and gross
        negligence, and liability under the German Product Liability Act, remains unaffected.
      </p>

      <h2>5. Third-party tools and links</h2>
      <p>
        Decisions to purchase or use any third-party tool are made solely between you and the
        relevant provider. We are not a party to those transactions and accept no liability for
        the products, services or conduct of third parties. Some links are affiliate links;
        see our <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update these Terms of Use at any time. The version published on the website at
        the time of your visit applies. Continued use of the website after changes constitutes
        acceptance of the revised terms.
      </p>

      <h2>7. Governing law</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Germany, excluding the
        conflict-of-law rules. Mandatory consumer protection provisions of the country in which
        you reside remain unaffected.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these terms? Email us at{' '}
        <a href="mailto:info@aurionfuture.com">info@aurionfuture.com</a>.
      </p>
    </LegalPage>
  );
}
