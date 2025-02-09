import Image from "next/image";
import { Button } from "../ui/button";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Vista Grande",
      description: "Where Luxury Meets Serenity",
      location: "Teshie Nungua Estates",
      image: "/vista-grande/1.JPG",
    },
    {
      id: 2,
      title: "Vista Grande",
      description: "Elegant Living Spaces",
      location: "Teshie Nungua Estates",
      image: "/vista-grande/2.JPG",
    },
    // {
    //   id: 3,
    //   title: "Vista Grande",
    //   description: "Modern Comfort",
    //   location: "Teshie Nungua Estates",
    //   image: "/vista-grande/3.JPG",
    // },
    // {
    //   id: 4,
    //   title: "Vista Grande",
    //   description: "Premium Finishes",
    //   location: "Teshie Nungua Estates",
    //   image: "/vista-grande/4.JPG",
    // },
    // {
    //   id: 5,
    //   title: "Vista Grande",
    //   description: "Luxurious Details",
    //   location: "Teshie Nungua Estates",
    //   image: "/vista-grande/5.JPG",
    // },
  ];

  return (
    <div className="max-h-[126.0625rem] pb-24 px-8 overflow-auto">
      <div className="w-1/2">
        <p className="font-semibold text-[60px] text-white">
          Featured Properties
        </p>
        <p className="text-[18px] text-[#898989] w-2/3 pt-4 pb-12">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="space-y-8">
        {properties.map((property, index) => (
          <div key={property.id}>
            <div className="h-[47rem]">
              <div className="flex h-full">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] mr-6 border flex flex-col justify-between">
                      <div className="flex-1 bg-[#191919] p-4 text-[40px] text-secondary">
                        {String(property.id).padStart(2, "0")}.
                      </div>
                      <div className="h-[38.125rem] relative">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                    <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
                      <div className="h-full flex flex-col justify-between p-6">
                        <p className="text-[54px] font-semibold">
                          {property.title}
                        </p>
                        <div className="space-y-4">
                          <p>{property.location}</p>
                          <p className="text-secondary">
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
                          <p>{property.location}</p>
                          <p className="text-secondary">
                            {property.description}
                          </p>
                          <Button>Read More</Button>
                        </div>
                      </div>
                    </div>
                    <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] ml-6 border flex flex-col justify-between">
                      <div className="flex-1 bg-[#191919] p-4 text-[40px] text-secondary">
                        {String(property.id).padStart(2, "0")}.
                      </div>
                      <div className="h-[38.125rem] relative">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
