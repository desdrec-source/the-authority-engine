import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalContent from "../components/LegalContent";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LegalContent
        kicker="Legal"
        title="Privacy Policy"
        updated="27 August 2026"
      >
        <p>
          The Authority Engine (<a href="https://www.theauthorityengine.org">www.theauthorityengine.org</a>)
          is operated by <strong>XenMedia Marketing Limited</strong> (“we”, “us”, “our”).
          This Privacy Policy explains how we handle information when you visit the site,
          book a call, join the community, or send a message.
        </p>

        <h2>Who we are</h2>
        <p>
          XenMedia Marketing Limited<br />
          Ste 2, 4 Blenheim Court, Peppercorn Close<br />
          Peterborough, PE1 2DU<br />
          United Kingdom<br />
          Email: <a href="mailto:des@theauthorityengine.org">des@theauthorityengine.org</a>
        </p>

        <h2>What this site does</h2>
        <p>
          This is a marketing website for YouTube-led lead generation training and consulting.
          It has no user accounts and no member login. Community membership is handled on Skool.
          Call booking is handled by Google Calendar.
        </p>

        <h2>Information we collect</h2>
        <p>We aim to collect as little personal data as possible.</p>
        <ul>
          <li>
            <strong>Server / hosting logs.</strong> Our host (Vercel) may process technical data
            such as IP address, browser type, and request timestamps for security, performance, and abuse prevention.
          </li>
          <li>
            <strong>Contact form.</strong> If you send a message, we process the name, email address,
            and message you submit so we can reply.
          </li>
          <li>
            <strong>Booking and community.</strong> If you book a call or join the Skool community,
            those services collect information under their own policies.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To operate and secure the website</li>
          <li>To respond to enquiries</li>
          <li>To arrange calls you request</li>
          <li>To meet legal obligations</li>
        </ul>
        <p>We do not sell personal data.</p>

        <h2>Legal basis (UK GDPR)</h2>
        <ul>
          <li><strong>Legitimate interests</strong> — running a secure website and answering business enquiries</li>
          <li><strong>Contract / steps toward a contract</strong> — if you ask to work with us</li>
          <li><strong>Consent</strong> — where you choose to submit a form or enable optional cookies in your browser</li>
          <li><strong>Legal obligation</strong> — where the law requires us to keep or disclose information</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          This site uses a small number of cookies and similar technologies, mainly for the site to work
          and for embedded YouTube videos. Details are in our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>

        <h2>Who we share information with</h2>
        <ul>
          <li>Vercel — website hosting</li>
          <li>Hostinger — domain and email hosting</li>
          <li>Google — calendar booking and YouTube embeds</li>
          <li>Skool — community, if you join it</li>
        </ul>
        <p>They only receive what is needed to provide their service.</p>

        <h2>How long we keep it</h2>
        <p>
          Hosting logs are kept for a short period by the host. Enquiry emails are kept only as long
          as needed to reply and manage the relationship, then deleted or archived in the ordinary
          course of email. You can ask us to delete an enquiry at any time.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK GDPR you can ask for access, correction, deletion, restriction, objection,
          or portability of your personal data, and you can complain to the ICO at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          Email <a href="mailto:des@theauthorityengine.org">des@theauthorityengine.org</a> to make a request.
        </p>

        <h2>Children</h2>
        <p>This site is intended for adults running a business. It is not aimed at children.</p>

        <h2>Changes</h2>
        <p>We may update this policy. The date at the top will change when we do.</p>
      </LegalContent>
      <Footer />
    </div>
  );
}
