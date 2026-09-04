import React from 'react';

const caseStudiesData = [
  {
    id: 1,
    tag: 'SS Trolley – 500kg Capacity',
    client: 'Qualitest',
    problem: 'The client required a stainless-steel trolley with a 500 kg capacity that could be folded to save space when not in use.',
    solution: 'A foldable mechanism was designed and integrated into the trolley structure, enabling compact storage without compromising load-bearing strength.',
    outcome: 'The delivered solution met the client\'s requirement, providing an efficient, space-saving trolley design.',
  },
  {
    id: 2,
    tag: 'Cover Block Demoulding Machine',
    client: 'Abhirami Enterprises',
    problem: 'Manual demoulding of concrete cover blocks was labor-intensive and inefficient, leading to worker fatigue and inconsistent productivity.',
    solution: 'A mechanical demoulding system replicating the manual striking action was developed to automate the process.',
    outcome: 'The machine reduced demoulding time from 30 seconds to 4 seconds per block, increasing throughput and reducing operator fatigue.',
  },
  {
    id: 3,
    tag: 'Heat Pump Dryer',
    client: 'Arul Depot',
    problem: 'The client needed an energy-efficient alternative to sun-drying and electric heaters for drying pappads.',
    solution: 'A heat pump dryer was designed, offering high energy efficiency with one-third the power consumption of conventional heaters.',
    outcome: 'The dryer provided faster drying within an insulated chamber, independent of weather conditions, improving consistency and energy usage.',
  },
  {
    id: 4,
    tag: 'Tablet Packing Automation',
    client: 'Apex Pharma',
    problem: 'Manual packing of 50 tablets using stainless-steel jigs was time-consuming and required skilled labor.',
    solution: 'A semi-automated packing machine with a sorting mechanism and compact conveyor was developed to streamline the packing process.',
    outcome: 'The new system significantly reduced packing time and dependence on skilled labor.',
  },
  {
    id: 5,
    tag: 'Jaggery Stirring Automation',
    client: 'WoW Laddus',
    problem: 'The client required a semi-automated method to stir jaggery mixtures for traditional sweet preparation while maintaining artisanal quality.',
    solution: 'An automatic stirring mechanism with integrated heating and adjustable height features was designed and controlled via microcontroller.',
    outcome: 'The solution reduced manual intervention, improved consistency, and maintained traditional flavor profiles.',
  },
  {
    id: 6,
    tag: 'Ergonomic Stadium Seating',
    client: 'Keyurra',
    problem: 'The client needed an ergonomically designed stadium chair with an automatic lifting mechanism and concealed components for outdoor durability.',
    solution: 'A concealed counterweight system was engineered within the seat to enable automatic folding and prevent rust.',
    outcome: 'The final product achieved a sleek design, improved reliability, and reduced production costs.',
  },
  {
    id: 7,
    tag: 'Automated 3D Sheet Modeling',
    client: 'Deepa Erectors',
    problem: 'Manual drafting for complex sheet metal development was time-consuming and prone to human calculation errors.',
    solution: 'A software-based 3D modeling and nesting system was implemented to automate sheet development for various geometries like cones and domes.',
    outcome: 'The digital system reduced planning time, eliminated manual errors, and improved material utilization.',
  },
  {
    id: 8,
    tag: 'Custom Test Rig Development',
    client: 'Micro Precision',
    problem: 'Standard off-the-shelf test rigs could not satisfy specialized pressure testing procedures required for precision components.',
    solution: 'A custom test rig was designed to simulate operational conditions and validate valve performance reliably.',
    outcome: 'The test rig replaced manual methods, improved test accuracy, and supported quality control processes.',
  },
  {
    id: 9,
    tag: 'Gas Burner Automation',
    client: 'WoW Laddus',
    problem: 'Manual temperature control during confectionery cooking caused batch-to-batch variations and high fuel wastage.',
    solution: 'An automated gas regulation and temperature control system was installed to maintain uniform heating conditions.',
    outcome: 'The module significantly reduced weighing and preparation time, ensuring uniformity across production batches.',
  },
  {
    id: 10,
    tag: 'Mechanism Redesign & Value Engineering',
    client: 'Durel International',
    problem: 'Existing imported mechanism components were expensive, heavy, and difficult to maintain locally.',
    solution: 'Reverse engineering and material optimization were performed to create a modular, locally manufacturable alternative.',
    outcome: 'The redesigned product was more affordable, surpassing the original design in both performance and ease of maintenance.',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="w-full bg-[#f8fafc] font-sans text-slate-800 min-h-screen">
      {/* Dark Hero Banner Header */}
      <section className="w-full bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Engineering Case Studies
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Real world engineering solutions delivering measurable impact.
          </p>
        </div>
      </section>

      {/* Grid Content Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudiesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Pill Category Tag */}
                <div className="mb-4 inline-block">
                  <span className="bg-rose-50 text-rose-500 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                    {item.tag}
                  </span>
                </div>

                {/* Client Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
                  {item.client}
                </h2>

                {/* Structured Details */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="font-bold text-slate-900">Problem: </strong>
                    {item.problem}
                  </p>
                  <p>
                    <strong className="font-bold text-slate-900">Solution: </strong>
                    {item.solution}
                  </p>
                  <p>
                    <strong className="font-bold text-slate-900">Outcome: </strong>
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}