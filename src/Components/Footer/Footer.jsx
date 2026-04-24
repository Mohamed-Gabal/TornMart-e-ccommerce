import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { GoShieldLock } from "react-icons/go";
import { FaInstagram, FaFacebook, FaHeadset, FaTwitter, FaPinterest } from "react-icons/fa";



const Footer = () => { 
  return (
    <footer className='text-gray-700 text-sm px-[8%] lg:px-[12%] pt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
        <div className='flex items-center gap-4'>
        <CiDeliveryTruck className='text-5xl text-yellow-500' /> 
          <p className='text-xl'>
            <strong>FREE Delivery</strong>
            Free Shipping on all Order
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <BsCashCoin className='text-5xl text-yellow-500' />
          <p className='text-xl'>
            <strong>Returns</strong> <br /> Back
            Guarantee under 7 days
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <FaHeadset className='text-5xl text-yellow-500' />
          <p className='text-xl'>
            <strong>Support</strong> <br />
            Support online 24 hours a day
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <GoShieldLock className='text-5xl text-yellow-500' />
          <p className='text-xl'>
            <strong>Payments</strong> <br /> 100%
            Payment Security
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='space-y-2'>
          <a href='#'>
            <h2 className='text-5xl font-bricolage text-black font-black'>Thron <span className='text-yellow-500'>Mart</span> </h2>
          </a>
          <p className='text-lg'>Find a location nearest you.</p> 
          <p className='text-lg'>See <a href='#' className='text-red-600 underline font-semibold'>Our Stores</a></p>
          <p className='text-lg mb-5 pb-3'>Support1234@Ecomall.com</p>
          <div className='flex gap-3 text-xl mt-5 text-gray-600'>
            <FaInstagram className='hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center' />
            <FaFacebook className='hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center' />
            <FaTwitter className='hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center' />
            <FaPinterest className='hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center' />
          </div>
        </div>
        <div className='space-y-1'> 
          <h3 className='font-semibold text-3xl mb-2'>About Us</h3>
          {['About Us', 'New & Blog', 'Brands', 'Press', 'Center', 'Advertising', 'Investors'].map((link, i) => (
            <p key={i}><a href='#' className='text-lg hover:text-red-500'>{link}</a></p>
          ))}
        </div> 
        <div className='space-y-1'>
          <h3 className='text-3xl font-semibold mb-2'>Support</h3>
          {['Support Center', 'Manage', 'Service', 'Haul Away', 'Security Center', 'Contact'].map((link, i) => (
            <p key={i}><a href='#' className='text-lg hover:text-red-500'>{link}</a></p>
          ))}
        </div>
        <div className='space-y-1'>
          <h3 className='text-3xl font-semibold mb-2'>Order</h3>
          {['Check Order', 'Delivery & Pickup', 'Returns', 'Exchanges', 'Developers', 'Gift', 'Cards'].map((link, i) => (
            <p key={i}><a href='#' className='text-lg hover:text-red-500'>{link}</a></p>
          ))}
        </div>
      </div>

      <p className='text-center text-xl text-gray-600 border-t border-yellow-500 py-5'>
        &copy; 2025 ThronMart. All rights reserved. By <a href='#' className='text-yellow-500 font-bold'>ThronMart</a>
      </p>
    </footer>
  )
}
export default Footer;
