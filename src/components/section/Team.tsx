"use client";

import Image from "next/image";

// 1. Define your team data here
const teamMembers = [
  {
    name: "Nam Nguyen",
    description: "Senior editor with 4+ years turning raw footage into revenue-driving content. Specializes in diverse video styles that convert viewers into customers and grow brands faster.",
    // Replace with your actual local image import or URL later
    image: "", 
    bgColor: "bg-[#4a0b75]",
  },
  {
    name: "Simon",
    description: "With a background that spans from gaming content to brand storytelling, has led editing teams, designed motion graphics, and produced standout visuals under tight deadlines.",
    // Replace with your actual local image import or URL later
    image: "",
    bgColor: "bg-gray-200",
  }
];

export default function Team() {
  return (
    <section className="py-24 px-4 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Meet our brains
          </h2>
        </div>

        <div className="space-y-24">
          {teamMembers.map((member, index) => {
            // Determine layout direction based on index (Even = Left Image, Odd = Right Image)
            const isEven = index % 2 === 0;

            return (
              <div 
                key={member.name} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                {/* Image Card */}
                <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className={`relative w-full max-w-md aspect-square ${member.bgColor} rounded-[2rem] overflow-hidden shadow-2xl`}>
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'text-left' : 'text-right'}`}>
                  <div className={`flex gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Vertical Accent Line */}
                    <div className="w-1.5 bg-[#4a0b75] rounded-full flex-shrink-0 min-h-[100px]" />
                    
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{member.name}</h3>
                      <p className={`text-gray-700 leading-relaxed text-sm md:text-base max-w-md ${!isEven && 'ml-auto'}`}>
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}