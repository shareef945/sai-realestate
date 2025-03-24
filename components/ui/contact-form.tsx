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
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    property: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required field validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.property) newErrors.property = "Please select a property";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset error when field is updated
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      toast({
        title: "Please check your inputs",
        description: "Some fields need your attention",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Format data according to API requirements
    const apiPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.email,
      phoneNumber: formData.phone,
      propertyTitle: formData.property,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://n8n.saitechnology.co/webhook/real-estate/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiPayload),
        }
      );

      if (response.ok) {
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          property: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // Show error toast with appropriate message
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Show error toast for network issues
      toast({
        title: "Connection error",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              className={`bg-[#191919] border ${
                errors.firstName ? "border-red-500" : "border-[#ffffff0a]"
              }`}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <Input
              id="lastName"
              placeholder="Last Name"
              className={`bg-[#191919] border ${
                errors.lastName ? "border-red-500" : "border-[#ffffff0a]"
              }`}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="property" className="text-sm">
            Property title/info
          </label>
          <Select
            value={formData.property}
            onValueChange={(value) => handleInputChange("property", value)}
          >
            <SelectTrigger
              className={`bg-[#191919] border ${
                errors.property ? "border-red-500" : "border-[#ffffff0a]"
              }`}
            >
              <SelectValue placeholder="Select property" />
            </SelectTrigger>
            <SelectContent className="bg-[#191919] border border-[#ffffff0a]">
              <SelectItem value="Vista Grande" className="text-white">
                Vista Grande
              </SelectItem>
              <SelectItem value="Auben's Place" className="text-white">
                Auben&apos;s Place
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.property && (
            <p className="text-red-500 text-xs mt-1">{errors.property}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            className={`bg-[#191919] border ${
              errors.email ? "border-red-500" : "border-[#ffffff0a]"
            }`}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            className={`bg-[#191919] border ${
              errors.phone ? "border-red-500" : "border-[#ffffff0a]"
            }`}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="What are you looking for"
            className={`bg-[#191919] border ${
              errors.message ? "border-red-500" : "border-[#ffffff0a]"
            }`}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto md:float-right bg-white text-black hover:bg-gray-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
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
