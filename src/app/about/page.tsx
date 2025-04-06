// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About Us | Your Company",
  description: "Learn about our company history, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Your Company</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="mb-4">
            Your company history, mission, and values go here. This section
            tells your story and connects with visitors.
          </p>
          <p>
            More details about your company, team, achievements, or what makes
            you unique in your industry.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          {/* Placeholder for company image */}
          <p className="text-gray-500">Company Image</p>
          {/* When you have an image:
          <Image 
            src="/images/about-company.jpg" 
            alt="About Your Company" 
            width={600} 
            height={400} 
            className="rounded-lg"
          />
          */}
        </div>
      </div>
    </div>
  );
}
