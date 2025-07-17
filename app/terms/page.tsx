'use client';

import React from 'react';
import SchemaOrgTerms from './schema';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <SchemaOrgTerms />
      <h1 className="text-4xl font-bold mb-4 mt-15">Synoptix AI Terms & Conditions</h1>
      <div className="text-sm text-gray-600 mb-8">
        <p>Effective Date: 28 February 2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance and Agreement</h2>
          <p className="mb-4">
            By accessing or using the SYNOPTIX AI platform (the "Platform"), you ("User") agree to be bound by these Terms of Service. 
            This agreement forms a legally binding contract between you and SYNOPTIX AI ("we," "us," or "our"). 
            If you are using the Platform on behalf of an organization, you confirm that you have the authority to bind that organization to these Terms. 
            If you do not agree, please do not use our Platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility and Permitted Use</h2>
          <p className="mb-4">
            SYNOPTIX AI is designed primarily for enterprises of all sizes. Use of the platform is restricted to authorized personnel within these organizations. 
            You agree to access and use the platform exclusively for business-related activities within your organization. 
            Any unauthorized use, including access beyond assigned roles or activities that compromise platform integrity, is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Usage Restrictions and Prohibited Activities</h2>
          <p className="mb-4">You must use the Platform responsibly and lawfully. In particular, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Copy, modify, distribute, or create derivative works from any portion of the Platform without our written consent.</li>
            <li>Attempt to decompile, reverse-engineer, or extract the source code of our software.</li>
            <li>Introduce viruses, malware, or any harmful code into the Platform.</li>
            <li>Remove or obscure any proprietary notices or markings.</li>
            <li>Employ the Platform in any context where its failure could result in harm (e.g., mission-critical or life-critical operations).</li>
            <li>Engage in conduct that might damage our reputation or disrupt the operation of the Platform.</li>
            <li>Use the Platform for commercial purposes outside of your organization or in contexts where its failure could cause harm (e.g., mission-critical or life-critical applications).</li>
            <li>Present the Platform in a way that might mislead others into believing there is an endorsement or formal association with SYNOPTIX AI without our consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Ownership, Third-Party Integrations, and Content</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Platform Ownership:</strong> SYNOPTIX AI owns all underlying technology, software, and proprietary AI models used within the Platform.</li>
            <li><strong>User Data:</strong> All corporate data, documents, and content you upload remain your property. Depending on the service model (SaaS, IaaS, or a hybrid approach), you grant us a limited license to process and securely store this information as required to provide our services. Specific data handling terms will align with the chosen deployment model.</li>
            <li><strong>Third-Party Tools:</strong> Our service integrates with third-party solutions—most notably Microsoft Azure—to enhance functionality. Such integrations are governed by separate third-party licensing agreements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Handling, Privacy, and Security</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Data Management:</strong> The platform processes, stores, and retrieves corporate data while ensuring it remains within your control. Data management and storage practices will vary based on the chosen deployment model (SaaS, IaaS, or hybrid).</li>
            <li><strong>Privacy Commitment:</strong> We follow strict protocols to safeguard personal and sensitive data, by our Privacy Policy. Corporate data is never used to train external AI models, ensuring complete confidentiality. All models are securely hosted on Microsoft Azure, maintaining enterprise-grade security and compliance.</li>
            <li><strong>Security Measures:</strong> Robust security practices, including role-based access controls, are in place to ensure that users access only the data pertinent to their roles.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Account Termination and Breach of Terms</h2>
          <p className="mb-4">SYNOPTIX AI reserves the right to immediately suspend or terminate your account if you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Engage in unauthorized use or exceed your authorized access.</li>
            <li>Upload or transmit harmful software or engage in actions that compromise the security or integrity of the Platform.</li>
            <li>Violate any part of these Terms in a manner that jeopardizes the service or our reputation.</li>
          </ul>
          <p>Termination may occur without prior notice, and any fees paid are non-refundable.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law and Dispute Resolution</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Governing Law:</strong> These Terms are governed by the laws of Australia.</li>
            <li><strong>Jurisdiction:</strong> Any disputes arising from your use of the Platform will be resolved in Australian courts.</li>
            <li><strong>Dispute Resolution:</strong> Should disputes arise, binding arbitration in Australia will serve as the primary method of resolution, except where immediate injunctive relief is necessary.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. No Warranty</h2>
          <p className="mb-4">
            The SYNOPTIX AI Platform is provided on an "as is" basis, without any express or implied warranties regarding its performance, accuracy, or reliability. 
            You use the Platform at your own risk, and we do not guarantee uninterrupted or error-free service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="mb-4">
            Under no circumstances shall SYNOPTIX AI be liable for any indirect, incidental, or consequential damages—including, without limitation, 
            loss of profits, data, or business interruptions—that arise from your use or inability to use the Platform. 
            Our total liability, if any, will not exceed the amount you have paid (if applicable) for access to the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless SYNOPTIX AI, its affiliates, and their respective employees or agents from any claims, 
            damages, or losses arising out of or related to your use of the Platform or any breach of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Reporting Intellectual Property Infringement</h2>
          <p className="mb-4">
            If you believe that your intellectual property rights have been infringed upon through the use of the Platform, 
            please notify us with a detailed report including your contact information, a description of the allegedly infringing material, 
            and evidence supporting your claim. We will review such notifications and take appropriate action as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Equitable Relief</h2>
          <p className="mb-4">
            If a violation of these Terms causes harm to SYNOPTIX AI, monetary damages may not be sufficient to address the impact. 
            Therefore, SYNOPTIX AI may seek injunctive or other equitable relief to prevent further harm without the need to post a bond.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. General Provisions and Amendments</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>This document represents the entire agreement between you and SYNOPTIX AI regarding your use of the Platform and supersedes all prior understandings.</li>
            <li>If any section of these Terms is found to be unenforceable, the remainder will continue in full effect.</li>
            <li>SYNOPTIX AI may update these Terms at any time. Changes will be posted on the Platform, and your continued use of the service will constitute your acceptance of the updated Terms.</li>
            <li><strong>Disclaimer:</strong> AI-generated responses may be inaccurate, biased, or incomplete. Users should not rely solely on AI outputs for critical decisions. SYNOPTIX AI is not responsible for any consequences resulting from AI-generated content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">For any questions or concerns, please contact us at:</p>
          <p className="mb-4">
            Email: <a href="mailto:hello@synoptix.ai" className="text-blue-600 hover:underline">hello@synoptix.ai</a>
          </p>
          <p className="mt-8 text-gray-600">
            Thank you for choosing SYNOPTIX AI. We remain committed to providing secure, innovative AI-driven solutions tailored to your enterprise needs.
          </p>
        </section>
      </div>
    </div>
  );
}
