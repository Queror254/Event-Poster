import React from "react";

const Poster: React.FC = () => {
  const highlights = [
    "How to get started in tech",
    "Building local solutions",
    "Real stories from Kenyan innovators",
    "Community, learning & support",
  ];

  return (
    <div className="w-full max-w-[600px] sm:aspect-[2/3] bg-black text-white shadow-2xl flex flex-row rounded-lg overflow-hidden font-sans">
      {/* Left Column */}
      <div className="w-[35%] bg-neutral-900 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Top decorative part */}
          <div className="mb-8 sm:mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 mb-1">
              Tech Event Presents
            </p>
            <div className="flex space-x-px h-8 sm:h-10 w-full items-stretch overflow-hidden">
              {[
                1, 0.7, 1, 0.5, 1, 0.8, 1, 0.6, 1, 0.7, 1, 0.5, 1, 0.8, 1, 0.6,
                1, 0.5, 1, 0.9, 0.4, 1, 0.7, 1, 0.5, 1, 0.8, 1,
              ]
                .slice(0, Math.floor(35 * 0.3))
                .map(
                  (
                    barHeight,
                    i // Adjust number of bars
                  ) => (
                    <div
                      key={i}
                      className="bg-neutral-500 flex-grow"
                      style={{ height: `${barHeight * 100}%` }}
                    ></div>
                  )
                )}
            </div>
            <p className="text-[7px] sm:text-[9px] text-neutral-500 tracking-[0.15em] sm:tracking-[0.2em] mt-1">
              0 29384 75657 2 98723
            </p>
          </div>

          {/* Topic Highlights */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-2 sm:mb-3">
              Topic Highlights:
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-neutral-300">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex">
                  <span className="mr-1.5 sm:mr-2 text-neutral-500">-</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Date and Footer Info */}
        <div className="mt-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none tracking-tighter text-neutral-100">
            JULY 06,
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-neutral-100">
            2025
          </p>
          <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1.5 sm:mt-2 uppercase tracking-wider">
            Duration: 1hr 30min
          </p>
          <p className="text-[8px] sm:text-[9px] text-neutral-500 mt-3 sm:mt-4 uppercase tracking-wider">
            Online Promotion / #StartWhereYouAreKE
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[65%] p-5 sm:p-6 md:p-8 flex flex-col bg-black">
        {/* Main Title Block */}
        <div className="flex-shrink-0">
          <h1 className="text-[28px] sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold uppercase tracking-tighter leading-[0.9_!important] text-neutral-100">
            Start Where
          </h1>
          <h1 className="text-[28px] sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold uppercase tracking-tighter leading-[0.9_!important] text-yellow-400">
            You Are:
          </h1>
          <h2 className="text-[28px] sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold uppercase tracking-tighter leading-[0.9_!important] mt-1 text-neutral-100">
            Join the Tech
          </h2>
          <h2 className="text-[28px] sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold uppercase tracking-tighter leading-[0.9_!important] text-yellow-400">
            Revolution
          </h2>

          {/* Arrows and Description */}
          <div className="flex items-start my-3 sm:my-4 md:my-5 lg:my-6">
            <span className="text-xl sm:text-2xl md:text-3xl text-neutral-500 mr-2 sm:mr-3 font-light leading-none relative top-[2px] sm:top-1">
              &gt;&gt;
            </span>
            <p className="text-[10px] sm:text-xs text-neutral-300 max-w-md">
              Join us for an inspiring session to kickstart your tech journey
              and connect with Kenyan innovators. Learn essential first steps
              into the vibrant tech industry.
            </p>
          </div>

          {/* Sub-tagline */}
          <div className="my-3 sm:my-4 text-center flex justify-between items-center text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider sm:tracking-widest text-neutral-400 font-medium">
            <span>Empowering</span>
            <span className="text-neutral-600 text-xs">—</span>
            <span>The Next</span>
            <span className="text-neutral-600 text-xs">—</span>
            <span>Generation</span>
          </div>
        </div>

        {/* Image Section - ensure it fills remaining space */}
        <div className="flex-grow mt-2 md:mt-3 min-h-0">
          <img
            src="https://africafeeds.com/wp-content/uploads/2019/07/African-entrepreneurs.png"
            alt="Young African adults collaborating and learning in a tech environment with laptops"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
