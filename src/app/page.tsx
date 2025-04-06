// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Your Company
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your company's powerful value proposition that resonates with your
            target audience.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Service One</h3>
              <p className="text-gray-600">
                Description of your first service offering and how it benefits
                clients.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Service Two</h3>
              <p className="text-gray-600">
                Description of your second service offering and how it benefits
                clients.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Service Three</h3>
              <p className="text-gray-600">
                Description of your third service offering and how it benefits
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
