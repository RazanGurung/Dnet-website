import Link from 'next/link'
import { CONTACT_INFO } from '@/config/contact'

export const metadata = {
  title: 'Privacy Policy | DNET',
  description: 'Privacy policy for Digital Network Engineering Technology services.'
}

export default function PrivacyPolicy() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-muted mb-4">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="content">
            <section className="mb-5">
              <h2 className="h4 mb-3">1. Introduction</h2>
              <p>
                Digital Network Engineering Technology ("DNET," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">2. Information We Collect</h2>
              <h3 className="h5 mb-2">2.1 Information You Provide</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and business information</li>
                <li>Service requests and project details</li>
                <li>Payment and billing information</li>
                <li>Communications with us (emails, chat messages, support tickets)</li>
              </ul>

              <h3 className="h5 mb-2 mt-4">2.2 Information Automatically Collected</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your service requests and transactions</li>
                <li>Communicate with you about our services, updates, and offers</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Detect and prevent fraud or security issues</li>
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">4. How We Share Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., payment processors, email service providers)</li>
                <li><strong>Business Partners:</strong> Trusted partners who help us deliver services (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">6. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing of your data</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{' '}
                <a href={`mailto:${CONTACT_INFO.email.primary}`}>{CONTACT_INFO.email.primary}</a>.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">11. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <address>
                <strong>Digital Network Engineering Technology</strong><br />
                {CONTACT_INFO.address.full}<br />
                Email: <a href={`mailto:${CONTACT_INFO.email.primary}`}>{CONTACT_INFO.email.primary}</a><br />
                Phone: <a href={CONTACT_INFO.phone.link}>{CONTACT_INFO.phone.display}</a>
              </address>
            </section>
          </div>

          <div className="border-top pt-4 mt-5">
            <Link href="/" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
