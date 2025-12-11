"use client";

import { useState } from "react";

import { Reveal } from "@/components/animations/Reveal";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqData = {
  headline?: string;
  subheadline?: string;
  items?: FaqItem[];
};

interface FaqsProps {
  data: FaqData | null;
}

export default function Faqs({ data }: FaqsProps) {
  const headline = data?.headline ?? "Frequently asked questions";
  const subheadline = data?.subheadline ?? "FAQ's";

  // Default hardcoded data if DB is empty
  const defaultItems: FaqItem[] = [
    {
      question: "Who is this service designed for?",
      answer:
        "This service is perfect for content creators, businesses, and agencies looking to scale their video production without hiring a full in-house team.",
    },
    {
      question: "What types of videos do you edit?",
      answer:
        "We edit everything from TikToks, Reels, and YouTube Shorts to long-form YouTube videos, podcasts, and corporate interviews.",
    },
    {
      question: "Who will be editing my videos?",
      answer:
        "Your videos will be edited by a dedicated professional editor assigned to your account, ensuring a consistent style and quality.",
    },
    {
      question: "What if I'm not happy with my video?",
      answer:
        "No problem! We offer unlimited revisions. Just leave your feedback on the timeline, and we'll make the changes until you're 100% satisfied.",
    },
    {
      question: "Can I upgrade, downgrade, or pause my subscription?",
      answer:
        "Yes, our plans are flexible. You can change your plan or pause your subscription at any time directly from your dashboard.",
    },
    {
      question: "What happens if I need more videos than my plan includes?",
      answer:
        "You can easily purchase add-on credits for extra videos or upgrade to a higher tier plan that suits your volume needs.",
    },
  ];

  const items =
    data?.items && data.items.length > 0 ? data.items : defaultItems;

  // State to track which FAQ is currently open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faps">
      <div className="wrapper">
        <Reveal className="w-full! mb-[3rem]">
          <h2 className="text-center font-bold leading-[135%]">
            {subheadline}
          </h2>

          <p className="text-body lg:text-h1 font-bold text-center">
            {headline}
          </p>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`rounded-t-5 w-full flex items-center gap-5 px-6 py-4 text-left transition-colors ${
                    isOpen ? "bg-gray-200" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="shrink-0 w-8 h-8 bg-[#2D1B4E] rounded-full flex items-center justify-center text-white">
                    {isOpen ? (
                      // Minus Icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      // Plus Icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>

                  {/* Question Text */}
                  <span className="text-smallest md:text-body font-normal text-black">
                    {item.question}
                  </span>
                </button>

                {/* Answer Content (Animated) */}
                <div
                  className={`rounded-b-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[100rem] opacity-100" // Increased max-h for longer answers
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-purple-400 px-[5rem] py-8 bg-gray-50 text-smallest md:text-small text-white leading-relaxed border-t border-gray-200 whitespace-pre-wrap">
                    {item.answer}
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
