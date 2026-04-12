import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import heroImg from "../../assets/hero.png";
import heroImg2 from "../../assets/hero-2.png";
import heroImg3 from "../../assets/hero-3.png";

import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";

import ProductData from "../../Data.json";

import bannerImg2 from "../../assets/banner.jpg";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";

import bannerCard1 from "../../assets/banner-card-3.jpg";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiShoppingCart } from "react-icons/ci";


const Index = () => {
  const products = ProductData.Products;
  const specialOffer = products.find((p) => p.id === 7);

  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const exists = cart.some(item => item.id === product.id);

    if(!exists) {
      const updatedCart = [...cart, {...product, quantity: 1}];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
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
      <div className="bg_element"></div>
      {/* HERO */}
      <div className="hero_bg">
        <header className="px-[8%] lg:px-[12%] py-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 2000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero_content flex flex-col items-start justify-start w-1/2">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero_span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 flex items-center justify-center font-semibold rounded-md text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero_image hide w-1/2">
                  <img src={heroImg2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero_content flex flex-col items-start justify-start w-1/2">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero_span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 flex items-center justify-center font-semibold rounded-md text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero_image hide w-1/2">
                  <img src={heroImg3} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero_content flex flex-col items-start justify-start w-1/2">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero_span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 flex items-center justify-center font-semibold rounded-md text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero_image hide w-1/2">
                  <img src={heroImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </header>
      </div>
      {/* Banners */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <div
          className="banner_1 flex flex-col justify-center gap-5 bg-center bg-cover rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
          style={{ backgroundImage: `url(${banner5})` }}
        >
          <small className="bg-yellow-500 text-white uppercase text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            Exclusive headphone
          </small>
          <h3 className="text-5xl font-semibold font-bricolage">
            Release Date & Price
          </h3>
          <p className="text-2xl">Today,s Super offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {/* Banner 1 */}
          <div
            className="flex flex-col gap-2 bg-center bg-cover rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <small className="bg-yellow-500 text-white uppercase text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              new product
            </small>
            <h3 className="text-x md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today,s Super offer</p>
          </div>
          {/* Banner 2 */}
          <div
            className="flex flex-col gap-2 bg-center bg-cover rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <small className="bg-yellow-500 text-white uppercase text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              new product
            </small>
            <h3 className="text-x md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today,s Super offer</p>
          </div>
          {/* Banner 3 */}
          <div
            className="flex flex-col gap-2 bg-center bg-cover rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <small className="bg-yellow-500 text-white uppercase text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              new product
            </small>
            <h3 className="text-x md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today,s Super offer</p>
          </div>
          {/* Banner 4 */}
          <div
            className="flex flex-col gap-2 bg-center bg-cover rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <small className="bg-yellow-500 text-white uppercase text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              new product
            </small>
            <h3 className="text-x md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today,s Super offer</p>
          </div>
        </div>
      </div>
      {/* Section Title */}
      <div className="section_title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Our Products
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Popular Products
        </h1>
      </div>
      {/* Products */}
      <div className="product_wrapper px-[8%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Special Offer Card */}
        <div className="product_panner_wrap relative bg-white border-2 border-yellow-400 p-6 rounded-xl flex flex-col items-center justify-center text-center">
          <span className="text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
            Special Offer
          </span>
          <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
            Save <br />
            $120
          </div>
          <img
            src={specialOffer.ProductsImage}
            alt={specialOffer.name}
            className="w-4/5 mx-auto my-4"
          />
          <h3 className="text-yellow-800 font-semibold">{specialOffer.name}</h3>
          <div className="mt-2">
            <span className="text-gray-500 line-through">
              ${specialOffer.OldPrice}
            </span>
            <span className="text-red-600 text-xl font-bold">
              ${specialOffer.Price}
            </span>
          </div>
          <div className="flex justify-between w-full mt-4 text-sm">
            <span>Available: 6</span>
            <span>Already Sold: 27</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-400 w-1/5 h-full"></div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">Hurry Up! Offer Ends In:</p>
        </div>
        {/* Products Cards */}
        <div className="lg:col-span-3">
          <div className="product_wrap grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8) .map(product => (
              <div key={product.id} className="bg-white show-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border-gray-100 cursor-pointer">
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">{product.category}</p>
                <img onClick={() => navigate(`product/${product.id}`)} src={product.ProductsImage} alt={product.name} className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                <h4 onClick={() => navigate(`/product/${product.id}`)} className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex mt-5 flex-row items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="mt-1 text-md">
                      <span className="line-through text-gray-400">${product.OldPrice}</span>
                      <span className="text-red-600 font-bold">${product.Price}</span>
                    </div>
                  ) : (
                    <div className="text-lg font-semibold mt-1">${product.Price}</div>
                  )}
                  <button onClick={() => handleAddToCart(product)} className="bg-yellow-400 text-white text-2xl rounded-full w-[45px] h-[45px] hover:bg-red-500 hover:shadow-xl transition flex items-center justify-center cursor-pointer">
                    <CiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </>
  );
};
export default Index;
