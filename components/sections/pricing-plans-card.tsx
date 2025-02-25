import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react"; // Add this import

const PricingPlansCard = () => {
  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "For individual landlords getting started.",
      price: "$39",
      period: "per month",
      features: [
        "Up to 10 units",
        "Basic tenant & lease management",
        "Online rent collection",
        "Simple maintenance requests",
        "Document storage (10GB)",
        "Basic financial reporting",
        "Mobile app access",
      ],
      limitations: [
        "Limited analytics",
        "No vendor management",
        "No API access",
        "Email support only",
      ],
    },
    {
      title: "Professional",
      subtitle: "For growing property managers and landlords.",
      price: "$99",
      period: "per month",
      popular: true,
      features: [
        "Up to 50 units",
        "All Starter features",
        "Advanced lease management & renewals",
        "Comprehensive maintenance tracking & work orders",
        "Vendor management & payments",
        "Document e-signing & storage (50GB)",
        "Financial analytics & reporting",
        "Bank integration",
        "Owner portal",
        "Priority email & chat support",
      ],
      limitations: ["Limited API access", "Basic white labeling"],
    },
    {
      title: "Business",
      subtitle: "For established property management companies.",
      price: "$199",
      period: "per month",
      features: [
        "Up to 200 units",
        "All Professional features",
        "Advanced analytics dashboard",
        "Custom financial reporting",
        "Bulk operations for invoices & documents",
        "Advanced maintenance workflow",
        "Document storage (200GB)",
        "Full API access",
        "White labeling options",
        "Priority phone & email support",
        "Dedicated account manager",
      ],
      limitations: [],
    },
    {
      title: "Enterprise",
      subtitle: "For large-scale property management operations.",
      price: "Custom",
      period: "Contact us for pricing",
      features: [
        "Unlimited units",
        "All Business features",
        "Custom integrations",
        "Advanced security features",
        "Unlimited document storage",
        "Custom training sessions",
        "SLA guarantees",
        "Dedicated support team",
        "On-premise deployment options",
      ],
      limitations: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className={`relative bg-[#191919] p-6 border border-[#ffffff0a] hover:border-[#ffffff30] duration-1000 flex flex-col h-full ${
              plan.popular ? "border-green-500 border-opacity-50" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <div className="flex flex-col gap-4 flex-grow">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{plan.title}</h2>
                <p className="text-secondary text-sm">{plan.subtitle}</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-secondary text-sm">{plan.period}</p>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium">What&apos;s included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-secondary text-sm flex items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations && plan.limitations.length > 0 && (
                <div className="space-y-2 mt-4">
                  <p className="text-sm font-medium text-gray-400">
                    Limitations:
                  </p>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation) => (
                      <li
                        key={limitation}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link href={"https://casa360.sairealestate.casa"}>
              <Button
                className={`mt-6 w-full py-2 px-4 rounded transition duration-300 ${
                  plan.popular
                    ? "bg-green-500 hover:bg-green-600"
                    : "hover:bg-[#404040]"
                }`}
              >
                {plan.title === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
        <p className="text-secondary mb-6 max-w-2xl mx-auto">
          We offer flexible pricing options for property management companies
          with unique needs. Contact our sales team to discuss your requirements
          and get a tailored quote.
        </p>
        <Link href={"https://cal.com/sai-technology/30min"}>
          <Button className="">Schedule a Consultation</Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingPlansCard;
