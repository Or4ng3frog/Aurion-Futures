import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aurion Futures',
  description: 'How Aurion Futures handles personal data under the GDPR.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We take the protection of your personal data seriously. This policy explains what data we process, why, and the rights you have under the General Data Protection Regulation (GDPR)."
      lastUpdated="May 2026"
    >
      <h2>1. Controller</h2>
      <p>
        The controller responsible for data processing on this website is:<br /><br />
        Dennis Klahn<br />
        Theresenstraße 36<br />
        28203 Bremen, Germany<br />
        Email: <a href="mailto:info@aurionfuture.com">info@aurionfuture.com</a>
      </p>

      <h2>2. Overview</h2>
      <p>
        When you visit this website, certain data is processed automatically for technical
        reasons, and further data only if you actively provide it (for example, by sending
        us an email). We process personal data exclusively in accordance with the GDPR and
        the German Federal Data Protection Act (BDSG).
      </p>

      <h2>3. Hosting</h2>
      <p>
        This website is hosted by an external service provider (the &ldquo;host&rdquo;).
        Personal data collected on this website is stored on the host&rsquo;s servers. This may
        include IP addresses, contact requests, meta and communication data, and other data
        generated through the operation of a website. The host is used for the purpose of
        fulfilling our contractual obligations toward our potential and existing visitors
        (Art. 6 (1)(b) GDPR) and in the interest of a secure, fast and efficient provision of
        our online offering by a professional provider (Art. 6 (1)(f) GDPR). Our host will
        only process your data to the extent necessary to fulfil its performance obligations
        and will follow our instructions with respect to such data.
      </p>

      <h2>4. Server Log Files</h2>
      <p>
        The provider of these pages automatically collects and stores information in
        so-called server log files, which your browser transmits automatically. These are:
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system used</li>
        <li>Referrer URL</li>
        <li>Hostname of the accessing computer</li>
        <li>Time of the server request</li>
        <li>IP address</li>
      </ul>
      <p>
        This data is not merged with other data sources. It is collected on the basis of
        Art. 6 (1)(f) GDPR. The website operator has a legitimate interest in the technically
        error-free presentation and optimisation of its website &mdash; for this, the server log
        files must be recorded.
      </p>

      <h2>5. Contact by Email</h2>
      <p>
        If you contact us by email, the information you provide (including your email address
        and the content of your message) will be stored by us for the purpose of processing
        your enquiry and in case of follow-up questions. This processing is based on Art. 6
        (1)(b) GDPR where your request relates to a contract, and otherwise on our legitimate
        interest in handling enquiries (Art. 6 (1)(f) GDPR) and/or your consent (Art. 6 (1)(a)
        GDPR) where requested. The data is deleted once it is no longer required and there are
        no statutory retention obligations to the contrary.
      </p>

      <h2>6. Affiliate Links</h2>
      <p>
        This website contains affiliate links to third-party providers. When you click such a
        link and complete an action (e.g. a purchase or sign-up) on the provider&rsquo;s site, the
        provider may set cookies or process your data to attribute the referral and pay us a
        commission. This processing takes place on the third party&rsquo;s infrastructure and under
        the third party&rsquo;s responsibility; please consult the respective provider&rsquo;s privacy
        policy. We do not receive your personal data from these providers &mdash; only aggregated,
        non-identifying statistics about referrals where applicable. See also our{' '}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website uses cookies only where necessary for basic functionality and, where
        applicable, with your consent. Essential cookies are required for the website to
        function and are set on the basis of Art. 6 (1)(f) GDPR. Any non-essential cookies
        (e.g. analytics) are only set after you have given consent via our cookie banner
        (Art. 6 (1)(a) GDPR). You can withdraw your consent at any time with effect for the
        future. You can also configure your browser to refuse cookies.
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object (Art. 21 GDPR)</li>
        <li>Right to withdraw consent at any time (Art. 7 (3) GDPR)</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:info@aurionfuture.com">info@aurionfuture.com</a>. You also have the
        right to lodge a complaint with a supervisory authority, in particular in the Member
        State of your residence, place of work or place of the alleged infringement.
      </p>

      <h2>9. Data Security</h2>
      <p>
        This site uses SSL/TLS encryption for security reasons and to protect the transmission
        of confidential content. You can recognise an encrypted connection by the
        &ldquo;https://&rdquo; prefix in the address bar of your browser.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We reserve the right to amend this privacy policy so that it always complies with
        current legal requirements or to reflect changes to our services. The current version
        always applies to your visit.
      </p>
    </LegalPage>
  );
}
