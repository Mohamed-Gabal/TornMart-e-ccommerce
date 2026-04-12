import React, { useEffect, useState } from "react";

import ProductData from "../../Data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = ProductData.Products;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10 text-center text-xl alert alert-danger">Product Not Found</div>;
  }

  const [isWishlisted, setIsWishlisted] = useState(false);

  const [ showZoom, setShowZoom ] = useState(false);
  const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0});

  const handleMouseMove = (e) => {
    const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({x, y});
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const exists = wishlist.some(item => item.id === product?.id);
    setIsWishlisted(exists);
  }, [product?.id]);

  const handleWishlisted = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const exists = wishlist.some(item => item.id === product?.id);

    let updatedList;
    if(exists) {
      updatedList = wishlist.filter(item => item.id !== product.id);
      toast.info('Item removed from wishlist');
    } else {
      updatedList = [...wishlist, product];
      toast.info('Item added to wishlist');
    }

    localStorage.setItem('wishlistItems', JSON.stringify(updatedList));
    setIsWishlisted(!exists);
  }

    const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const exists = wishlist.some(item => item.id === product?.id);

    if(!exists) {
      const updatedList = [...wishlist, product];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedList));
    } 

    toast.success('Item added to wishlist');

    setTimeout(() => {
      navigate('/wishlist');
    }, 1000);
  }

    const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const exists = cart.some(item => item.id === product?.id);

    if(!exists) {
      const updateCart = [...cart, {...product, quantity: 1}];
      localStorage.setItem('cartItems', JSON.stringify(updateCart));
      toast.success('Item added to cart');
    } else {
      toast.warning('Item already in cart');
    }
    
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  }

  return (
    <>
    <ToastContainer position="top-right" autoClose={1500}/>
    {/* Page Section */}
    <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
      <div className="text-lg text-gray-600 flex items-center justify-center space-x-2">
        <Link to='/' className="text-gray-700 font-medium hover:underline">Home</Link>
        <span className="text-gray-500">&nbsp; / &nbsp;</span>
        <span className="text-red-900 font-semibold">Product Details</span>
      </div>
    </div>
    {/* Product Details */}
    <div className="flex flex-col md:flex-row items-center gap-10 px-[8%] lg:px-[12%] py-20">
      <div className="w-full md:w-1/2 flex justify-between gap-6 px-[80px] py-[50px] border rounded-xl shadow-md relative">
        {/* Main Image */}
        <div className="relative w-[250px] h-[250px] overflow-hidden rounded-xl shadow-md border cursor-pointer" onMouseEnter={() => setShowZoom(true)} onMouseLeave={() => setShowZoom(false)} onMouseMove={handleMouseMove}>
        <img src={product.ProductsImage} alt={product.name} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
    </>
  )
};
export default ProductDetails;
