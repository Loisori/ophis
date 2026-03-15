import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { PricingData, PricingPlan } from "@/types/Pricing.type";
import { DEFAULT_PRICING_DATA } from "@/constants/defaults";

interface PricingProps {
  data: PricingData | null;
}

const PLAN_STYLES = [
  {
    glowColor: "shadow-cyan-500/20",
    bgColor: "bg-black",
  },
  {
    glowColor: "shadow-purple-500/20",
    bgColor: "bg-linear-to-b from-[#060006] to-[#67056B]",
  },
  {
    glowColor: "shadow-yellow-500/20",
    bgColor: "bg-gradient-to-b from-[#9F8419] to-[#432C0F]",
  },
];

export default function Pricing({ data }: PricingProps) {
  const title = data?.title ?? DEFAULT_PRICING_DATA.title;
  const subtitle = data?.subtitle ?? DEFAULT_PRICING_DATA.subtitle;
  const plans =
    data?.plans && data.plans.length === 3
      ? data.plans
      : DEFAULT_PRICING_DATA.plans!;

  return (
    <section
      id="pricing"
      className="py-20 px-4  text-white overflow-hidden relative"
    >
      {/* bg-linear-to-b from-purple-400 to-black text-white */}
      <div className="wrapper mx-auto relative z-10">
        <Reveal className="w-full mb-5 sm:mb-8 text-black text-center">
          <h2 className="font-bold leading-[135%]">{title}</h2>

          <p className="text-body sm:text-h2 lg:text-h1 font-bold">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-16">
          {plans.map((plan, i) => {
            const style = PLAN_STYLES[i] || PLAN_STYLES[0];

            return (
              <Reveal
                key={i}
                delay={i * 0.2}
                className={`relative w-full flex flex-col p-5 md:p-8 rounded-2xl border-2
                ${style.bgColor} ${style.glowColor}
              `}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-small sm:text-h3 lg:text-h2 font-medium uppercase">
                      {plan.name}
                    </p>
                    {plan.popular && (
                      <span className="bg-white text-purple-400 font-bold text-[13px] px-2 py-0.5 rounded backdrop-blur-sm">
                        Most popular
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-smallest sm:text-smaller lg:text-small flex-1 mb-10">
                  <p className="font-bold text-white mb-4">
                    What&apos;s included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="mt-rem size-1 rounded-full bg-white shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto!">
                  {plan.price ? (
                    <div className="text-h2 sm:text-h1 lg:text-[4.8rem] font-bold mb-6">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="h-10 mb-6" />
                  )}

                  <Link
                    href="https://calendly.com/theophisediting/30min"
                    target="_blank"
                    className="button--secondary"
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
