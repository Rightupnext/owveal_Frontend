import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733004/Pharma_2_honbdy.jpg";
// This hero has no title/subtitle overlay — image only, matching the design.

const INTRO_HEADING = "Clean Engineering for Controlled Environments";
const INTRO_PARAGRAPH =
  "We deliver engineering solutions tailored for pharmaceutical production where hygiene, compliance, and precision are essential.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733003/Pharma_dmibhr.webp";

const INTRO_CHECKLIST = [
  "GMP-aligned equipment design",
  "Process automation",
  "Precision fabrication",
  "Cleanroom-compatible systems",
];

const SOLUTIONS_HEADING = "Our Pharmaceutical Innovations";

const SOLUTIONS = [
  {
    title: "Tablet Handling & Packing Systems",
    description: "Reducing manual effort while improving consistency.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733005/Healthcare_pqopc7.jpg",
  },
  {
    title: "Cleanroom Equipment Design",
    description: "Ensuring easy maintenance and contamination control.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733004/Pharma_2_honbdy.jpg",
  },
  {
    title: "Process Optimization Systems",
    description: "Enhancing production efficiency and reliability.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733003/Healthcare_2_ock0f3.jpg",
  },
];

const CLOSING_BANNER = {
  title: "Advancing Pharmaceutical Innovation",
  description:
    "Our engineering solutions help pharmaceutical industries enhance product quality, ensure safety, and streamline manufacturing processes.",
};

const FOOTER_COLUMNS = [
  {
    heading: "Industries",
    links: [
      "Healthcare",
      "Technology",
      "Railway",
      "Aerospace",
      "Defense",
      "Automotive",
      "Pharmaceuticals",
      "Heavy Machinery",
      "Food & Beverage",
      "Agro-tech",
    ],
  },
  {
    heading: "Expertise",
    links: ["Engineering and R&D", "Education", "Manufacturing", "Digital Solutions"],
  },
  {
    heading: "Insights",
    links: ["Case Studies", "Success Story", "Careers"],
  },
];



// ---- Animation helper: fires once when the element scrolls into view ----
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ---- Sub-components ----

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`relative h-[420px] sm:h-[480px] w-full bg-cover bg-center flex items-center justify-center transition-all duration-1000 ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0  z-10" />

      {/* Centered Content Container */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-4xl font-black text-white tracking-wide mb-4 drop-shadow-lg">
          Pharmaceuticals
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow">
          We deliver engineering solutions tailored for pharmaceutical production where
          <br className="hidden sm:inline" /> hygiene, compliance, and precision are essential.
        </p>
      </div>
    </section>
  );
}

function IntroSection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-gray-100 px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className={`text-3xl font-extrabold text-gray-900 mb-5 leading-tight transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0 tracking-normal" : "opacity-0 translate-y-3 tracking-[0.2em]"
            }`}
          >
            {INTRO_HEADING}
          </h2>
          <p
            className={`text-gray-600 mb-6 transition-opacity duration-700 ease-out delay-200 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            {INTRO_PARAGRAPH}
          </p>
          <ul className="space-y-3">
            {INTRO_CHECKLIST.map((item, idx) => (
              <li
                key={item}
                style={{ transitionDelay: inView ? `${350 + idx * 120}ms` : "0ms" }}
                className={`flex items-center gap-3 text-gray-700 transition-all duration-500 ease-out ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}
              >
                <Check className="w-5 h-5 text-indigo-700 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg shadow-md w-full h-[380px] overflow-hidden">
          <img
            src={INTRO_IMAGE_URL}
            alt="Pharmaceutical cleanroom engineering"
            className="w-full h-full object-cover"
            style={{
              clipPath: inView ? "inset(0% 0 0% 0)" : "inset(50% 0 50% 0)",
              opacity: inView ? 1 : 0,
              transition: "clip-path 800ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms ease-out",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ title, description, imageUrl, index = 0, inView = true }) {
  return (
    <div
      style={{
        transitionDelay: inView ? `${index * 150}ms` : "0ms",
        transformOrigin: "left center",
        transform: inView ? "perspective(1000px) rotateY(0deg)" : "perspective(1000px) rotateY(-85deg)",
        transition: "transform 700ms cubic-bezier(0.65, 0, 0.35, 1), opacity 500ms ease-out, box-shadow 300ms ease-out",
        opacity: inView ? 1 : 0,
      }}
      className="bg-gray-50 rounded-lg shadow-sm overflow-hidden group hover:shadow-lg hover:ring-2 hover:ring-indigo-200"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function SolutionsSection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="px-6 lg:px-20 py-16 bg-white">
      <h2
        className={`text-3xl font-extrabold text-center text-gray-900 mb-12 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {SOLUTIONS_HEADING}
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
        {SOLUTIONS.map((solution, idx) => (
          <SolutionCard key={solution.title} {...solution} index={idx} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function ClosingBanner() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative bg-gray-100 px-6 py-16 text-center overflow-hidden">
      <div
        className={`absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/40 blur-3xl transition-transform duration-1000 ease-out ${
          inView ? "scale-100" : "scale-0"
        }`}
      />
      <h2
        className={`relative text-3xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        {CLOSING_BANNER.title}
      </h2>
      <p
        className={`relative text-gray-600 max-w-2xl mx-auto transition-all duration-700 ease-out delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {CLOSING_BANNER.description}
      </p>
    </section>
  );
}


// ---- Page ----

export default function PharmaceuticalsPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* <Navbar /> */}
      <Hero />
      <IntroSection />
      <SolutionsSection />
      <ClosingBanner />
      {/* <Footer /> */}
    </div>
  );
}