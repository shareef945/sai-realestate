import React from "react";

const PropertyCard = () => {
  const services = [
    {
      number: 1,
      title: "Buying Properties",
      description: "Find your dream home with our expert guidance.",
    },
    {
      number: 2,
      title: "Renting Properties",
      description:
        "Discover rental options that fit your lifestyle and budget.",
    },
    {
      number: 3,
      title: "Property Management Solutions (Casa360)",
      description: "Tried and tested property management solutions to streamline your operations",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative bg-[#191919] p-6  border  border-[#ffffff0a] hover:border-[#ffffff30] duration-1000 h-[15.125rem]"
            >
              <div className="flex flex-col gap-4">
                <div className="h-10 w-10 rounded-full bg-[#303030] flex items-center justify-center">
                  <span className="text-white font-medium">
                    {service.number}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-secondary">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
