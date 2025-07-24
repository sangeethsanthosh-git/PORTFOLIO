// components/Skills.tsx
import Image from "next/image";

const skillRows = [
  {
    category: "Frontend & Tools",
    items: [
      { name: "HTML", icon: "/skills/html.png" },
      { name: "CSS", icon: "/skills/css.png" },
      { name: "JavaScript", icon: "/skills/javascript.png" },
      { name: "React.js", icon: "/skills/react.png" },
      { name: "Next.js", icon: "/skills/nextjs.png" },
      { name: "VS Code", icon: "/skills/vscode.png" },
      { name: "Git", icon: "/skills/git.png" },
      { name: "Bootstrap", icon: "/skills/bootstrap.png" },
      { name: "Apache Server", icon: "/skills/apache.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "/skills/python.png" },
      { name: "Django", icon: "/skills/django.png" },
      { name: "Node.js", icon: "/skills/nodejs.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "Postman", icon: "/skills/postman.png" },
      { name: "PostgreSQL", icon: "/skills/postgresql.png" },
    ],
  },
  {
    category: "Design & Currently Learning",
    items: [
      { name: "Figma", icon: "/skills/figma.png" },
      { name: "Canva", icon: "/skills/canva.png" },
      { name: "TypeScript", icon: "/skills/typescript.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
      { name: "Framer Motion", icon: "/skills/framer.png" },
      
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-20" id="skills">
      
{/* Section Label */}

      <div className="space-y-5 transform -translate-y-[-1.5rem]">
        {skillRows.map((row, index) => (
          <div key={row.category} className="relative overflow-hidden group h-20">
            {/* Optional fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div
              className={`flex w-max gap-6 absolute top-0 ${
                index % 1 === 0 ? "animate-marquee" : "animate-marquee-reverse"
              }`}
            >
              {[...row.items, ...row.items, ...row.items].map((skill, i) => (
                <div
                  key={`${skill.name}-${i}`}
                  className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 shadow-md min-w-fit"
                >
                 <Image
  src={skill.icon}
  alt={skill.name}
  width={32}
  height={32}
  className="w-8 h-8 rounded-full object-contain"
/>

                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

                  