import PrimaryButton from "@/components/ui/primary-button";
import CoffeeSection from "@/components/coffee-section";
import Link from "next/link";
import { submitForm } from "@/lib/submit";

export default async function Home() {
  const coffeeImage = await submitForm();
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Coffee App</h1>

      <CoffeeSection coffeeImage={coffeeImage} />
      <Link href="/feedback" className="mb-8">
        <PrimaryButton>Give Feedback</PrimaryButton>
      </Link>
    </div>
  );
}
