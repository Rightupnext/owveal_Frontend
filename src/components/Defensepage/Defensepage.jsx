import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733740/Screenshot_2026-04-09_165152_st71rf.png";
// This hero has no title/subtitle overlay — image only, matching the design.

const INTRO_HEADING = "Engineering for Mission-Critical Reliability";
const INTRO_PARAGRAPH =
  "We develop robust and dependable systems designed to perform in extreme and unpredictable environments.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733739/Screenshot_2026-04-09_165110_refq8h.png";

const INTRO_CHECKLIST = [
  "Rugged mechanical design",
  "High-reliability systems",
  "Reverse engineering",
  "Testing & validation",
];

const SOLUTIONS_HEADING = "Industry-Focused Solutions";

const SOLUTIONS = [
  {
    title: "High-Durability Mechanical Systems",
    description: "Designed for extreme operational conditions.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733740/Screenshot_2026-04-09_165152_st71rf.png",
  },
  {
    title: "Protective Structural Designs",
    description: "Ensuring safety and longevity.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733741/Screenshot_2026-04-09_165159_m3hepl.png",
  },
  {
    title: "Testing & Validation Rigs",
    description: "Simulating real-world performance requirements.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733740/Screenshot_2026-04-09_165126_smdvks.png",
  },
];

const CLOSING_BANNER = {
  title: "Securing the Future",
  description:
    "Our defense innovations enhance operational efficiency, improve safety, and contribute to stronger national security systems.",
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

const COMPANY_ADDRESS = {
  lines: [
    "3rd floor, Bearing No: T-1, Sri",
    "Maruthi flats, No28, Vigneshwara St,",
    "Ramapuram, Ganesh Nagar, Guindy,",
    "Chennai, Tamil Nadu 600032",
  ],
  callUs: "044-46166727",
  phone: "+91 99400 48987",
};

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
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-10" />

      {/* Centered Content Container */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-4xl font-black text-white tracking-wide mb-4 drop-shadow-lg">
          Defence & Engineering
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow">
          We develop robust and dependable systems designed to perform in extreme
          <br className="hidden sm:inline" /> and unpredictable environments for mission-critical reliability.
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
              inView ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-95"
            }`}
          >
            {INTRO_HEADING}
          </h2>
          <p
            className={`text-gray-600 mb-6 transition-all duration-700 ease-out delay-150 ${
              inView ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          >
            {INTRO_PARAGRAPH}
          </p>
          <ul className="space-y-3">
            {INTRO_CHECKLIST.map((item, idx) => (
              <li
                key={item}
                style={{ transitionDelay: inView ? `${300 + idx * 120}ms` : "0ms" }}
                className={`flex items-center gap-3 text-gray-700 transition-all duration-500 ease-out ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
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
            alt="Defense systems engineering"
            className="w-full h-full object-cover"
            style={{
              clipPath: inView ? "circle(75% at 50% 50%)" : "circle(0% at 50% 50%)",
              transition: "clip-path 900ms cubic-bezier(0.65, 0, 0.35, 1)",
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
      style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
      className={`bg-gray-50 rounded-lg shadow-sm overflow-hidden group transition-all duration-700 ease-out hover:shadow-lg hover:-rotate-1 ${
        inView ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-6 scale-90"
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
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
          inView ? "opacity-100 tracking-normal" : "opacity-0 tracking-widest"
        }`}
      >
        {SOLUTIONS_HEADING}
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <section ref={ref} className="bg-gray-100 px-6 py-16 text-center">
      <h2
        className={`inline-block relative text-3xl font-extrabold text-gray-900 mb-4 transition-opacity duration-700 ease-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {CLOSING_BANNER.title}
        <span
          className={`absolute left-1/2 -bottom-2 h-[3px] bg-indigo-700 -translate-x-1/2 transition-all duration-700 ease-out delay-300 ${
            inView ? "w-full" : "w-0"
          }`}
        />
      </h2>
      <p
        className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 ease-out delay-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {CLOSING_BANNER.description}
      </p>
    </section>
  );
}



// ---- Page ----

export default function DefensePage() {
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