import { ReactNode } from "react";
import { 
  Monitor, Gift, RefreshCcw, Upload, Smartphone, 
  Gamepad2, User 
} from "lucide-react";

interface Feature {
  icon: ReactNode;
  title: string;
}

const features: Feature[] = [
  { icon: <Monitor className="w-6 h-6" />, title: "Fast & Clean UI" },
  { icon: <User className="w-6 h-6" />, title: "Up to 15% Rakeback" },
  { icon: <Gift className="w-6 h-6" />, title: "Boosted Rewards" },
  { icon: <RefreshCcw className="w-6 h-6" />, title: "Challenges that Pay" },
  { icon: <Upload className="w-6 h-6" />, title: "Withdraw Anytime" },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Friendly" },
  { icon: <Gamepad2 className="w-6 h-6" />, title: "Over 3,500 Games" },
];

export default function Features() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-zinc-900 text-gray-300 rounded-lg p-6 transition hover:bg-zinc-800 hover:text-green-500"
          >
            <div className="mb-2 text-green-400">{feature.icon}</div>
            <h3 className="text-sm font-semibold text-center">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
