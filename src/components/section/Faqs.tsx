"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { FaqData, FaqItem } from "@/types/Faqs.type";


interface FaqsProps {
  data: FaqData | null;
}

export default function Faqs({ data }: FaqsProps) {
  const headline = data?.headline ?? "Frequently asked questions";
  const subheadline = data?.subheadline ?? "FAQ's";

  const defaultItems: FaqItem[] = [
    {
      answer:
        "Ophis is built for founders, entrepreneurs, content creators, and marketing teams who need consistent, high-quality video editing without the overhead of hiring in-house or managing unreliable freelancers. Whether you're scaling YouTube, building a personal brand, or running paid ad campaigns, we handle the production so you can focus on growth.This service is perfect for content creators...",
      question: "Who is this service designed for?",
    },
    {
      answer:
        "We specialize in:\nYouTube content (long-form, vlogs, educational, interviews)\nShort-form content (Reels, TikToks, YouTube Shorts)\nPaid ads (Facebook, Instagram, YouTube pre-roll)\nPodcasts (video podcasts, highlight clips, audiograms)\nCourse content (tutorials, lectures, modules)\nBrand videos (explainers, testimonials, product demos)\nSocial media content (LinkedIn, Twitter/X video)\nIf it needs to be edited, we handle it.",
      question: "What types of videos do you edit?",
    },
    {
      answer:
        "You'll have a dedicated Account Manager assigned as your main point of contact to ensure smooth communication and brand consistency. The video editing itself is performed by our team of professional editors with 4+ years of experience across diverse video styles.\nThe specific editors working on your projects depend on your chosen subscription pack, but the process is overseen by your Account Manager to ensure high-quality results aligned with your needs.",
      question: "Who will be editing my videos?",
    },
    {
      answer:
        "This doesn't happen very often, but if it does - you get unlimited revisions (on Pro and Premium plans). We'll keep tweaking things until you absolutely love your videos. Your satisfaction is non-negotiable.",
      question: "What if I'm not happy with my video?",
    },
    {
      answer:
        "Upgrade/Downgrade: Absolutely. You can easily adjust your subscription plan to better match your content needs. Contact us, and we'll help adjust your plan, typically effective from the next billing cycle.\nPause: Need a break? Pause your subscription and resume when you're ready.\nCancel: You can cancel your subscription at any time. Cancellation is effective immediately. We offer a pro-rata refund for the unused portion of your current monthly billing cycle, no questions asked. For example, if you cancel after one week, you'll receive a 75% refund for the remaining three weeks.",
      question: "Can I upgrade, downgrade, or pause my subscription?",
    },
    {
      answer:
        "Our plans are optimized for a specific monthly volume. If you occasionally need an extra edit, we may be able to accommodate this as an add-on service (calculated as added value). However, if you consistently need more output, upgrading your plan to the next level is recommended for better value and workflow.",
      question: "What happens if I need more videos than my plan includes?",
    },
  ];

  const items =
    data?.items && data.items.length > 0 ? data.items : defaultItems;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
      <div className="wrapper">
        <Reveal className="w-full mb-5 sm:mb-8">
          <h2 className="text-center font-bold leading-[135%]">
            {subheadline}
          </h2>

          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {headline}
          </p>
        </Reveal>

        <div className="space-y-rem sm:space-y-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={index} className="overflow-hidden rounded-5">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center gap-rem sm:gap-5 px-5 sm:px-6 py-rem sm:py-4 text-left transition-colors cursor-pointer ${
                    isOpen ? "bg-gray-200" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <div className="shrink-0 size-8 bg-white rounded-full flex items-center justify-center text-white">
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2D1B4E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2D1B4E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>

                  <span className="text-smallest md:text-body font-normal text-black">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`rounded-b-5 overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-[100rem] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-purple-400 p-5 sm:px-[5rem] sm:py-8 bg-gray-50 text-smallest md:text-small text-white leading-relaxed border-t border-gray-200 whitespace-pre-wrap">
                    {item.answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
