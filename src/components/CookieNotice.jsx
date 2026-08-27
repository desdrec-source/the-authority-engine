import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "tae_cookie_notice";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl shadow-black/30 border border-white/10 px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          We use essential cookies to run this site and YouTube cookies when videos load.
          Read the{" "}
          <Link to="/cookies" className="text-ember-400 underline hover:text-ember-300">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="px-4 py-2.5 text-sm font-medium rounded-full border border-white/20 text-slate-200 hover:bg-white/10"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-ember-500 to-ember-600 text-white hover:shadow-lg hover:shadow-ember-500/30"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
