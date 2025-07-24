import React from "react";

const services = [
  {
    label: "Featured",
    title: "Web Development",
    time: "Crafting modern websites",
    color: "bg-[#4d4d4d]",
  },
  {
    title1: "UI/UX Design",
    time1: "Wireframes & Prototyping",
    color: "bg-[#dedede] border border-gray-300",
  },
  {
    title: "SEO Optimization",
    time: "Boost your visibility",
    color: "bg-[#4d4d4d]",
  },
  {
    title1: "Brand Strategy",
    time1: "Align your brand voice",
    color: "bg-[#dedede] border border-gray-300",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-[#222222] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-[#ff6d1f] rounded-2xl p-6 flex shadow-xl">
        {/* Left Column */}
        <div className="w-1/3 text-center flex flex-col justify-center">
          <p className="text-[#faf3e1] text-sm">SERVICES</p>
          <h1 className="text-6xl font-bold text-[#f5e7c6]">What I Do</h1>
        </div>

        {/* Right Column */}
        <div className="w-2/3 flex flex-col space-y-4 pl-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 ${service.color} transition-transform hover:scale-[1.02]`}
            >
              {service.label && (
                <div className="text-xs bg-green-800 text-white px-2 py-1 rounded-full inline-block mb-2">
                  {service.label}
                </div>
              )}
              <h3 className="text-lg font-semibold text-[#dedede]">{service.title}</h3>
              <p className="text-sm text-[#dedede]">{service.time}</p>
              <h3 className="text-lg font-semibold text-[#ff6d1f]">{service.title1}</h3>
              <p className="text-sm text-[#ff6d1f]">{service.time1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}