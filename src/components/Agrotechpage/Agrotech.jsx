import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777370530/Agro_Agricultural_Technology_imw4ho.jpg";
// This hero has no title/subtitle overlay — image only, matching the design.

const INTRO_HEADING = "Engineering Practical Solutions for Modern Agriculture";
const INTRO_PARAGRAPH =
  "We develop field-ready mechanical systems that improve efficiency, consistency, and scalability in agricultural operations.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732634/Screenshot_2026-04-09_163254_lhxtlb.png";

const INTRO_CHECKLIST = [
  "Agricultural equipment design",
  "Process automation systems",
  "Durable field machinery",
  "Precision mechanical solutions",
];

const SOLUTIONS_HEADING = "Industry-Focused Solutions";

const SOLUTIONS = [
  {
    title: "Precision Seeding Systems",
    description: "Ensuring accurate spacing and improved crop yield.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732633/Screenshot_2026-04-09_163313_aaa5sp.png",
  },
  {
    title: "Smart Irrigation Mechanisms",
    description: "Optimizing water usage through engineered distribution systems.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732634/Screenshot_2026-04-09_163325_xd9ggx.png",
  },
  {
    title: "Farm Equipment Optimization",
    description: "Improving reliability and performance in harsh environments.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732632/Screenshot_2026-04-09_163241_pbwh7w.png",
  },
];

const CLOSING_BANNER = {
  title: "Empowering Smart Agriculture",
  description:
    "Our innovations are helping farmers increase productivity, conserve resources, and build a more sustainable agricultural future.",
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

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full border-2 border-indigo-700 flex items-center justify-center text-indigo-700 font-bold">
          O
        </div>
        <div className="leading-tight">
          <p className="text-lg font-bold text-indigo-900 tracking-wide">OWVEAL</p>
          <p className="text-[10px] text-red-600 tracking-widest -mt-1">ENGINEERING PVT. LTD.</p>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-800">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="flex items-center gap-1 hover:text-indigo-700">
            {link.label}
            {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
          </a>
        ))}
      </nav>

      <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md">
        Contact us
      </button>
    </header>
  );
}

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
          alt="Agricultural machinery engineering"
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

export default function AgroTechPage() {
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