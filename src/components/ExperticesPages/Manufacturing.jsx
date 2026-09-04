import { useEffect, useRef, useState } from "react";
import { ChevronDown, Circle } from "lucide-react";

// ---- Static content (edit here) ----


const HERO_TITLE = "Manufacturing";
const HERO_SUBTITLE = "From prototype to production, engineered with precision.";

const OVERVIEW_HEADING = "Precision Manufacturing for Modern Industries";
const OVERVIEW_PARAGRAPH =
  "Owveal Engineering delivers scalable manufacturing solutions designed for speed, precision, and reliability. From rapid prototyping and custom machine manufacturing to quality-controlled production, we support the complete manufacturing lifecycle with engineering-driven execution.";

const EXPERTISE_BADGE = "Manufacturing Expertise";

const EXPERTISE_AREAS = [
  {
    title: "From Prototype to Product",
    description:
      "We support every stage of the manufacturing journey – from rapid prototyping using CNC or additive manufacturing to final production runs. We ensure speed, accuracy, and production alignment.",
    highlights: ["Prototype Manufacturing", "CNC Prototyping", "3D Printing", "Product Development"],
  },
  {
    title: "Special Purpose Machine Manufacturing",
    description:
      "Owveal designs and builds complete SPMs, integrating automation and safety features. We handle structural fabrication, motion control integration, and validation testing for full machine deployment.",
    highlights: ["SPM Manufacturing", "Industrial Automation", "Motion Control", "Machine Integration"],
  },
  {
    title: "Component Manufacturing",
    description:
      "We manufacture precision-engineered components for industries like automotive, medical, and heavy machinery. Capabilities include CNC machining, sheet metal, casting, and assembly.",
    highlights: ["Precision Components", "CNC Manufacturing", "Sheet Metal", "Industrial Production"],
  },
  {
    title: "Quality Control & Inspection",
    description:
      "We create quality documentation frameworks for manufacturers seeking to implement or upgrade product standards. Our service includes SOPs, inspection protocols, test plans, and compliance documentation.",
    highlights: ["Quality Documentation", "SOP Creation", "Inspection Protocols", "Manufacturing Standards"],
  },
];

const PROCESS_HEADING = "Our Manufacturing Process";
const PROCESS_SUBHEADING =
  "A streamlined engineering-to-production workflow focused on quality, scalability, and manufacturing excellence.";

const PROCESS_STEPS = [
  { number: 1, title: "Concept & Design" },
  { number: 2, title: "Prototype Development" },
  { number: 3, title: "Production & Assembly" },
  { number: 4, title: "Testing & Quality Validation" },
];

const CTA = {
  title: "Transform Concepts Into Scalable Products",
  description:
    "From rapid prototyping to full-scale manufacturing, Owveal Engineering delivers precision-driven production solutions tailored for industrial growth.",
  buttonLabel: "Start Your Manufacturing Project",
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
      <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {EXPERTISE_BADGE}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-2">
        {highlights.map((item) => (
          <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-4">
            <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500 shrink-0" />
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
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
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200">
        {CTA.buttonLabel}
      </button>
    </Reveal>
  );
}

// ---- Page ----

export default function ManufacturingPage() {
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