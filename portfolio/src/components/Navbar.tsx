// components/Navbar.tsx
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "backdrop-blur-xl bg-zinc-950/55 border-b border-zinc-800/60"
        : "bg-transparent border-b border-transparent"
    }`}
    >
      <div
        className={`max-w-6xl mx-auto px-5 md:px-0 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >

        <div className="relative group">

  {/* Small avatar */}

  <div
    className="
      h-10
      w-10
      rounded-full
      overflow-hidden
      border-2
      border-green-500
      shadow-[0_0_20px_rgba(34,197,94,0.18)]
      transition-all
      duration-300
      group-hover:scale-110
      group-hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
    "
  >
    <img
      src="/profile.jpeg"
      alt="Shreyansh Kumar"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Expanded preview */}

  <div
    className="
      absolute
      left-6
      top-14

      opacity-0
      scale-95
      pointer-events-none

      group-hover:opacity-100
      group-hover:scale-100

      transition-all
      duration-300
    "
  >

    <div
      className="
        h-40
        w-40
        overflow-hidden
        rounded-2xl

        border
        border-green-500/30

        bg-zinc-900/80
        backdrop-blur-xl

        shadow-[0_0_45px_rgba(34,197,94,0.18)]
      "
    >

      <img
        src="/profile.jpeg"
        alt="Shreyansh Kumar"
        className="
          h-full
          w-full
          object-cover
        "
      />

    </div>

  </div>

</div>

        <div className="flex gap-8 text-sm text-zinc-400">

          <a href="#contact">Contact</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;