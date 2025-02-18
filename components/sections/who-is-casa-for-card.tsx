import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const WhoIsCasaForCard = () => {
  const services = [
    {
      title: "Landlords",
      description: "Manage multiple properties and finances hassle-free.",
    },
    {
      title: "Tenants",
      description: "Pay rent securely and submit maintenance requests",
    },
    {
      title: "Property Managers",
      description: "Stay on top of maintenance, leases, and rent collection.",
    },
    {
      title: "Vendors",
      description: "Receive and track work orders efficiently.",
    },
  ];

 return (
   <div className="flex flex-col items-center">
     <div className="container mx-auto px-4 py-12">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {services.map((service,index) => (
           <div
             key={index}
             className="relative bg-[#191919] p-6 border border-[#ffffff0a] hover:border-[#ffffff30] duration-1000 h-[15.125rem] flex flex-col justify-between"
           >
             <h2 className="text-3xl font-semibold text-secondary">
               {service.title}
             </h2>
             <p>{service.description}</p>
           </div>
         ))}
       </div>
     </div>
     <Link href="https://casa360.sairealestate.casa">
       <Button>Get Started Today!</Button>
     </Link>
   </div>
 );
};

export default WhoIsCasaForCard;
