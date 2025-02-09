import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="h-[32.5625rem] bg-[#151515]">
      <div className="grid grid-cols-10 gap-8 my-20 h-[32.5625rem]">
        <div className="col-span-6 relative before:absolute before:inset-0 before:content-[''] before:pointer-events-none before:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] before:bg-[size:2rem_2rem]">
          <div className="p-10 flex items-end justify-start h-full">
            <Image
              src="/logos/footer-logo.png"
              alt="Footer logo"
              width={600}
              height={1000}
              // className="w-auto h-[200px]"
            />
          </div>
        </div>

        <div className="col-span-4 p-2 flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="underline pb-2">Ventures</p>
            <p className="underline pb-2">Data Privacy & Security Policy</p>
            <p className="underline pb-2">Compliance & Certifications</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="underline pb-2">info@saitechnology.co</p>
            <div className="flex gap-8">
              <Image
                src="/logos/x.png"
                alt="SAI Technology logo"
                width={30}
                height={30}
              />
              <Image
                src="/logos/ig.png"
                alt="SAI Technology logo"
                width={30}
                height={30}
              />
              <Image
                src="/logos/linkedin.png"
                alt="SAI Technology logo"
                width={30}
                height={30}
              />
              <Image
                src="/logos/whatsapp.png"
                alt="SAI Technology logo"
                width={30}
                height={30}
              />
            </div>
            <p className="underline pb-2 text-secondary">
              2023 All rights reserved. Powered by SAI Technology ©
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
