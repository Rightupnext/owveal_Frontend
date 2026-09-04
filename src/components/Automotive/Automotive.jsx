import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_TITLE = "Automotive";
const HERO_SUBTITLE =
  "Delivering advanced engineering solutions to ensure safety, quality, and efficient production processes.";
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777370408/Automobile_cyfyuj.jpg";

const INTRO_HEADING = "Driving Engineering Excellence in Mobility";
const INTRO_PARAGRAPH =
  "We support automotive and EV development with robust engineering solutions focused on performance, manufacturability, and cost efficiency.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732417/Screenshot_2026-04-09_163000_v6aysa.png";

const INTRO_CHECKLIST = [
  "Structural & mechanical design",
  "EV system components",
  "FEA & durability analysis",
  "Tooling & manufacturing support",
];

const SOLUTIONS_HEADING = "Industry-Focused Solutions";

const SOLUTIONS = [
  {
    title: "Thermal Management Solutions",
    description: "Optimizing strength while reducing weight for better efficiency.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732422/Screenshot_2026-04-09_162922_li5xrc.png",
  },
  {
    title: "Lightweight Structural Systems",
    description: "Optimizing strength while reducing weight for better efficiency.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778212752/GettyImages-1186091457-0c53b6749ceb49b79053f61f583eef03_rcxmmd.jpg",
  },
  {
    title: "Production Fixtures & Tooling",
    description: "Ensuring repeatability and precision in manufacturing.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732422/Screenshot_2026-04-09_162938_el9wxc.png",
  },
];

const CLOSING_BANNER = {
  title: "Driving the Future of Automotive Innovation",
  description:
    "Our engineering solutions are shaping the future of mobility — making vehicles smarter, safer, and more efficient.",
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



// ---- Animation helper: fades/slides an element in once it scrolls into view ----
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


// This hero has a title/subtitle overlay, unlike the Technology/Railway/Aerospace/Defense pages.
function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative h-[420px] flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10 max-w-2xl">
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-white mb-4 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {HERO_TITLE}
        </h1>
        <p
          className={`text-slate-200 text-lg transition-all duration-700 ease-out delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {HERO_SUBTITLE}
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
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
            {INTRO_HEADING}
          </h2>
          <p className="text-gray-600 mb-6">{INTRO_PARAGRAPH}</p>
          <ul className="space-y-3">
            {INTRO_CHECKLIST.map((item, idx) => (
              <li
                key={item}
                style={{ transitionDelay: inView ? `${idx * 100}ms` : "0ms" }}
                className={`flex items-center gap-3 text-gray-700 transition-all duration-500 ease-out ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                <Check className="w-5 h-5 text-indigo-700 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={INTRO_IMAGE_URL}
          alt="Automotive manufacturing line"
          className={`rounded-lg shadow-md w-full h-[380px] object-cover transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        />
      </div>
    </section>
  );
}

function SolutionCard({ title, description, imageUrl, index = 0, inView = true }) {
  return (
    <div
      style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
      className={`bg-gray-50 rounded-lg shadow-sm overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
        className={`text-3xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {CLOSING_BANNER.title}
      </h2>
      <p
        className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {CLOSING_BANNER.description}
      </p>
    </section>
  );
}



// ---- Page ----

export default function AutomotivePage() {
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