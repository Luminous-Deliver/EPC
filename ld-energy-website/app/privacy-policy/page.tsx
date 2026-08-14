import type { Metadata } from 'next'
import { LegalPage } from '@/components/ui/LegalPage'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How L&D Energy collects, uses, and protects your personal data when you enquire about or book an EPC. UK GDPR compliant.',
  alternates: { canonical: `${site.url}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | L&D Energy',
    description:
      'How L&D Energy collects, uses, and protects your personal data when you enquire about or book an EPC. UK GDPR compliant.',
    url: `${site.url}/privacy-policy`,
  },
  twitter: {
    title: 'Privacy Policy | L&D Energy',
    description: 'How L&D Energy collects, uses, and protects your personal data. UK GDPR compliant.',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  url: `${site.url}/privacy-policy`,
  description: 'How L&D Energy collects, uses, and protects your personal data. UK GDPR compliant.',
  publisher: { '@id': `${site.url}/#organization` },
  inLanguage: 'en-GB',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${site.url}/privacy-policy` },
    ],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <LegalPage
      title="Privacy Policy"
      lastUpdated="May 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
      ]}
    >
      <p>
        This Privacy Policy explains how L&amp;D Energy, a trading name of {site.parentBrand} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), collects, uses and protects your personal data when you enquire about or book one of our services.
      </p>

      <h2>1. Who we are</h2>
      <p>
        <strong>Data controller:</strong> {site.legal.dataController}, based in{' '}
        {site.address.locality}, {site.address.region}. For privacy enquiries, contact us at{' '}
        <a href={site.emailHref}>{site.email}</a>.
      </p>

      <h2>2. What data we collect</h2>
      <p>When you contact us or book a service, we collect:</p>
      <ul>
        <li>Your name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Property address and postcode</li>
        <li>Property details relevant to the EPC (type, number of bedrooms, requested services)</li>
        <li>Any additional notes you provide</li>
      </ul>
      <p>
        We do not use cookies for tracking or advertising. We use Cloudflare Web Analytics, which is privacy-friendly and does not set cookies or identify individual visitors.
      </p>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To respond to your enquiry and arrange your appointment</li>
        <li>To carry out the EPC assessment and lodge your certificate on the UK Government EPC Register</li>
        <li>To send you your certificate and any related documents</li>
        <li>To invoice and collect payment</li>
        <li>To meet our legal and regulatory obligations</li>
      </ul>

      <h2>4. Lawful basis</h2>
      <p>
        We process your data on the basis of (a) your consent when you submit our contact form, (b) performance of a contract once you book a service, and (c) compliance with our legal obligations as an accredited Domestic Energy Assessor.
      </p>

      <h2>5. Sharing your data</h2>
      <p>We share your data only where required to deliver the service:</p>
      <ul>
        <li>The UK Government EPC Register (mandatory lodgement of EPC data)</li>
        <li>Elmhurst Energy, our accreditation scheme</li>
        <li>Resend, our transactional email provider</li>
        <li>Your letting agent or solicitor, only if you ask us to send the certificate directly</li>
      </ul>
      <p>We do not sell your data and we do not share it for marketing purposes.</p>

      <h2>6. Data retention</h2>
      <p>
        We retain enquiry data for up to 12 months and booking/job records for 7 years to meet UK accounting and accreditation record-keeping requirements. EPC data is held by the UK Government EPC Register for the certificate&rsquo;s 10-year validity.
      </p>

      <h2>7. Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request erasure where we no longer need the data</li>
        <li>Object to or restrict processing</li>
        <li>Request data portability</li>
        <li>Complain to the Information Commissioner&rsquo;s Office (<a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>)</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={site.emailHref}>{site.email}</a>.
      </p>

      <h2>8. Security</h2>
      <p>
        We use industry-standard security measures including HTTPS encryption in transit and access controls on stored data.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page indicates when it was last revised.
      </p>
    </LegalPage>
    </>
  )
}
