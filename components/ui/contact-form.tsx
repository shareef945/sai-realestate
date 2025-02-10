"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    property: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="grid md:grid-cols-[2fr,1fr] gap-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <Input
              id="firstName"
              placeholder="Full Name"
              className="bg-[#191919] border border-[#ffffff0a] "
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <Input
              id="lastName"
              placeholder="Last Name"
              className="bg-[#191919] border border-[#ffffff0a] "
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="property" className="text-sm">
            Property title/info
          </label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, property: value })
            }
          >
            <SelectTrigger className="bg-[#191919] border border-[#ffffff0a] ">
              <SelectValue placeholder="Select property" />
            </SelectTrigger>
            <SelectContent className="bg-[#191919] border border-[#ffffff0a] ">
              <SelectItem value="property1" className="text-white">
                Vista Grande
              </SelectItem>
              <SelectItem value="property2" className="text-white">
                Auben&apos;s Place
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            className="bg-[#191919] border border-[#ffffff0a] "
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            className="bg-[#191919] border border-[#ffffff0a] "
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="What are you looking for"
            className="bg-[#191919] border border-[#ffffff0a] "
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto md:float-right bg-white text-black hover:bg-gray-200"
        >
          Submit
        </Button>
      </form>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-xl mb-2">Locate Us</h3>
          <p className="text-gray-400">10 Switchback Lane, Accra, Ghana</p>
          <p className="text-gray-400">+ (233) 243-945-815</p>
          <p className="text-gray-400">info@sairealestates.casa</p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">Open Hours</h3>
          <div className="space-y-1 text-gray-400">
            <p>Monday: 9am–5:30pm</p>
            <p>Tuesday: 9am–5:30pm</p>
            <p>Wednesday: 9am–5:30pm</p>
            <p>Thursday: 9am–5:30pm</p>
            <p>Friday: 9am–5pm</p>
            <p>Saturday: 9am–2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
