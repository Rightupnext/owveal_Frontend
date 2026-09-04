import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Vishnu Kumar V",
    role: "Founder",
    title: "(Mechanical Engineer)",
    description: "A seasoned engineer with 11+ years of experience in product development, design engineering, and entrepreneurship. Vishnu has worked across MNCs, heavy machinery, electronics, and automotive industries, with a strong track record of turning innovative ideas into scalable products & businesses.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1780471296/1000169064_hl0zin.png" // Replace with Cloudinary link
  },
  {
    id: 2,
    name: "Vijayaraj M",
    role: "Co-Founder",
    title: "(Mechanical Engineer)",
    description: "With 10+ years of expertise in 3D/2D design, GD&T, and product development. Vijayaraj has contributed to multiple sectors including automotive, medical devices, robotics, defense, ammunition, FMCG, aerospace and heavy engineering.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1780471299/Vijayaraj_tca5x0.png" // Replace with Cloudinary link
  },
  {
    id: 3,
    name: "Prithviraj T",
    role: "Co-Founder",
    title: "(Mechatronics Engineer)",
    description: "With over 9+ years of hands-on experience in mechatronics-based concept design, prototyping, vendor management & precision manufacturing. His work spans heavy industry, cost optimization, and process automation engineering.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1780471298/pr_1_osjv3c.png" // Replace with Cloudinary link
  }
];

export default function OurTeamSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-[2px] bg-red-600" />
            <span className="text-sm sm:text-base font-semibold tracking-widest text-gray-800 uppercase">
              Our Team
            </span>
            <div className="w-8 h-[2px] bg-red-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Engineers first. Founders second. Problem-solvers always.
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Behind Owveal is a team of passionate, multidisciplinary engineers delivering solutions across engineering, product innovation, and digital transformation.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition duration-300 hover:shadow-md"
            >
              {/* Soft Light-Blue Banner Top */}
              <div className="relative bg-[#DCEBFB] h-48 sm:h-52 flex justify-center items-end">
                {/* Profile Portrait Image Box */}
                <div className="w-40 sm:w-44 h-48 sm:h-52 overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Fallback image placeholder if Cloudinary link is loading/empty
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {member.name}
                  </h3>

                  <div className="mt-1 mb-4 space-y-0.5">
                    <p className="text-sm font-semibold text-red-600">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}