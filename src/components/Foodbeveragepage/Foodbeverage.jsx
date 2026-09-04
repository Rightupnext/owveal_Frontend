import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_TITLE = "Engineering for Scalable, Hygienic, and Consistent Food Production Systems";
const HERO_SUBTITLE =
  "Owveal supports food and beverage companies in building efficient, scalable, and compliant production systems. Our approach focuses on process reliability, hygiene-driven design, and operational consistency — enabling manufacturers to scale without compromising quality.";
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777370409/Food_Beverages_byxgny.jpg";

const INTRO_HEADING = "Engineering for Scalable, Hygienic, and Consistent Food Production Systems";
const INTRO_PARAGRAPH =
  "Owveal supports food and beverage companies in building efficient, scalable, and compliant production systems. Our approach focuses on process reliability, hygiene-driven design, and operational consistency — enabling manufacturers to scale without compromising quality.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732297/Screenshot_2026-04-09_162758_hwodot.png";

const INTRO_CHECKLIST = [
  "Food-grade system and equipment engineering",
  "Process design and production line optimization",
  "Automation and mechanization strategies",
  "Design for hygiene, cleanability, and compliance",
];

const SOLUTIONS_HEADING = "Our Food & Beverage Solutions";

const SOLUTIONS = [
  {
    title: "Automated Food Processing System",
    description: "High-efficiency processing system designed for consistent quality and large-scale food production.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775734028/Screenshot_2026-04-09_165619_m413c3.png",
  },
  {
    title: "Beverage Filling & Packaging Unit",
    description: "Precision-controlled filling and sealing system ensuring hygiene and product consistency.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775734026/Screenshot_2026-04-09_165517_zmpzc2.png",
  },
  {
    title: "Cold Storage Monitoring System",
    description: "Smart temperature and humidity monitoring solution to maintain product freshness and safety.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775734025/Screenshot_2026-04-09_165631_qxblsl.png",
  },
];

const CLOSING_BANNER = {
  title: "Ensuring Quality & Safety in Every Process",
  description:
    "Our engineering solutions help food and beverage industries maintain quality standards, improve efficiency, and deliver safe products to consumers.",
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


// Hero title/subtitle here run longer than other pages, so it uses a wider max-width than the standard hero.
function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[420px] flex items-center justify-center text-center px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10 max-w-4xl">
        <h1
          className={`text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight transition-all duration-700 ease-out ${
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
          alt="Food and beverage production engineering"
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

export default function FoodBeveragePage() {
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