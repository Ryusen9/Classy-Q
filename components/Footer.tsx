"use client";
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border rounded-sm border-white/10 flex items-center justify-center text-sm font-semibold">
                CQ
              </div>
              <div className="text-xl font-semibold tracking-tight">
                Classy{" "}
                <span className="inline-block border-b border-white/10">Q</span>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Minimal. Modern. Meticulous.
            </p>
            <p className="text-xs text-white/50 mt-3">
              Hand-finished watches designed for everyday elegance.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              <li>
                <a
                  href="/collections"
                  className="text-sm text-white/90 hover:text-white"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-white/90 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/care"
                  className="text-sm text-white/90 hover:text-white"
                >
                  Care & Warranty
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-white/90 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium">Contact</h4>
            <a
              href="mailto:contact@classyq.example"
              className="block text-sm text-white/90 hover:text-white mt-2"
            >
              contact@classyq.example
            </a>
            <p className="text-sm text-white/60 mt-1">Dhaka, Bangladesh</p>
            <div className="mt-4">
              <p className="text-xs text-white/50">Business inquiries</p>
              <a
                href="mailto:hello@classyq.example"
                className="text-sm text-white/90 hover:text-white"
              >
                hello@classyq.example
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium">Subscribe</h4>
            <p className="text-xs text-white/60 mt-2">
              Sign up for new product drops and occasional stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex gap-2"
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/10"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md border border-white/8 text-sm hover:bg-white/6"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {year} Classy Q — All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="text-white/80 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="text-white/80 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a4 4 0 00-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 011-1h3V2z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
