import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      slug: "vista-grande",
      title: "Vista Grande",
      description: "Where Luxury Meets Serenity",
      location: "Teshie Nungua Estates",
      image: "/vista-grande/IMG_5678.JPG",
    },
    {
      id: 2,
      title: "Auben's Place",
      slug: "aubens-place",
      description: "Elegant Living Spaces",
      location: "Tse-Addo",
      image: "/aubens-place/IMG_6532.jpg",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24 overflow-auto py-4 sm:py-6 lg:py-8">
      <div className="w-full lg:w-1/2">
        <p className="font-semibold text-3xl sm:text-4xl lg:text-[60px] text-white">
          Featured Properties
        </p>
        <p className="text-base sm:text-lg text-[#898989] lg:w-2/3 pt-2 sm:pt-3 lg:pt-4 pb-6 sm:pb-8 lg:pb-12">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {properties.map((property, index) => (
          <Link
            href={`/portfolio/${property.slug}`}
            key={property.id}
            className="block" // Add this className
          >
            {" "}
            <div>
              <div className="min-h-[24rem] sm:min-h-[32rem] lg:h-[47rem]">
                {/* Mobile Layout (always left-to-right) */}
                <div className="flex flex-col lg:hidden h-full">
                  <div className="w-full border-[#ffffff0a] h-full bg-[#191919] border flex flex-col justify-between mb-4">
                    <div className="flex-1 bg-[#191919] p-4 text-2xl sm:text-3xl text-secondary">
                      {String(property.id).padStart(2, "0")}.
                    </div>
                    <div className="h-[20rem] sm:h-[24rem] relative">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                  <div className="w-full border-[#ffffff0a] h-full bg-[#191919] border">
                    <div className="h-full flex flex-col justify-between p-4 sm:p-5">
                      <p className="text-3xl sm:text-4xl font-semibold">
                        {property.title}
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-base sm:text-lg">
                          {property.location}
                        </p>
                        <p className="text-secondary text-base sm:text-lg">
                          {property.description}
                        </p>
                        <Button>Read More</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (alternating) */}
                <div className="hidden lg:flex flex-row h-full">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] mr-6 border flex flex-col justify-between">
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-secondary">
                          {String(property.id).padStart(2, "0")}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover"
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
                        <div className="h-full flex flex-col justify-between p-6">
                          <p className="text-[54px] font-semibold">
                            {property.title}
                          </p>
                          <div className="space-y-4">
                            <p className="text-lg">{property.location}</p>
                            <p className="text-secondary text-lg">
                              {property.description}
                            </p>
                            <Button>Read More</Button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
                        <div className="h-full flex flex-col justify-between p-6">
                          <p className="text-[54px] font-semibold">
                            {property.title}
                          </p>
                          <div className="space-y-4">
                            <p className="text-lg">{property.location}</p>
                            <p className="text-secondary text-lg">
                              {property.description}
                            </p>
                            <Button>Read More</Button>
                          </div>
                        </div>
                      </div>
                      <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] ml-6 border flex flex-col justify-between">
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-secondary">
                          {String(property.id).padStart(2, "0")}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover"
                            priority={true}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
