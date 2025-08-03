"use client"

import { BackButton } from '@/components/BackButton';
export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl font-poppins mx-auto px-6 py-20 text-white bg-black">
      <BackButton />
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-12">Effective Date: 07/03/2025<br />Website: <a href="https://benabdurrehman.com" className="underline text-cyan-400">benabdurrehman.com</a></p>

      <div className="space-y-10 text-gray-200">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Who I Am</h2>
          <p>This site is operated by AbdurRehman, an independent full-stack developer offering freelance services to businesses and individuals.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. What I Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Business name</li>
            <li>Project details or inquiries</li>
            <li>Browser/device info (for analytics)</li>
          </ul>
          <p className="mt-2">I do not knowingly collect sensitive personal data or information from children.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How I Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to project inquiries</li>
            <li>Communicate about services</li>
            <li>Issue invoices and contracts</li>
            <li>Improve the website (via basic analytics)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>I may use the following third-party tools:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Email services (e.g. Gmail)</li>
            <li>Analytics tools (e.g. Google Analytics or Plausible)</li>
            <li>Hosting providers (e.g. Vercel, Netlify)</li>
          </ul>
          <p className="mt-2">These services may collect basic technical info like IP address or browser type. They have their own privacy policies and data handling practices.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <p>This site may use minimal cookies for performance or analytics. You can manage cookie preferences via your browser settings.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Data Sharing</h2>
          <p>I do not sell, trade, or rent your personal information. I only share data with third parties when necessary to operate my services (e.g. hosting, email, payment processing).</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
          <p>I take reasonable steps to protect your information, but no online transmission is 100% secure. You use this site at your own risk.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
          <p>If you're located in certain regions (e.g. EU/UK), you may have rights to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request access to your data</li>
            <li>Ask for correction or deletion</li>
            <li>Object to processing</li>
          </ul>
          <p className="mt-2">To make a request, email me directly at <a href="mailto:benabdurrehman@gmail.com" className="underline text-cyan-400">benabdurrehman@gmail.com</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>I may update this policy occasionally. Changes will be posted here with an updated date.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
          <p>If you have questions about this Privacy Policy or how your data is used, contact me at: <a href="mailto:benabdurrehman@gmail.com" className="underline text-cyan-400">benabdurrehman@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}