import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By visiting and using this website, you agree to the following basic terms of use."
    >
      <h2>1. Scope</h2>
      <p>
        These terms apply to the use of the Aurion Futures website and all content, information and external links made available through it.
      </p>
      <h2>2. Content and availability</h2>
      <p>
        We aim to provide the highest possible availability of the website, but we do not guarantee that all content will be accessible at all times without interruption.
      </p>
      <h2>3. Intellectual property</h2>
      <p>
        Texts, designs, brands, graphics and other content on this website are protected by copyright and may not be copied or reused without explicit permission.
      </p>
      <h2>4. External offers</h2>
      <p>
        The use of linked third-party offers is at your own responsibility and subject to their respective terms and conditions.
      </p>
      <h2>5. Changes</h2>
      <p>
        We reserve the right to update these terms of use at any time, especially if functions, content or legal requirements change.
      </p>
    </LegalPage>
  );
}
