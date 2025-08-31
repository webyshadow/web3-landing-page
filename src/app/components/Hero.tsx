"use client";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="px-8 md:relative z-10 flex flex-col items-center mt-[-3.5vw]">
        <span className="px-3 py-1 bg-green-700 text-xs font-semibold rounded-full mb-3">
          Coming Q3 2025
        </span>
        <h1 className="text-5xl font-bold">
          <TypeAnimation
            sequence={[
              "Built for Degens",
              2000,
              "Bigger Bonuses",
              2000,
              "Better Rewards",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 max-w-xl text-gray-300">
          A casino that pays to play — maxed-out rakeback, zero fluff, and one
          of the lowest house edge in the industry.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg">
          Join Waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
