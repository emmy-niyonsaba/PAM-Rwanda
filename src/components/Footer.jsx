import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🌍 PAM Africa
            </h3>
            <p className="text-neutral-400">
              United for a stronger, prosperous African continent
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/" className="hover:text-primary-400">Home</a></li>
              <li><a href="/events" className="hover:text-primary-400">Events</a></li>
              <li><a href="/history" className="hover:text-primary-400">History</a></li>
              <li><a href="/about" className="hover:text-primary-400">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-400">Resources</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/testimonies" className="hover:text-primary-400">Testimonies</a></li>
              <li><a href="/opportunities" className="hover:text-primary-400">Opportunities</a></li>
              <li><a href="#contact" className="hover:text-primary-400">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-400">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#twitter" className="text-2xl hover:text-primary-400">𝕏</a>
              <a href="#facebook" className="text-2xl hover:text-primary-400">f</a>
              <a href="#instagram" className="text-2xl hover:text-primary-400">📷</a>
              <a href="#linkedin" className="text-2xl hover:text-primary-400">in</a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 text-center text-neutral-400">
          <p>© 2026 Pan-Africanism Movement. All rights reserved. 🖤 Unity Above All 🖤</p>
        </div>
      </div>
    </footer>
  );
}
