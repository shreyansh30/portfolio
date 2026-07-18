import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="max-w-5xl text-zinc-400 leading-8 text-lg">
        <p>
          I'm a Computer Science student at KIIT University with interests in Data Engineering, Software Development, Networking, and Cybersecurity. I enjoy building data-driven solutions and scalable applications, combining technical knowledge with practical problem-solving.
        </p>

        <br />

        <p>
          Through academic projects and industry experience, I have developed a strong foundation in cloud technologies, analytics platforms, and modern software development. I'm passionate about learning new technologies and continuously growing as an engineer.
        </p>
      </div>
    </Section>
  );
};

export default About;