import LegalPage from '../components/LegalPage';

export default function Page() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      intro="Some of the offers linked on Aurion Futures may contain affiliate links. Transparency matters to us."
    >
      <h2>How affiliate links work</h2>
      <p>
        If you buy a product or service through a marked link, we may receive a commission from the provider. In most cases, this does not create any additional cost for you.
      </p>
      <h2>Our recommendation policy</h2>
      <p>
        We only recommend tools, platforms and services that fit the Aurion Futures theme and that we believe are relevant for our audience. Compensation does not automatically determine our selection.
      </p>
      <h2>Important note</h2>
      <p>
        Please evaluate every offer independently before making a purchase decision. Especially with digital products, SaaS tools or trading-related offers, prices, conditions and results may vary.
      </p>
    </LegalPage>
  );
}
