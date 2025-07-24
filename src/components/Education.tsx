"use client";

import { FaLaptopCode, FaReact, FaMobileAlt } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">My Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:shadow-xl transition">
            <FaLaptopCode className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              <span className="text-pink-400 underline decoration-pink-500">Software</span> Development
            </h3>
            <pre className="text-sm bg-[#1a1a1a] p-4 rounded-md text-gray-300">
{`Experienced in both 
functional and OOP: 
Dart, Python, Java, 
JavaScript, TypeScript.`}
            </pre>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:shadow-xl transition">
            <FaReact className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-2">
              <span className="text-blue-400 underline decoration-blue-500">Frontend Dev</span><br />React, NextJS
            </h3>
            <pre className="text-sm bg-[#1a1a1a] p-4 rounded-md text-gray-300">
{`Passionate about UI/UX. 
5+ years with HTML, CSS, 
JS, React, and Next.js.`}
            </pre>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:shadow-xl transition">
            <FaMobileAlt className="text-4xl mb-4 text-orange-400" />
            <h3 className="text-xl font-semibold mb-2">
              <span className="text-orange-400 underline decoration-orange-500">Flutter Dev</span><br />Android, iOS
            </h3>
            <pre className="text-sm bg-[#1a1a1a] p-4 rounded-md text-gray-300">
{`Skilled in hybrid apps 
using Flutter and cross-
platform development.`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
