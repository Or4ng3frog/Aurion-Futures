import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Imprint"
      intro="Please replace the placeholder details below with your final business and contact information before going live."
    >
      <h2>Information according to § 5 TMG</h2>
      <p>
        Aurion Futures<br />
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        Germany
      </p>
      <h2>Contact</h2>
      <p>
        E-mail: hello@aurionfutures.com<br />
        Website: aurionfutures.com
      </p>
      <h2>Responsible for content</h2>
      <p>Max Mustermann, address as above.</p>
      <h2>Important note</h2>
      <p>This is a prepared placeholder page. Please replace all sample details with your actual legally required information.</p>
    </LegalPage>
  );
}
