// components/Hero.tsx
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      <HeroBackground />
      <div className="text-center max-w-4xl">
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-green-500 text-lg md:text-m mb-6 tracking-wide font-medium"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Shreyansh
          <br />
          Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 mt-8 text-lg"
        >
          Data Engineer & Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          {/* Resume Button — glass with green tint */}
          
          <a
            href="https://drive.google.com/file/d/1xc5_UtibIZZWQ5FVxCOKgAXTSKlB4k_Q/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              rounded-full
              font-medium
              text-white
              border border-green-400/40
              bg-green-500/15
              backdrop-blur-xl
              shadow-[0_8px_32px_rgba(34,197,94,0.15)]
              transition-all
              duration-300
              hover:bg-green-500/20
              hover:border-green-400/50
              hover:shadow-[0_8px_32px_rgba(34,197,94,0.25)]
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            Resume
          </a>

          {/* My Work Button — neutral glass */}
          
          <a
            href="#projects"
            className="
              px-6 py-3
              rounded-full
              font-medium
              text-white
              border border-white/15
              bg-white/5
              backdrop-blur-xl
              shadow-[0_8px_32px_rgba(0,0,0,0.2)]
              transition-all
              duration-300
              hover:bg-white/10
              hover:border-white/25
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            My Work
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;