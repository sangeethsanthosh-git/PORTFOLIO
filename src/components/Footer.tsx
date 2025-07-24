"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-24">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Left: Main Heading */}
        <div className="text-[48px] md:text-[80px] font-extrabold leading-none">
          GET IN<br />TOUCH
        </div>

        {/* Right: Social Links */}
        <div className="text-sm font-light">
          <h4 className="text-white text-base mb-3 font-semibold">Connect Me</h4>
          <ul className="flex items-center gap-6 text-2xl mt-2">
            <li>
  <a
    href="mailto:sangeethsanthoshsaa@gmail.com?subject=Let's%20Build%20Something%20Awesome&body=Hi%20Sangeeth,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20opportunity.%0D%0A%0D%0AThanks!"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/icons/gmail.png"
      alt="Gmail"
      width={28}
      height={28}
      className="hover:scale-110 transition-transform"
    />
  </a>
</li>

            <li>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/icons/instagram.png"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/icons/github.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank">
                <Image
                  src="/icons/x.png"
                  alt="Twitter/X"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-700" />

      {/* Bottom section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <p>© 2025sangeethsanthoshsa</p>
      </div>
    </footer>
  );
}
