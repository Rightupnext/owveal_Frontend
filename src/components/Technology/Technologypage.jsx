import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733551/Screenshot_2026-04-09_164854_kg2lbm.png";
// This hero has no title/subtitle overlay — image only, matching the design.

const INTRO_HEADING = "Engineering Smart Technology Systems";
const INTRO_PARAGRAPH =
  "At Owveal Engineering, we design and develop intelligent technology solutions that integrate hardware, software, and data systems to create smarter, more efficient operations across industries.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733550/Screenshot_2026-04-09_164832_xkiag4.png";

const INTRO_CHECKLIST = [
  "IoT and smart device integration",
  "AI and data-driven systems",
  "Embedded and real-time control systems",
  "Automation and digital transformation solutions",
];

const SOLUTIONS_HEADING = "Our Technology Solutions";

const SOLUTIONS = [
  {
    title: "IoT Smart Monitoring System",
    description:
      "Real-time data monitoring and analytics platform for connected industrial and consumer devices.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733553/Screenshot_2026-04-09_164847_rn1k9i.png",
  },
  {
    title: "AI-Based Predictive Analytics",
    description:
      "Advanced machine learning models to predict system behavior and optimize performance.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733552/Screenshot_2026-04-09_164840_lh5w7w.png",
  },
  {
    title: "Embedded Control Systems",
    description:
      "High-performance embedded systems designed for automation and real-time control applications.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733551/Screenshot_2026-04-09_164854_kg2lbm.png",
  },
];

const CLOSING_BANNER = {
  title: "Driving Digital Transformation",
  description:
    "Our technology solutions enable industries to innovate faster, operate smarter, and stay competitive in an evolving digital world.",
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
      className={`relative h-[420px] sm:h-[480px] w-full bg-cover bg-center flex items-center justify-center transition-all duration-1000 ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0  z-10" />

      {/* Centered Content Container */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-4xl font-black text-white tracking-wide mb-4 drop-shadow-lg">
          Technology
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow">
          We design and develop intelligent technology solutions that integrate
          <br className="hidden sm:inline" /> hardware, software, and data systems to create smarter operations.
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
          alt="Smart technology engineering"
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

function Footer() {
  return (
    <footer className="bg-white px-6 lg:px-20 pt-14 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full border-2 border-indigo-700 flex items-center justify-center text-indigo-700 font-bold">
              O
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold text-indigo-900 tracking-wide">OWVEAL</p>
              <p className="text-[10px] text-red-600 tracking-widest -mt-1">ENGINEERING PVT. LTD.</p>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
          <p className="text-sm text-indigo-700 mb-4">
            {COMPANY_ADDRESS.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-700">CALL US - {COMPANY_ADDRESS.callUs}</p>
          <p className="text-sm text-gray-700">Phone - {COMPANY_ADDRESS.phone}</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h4 className="font-semibold text-gray-900 mb-3">{column.heading}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-indigo-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500">
        © 2026 Owveal Engineering
      </div>
    </footer>
  );
}

// ---- Page ----

export default function TechnologyPage() {
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