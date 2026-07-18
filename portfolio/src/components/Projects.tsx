import Section from "./Section";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    category: "DATA PLATFORM",
    title: "Hospital Analytics Platform",
    description:
      "Built an end-to-end healthcare analytics platform using Microsoft Fabric, PySpark, OneLake, Lakehouse and Power BI. Designed scalable data pipelines, semantic models and interactive dashboards to transform raw healthcare data into actionable insights.",
    tech: [
      "Microsoft Fabric",
      "PySpark",
      "Power BI",
      "Lakehouse",
      "OneLake",
      "Delta Tables",
      "Semantic Model",
    ],
    github:
      "https://github.com/Shreyansh30/Healthcare-Analytics-on-Microsoft-Fabric",
  },

  {
    category: "ETL PIPELINE",
    title: "SalesData ETL",
    description:
      "Developed an end-to-end ETL pipeline using Azure Data Factory and Azure Data Lake to ingest, clean and transform retail sales data. Automated data movement and prepared analytics-ready datasets for reporting and downstream consumption.",
    tech: [
      "Azure Data Factory",
      "Azure Data Lake",
      "Azure SQL",
      "PySpark",
      "ETL",
      "CSV",
    ],
    github: "https://github.com/Shreyansh30/SalesData-ETL",
  },

  {
    category: "BUSINESS INTELLIGENCE",
    title: "Azure Semantic Sales Model",
    description:
      "Designed an enterprise semantic model using Azure Analysis Services with star schema modeling, DAX measures and Power BI integration to enable fast, scalable and business-friendly analytics.",
    tech: [
      "Azure Analysis Services",
      "Power BI",
      "DAX",
      "SQL Server",
      "Star Schema",
      "Semantic Model",
    ],
    github:
      "https://github.com/Shreyansh30/azure-analysis-services-semantic-sales-model",
  },

  {
    category: "FULL STACK",
    title: "ColonyConnect",
    description:
      "Built a full-stack residential community platform with authentication, role-based access, media uploads and an AI-powered assistant. Designed to simplify communication, complaint management and society operations.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Gemini API",
    ],
    github: "https://github.com/Shreyansh30/ColonyConnect",
  },

  {
    category: "DATA ANALYTICS",
    title: "Retail Sales Analytics Dashboard",
    description:
      "Developed an interactive sales analytics dashboard with dynamic KPIs, revenue trends and business insights. Leveraged data modeling and DAX calculations to support informed decision-making.",
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "KPIs",
      "Data Modeling",
    ],
    github:
      "https://github.com/Shreyansh30/retail-sales-analytics-dashboard",
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              relative
              rounded-3xl
              border
              border-white/10
              bg-white/3
              backdrop-blur-md
              p-8
              min-h-80
              overflow-hidden

              transition-all
              duration-500
              ease-out
              hover:border-green-500/40
            "
          >
            {/* Category */}
            <p
              className="
                text-green-500
                uppercase
                tracking-[0.25em]
                text-xs
                font-medium
                mb-4

                transition-all
                duration-300

                group-hover:opacity-0
              "
            >
              {project.category}
            </p>

            {/* Title */}
            <h3
              className="
                text-2xl
                font-semibold
                mb-4

                transition-all
                duration-500

                group-hover:-translate-y-9
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-zinc-400
                leading-8
                max-w-md

                transition-all
                duration-500

                group-hover:opacity-0
                group-hover:-translate-y-4
              "
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div
              className="
                absolute
                left-8
                right-8
                top-30

                flex
                flex-wrap
                gap-2

                opacity-0
                translate-y-6

                transition-all
                duration-500

                group-hover:opacity-100
                group-hover:translate-y-0
              "
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-zinc-700
                    text-zinc-300
                    text-sm
                    transition-all
                    duration-300
                    hover:border-green-500
                    hover:text-white
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/button
              absolute
              left-8
              bottom-8

              flex
              items-center
              gap-2

              px-5
              py-2.5

              rounded-lg

              bg-green-500
              text-black

              font-medium
              text-sm

              opacity-0
              translate-y-4

              transition-all
              duration-500
              delay-100

              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <FaGithub size={16} />

            <span>GitHub</span>

            <ExternalLink
              size={14}
              className="
                w-0
                opacity-0

                transition-all
                duration-300

                group-hover/button:w-4
                group-hover/button:opacity-100
              "
            />
          </a>
          </div>
        ))}
        <div className="mt-14 flex justify-center md:col-span-2">
          <a
            href="https://github.com/Shreyansh30"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 pb-2 text-white font-medium"
          >
            <span>View All Projects</span>

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

            <span
              className="
                absolute
                bottom-0
                left-1/2
                h-0.5
                w-0
                -translate-x-1/2
                bg-green-500
                transition-all
                duration-300
                ease-out
                group-hover:w-full
              "
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;