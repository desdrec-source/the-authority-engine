import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalContent from "../components/LegalContent";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LegalContent
        kicker="Legal"
        title="Cookie Policy"
        updated="27 August 2026"
      >
        <p>
          This Cookie Policy explains how The Authority Engine uses cookies and similar
          technologies. It should be read with our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device. Similar tools include local storage
          and pixels used by embedded videos.
        </p>

        <h2>What we use</h2>
        <ul>
          <li>
            <strong>Strictly necessary.</strong> Basic files needed for the site to load and
            remember a short-lived session. These do not require consent.
          </li>
          <li>
            <strong>Embedded YouTube videos.</strong> Video pages load YouTube (Google) player
            cookies when a video is shown. Those cookies are set by Google, not by us.
          </li>
          <li>
            <strong>Outbound tools.</strong> Booking a call uses Google Calendar. Joining the
            community uses Skool. Those sites set their own cookies after you leave this site.
          </li>
        </ul>
        <p>
          We do not currently run advertising cookies or a marketing pixel on this website.
          If Vercel Analytics or a similar tool is switched on later, this page will be updated.
        </p>

        <h2>Your choices</h2>
        <p>
          You can block or delete cookies in your browser settings. If you block all cookies,
          some embedded videos may not play. Browser guides:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.microsoft.com/microsoft-edge" target="_blank" rel="noopener noreferrer">Edge</a></li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:des@theauthorityengine.org">des@theauthorityengine.org</a>
        </p>
      </LegalContent>
      <Footer />
    </div>
  );
}
