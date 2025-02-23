import React from "react";
import { Button } from "../ui/button";

const PricingPlansCard = () => {
  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "For individual landlords getting started.",
      price: "$29",
      period: "per month",
      features: [
        "Up to 10 units",
        "Online rent collection",
        "Basic maintenance tracking",
        "Tenant & lease management",
        "Mobile app access",
        "Basic reporting",
      ],
    },
    {
      title: "Professional",
      subtitle: "For growing property managers and landlords.",
      price: "$79",
      period: "per month",
      features: [
        "Up to 100 units",
        "All Starter features",
        "Owner portal",
        "Advanced maintenance & work orders",
        "Document e-signing",
        "Vendor payments",
        "Financial reporting & analytics",
        "Bank integration",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large-scale property management companies.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited units",
        "All Professional features",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Priority support",
        "Custom training",
        "White labeling options",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="relative bg-[#191919] p-6 border border-[#ffffff0a] hover:border-[#ffffff30] duration-1000 flex flex-col h-full"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{plan.title}</h2>
                <p className="text-secondary text-sm">{plan.subtitle}</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-secondary text-sm">{plan.period}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">What you can do:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-secondary text-sm flex items-start"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button className="mt-6 w-full  hover:bg-[#404040] py-2 px-4 rounded transition duration-300">
              Subscribe
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlansCard;
