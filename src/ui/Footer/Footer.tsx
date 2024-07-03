import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 py-4 mb-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Ghriet. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="/about" passHref>
            <span className="hover:underline">About Us</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:underline">Contact</span>
          </Link>
          <Link href="/privacy" passHref>
            <span className="hover:underline">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
