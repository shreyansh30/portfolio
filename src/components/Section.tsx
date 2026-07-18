import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const underlineWidth = useTransform(
  scrollYProgress,
  [0, 1],
  ["0%", "100%"]
);

  return (
    <motion.section
    ref = {ref}
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
        once: true,
        amount: 0.2,
    }}
    transition={{
        duration: 0.7,
        ease: "easeOut",
    }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="px-5 md:px-8">

          <div className="inline-block mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
              {title}
            </h2>

            <motion.div
              style={{ width: underlineWidth }}
              className="mt-3 h-0.5 rounded-full bg-green-500"
            />
          </div>

          {children}

        </div>

        <div className="mt-15 mb-5 border-b border-zinc-900" />
      </div>
    </motion.section>
  );
};

export default Section;