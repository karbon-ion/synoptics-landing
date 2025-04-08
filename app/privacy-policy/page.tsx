import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 mt-15">SYNOPTIX.AI Privacy Policy</h1>
      <div className="text-sm text-gray-600 mb-8">
        <p>Version: 1.1</p>
        <p>Effective Date: 28 February 2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">INTRODUCTION</h2>
          <p className="mb-4">
            This document is an integral part of the SYNOPTIX.AI Platform Terms of Service. SYNOPTIX.AI trading under IHA Consulting Pty Ltd ("SYNOPTIX.AI," "the Company," "we," "us," or "our") is devoted to protecting the corporate data of all users, visitors, and service recipients ("you" or "your"). We are a platform that delivers AI enterprise platform for real-time chat, automated workflows, secure document retrieval, and process optimization. Our solutions are designed for enterprises of all sizes, with seamless integration capabilities for systems like SharePoint and Microsoft Teams.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">PURPOSE OF THIS PRIVACY POLICY</h2>
          <p className="mb-4">This Policy explains:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The types of personal information ("Personal Data") we collect;</li>
            <li>How we use that data;</li>
            <li>The measures we take to protect it;</li>
            <li>The circumstances under which we may disclose it.</li>
          </ul>
          <p>We aim to provide clear and transparent information about our data-handling practices and your rights, in compliance with applicable privacy laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">APPLICATION OF THIS PRIVACY POLICY</h2>
          <p className="mb-4">
            By accessing or using the SYNOPTIX.AI Platform, you agree to the practices described herein. If you do not consent to these terms, please do not use our platform. In enterprise arrangements where your employer is the primary data controller, our role is limited to processing data as directed by your employer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">INFORMATION COLLECTION</h2>
          <p className="mb-4">The type of information collected depends on the specific offering. SYNOPTIX.AI provides a range of solutions, including SaaS, IaaS, and PaaS, and may collect the following information:</p>
          
          <h3 className="text-xl font-semibold mb-3">Categories of Data We Gather</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Personal Data:</h4>
            <p className="mb-2">Information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration Details: Full name, email address, and contact information.</li>
              <li>Profile Attributes: Optional details like job title, demographic information, and preferences.</li>
              <li>Communication Logs: Records of inquiries, support requests, or messages.</li>
              <li>User-Generated Content: Data you post or upload on our platform.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Usage Data:</h4>
            <p>Automatically captured as you interact with our platform, including login timestamps, IP addresses, device specifications, browser types, and navigation patterns.</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Transactional Data:</h4>
            <p>Details regarding any payments, subscriptions, or financial interactions.</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Aggregated Data:</h4>
            <p>Data that is anonymized or aggregated so that you are no longer identifiable is not considered Personal Data unless later re-associated with identifiable information.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">HOW SYNOPTIX.AI COLLECTS YOUR INFORMATION</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">Direct Provision by Users</h3>
            <p className="mb-2">You provide information to us through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account Registration: Creating your user profile on our platform.</li>
              <li>Interactive Engagements: Participating in surveys, competitions, or using features like our Quick Chat Agent.</li>
              <li>Communications: Contacting our support, sales, or administrative teams via email, chat, or phone.</li>
              <li>Event Registration: Signing up for webinars, training sessions, or partner-hosted events.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">Automated Data Capture</h3>
            <p className="mb-2">Our platform gathers technical data automatically as you use the service, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Server Logs: Details such as IP addresses, access times, and session duration.</li>
              <li>Tracking Mechanisms: Utilizing cookies and similar technologies to monitor navigation paths and usage patterns.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">CONTACT INFORMATION</h2>
          <p className="mb-4">For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <p className="mb-4">
            Email: <a href="mailto:hello@synoptix.ai" className="text-blue-600 hover:underline">hello@synoptix.ai</a>
          </p>
          <p className="mt-8 text-gray-600">
            Thank you for choosing SYNOPTIX.AI. We remain committed to protecting your privacy while providing secure, innovative AI-driven solutions tailored to your enterprise needs.
          </p>
        </section>
      </div>
    </div>
  );
}
