import React from "react";
import { Button } from "../ui/button";

const PricingPlansCard = () => {
  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "For individual landlords with a few properties.",
      price: "$9.99",
      period: "per month",
      features: [
        "Manage up to 5 properties",
        "Basic maintenance tracking",
        "Manual rent recording",
        "Tenant & lease management",
      ],
    },
    {
      title: "Pro",
      subtitle: "For growing property managers and landlords.",
      price: "$29.99",
      period: "per month",
      features: [
        "Manage up to 50 properties",
        "Automated rent collection",
        "Maintenance & work order management",
        "Vendor assignment & expense tracking",
        "Digital lease agreements",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large-scale property management companies.",
      price: "Custom Pricing",
      period: "",
      features: [
        "Unlimited properties",
        "API access & integrations",
        "Advanced reporting & analytics",
        "Priority support",
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
