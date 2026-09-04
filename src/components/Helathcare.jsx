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

const HERO_TITLE = "Healthcare Technology";
const HERO_SUBTITLE =
  "Engineering solutions that improve patient care, safety, and medical efficiency.";
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778304514/Healthcare_wkqahh.jpg";

const INTRO_HEADING = "Engineering Precision for Life-Critical Applications";
const INTRO_PARAGRAPH =
  "We design and develop reliable healthcare and medical solutions where accuracy, safety, and consistency are critical. Our approach combines precision engineering with real-world usability to support scalable and compliant medical systems.";
const INTRO_IMAGE_URL =
  "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732297/Screenshot_2026-04-09_162758_hwodot.png";

const INTRO_CHECKLIST = [
  "Medical device design & prototyping",
  "Precision components & assemblies",
  "Sterile-ready mechanical design",
  "Embedded & controlled systems",
];

const SOLUTIONS_HEADING = "Industry-Focused Solutions";

const SOLUTIONS = [
  {
    title: "Safer IV Cannula Systems",
    description:
      "Reducing backflow and contamination through precision-designed fluid control components.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732076/304_od9dlv.jpg",
  },
  {
    title: "Compact Cooling for Medical Devices",
    description: "Efficient thermal management for portable and diagnostic equipment.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732076/711_zqptbx.jpg",
  },
  {
    title: "Custom Lab & Surgical Equipment",
    description: "Durable, ergonomic designs built for high-usage environments.",
    imageUrl:
      "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732075/1095_n5tgpj.jpg",
  },
];

const FEATURED_SOLUTION = {
  title: "Safer IV Cannula Systems",
  description:
    "Reducing backflow and contamination through precision-designed fluid control components.",
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

// function Navbar() {
//   return (
//     <header className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white shadow-sm">
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 rounded-full border-2 border-indigo-700 flex items-center justify-center text-indigo-700 font-bold">
//           O
//         </div>
//         <div className="leading-tight">
//           <p className="text-lg font-bold text-indigo-900 tracking-wide">OWVEAL</p>
//           <p className="text-[10px] text-red-600 tracking-widest -mt-1">ENGINEERING PVT. LTD.</p>
//         </div>
//       </div>

//       <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-800">
//         {NAV_LINKS.map((link) => (
//           <a key={link.label} href={link.href} className="flex items-center gap-1 hover:text-indigo-700">
//             {link.label}
//             {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
//           </a>
//         ))}
//       </nav>

//       <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md">
//         Contact us
//       </button>
//     </header>
//   );
// }

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
      <div className="absolute inset-0 bg-slate-900/70" />
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
          alt="Medical technology engineering"
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

function FeaturedSolutionBanner() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-gray-100 px-6 py-16 text-center">
      <h2
        className={`text-3xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {FEATURED_SOLUTION.title}
      </h2>
      <p
        className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {FEATURED_SOLUTION.description}
      </p>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="bg-white px-6 lg:px-20 pt-14 pb-6 border-t border-gray-200">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <div className="w-9 h-9 rounded-full border-2 border-indigo-700 flex items-center justify-center text-indigo-700 font-bold">
//               O
//             </div>
//             <div className="leading-tight">
//               <p className="text-lg font-bold text-indigo-900 tracking-wide">OWVEAL</p>
//               <p className="text-[10px] text-red-600 tracking-widest -mt-1">ENGINEERING PVT. LTD.</p>
//             </div>
//           </div>

//           <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
//           <p className="text-sm text-indigo-700 mb-4">
//             {COMPANY_ADDRESS.lines.map((line) => (
//               <span key={line} className="block">
//                 {line}
//               </span>
//             ))}
//           </p>
//           <p className="text-sm text-gray-700">CALL US - {COMPANY_ADDRESS.callUs}</p>
//           <p className="text-sm text-gray-700">Phone - {COMPANY_ADDRESS.phone}</p>
//         </div>

//         {FOOTER_COLUMNS.map((column) => (
//           <div key={column.heading}>
//             <h4 className="font-semibold text-gray-900 mb-3">{column.heading}</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               {column.links.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-indigo-700">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500">
//         © 2026 Owveal Engineering
//       </div>
//     </footer>
//   );
// }

// ---- Page ----

export default function HealthcareTechnologyPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* <Navbar /> */}
      <Hero />
      <IntroSection />
      <SolutionsSection />
      <FeaturedSolutionBanner />
      {/* <Footer /> */}
    </div>
  );
}