"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     try {
       const response = await fetch("/api/register", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });

       if (!response.ok) {
         throw new Error("Network response was not ok");
       }

       toast({
         title: "Success!",
         description: "Thank you for registering your interest.",
       });

       setFormData({ name: "", email: "" });
     } catch {
       toast({
         variant: "destructive",
         title: "Error",
         description: "There was a problem submitting your form.",
       });
     }
   };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#151515] text-foreground p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-4 text-center">
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-center">
            Our website is currently under development. If you are interested in
            any of our properties register here and we will be in touch
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4"
              required
            />
            <Button type="submit" className="w-full">
              Register Interest
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
