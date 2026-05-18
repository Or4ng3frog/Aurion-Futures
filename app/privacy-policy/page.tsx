import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This page is prepared as a solid template and should be adapted to the actual tools, services and forms you use before launch."
    >
      <h2>1. General information</h2>
      <p>
        Protecting your personal data is important to us. Personal data on this website is processed only to the extent technically necessary and in accordance with applicable data protection regulations.
      </p>
      <h2>2. Responsible entity</h2>
      <p>
        Aurion Futures<br />
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>
      <h2>3. Server log files</h2>
      <p>
        When visiting this website, technical information such as browser type, operating system, referrer, time of access and IP address may be logged by the hosting provider. This data is used for technical stability and security.
      </p>
      <h2>4. Contact requests</h2>
      <p>
        If you contact us by email, your details will be stored for the purpose of processing your request and for possible follow-up questions.
      </p>
      <h2>5. External links and tools</h2>
      <p>
        This website may link to external offers, affiliate partners, social media platforms or third-party tools. When clicking these links, the privacy policies of the respective providers apply.
      </p>
      <h2>6. Analytics and marketing tools</h2>
      <p>
        If you integrate analytics or marketing tools such as Google Analytics, pixels or newsletter services, please add the relevant providers, purposes, legal bases and opt-out options here.
      </p>
      <h2>7. Your rights</h2>
      <p>
        You have the right to access, rectification, deletion, restriction of processing, data portability and the right to lodge a complaint with a competent supervisory authority.
      </p>
    </LegalPage>
  );
}
