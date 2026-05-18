import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Aurion Futures provides information, tools and recommendations with great care. However, the use of all content is at your own responsibility."
    >
      <h2>1. Website content</h2>
      <p>
        The content provided is for informational and marketing purposes only. Despite careful preparation, we do not guarantee accuracy, completeness or timeliness.
      </p>
      <h2>2. No financial, legal or tax advice</h2>
      <p>
        Content related to AI tools, business systems, trading or digital income strategies does not constitute individual financial, legal or tax advice. Please consult qualified professionals if needed.
      </p>
      <h2>3. External links</h2>
      <p>
        We assume no liability for the content of external websites linked from Aurion Futures. The operators of those websites are solely responsible for their content.
      </p>
      <h2>4. Liability</h2>
      <p>
        To the extent permitted by law, liability for direct or indirect damages arising from the use of this website or the information provided is excluded.
      </p>
    </LegalPage>
  );
}
