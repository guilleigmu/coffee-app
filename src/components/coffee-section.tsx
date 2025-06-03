"use client";

import PrimaryButton from "./ui/primary-button";
import { submitForm } from "@/lib/submit";
import { useState } from "react";

export default function CoffeeSection({
  coffeeImage: initialCoffeeImage,
}: {
  coffeeImage: string;
}) {
  const [coffeeImage, setCoffeeImage] = useState<string>(initialCoffeeImage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitForm();
    setCoffeeImage(result);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-8 max-w-2xl w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coffeeImage}
        alt="Coffee"
        className="w-full h-auto mb-4 object-cover aspect-[4/3]"
      />
      <form onSubmit={handleSubmit}>
        <PrimaryButton type="submit">Get Random Coffee</PrimaryButton>
      </form>
    </div>
  );
}
