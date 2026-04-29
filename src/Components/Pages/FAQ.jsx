import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";


// Faq Data
const faqData = [
  {
    question: "What Shipping Methods Are Available?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur ut turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur et nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.",
  },
  {
    question: "How Long will it Take To Get My Package? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur ut turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur et nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.",
  },
  {
    question: "How Do I Track My Order?",
    answer:
      "Integer ex turpis, venenatis nibh vel, vestibulum maximus quam. Ut pretium, orci et vestibulum porttitor. Fusce tempus diam quis justo porttitor gravida.",
  },
  {
    question: "Do I Need Account To Place Order?",
    answer:
      "Integer ex turpis, venenatis nibh vel, vestibulum maximus quam. Ut pretium, orci et vestibulum porttitor. Fusce tempus diam quis justo porttitor gravida.",
  },
  {
    question: "How Do I Place Order?",
    answer:
      "Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor.",
  },
  {
    question: "How Should I Contact if I Have Queries?",
    answer:
      "Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consepuat ex sit amet metus ultricies trrisique.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] sm:px-6 lg:px-[10%]">
        <div className="text-lg text-gray-600 flex items-center justify-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-700 font-semibold">FAQ</span>
        </div>
      </div>

      {/* Shipping Information Section */}
      <section className="w-full px-[8%] lg:px-[12%] py-16 bg-white text-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-3 mb-2 text-gray-800 font-bricolage">Frequently Asked Questions</h1>
          <p className="text-sm text-gray-500">This Agreement was last modified 18th February 2025</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold relative inline-block mb-10 after:content-[''] after:block after:w-24 after:h-[3px] after:bg-yellow-400 after:mt-1">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqData.slice(0, 4).map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">{item.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full px-[8%] lg:px-[12%] py-16 bg-white text-gray-900">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-3 mb-2 text-gray-800 font-bricolage">FAQ Second Version</h1>
          <p className="text-sm text-gray-500">This Agreement was last modified on 18th February 2052</p>
        </div>

        <div className="mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isOpen ? 'bg-yellow-50' : 'bg-white'}`}>
                <button onClick={() => toggleFAQ(index)} className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group transition duration-300">
                  <h4 className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-yellow-600' : 'text-gray-800'} group-hover:text-yellow-600`}>{faq.question}</h4>
                  <RiArrowDownSLine className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-600' : 'text-gray-400'}`} />
                </button>
                <div className={`px-6 bg-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] py-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default FAQ;
