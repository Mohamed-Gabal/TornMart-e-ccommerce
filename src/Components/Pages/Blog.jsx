import React from 'react'

import blogImg1 from '../../assets/blog-1.jpg';
import blogImg2 from '../../assets/blog-2.jpg';
import blogImg3 from '../../assets/blog-3.jpg';
import blogImg4 from '../../assets/blog-4.jpg';
import blogImg5 from '../../assets/blog-5.jpg';
import { Link } from 'react-router-dom';
import { RiCalendarLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

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
                <CiSearch className='text-gray-500 px-3' />
                <input type='text' placeholder='Search...' className='w-full px-3 py-2 text-sm outline-none' />
              </div>
            </div>
           </aside>
        </div>
      </div>
    </> 
  )
}
export default Blog;
