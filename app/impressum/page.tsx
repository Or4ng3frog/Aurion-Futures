import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Impressum"
      intro="Bitte ergänze hier deine vollständigen Unternehmens- und Kontaktdaten, sobald die finalen Angaben feststehen."
    >
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Aurion Futures<br />
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        Deutschland
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: hello@aurionfutures.com<br />
        Website: aurionfutures.com
      </p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Max Mustermann, Anschrift wie oben.</p>
      <h2>Hinweis</h2>
      <p>
        Dies ist eine vorbereitete Platzhalterseite. Bitte ersetze alle Musterangaben vor dem Livegang durch die tatsächlichen rechtlich erforderlichen Daten.
      </p>
    </LegalPage>
  );
}
