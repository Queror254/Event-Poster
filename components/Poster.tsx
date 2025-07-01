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
      <div className="w-[35%] bg-neutral-900 px-4 flex flex-col">
        {/* Event Company Logo */}
        <img
          src="/images/logo.png"
          alt="Elorua Community Builders Logo"
          style={{
            width: "auto",
            height: "auto",
            padding: 0,
            margin: 0,
            objectFit: "contain",
          }}
        />
        <div>
          <p className="text-sm sm:text-sm md:textsm font-bold leading-none tracking-tighter text-neutral-100">
            JOIN US ON
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none tracking-tighter text-neutral-100">
            JULY 06,
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-neutral-100">
            2025
          </p>
          <p className="text-[15px] sm:text-[15px] text-neutral-100 mt-1.5 sm:mt-2 uppercase tracking-wider">
            VENUE: Meru Library
          </p>
          <p className="text-[15px] sm:text-[15px] text-neutral-100 mt-1.5 sm:mt-2 uppercase tracking-wider">
            TIME: 2PM - 3PM
          </p>
        </div>
        {/* Date and Footer Info */}
        <div className="mt-auto py-10">
          <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1.5 sm:mt-2 uppercase tracking-wider">
            Duration: 1hr 30min
          </p>
          <p className="text-[8px] sm:text-[9px] text-neutral-500 mt-3 sm:mt-4 uppercase tracking-wider">
            @elorua / #StartWhereYouAreKE
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
