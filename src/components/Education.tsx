export default function Education() {
  const education = [
    ["2025 – Pursuing", "Master of Computer Applications", "APJ Abdul Kalam Technological University"],
    ["2022 – 2025", "Bachelor of Science in Computer Science", "Kerala University"],
    ["2021 – 2022", "High School", "Central Board of Secondary Education"],
  ];

  return (
    <section className="bg-[#2a2a2a] text-white py-20 px-6 opacity-80">
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map(([year, degree, place], idx) => (
          <div key={idx} className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-[#f9f5ed] font-mono text-sm">{year}</span>
            <div className="text-right">
              <p className=" text-[#f9f5ed] font-medium ">{degree}</p>
              <p className="text-sm text-gray-400">{place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
