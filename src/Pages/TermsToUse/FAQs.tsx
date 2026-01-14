"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HowSteps from "../../Components/Cards/HowSteps";
import SectionC from "../../Components/SectionC";
import Footer from "../../Components/Footer";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is FoodWagon?",
        a: "FoodWagon is a food delivery platform that helps you discover and order food from nearby restaurants."
      },
      {
        q: "Is FoodWagon available in my area?",
        a: "Availability depends on your location. Enter your delivery address to check supported areas."
      }
    ]
  },
  {
    category: "Orders & Delivery",
    items: [
      {
        q: "How do I place an order?",
        a: "Choose a restaurant, add items to cart, select delivery or pickup, and proceed to checkout."
      },
      {
        q: "Can I cancel my order?",
        a: "Orders can be cancelled before preparation starts. Once prepared, cancellation may not be possible."
      }
    ]
  },
  {
    category: "Payments",
    items: [
      {
        q: "What payment methods are supported?",
        a: "We support UPI, credit/debit cards, net banking, and cash on delivery."
      }
    ]
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen px-6 py-10 bg-linear-to-b from-orange-300/30 via-white to-white">
              <div className="font-bold text-primary text-4xl text-center">
        How does it work??
      </div>
      <div className="flex mt-10 flex-wrap">
        <HowSteps
          icon={
            <i className="ri-map-pin-line text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Select Location"}
          desc={"Choose the location where your food will be delivered."}
        />
        <HowSteps
          icon={
            <i className="ri-restaurant-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Choose Order"}
          desc={"Check over hundreds of menus to pick your favorite food"}
        />
        <HowSteps
          icon={
            <i className="ri-receipt-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Pay Advance"}
          desc={
            "It's quick safe, and simple. Select several methods of payment"
          }
        />
        <HowSteps
          icon={
            <i className="ri-bowl-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Enjoy Meals"}
          desc={"Food is made and delivered directly to your home."}
        />
      </div>
      
      {/* Heading */}
      <div className="mb-16 text-center mt-10">
        <h1 className="text-3xl font-bold text-primary">
          Frequently Asked Questions(FAQs)
        </h1>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-10 max-w-7xl mx-auto">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-primary pl-3">
              {section.category}
            </h2>

            <div className="divide-y">
              {section.items.map((faq, idx) => {
                const key = `${sectionIdx}-${idx}`;
                const isOpen = openIndex === key;

                return (
                  <div key={key} className="py-4">
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : key)
                      }
                      className="w-full flex justify-between items-center text-left"
                    >
                      <span className="text-gray-800 font-medium">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <p className="mt-3 text-gray-600 leading-relaxed transition ease">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
              
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
