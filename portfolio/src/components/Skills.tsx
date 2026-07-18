import Section from "./Section";

const skillCategories = [
  {
    title: "Data Engineering & Analytics",
    skills: [
      "Microsoft Fabric",
      "Databricks",
      "PySpark",
      "Apache Spark",
      "SQL",
      "Power BI",
      "Azure Data Factory",
      "Delta Lake",
      "Pandas",
      "NumPy",
      "Azure Analysis Services",
      "Microsoft Excel",
      "Microsoft Power Point",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "Python",
      "Java",
      "C++",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Azure Storage",
      "Git",
      "GitHub",
      "Linux",
      "Docker",
    ],
  },
  {
    title: "Cybersecurity & Networking",
    skills: [
      "TCP/IP",
      "Network Security",
      "Wireshark",
      "Nmap",
      "Linux Security",
    ],
  },
];

const Skills = () => {
    return (
        <Section id="skills" title="Skills">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {skillCategories.map((category) => (
    <div
      key={category.title}
      className="
        rounded-4xl
        p-6
        bg-white/2
        border border-white/10
        backdrop-blur-sm
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        transition-all
        duration-300
        hover:bg-white/4
      "
    >
      <h3 className="text-lg font-semibold mb-5">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-3">

        {category.skills.map((skill) => (
          <div
            key={skill}
            className="
              px-4
              py-2
              rounded-full
              border border-white/8
              bg-white/1
              text-zinc-300
              transition-all
              duration-300
              hover:border-green-500
            "
          >
            {skill}
          </div>
        ))}

      </div>
    </div>
  ))}

</div>

        </Section>
    );
};

export default Skills;