import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Datenschutz"
      intro="Diese Seite ist als solide Vorlage vorbereitet und sollte vor dem Launch an deine tatsächlich verwendeten Tools, Dienste und Formulare angepasst werden."
    >
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Der Schutz deiner personenbezogenen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang sowie nach Maßgabe der geltenden Datenschutzvorschriften verarbeitet.
      </p>
      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Aurion Futures<br />
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>
      <h2>3. Server-Logfiles</h2>
      <p>
        Beim Besuch dieser Website können technische Informationen wie Browsertyp, Betriebssystem, Referrer, Uhrzeit der Anfrage und IP-Adresse durch den Hosting-Anbieter protokolliert werden. Diese Daten dienen der technischen Stabilität und Sicherheit.
      </p>
      <h2>4. Kontaktaufnahme</h2>
      <p>
        Wenn du uns per E-Mail kontaktierst, werden deine Angaben zur Bearbeitung deiner Anfrage sowie für mögliche Anschlussfragen gespeichert.
      </p>
      <h2>5. Externe Links und Tools</h2>
      <p>
        Diese Website kann auf externe Angebote, Affiliate-Partner, Social-Media-Plattformen oder Drittanbieter-Tools verlinken. Beim Anklicken dieser Links gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
      </p>
      <h2>6. Analyse- und Marketing-Tools</h2>
      <p>
        Falls du Analyse- oder Marketing-Tools wie Google Analytics, Pixel oder Newsletter-Dienste einbindest, ergänze hier bitte die jeweiligen Anbieter, Zwecke, Rechtsgrundlagen und Widerspruchsmöglichkeiten.
      </p>
      <h2>7. Rechte der betroffenen Personen</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Beschwerde bei einer zuständigen Aufsichtsbehörde.
      </p>
    </LegalPage>
  );
}
