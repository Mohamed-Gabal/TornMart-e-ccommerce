import React from "react";
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";
import { RiTimeLine, RiMailLine } from "react-icons/ri";


const Contact = () => {
  return (
    <>
      <div className="w-full bg-yellow-100 py-4 px-[8%] sm:px-6 lg:px-[10%]">
        <div className="text-lg text-gray-600 flex items-center justify-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-700 font-semibold">Contact</span>
        </div>
      </div>

      <div className="w-full bg-white text-gray-900 px-[8%] lg:px-[12%] pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 font-bricolage">
              Leave us a Message
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mb-6"></div>
            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Got a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
            <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name*"
                className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
              />
            </div>
            <input
              type="text" 
              placeholder="Subject"
              className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
            />
            <textarea rows={5} placeholder="Your Message" className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"></textarea>
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg">
              Send Message
            </button>
          </form>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Store</h3>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-sm text-gray-700 mb-6 flex items-center">
              <RiMapPinLine className="text-lg mr-2" />
              GF-5, Silver Coin Complex, <br />
              Vadodara, Gujarat 390005, India
            </p> 
            <h4 className="text-base font-semibold mb-2 text-gray-800">Hours of Operation</h4>
            <ul className="text-sm text-gray-600 mb-6 space-y1">
              <li className="flex items-center"><RiTimeLine className="text-yellow-500 mr-2" /> Monday - Friday: 12-6 PM</li>
              <li className="flex items-center"><RiTimeLine className="text-yellow-500 mr-2" /> Saturday: 12-3 PM</li>
              <li className="flex items-center"><RiTimeLine className="text-yellow-500 mr-2" /> Sunday - Closed</li>
            </ul>
            <h4 className="text-base font-semibold mb-2 text-gray-800">Careers</h4>
            <p className="text-sm text-gray-600">
              Interested in joining our team? Reach out at: <br />
              <RiMailLine className="text-yellow-500 mr-2" />
              <a href="#" className="text-yellow-500 hover:underline">contact@yourstore.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
