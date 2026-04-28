import React from 'react'

import blogImg1 from '../../assets/blog-1.jpg';
import blogImg2 from '../../assets/blog-2.jpg';
import blogImg3 from '../../assets/blog-3.jpg';
import blogImg4 from '../../assets/blog-4.jpg';
import blogImg5 from '../../assets/blog-5.jpg';
import { Link } from 'react-router-dom';
import { RiCalendarLine, RiInformationLine, RiBookmarkLine  } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CiViewTimeline } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { RiHashtag } from "react-icons/ri";



const Blog = () => {

  const blogPosts = [
    {id: 1, image: blogImg1, title: 'Robot Wars Post With Gallery', meta: 'Design, Tech Mar 4, 2016', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Laborre et dolore magna aliqua.'},
    {id: 2, image: blogImg2, title: 'Robot Wars Closed Video Post', meta: 'Tech, Video Mar 4, 2016', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Laborre et dolore magna aliqua.'},
    {id: 3, image: blogImg3, title: 'Robot Wars Post With Gallery', meta: 'Design, Tech Mar 4, 2016', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Laborre et dolore magna aliqua.'},
    {id: 4, image: blogImg4, title: 'Proin tempor purus ac suscipit sagittis. Nunc finibus eurisque odio, in elementum ipsum varius ut. Donec a consectetur nulla.', meta: 'Design, Tech Mar 4, 2016', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Laborre et dolore magna aliqua.'},
    {id: 5, image: blogImg5, title: 'Spacex Falcon explodes after landing', meta: 'Technology, News Mar 6, 2016', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Laborre et dolore magna aliqua.'},
  ]
  return (
    <>
    {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex items-center justify-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className='text-gray-500'>&nbsp;/&nbsp;</span>
          <span className="text-yellow-700 font-semibold">Blog</span>
        </div>
      </div>
      {/* Blog Section */}
      <div className='W-full px-[8%] lg:px-[12%] py-16 bg-gray-50 text-gray-900'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
        {/* Blog List */}
          <div className='lg:col-span-8 space-y-12'>
            {blogPosts.map((post) => (
              <div key={post.id} className='relative.group.flex.flex-col gap-8 items-start border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-lg transition duration-300'>
                <div className='rounded-lg overflow-hidden shadow-md w-full'>
                  <img src={post.image} alt={post.title} className='w-full object-cover transition-transform duration-300 group-hover:scale-105' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition'>{post.title}</h2>
                  <p className='text-sm text-gray-500 flex items-center gap-2 mb-3'><RiCalendarLine /> {post.meta}</p>
                  <div className='w-16 h-[2px] bg-yellow-400 mb-3 group-hover:w-24 transition'></div>
                  <p className='text-base text-gray-700 leading-relaxed mb-4'>{post.excerpt}</p>
                  <button className='inline-flex items-center gap-2 px-5 py-2 text-sm text-black font-bold bg-yellow-400 border border-yellow-400 rounded-full transition-all duration-300 hover:bg-transparent hover:text-black hover:border-yellow-400'>
                    Read More
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            ))}
          </div>

           {/* Sidebar  */}
           <aside className='lg:col-span-4 space-y-4'>
            {/* Search */}
            <div className='border rounded-lg p-2 bg-yellow-500 shadow-sm'>
              <div className='flex items-center border rounded overflow-hidden bg-white'>
                <IoIosSearch className='text-gray-500 px-3' />
                <input type='text' placeholder='Search...' className='w-full px-3 py-2 text-sm outline-none' />
              </div>
            </div>

            {/* About */} 
            <div className='border rounded-lg p-4 bg-white shadow-sm'>
              <h4 className='text-lg font-semibold mb-2 flex items-center gap-2'>
              <RiInformationLine className='text-yellow-500' />
                About Blog
              </h4>
              <p className='text-sm text-gray-600'>Lorem ipsum sit amet, consectetur adipiscing elit, Sed viverra nec nulla vitae mollis.</p>
            </div>

            {/* Categories */}
            <div className='border rounded-lg p-4 bg-white shadow-sm'>
              <h4 className='text-lg font-semibold mb-2 flex items-center gap-2'>
                <RiBookmarkLine  className='text-yellow-500' />
                Categories
              </h4> 
              <ul className='text-sm text-gray-600 space-y-1'>
                <li className='hover:text-yellow-500 cursor-pointer'>Design</li>
                <li className='hover:text-yellow-500 cursor-pointer'>Technology</li>
                <li className='hover:text-yellow-500 cursor-pointer'>Audio</li>
                <li className='hover:text-yellow-500 cursor-pointer'>Lifestyle</li>
              </ul> 
            </div> 

            {/* Recent Posts */}
            <div className='border rounded-lg p-5 bg-white shadow-sm'>
              <h4 className='text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800'>
                <CiViewTimeline  className='text-green-500 text-xl' />
                Recent Posts 
              </h4>
              <ul className='space-y-4'>
                {blogPosts.map((post) => ( 
                  <li key={post.id} className='flex items-center gap-4 group hover:bg-gray-50 p-2 rounded-md transition-all duration-300'>
                    <img src={post.image} alt={post.title} className='w-16 h-16 object-cover rounded-md shadow-sm shrink-0' />
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-gray-800 group-hover:text-yellow-500 transition'>{post.title}</span>
                      <p className='text-xs text-gray-500 mt-1 flex items-center gap-1'>
                        <SlCalender className='text-sm text-gray-400' />
                        {post.meta}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              </div>

              {/* Tags */}
              <div className='border rounded-lg p-4 bg-white shadow-sm'>
              <h4 className='text-lg font-semibold mb-2 flex items-center gap-2'>
                <RiHashtag  className='text-pink-500' />
                Tags
              </h4>
              <div className='flex flex-wrap gap-2 text-sm'>
                {['tech', 'modern', 'video', 'bootstrap', 'theme', 'creative'].map((tag) => (
                  <span key={tag} className='bg-gray-200 px-2 py-1 rounded  hover:bg-yellow-300 transform cursor-pointer'>
                    #{tag}
                  </span>
                ))}
              </div>
              </div>
           </aside>
        </div>
      </div>
    </> 
  )
}
export default Blog;
