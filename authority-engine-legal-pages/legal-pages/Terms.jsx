import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalContent from "../components/LegalContent";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LegalContent
        kicker="Legal"
        title="Terms of Use"
        updated="27 August 2026"
      >
        <p>
          These Terms of Use govern access to The Authority Engine
          (<a href="https://www.theauthorityengine.org">www.theauthorityengine.org</a>).
          The site is operated by <strong>XenMedia Marketing Limited</strong> (“we”, “us”, “our”).
        </p>

        <h2>Operator</h2>
        <p>
          XenMedia Marketing Limited<br />
          Ste 2, 4 Blenheim Court, Peppercorn Close<br />
          Peterborough, PE1 2DU<br />
          United Kingdom<br />
          Email: <a href="mailto:des@theauthorityengine.org">des@theauthorityengine.org</a>
        </p>

        <h2>Nature of the service</h2>
        <p>
          This website explains YouTube-led lead generation ideas, points to videos,
          and offers ways to book a call or join a community. Content is for general
          information. It is not legal, financial, or guaranteed marketing advice.
          Results vary.
        </p>

        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Misuse the site or attempt to break its security</li>
          <li>Submit false or abusive contact-form messages</li>
          <li>Copy the site in a way that passes it off as your own</li>
          <li>Use automated tools to scrape the site in bulk</li>
        </ul>

        <h2>Third-party services</h2>
        <p>
          Links to YouTube, Skool, Google Calendar, LinkedIn, and X/Twitter leave this site.
          Their terms and privacy policies apply once you are there. We are not responsible
          for those services.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Site design, text, and branding belong to us or our licensors unless stated otherwise.
          You may share links to public pages. You may not reuse the materials as your own
          course or product without written permission.
        </p>

        <h2>No warranty</h2>
        <p>
          The site is provided “as is”. We do not warrant that it will be uninterrupted or error-free.
          Frameworks such as CAT Moments and Search-Estate are educational. They do not guarantee
          leads, revenue, or platform performance.
        </p>

        <h2>Liability</h2>
        <p>
          To the fullest extent allowed by UK law, we are not liable for indirect or consequential
          loss arising from use of the site. Nothing in these terms limits liability for death or
          personal injury caused by negligence, or for fraud.
        </p>

        <h2>Paid work</h2>
        <p>
          Consulting, training, or speaking is agreed separately. These website terms do not
          replace a proposal, invoice, or contract for that work.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms. Continued use of the site after a change means you accept the new terms.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of England and Wales. Courts of England and Wales have jurisdiction.</p>
      </LegalContent>
      <Footer />
    </div>
  );
}
