import { useEffect, useRef, useState } from "react";
import { ChevronDown, Circle } from "lucide-react";

// ---- Static content (edit here) ----

const HERO_TITLE = "Digital Solutions";
const HERO_SUBTITLE = "Bridging the physical and virtual worlds through smart engineering.";

const OVERVIEW_HEADING = "Smart Engineering for Connected Industries";
const OVERVIEW_PARAGRAPH =
  "Owveal Engineering combines industrial engineering with digital technologies to create intelligent, connected, and scalable systems. From factory automation to virtual simulations, we help industries improve efficiency, visibility, and decision-making using advanced digital engineering solutions.";

const EXPERTISE_BADGE = "Digital Engineering";

const EXPERTISE_AREAS = [
  {
    title: "Digital Manufacturing & Automation",
    description:
      "We provide solutions for digitally integrated factories, including PLC programming, real-time monitoring systems, and automated workflows. Our digital manufacturing services support scalability, efficiency, and traceability.",
    highlights: ["Digital Factory Solutions", "Industrial Automation", "PLC Integration", "Smart Manufacturing", "IoT Production"],
  },
  {
    title: "Digital Twin Development",
    description:
      "We develop digital twins for machines and systems to enable predictive maintenance, remote monitoring, and process optimization. By simulating real-world operations in a virtual model, we help businesses make better, data-driven decisions.",
    highlights: ["Digital Twin Development", "Virtual Simulation", "Predictive Maintenance", "System Modeling", "Industrial IoT"],
  },
];

const PROCESS_HEADING = "Our Digital Workflow";
const PROCESS_SUBHEADING =
  "Intelligent engineering workflows designed to connect machines, systems, and data for optimized industrial performance.";

const PROCESS_STEPS = [
  { number: 1, title: "System Analysis" },
  { number: 2, title: "Digital Integration" },
  { number: 3, title: "Automation Deployment" },
  { number: 4, title: "Monitoring & Optimization" },
];

const CTA = {
  title: "Power Your Industry with Smart Digital Systems",
  description:
    "From automation to digital twin technology, Owveal Engineering helps businesses transform operations through intelligent digital solutions.",
  buttonLabel: "Explore Digital Solutions",
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

// ---- Animation helpers ----
// Global styles: keyframes + reduced-motion support (added, nothing else changed)
function AnimationStyles() {
  return (
    <style>{`
      @keyframes owveal-fade-up {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .owveal-reveal {
        opacity: 0;
      }
      .owveal-reveal.owveal-in {
        animation: owveal-fade-up 0.7s ease-out forwards;
      }
      @media (prefers-reduced-motion: reduce) {
        .owveal-reveal {
          opacity: 1 !important;
          animation: none !important;
        }
      }
    `}</style>
  );
}

// Wraps an element so it fades/slides up once when scrolled into view.
function Reveal({ as: Tag = "div", className = "", style, delay = 0, children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`owveal-reveal ${visible ? "owveal-in" : ""} ${className}`}
      style={{ ...(style || {}), animationDelay: delay ? `${delay}s` : undefined }}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ---- Sub-components ----

function Hero() {
  return (
    <section className="bg-black px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 owveal-reveal owveal-in">
        {HERO_TITLE}
      </h1>
      <p
        className="text-slate-300 text-lg max-w-2xl mx-auto owveal-reveal owveal-in"
        style={{ animationDelay: "0.15s" }}
      >
        {HERO_SUBTITLE}
      </p>
    </section>
  );
}

function OverviewSection() {
  return (
    <Reveal as="section" className="bg-gray-100 px-6 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{OVERVIEW_HEADING}</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">{OVERVIEW_PARAGRAPH}</p>
    </Reveal>
  );
}

function ExpertiseCard({ title, description, highlights, delay = 0 }) {
  return (
    <Reveal
      as="div"
      delay={delay}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {EXPERTISE_BADGE}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-2">
        {highlights.map((item) => (
          <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-4">
            <Circle className="w-2.5 h-2.5 fill-blue-500 text-blue-500 shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function ExpertiseGrid() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {EXPERTISE_AREAS.map((area, i) => (
          <ExpertiseCard key={area.title} {...area} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

function ProcessStep({ number, title, delay = 0 }) {
  return (
    <Reveal
      as="div"
      delay={delay}
      className="bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-8 text-center transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold mx-auto mb-4">
        {number}
      </div>
      <p className="font-semibold text-gray-900">{title}</p>
    </Reveal>
  );
}

function ProcessSection() {
  return (
    <section className="bg-gray-100 px-6 lg:px-20 py-16">
      <Reveal as="div" className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{PROCESS_HEADING}</h2>
        <p className="text-gray-600">{PROCESS_SUBHEADING}</p>
      </Reveal>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step, i) => (
          <ProcessStep key={step.number} {...step} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <Reveal as="section" className="bg-black px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 max-w-3xl mx-auto">
        {CTA.title}
      </h2>
      <p className="text-slate-300 max-w-2xl mx-auto mb-8">{CTA.description}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200">
        {CTA.buttonLabel}
      </button>
    </Reveal>
  );
}

// ---- Page ----

export default function DigitalSolutionsPage() {
  return (
    <div className="font-sans text-gray-900">
      <AnimationStyles />
      {/* <Navbar /> */}
      <Hero />
      <OverviewSection />
      <ExpertiseGrid />
      <ProcessSection />
      <CtaBanner />
      {/* <Footer /> */}
    </div>
  );
}