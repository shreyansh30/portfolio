import Section from "./Section";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact" title="Contact">

  <div className="max-w-2xl">

    <p className="text-3xl md:text-4xl font-semibold mb-4">
      Let's build something together.
    </p>

    <p className="text-zinc-400 leading-7 mb-10">
      Interested in data engineering, software development,
      or just want to connect? Let's talk.
    </p>

    <div className="flex flex-col gap-5">

      <a
        href="https://github.com/shreyansh30"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          text-zinc-400
          hover:text-zinc-100
          transition-colors
        "
      >
        <FaGithub size={20} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/shreyanshkumar30"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          text-zinc-400
          hover:text-zinc-100
          transition-colors
        "
      >
        <FaLinkedin size={20} />
        LinkedIn
      </a>

      <a
        href="mailto:shreyansh3045@gmail.com"
        className="
          flex items-center gap-3
          text-zinc-400
          hover:text-zinc-100
          transition-colors
        "
      >
        <FaEnvelope size={20} />
        Email
      </a>

    </div>
  </div>

</Section>
  );
};

export default Contact;