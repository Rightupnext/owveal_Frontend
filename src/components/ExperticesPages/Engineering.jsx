import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_TITLE = "Engineering & R&D";
const HERO_SUBTITLE = "Engineering innovation, driven by insight and built for real-world impact.";

const OVERVIEW_HEADING = "Advanced Engineering Solutions for Modern Industries";
const OVERVIEW_PARAGRAPH =
  "We design mechanical systems and sub-systems for industries ranging from food processing to automotive, addressing constraints, performance targets, manufacturability, and compliance requirements. Our engineering expertise combines innovation, precision, and production readiness.";

const EXPERTISE_BADGE = "Engineering Expertise";

const EXPERTISE_AREAS = [
  {
    title: "New Product Development",
    description:
      "We offer complete end-to-end product development services from concept to production. Our process integrates industrial design, engineering validation, prototyping, and design for manufacturability (DFM) to deliver cost-effective and production-ready solutions.",
    tags: ["Product Engineering", "Industrial Design", "DFM", "Prototype Development"],
  },
  {
    title: "Special Purpose Machine Design",
    description:
      "We specialize in developing custom Special Purpose Machines (SPMs) that solve unique industrial challenges. Our SPMs are engineered for enhanced productivity, operational safety, and seamless integration into existing production environments.",
    tags: ["SPM Development", "Automation", "Machine Design", "Production Systems"],
  },
  {
    title: "Reverse Engineering",
    description:
      "Using our proprietary engineering techniques and CAD modeling, we recreate and improve existing components and assemblies, even without original design files. This approach ensures optimized cost, enhanced performance, and longer life-cycle support.",
    tags: ["CAD Modeling", "Legacy Part Redesign", "Engineering Rework"],
  },
  {
    title: "Finite Element Analysis (FEA)",
    description:
      "Our simulation capabilities include structural, thermal, modal, and fatigue analyses using advanced FEA tools. We validate product integrity, reduce prototyping costs, and enhance design performance before physical production.",
    tags: ["Structural Analysis", "Thermal Simulation", "Fatigue Analysis", "CAE"],
  },
  {
    title: "Industrial Solutions",
    description:
      "We provide tailored engineering support for a wide range of industries. Whether it's custom machine parts, factory automation components, or product-specific challenges, we deliver solutions that boost efficiency and reliability.",
    tags: ["Factory Automation", "Industrial Components", "Mechanical Systems"],
  },
  {
    title: "Modeling & Drafting",
    description:
      "We provide accurate 2D and 3D CAD models along with detailed manufacturing drawings. Our drafting team specializes in incorporating Geometric Dimensioning and Tolerancing (GD&T) to meet global production and inspection standards.",
    tags: ["2D/3D CAD", "GD&T", "Engineering Drawings", "Manufacturing Blueprints"],
  },
  {
    title: "Value Engineering",
    description:
      "We help clients achieve functional and economic value through re-engineering. By optimizing design, materials, and processes, we reduce costs while enhancing performance and product lifespan.",
    tags: ["Cost Optimization", "Design Improvement", "Product Efficiency"],
  },
  {
    title: "Electronics Design & Development",
    description:
      "We provide end-to-end electronic system design, including circuit design, PCB layout, embedded firmware, and testing. Our services support smart product development and industrial automation systems.",
    tags: ["Embedded Systems", "PCB Design", "Hardware Engineering", "Firmware"],
  },
];

const CTA = {
  title: "Let's Build Engineering Solutions That Scale",
  description:
    "From concept development to production-ready systems, Owveal Engineering delivers high-performance engineering and R&D services tailored for industrial innovation.",
  buttonLabel: "Contact Our Engineering Team",
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
    <section className="bg-black px-6 py-24 text-center">
      <h1
        className={`text-4xl md:text-5xl font-extrabold text-white mb-5 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {HERO_TITLE}
      </h1>
      <p
        className={`text-slate-300 text-lg max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {HERO_SUBTITLE}
      </p>
    </section>
  );
}

function OverviewSection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-gray-100 px-6 py-16 text-center">
      <h2
        className={`text-3xl font-extrabold text-gray-900 mb-6 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {OVERVIEW_HEADING}
      </h2>
      <p
        className={`text-gray-600 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {OVERVIEW_PARAGRAPH}
      </p>
    </section>
  );
}

function ExpertiseCard({ title, description, tags, index = 0, inView = true }) {
  return (
    <div
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
      className={`bg-white border border-gray-200 rounded-lg shadow-sm p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {EXPERTISE_BADGE}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <p className="text-sm text-indigo-700 border-t border-gray-100 pt-4">{tags.join(" • ")}</p>
    </div>
  );
}

function ExpertiseGrid() {
  const [ref, inView] = useInView(0.05);

  return (
    <section ref={ref} className="px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {EXPERTISE_AREAS.map((area, idx) => (
          <ExpertiseCard key={area.title} {...area} index={idx} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-black px-6 py-20 text-center">
      <h2
        className={`text-3xl md:text-4xl font-extrabold text-white mb-6 max-w-3xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {CTA.title}
      </h2>
      <p
        className={`text-slate-300 max-w-2xl mx-auto mb-8 transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {CTA.description}
      </p>
      <button
        className={`bg-red-600 hover:bg-red-700 hover:scale-105 text-white font-semibold px-6 py-3 rounded-md transition-all duration-700 ease-out delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {CTA.buttonLabel}
      </button>
    </section>
  );
}



// ---- Page ----

export default function EngineeringRnDPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* <Navbar /> */}
      <Hero />
      <OverviewSection />
      <ExpertiseGrid />
      <CtaBanner />
      {/* <Footer /> */}
    </div>
  );
}