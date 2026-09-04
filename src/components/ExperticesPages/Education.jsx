import { useEffect, useRef, useState } from "react";
import { ChevronDown, Circle } from "lucide-react";

// ---- Static content (edit here) ----

const HERO_TITLE = "Education";
const HERO_SUBTITLE = "Bridging the gap between classroom knowledge and real-world engineering.";

const OVERVIEW_HEADING = "Industry-Focused Engineering Education";
const OVERVIEW_PARAGRAPH =
  "At Owveal, we believe engineering education should go beyond theory. Our programs are designed to provide learners with practical exposure, real-world product development experience, and industry-ready technical capabilities that align with modern engineering demands.";

const PROGRAM = {
  badge: "Skill Development Program",
  title: "Zero to One Program",
  descriptionBefore: 'Our flagship "',
  descriptionBold: "Zero to One",
  descriptionAfter:
    '" program covers the complete product lifecycle. From initial product visualization and CAD modeling to prototyping and mass manufacturing, this program equips learners with real, hands-on industry skills.',
  highlights: [
    "Product Visualization & Ideation",
    "2D & 3D CAD Modeling",
    "Prototype Development",
    "Manufacturing Process Understanding",
    "Design for Manufacturability (DFM)",
    "Industry-Ready Engineering Skills",
  ],
  tags: [
    "Engineering Training",
    "Product Lifecycle Education",
    "CAD Training",
    "Prototype Development",
    "Industry-Ready Engineers",
  ],
};

const CTA = {
  title: "Build Real Engineering Skills",
  description:
    "Gain hands-on experience across the complete product development lifecycle and become industry-ready with Owveal's practical engineering education programs.",
  buttonLabel: "Enroll Now",
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

// Wraps a section so it fades/slides up once when scrolled into view.
function Reveal({ as: Tag = "div", className = "", children, ...props }) {
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

function ProgramCard() {
  return (
    <section className="px-6 py-16 bg-white">
      <Reveal
        as="div"
        className="max-w-5xl mx-auto border border-gray-200 rounded-2xl shadow-sm p-10"
      >
        <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-5">
          {PROGRAM.badge}
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">{PROGRAM.title}</h2>
        <p className="text-gray-600 mb-8">
          {PROGRAM.descriptionBefore}
          <strong className="text-gray-900">{PROGRAM.descriptionBold}</strong>
          {PROGRAM.descriptionAfter}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {PROGRAM.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500 shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-indigo-700 border-t border-gray-100 pt-5">
          {PROGRAM.tags.join(" • ")}
        </p>
      </Reveal>
    </section>
  );
}

function CtaBanner() {
  return (
    <Reveal as="section" className="bg-black px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{CTA.title}</h2>
      <p className="text-slate-300 max-w-2xl mx-auto mb-8">{CTA.description}</p>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200">
        {CTA.buttonLabel}
      </button>
    </Reveal>
  );
}

// ---- Page ----

export default function EducationPage() {
  return (
    <div className="font-sans text-gray-900">
      <AnimationStyles />
      {/* <Navbar /> */}
      <Hero />
      <OverviewSection />
      <ProgramCard />
      <CtaBanner />
      {/* <Footer /> */}
    </div>
  );
}