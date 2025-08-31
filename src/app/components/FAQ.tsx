"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the Degen.com waitlist?", a: "The waitlist allows early users to register and secure rewards & perks before launch." },
  { q: "Will Degen.com offer VIP Transfers?", a: "Yes, VIP users will have access to personalized transfers and special services." },
  { q: "How do I join the waitlist?", a: "Simply sign up using your email and username in the registration form." },
  { q: "How will I be notified when I can access the platform?", a: "You’ll receive an email notification once your account is activated." },
  { q: "Will there be a loyalty or rewards program?", a: "Absolutely. Users will get rakebacks, reloads, and rank-based rewards." },
  { q: "Can I refer friends to the waitlist?", a: "Yes, each user gets a referral code to invite friends and earn extra perks." },
  { q: "What benefits do waitlist members receive?", a: "Boosted rewards, early access, and exclusive offers." },
  { q: "Will there be giveaways during the waitlist period?", a: "Yes, giveaways and surprise drops will be shared with active members." },
  { q: "When will Degen.com officially launch?", a: "The official launch date will be announced soon to all waitlist members." },
  { q: "Who can I contact for more information?", a: "You can reach out to support@degen.com for help." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-2">Everything you need to know about the waitlist.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] rounded-xl px-5 py-4 cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{faq.q}</h3>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === i && (
              <p className="text-gray-400 mt-3 text-sm">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
