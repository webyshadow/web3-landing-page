import Image from "next/image";

const rewards = [
  {
    title: "Instant Rakeback",
    desc: "Earn real-time rewards on every wager – win or lose. Your rakeback builds automatically and is ready to claim anytime.",
    img: "/rewards/rakeback.png", // apna image path daal
  },
  {
    title: "Rank Bonuses",
    desc: "Climb through VIP tiers just by playing. Each rank unlocks better perks, higher rakeback, and instant one-time bonus rewards.",
    img: "/rewards/rank.png",
  },
  {
    title: "Reload Bonuses",
    desc: "Never run out with daily, weekly, and monthly reloads, perfectly designed to fuel your grind and keep the action flowing around the clock.",
    img: "/rewards/reload.png",
  },
  {
    title: "Exclusive Rewards",
    desc: "Earn daily rewards and drops that grow as you play, plus bonuses from events, level-ups, and cashback.",
    img: "/rewards/exclusive.png",
  },
];

export default function Rewards() {
  return (
    <section className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag */}
        <span className="text-sm px-4 py-1 bg-gray-800 rounded-full">
          Play & Earn
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Degen Rewards</h2>
        <p className="text-gray-400 mt-2">
          Get early access and boosted rewards — sign up now.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {rewards.map((reward, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] rounded-2xl p-6 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={reward.img}
                alt={reward.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
            <p className="text-gray-400 text-sm">{reward.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
