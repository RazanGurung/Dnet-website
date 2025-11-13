import Link from 'next/link'
import { CONTACT_INFO } from '@/config/contact'

export const metadata = {
  title: 'Terms of Service | DNET',
  description: 'Terms of service for Digital Network Engineering Technology services.'
}

export default function TermsOfService() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-muted mb-4">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="content">
            <section className="mb-5">
              <h2 className="h4 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Digital Network Engineering Technology ("DNET," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">2. Services Provided</h2>
              <p>DNET provides professional IT and networking services, including but not limited to:</p>
              <ul>
                <li>Network infrastructure design, installation, and maintenance</li>
                <li>Structured cabling (Cat6, fiber optic)</li>
                <li>Security systems (CCTV, access control)</li>
                <li>Managed IT services and cloud solutions</li>
                <li>Office relocation and network setup</li>
                <li>Data backup, recovery, and disaster preparedness</li>
                <li>Custom software and web development</li>
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">3. Service Agreements</h2>
              <h3 className="h5 mb-2">3.1 Quotes and Estimates</h3>
              <p>
                All quotes and estimates provided are valid for 30 days from the date of issue unless otherwise specified. Final pricing may vary based on project scope changes or unforeseen circumstances.
              </p>

              <h3 className="h5 mb-2 mt-4">3.2 Project Scope</h3>
              <p>
                The scope of work will be defined in a written agreement or statement of work (SOW). Any changes to the scope must be agreed upon in writing and may result in additional charges.
              </p>

              <h3 className="h5 mb-2 mt-4">3.3 Timeline</h3>
              <p>
                We will make reasonable efforts to complete projects within the estimated timeline. Delays caused by factors outside our control (e.g., client delays, material shortages, site access issues) may extend project timelines.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">4. Payment Terms</h2>
              <h3 className="h5 mb-2">4.1 Invoicing</h3>
              <p>
                Invoices are due within 30 days of the invoice date unless otherwise agreed. For large projects, we may require a deposit before work begins and progress payments throughout the project.
              </p>

              <h3 className="h5 mb-2 mt-4">4.2 Late Payments</h3>
              <p>
                Late payments may incur a finance charge of 1.5% per month (18% annual percentage rate) or the maximum allowed by law, whichever is less.
              </p>

              <h3 className="h5 mb-2 mt-4">4.3 Disputed Charges</h3>
              <p>
                If you dispute any charges, please contact us within 10 business days of receiving the invoice. We will work with you to resolve any billing issues.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">5. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate information about project requirements</li>
                <li>Ensuring site access and necessary permissions</li>
                <li>Providing a safe working environment</li>
                <li>Timely decision-making and approvals</li>
                <li>Backing up existing data before service work begins</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">6. Warranties and Guarantees</h2>
              <h3 className="h5 mb-2">6.1 Workmanship Warranty</h3>
              <p>
                We warrant that our services will be performed in a professional and workmanlike manner. If any defects in workmanship are found within 90 days of project completion, we will correct them at no additional charge.
              </p>

              <h3 className="h5 mb-2 mt-4">6.2 Equipment and Materials</h3>
              <p>
                Equipment and materials are covered by manufacturer warranties. We will assist with warranty claims but are not responsible for manufacturer defects.
              </p>

              <h3 className="h5 mb-2 mt-4">6.3 Limitations</h3>
              <p>
                WARRANTIES ARE LIMITED TO THOSE EXPRESSLY STATED ABOVE. WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DNET SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO OUR SERVICES.
              </p>
              <p>
                Our total liability for any claim arising out of or related to our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">8. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all custom work products, designs, and configurations created specifically for your project become your property upon full payment. However, we retain ownership of our general methodologies, processes, and pre-existing materials.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">9. Confidentiality</h2>
              <p>
                We will maintain the confidentiality of your proprietary information and will not disclose it to third parties without your consent, except as required by law or to perform our services.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">10. Termination</h2>
              <p>
                Either party may terminate a service agreement with written notice. If you terminate a project in progress, you will be responsible for payment of all work completed and non-refundable expenses incurred up to the termination date.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless DNET from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or violation of any third-party rights.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">12. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or related to these Terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">15. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
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
