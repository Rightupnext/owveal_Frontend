import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----
const NAV_LINKS = [
  { label: "Home", href: "#", hasDropdown: false },
  { label: "Industries", href: "#", hasDropdown: true },
  { label: "Expertices", href: "#", hasDropdown: true },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Success Story", href: "#", hasDropdown: false },
  { label: "Case Study", href: "#", hasDropdown: false },
  { label: "About Us", href: "#", hasDropdown: false },
  { label: "Careers", href: "#", hasDropdown: false },
];

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732845/Screenshot_2026-04-09_163712_mnirde.png";
// This hero has no title/subtitle overlay — image only, matching the design.

const INTRO_HEADING = "Engineering Reliability for Continuous Operations";
const INTRO_PARAGRAPH =
  "We design and optimize components for railway systems that demand long-term durability, safety, and consistent performance.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732845/Screenshot_2026-04-09_163704_nluyjx.png";

const INTRO_CHECKLIST = [
  "Structural component design",
  "Fatigue & vibration analysis",
  "Reverse engineering",
  "Testing & validation systems",
];

const SOLUTIONS_HEADING = "Industry-Focused Solutions";

const SOLUTIONS = [
  {
    title: "Heavy-Duty Structural Components",
    description: "Built for high loads and continuous operation.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732845/Screenshot_2026-04-09_163704_nluyjx.png",
  },
  {
    title: "Inspection & Testing Fixtures",
    description: "Ensuring performance reliability across cycles.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732892/Screenshot_2026-04-09_163731_b0zvth.png",
  },
  {
    title: "System Redesign & Optimization",
    description: "Improving legacy components for modern needs.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732845/Screenshot_2026-04-09_163712_mnirde.png",
  },
];

const CLOSING_BANNER = {
  title: "Powering Smarter Rail Systems",
  description:
    "Our innovations are transforming railway systems by improving safety, reducing downtime, and enhancing operational efficiency.",
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



function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`h-[420px] bg-cover bg-center transition-all duration-1000 ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    />
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
          alt="Railway engineering and maintenance"
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

export default function RailwayPage() {
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