export default function Education() {
  const education = [
    ["2021 – 2025", "B.Tech in Computer Science", "XYZ University"],
    ["2019 – 2021", "Higher Secondary", "ABC School"],
    ["2017 – 2019", "High School", "LMN School"],
  ];

  return (
    <section className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map(([year, degree, place], idx) => (
          <div key={idx} className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-red-500 font-mono text-sm">{year}</span>
            <div className="text-right">
              <p className="font-medium">{degree}</p>
              <p className="text-sm text-gray-400">{place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
