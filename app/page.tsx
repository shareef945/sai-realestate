"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://example.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thank you for registering your interest!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your form.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-4">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-center">
            Our new real estate project is launching soon. Stay tuned!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Image
              src="/IMG_5675.JPG"
              alt="Project 1"
              width={300}
              height={200}
            />
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={300}
              height={200}
            />
          </div>
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
