"use client";
import Image from "next/image";

const providers = [
  "/provider/2.png",
  "/provider/1.png",
  "/provider/1.png",
  "/provider/2.png",
  "/provider/1.png",
  "/provider/2.png",
  "/provider/1.png",
  "/provider/2.png",
  "/provider/1.png",
  "/provider/2.png",
  "/provider/1.png",
];

export default function ProvidersMarquee() {
  return (
    <section className="bg-black/60 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <span className="text-gray-400 text-sm bg-zinc-800 px-3 py-1 rounded-full">
          Over 3,500+ Games
        </span>
        <h2 className="text-3xl font-bold text-white mt-4">
          Your Favorite Providers
        </h2>
        <p className="text-gray-400 mt-2">
          Get early access and boosted rewards — sign up now.
        </p>
      </div>

      {/* 1st Line - Left to Right */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="flex animate-marquee space-x-6">
          {providers.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-zinc-900 rounded-lg p-6 min-w-[200px] h-20"
            >
              <Image
                src={logo}
                alt={`provider-${idx}`}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
          {providers.map((logo, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center justify-center bg-zinc-900 rounded-lg p-6 min-w-[200px] h-20"
            >
              <Image
                src={logo}
                alt={`provider-dup-${idx}`}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2nd Line - Right to Left */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-reverse space-x-6">
          {providers.map((logo, idx) => (
            <div
              key={`rev-${idx}`}
              className="flex items-center justify-center bg-zinc-900 rounded-lg p-6 min-w-[200px] h-20"
            >
              <Image
                src={logo}
                alt={`provider-rev-${idx}`}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
          {providers.map((logo, idx) => (
            <div
              key={`rev-dup-${idx}`}
              className="flex items-center justify-center bg-zinc-900 rounded-lg p-6 min-w-[200px] h-20"
            >
              <Image
                src={logo}
                alt={`provider-rev-dup-${idx}`}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
