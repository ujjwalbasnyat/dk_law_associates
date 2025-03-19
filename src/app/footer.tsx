'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[var(--background-color)] text-[var(--foreground-color)] py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Dk Law Associates</h2>
          <p className="mt-2 text-sm">Dedicated to providing expert legal solutions with integrity.</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center"><FiMapPin className="mr-2" /> Kathmandu, Nepal</p>
            <p className="flex items-center"><FiPhone className="mr-2" /> +1 (234) 567-890</p>
            <p className="flex items-center"><FiMail className="mr-2" /> contact@dklawassociates.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Home</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">About Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Practice Areas</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Our Team</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Blog</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Policies */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Legal</h2>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-[var(--accent-color)]">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-[var(--border-color)] pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dk law Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;