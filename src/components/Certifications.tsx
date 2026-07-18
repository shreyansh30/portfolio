import Section from "./Section";
import { ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { publicUrl } from "../utils/publicUrl";

const certificates = [
  {
    title: "Accenture Internship Completion",
    image: publicUrl("certificates/accenture.png"),
    pdf: publicUrl("certificates/accenture-internship.png"),
    preview: publicUrl("certificates/accenture-internship.png"),
  },
  {
    title: "Red Hat System Administration",
    image: publicUrl("certificates/redhat.png"),
    url: "https://www.credly.com/badges/429f7286-79be-454a-ba2b-2cbbcd20f205/public_url",
  },
  {
    title: "SAP Business Data Cloud",
    image: publicUrl("certificates/sap.png"),
    url: "https://www.credly.com/badges/c89c83bc-88b2-409c-bfa1-ebcf02d0e76e/public_url",
  },
  {
    title: "Deloitte GenW.AI Explorer",
    image: publicUrl("certificates/deloitte.png"),
    pdf: publicUrl("certificates/deloitte-hacksplosion.png"),
    preview: publicUrl("certificates/deloitte-hacksplosion.png"),
  },
];

const Certifications = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);

    setCanScrollRight(
      scrollLeft < scrollWidth - clientWidth - 5
    );
  };
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 350);
  };
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 350);
  };
  return (
    <Section id="certifications" title="Certifications">

      <div className="relative">

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="
            flex
            gap-6
            overflow-x-hidden
            pb-4
            snap-x
            snap-mandatory
          "
        >
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="
              w-[320px]
              shrink-0
              rounded-4xl
              overflow-hidden
              bg-white/2
              border border-white/10
              backdrop-blur-sm
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              transition-all
              duration-300
              hover:bg-white/3
              snap-start
            "
            >
              {/* Thumbnail */}

              <div className="h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                  w-full
                  h-full
                  object-cover
                "
                />
              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="font-semibold leading-6">
                  {certificate.title}
                </h3>

                {"preview" in certificate && (
                <a
                  href={certificate.preview as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1
                    text-sm
                    text-green-500
                    hover:text-green-400
                    transition-colors
                  "
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              )}

                {"url" in certificate && (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1
                    text-sm
                    text-green-500
                    hover:text-green-400
                    transition-colors
                  "
                  >
                    Verify Badge
                    <ExternalLink size={14} />
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            h-12 w-12
            rounded-full
            bg-white/5
            border border-white/10
            backdrop-blur-sm
            flex items-center justify-center
            hover:bg-white/10
            transition-all
          "
          >
            &lt;
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            h-12 w-12
            rounded-full
            bg-white/5
            border border-white/10
            backdrop-blur-sm
            flex items-center justify-center
            hover:bg-white/10
            transition-all
          "
          >
            &gt;
          </button>
        )}

      </div>

    </Section>
  );
};

export default Certifications;