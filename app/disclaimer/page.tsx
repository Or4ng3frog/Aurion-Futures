import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Aurion Futures stellt Informationen, Tools und Empfehlungen mit größter Sorgfalt bereit. Dennoch erfolgt die Nutzung sämtlicher Inhalte auf eigene Verantwortung."
    >
      <h2>1. Inhalte dieser Website</h2>
      <p>
        Die bereitgestellten Inhalte dienen ausschließlich Informations- und Marketingzwecken. Trotz sorgfältiger Erstellung übernehmen wir keine Gewähr für Richtigkeit, Vollständigkeit oder Aktualität.
      </p>
      <h2>2. Keine Anlage- oder Rechtsberatung</h2>
      <p>
        Inhalte zu AI-Tools, Business-Systemen, Trading oder digitalen Einkommensstrategien stellen keine individuelle Anlage-, Rechts- oder Steuerberatung dar. Bitte ziehe bei Bedarf qualifizierte Fachpersonen hinzu.
      </p>
      <h2>3. Externe Links</h2>
      <p>
        Für Inhalte externer Websites, auf die von Aurion Futures verlinkt wird, übernehmen wir keine Haftung. Für die Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <h2>4. Haftung</h2>
      <p>
        Eine Haftung für direkte oder indirekte Schäden, die durch die Nutzung dieser Website oder der bereitgestellten Informationen entstehen, ist — soweit gesetzlich zulässig — ausgeschlossen.
      </p>
    </LegalPage>
  );
}
