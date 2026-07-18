import Section from "./Section";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { publicUrl } from "../utils/publicUrl";



const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  return (
    <Section id="experience" title="Experience">
      <div className="relative pl-10">

        {/* Timeline Line */}
        <div className="absolute left-3 top-0 h-full w-px bg-zinc-800" />

        {/* Timeline Item */}
        <div className="relative">

          {/* Timeline Dot */}
          <div className="absolute -left-8.5 top-8 h-4 w-4 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />

          {/* Card */}
          <div
            className="
              rounded-4xl
              p-8
              bg-white/2
              border border-white/10
              backdrop-blur-sm
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              transition-all
              duration-300
              hover:bg-white/4
            "
          >
            <h3 className="text-2xl font-semibold">
              Custom Software Engineering Associate
            </h3>

            <div className="flex items-center gap-1 mt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCertificate(true);
                }}
                className="group flex items-center gap-1 text-green-500 cursor-pointer"
              >
                <span>Accenture</span>

                <ExternalLink
                  size={14}
                  className="
                    opacity-0
                    -translate-x-1
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-0
                  "
                />
              </button>
            </div>

            <p className="text-zinc-500 text-sm mt-1">
              May 2026 – July 2026
            </p>

            <p className="text-zinc-400 mt-6 leading-7">
              Worked with Microsoft Fabric, Databricks, Azure Analysis
              Services, and Power BI to build analytics and data
              solutions. Gained hands-on experience with cloud
              technologies, semantic modeling, and modern data
              engineering workflows in an enterprise environment.
            </p>
          </div>

        </div>

      </div>
      {showCertificate && (
  <div
    onClick={() => setShowCertificate(false)}
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60
      backdrop-blur-sm
      p-6
    "
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="
        w-full
        max-w-4xl
        h-[80vh]
        rounded-3xl
        overflow-hidden
        border border-white/10
        bg-zinc-950
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        flex flex-col
      "
    >
      {/* Certificate Preview */}
      <div className="flex-1 overflow-y-auto">
        <img
          src={publicUrl("certificates/accenture-internship.png")}
          alt="Accenture Internship Certificate"
          className="w-full"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t border-white/10">
        <p className="text-sm text-zinc-400">
          Accenture Internship Certificate
        </p>

        <div className="flex gap-3">
          <a
            href={publicUrl("certificates/accenture-internship.pdf")}
            download
            className="
              px-4 py-2
              rounded-xl
              bg-white/5
              text-sm
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Download
          </a>

          <button
            onClick={() => setShowCertificate(false)}
            className="
              px-4 py-2
              rounded-xl
              bg-white/5
              text-sm
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </Section>
  );
};

export default Experience;