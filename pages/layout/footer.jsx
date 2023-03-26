import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        © 2023 ELITE TEAM
      </div>
      <div className="footer-right">
        <Link href="/faq">
          <a className="footer-link">FAQ</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;