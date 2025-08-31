"use client";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-black text-white">
      <span className="px-3 py-1 bg-green-700 text-xs font-semibold rounded-full mb-3">
        Coming Q3 2025
      </span>
      <h1 className="text-5xl font-bold">
        <TypeAnimation
          sequence={[
            "Built for Degens", 2000,
            "Bigger Bonuses", 2000,
            "Better Rewards", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="mt-4 max-w-xl text-gray-400">
        A casino that pays to play — maxed-out rakeback, zero fluff, and one of
        the lowest house edge in the industry.
      </p>
      <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg">
        Join Waitlist
      </button>
    </section>
  );
};

export default Hero;
