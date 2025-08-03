"use client"

import { BackButton } from "@/components/BackButton"

export default function TermsPage() {
  return (
    <section className="max-w-4xl font-poppins mx-auto px-6 py-20 text-white bg-black">
      <BackButton />
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <p className="text-sm text-gray-400 mb-12">Effective Date: 07/03/2025</p>

      <div className="space-y-10 text-gray-200">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. About This Website</h2>
          <p>This website is owned and operated by AbdurRehman, a freelance full-stack developer. The site showcases my portfolio, outlines my services, and allows potential clients to inquire about custom development work.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services</h2>
          <p>All services are offered on a freelance, project-by-project basis. Final project scope, timeline, and cost are agreed upon in writing before work begins.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Client Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide clear project requirements and communication</li>
            <li>Respond in a timely manner</li>
            <li>Supply necessary assets (e.g. images, content, credentials)</li>
          </ul>
          <p className="mt-2">Delays in response or assets may result in project delays or additional fees.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Payment Terms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Payment terms will be outlined in the project agreement or invoice.</li>
            <li>A deposit may be required before work begins.</li>
            <li>Final deliverables will be handed over after full payment is received.</li>
            <li>Late payments may incur additional fees.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Refund Policy</h2>
          <p>Due to the custom nature of development work, refunds are not guaranteed. If a dispute arises, I will work in good faith to resolve it fairly.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You retain ownership of your original content.</li>
            <li>I retain the right to display completed projects in my portfolio, unless agreed otherwise in writing.</li>
            <li>Code and design provided are licensed for your use only; resale or redistribution is not allowed unless stated in our agreement.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p>I strive to deliver high-quality work, but I cannot guarantee uninterrupted or error-free operation. I am not liable for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Loss of data</li>
            <li>Business interruptions</li>
            <li>Indirect or consequential damages</li>
          </ul>
          <p className="mt-2">Total liability will not exceed the fees paid for the specific project.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Tools & Services</h2>
          <p>I may use third-party libraries, APIs, or platforms. I’m not responsible for downtime, changes, or issues caused by those third parties.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Website Use</h2>
          <p>You agree not to misuse this website, attempt to breach its security, or submit spam or false inquiries.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Changes</h2>
          <p>I may update these Terms & Conditions at any time. Changes will be posted on this page with an updated date.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
          <p>For any questions about these terms, please email: <a className="underline text-cyan-400" href="mailto:benabdurrehman@gmail.com">benabdurrehman@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}
