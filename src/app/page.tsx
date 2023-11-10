"use client";

import Banner from "@/components/Banner/page";
import { IBanner } from "@/components/Banner/types";
import { Carousel } from "flowbite-react";

import { GrSecure, GrValidate } from "react-icons/gr";
import { FaRocket, FaShippingFast } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import ProductCards from "@/components/ProductCards/page";
import { IProductCards } from "@/components/ProductCards/types";

export default function Home() {
  const mockCarouselContent = [
    {
      title: "Season's Hottest",
      subtitle: "Discover the Latest Fashion Trends",
      btnText: "Shop Now",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-1-a.webp',
      imgSrc2: '/images/banner-1-b.webp',
    },
    {
      title: "Summer Sale",
      subtitle: "Hot Deals for Sunny Days: Dive into Savings!",
      btnText: "View Discounts",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-2-a.webp',
      imgSrc2: '/images/banner-2-b.webp',
    },
    {
      title: "Live in Glamour",
      subtitle: "Reach the perfect glamour style with our exclusive jewelry collections.",
      btnText: "Shop jewelry",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-3-a.webp',
      imgSrc2: '/images/banner-3-b.webp',
    },
    {
      title: "Elegance that Lasts",
      subtitle: "Quality and style, hand in hand with 11VERSE.",
      btnText: "Shop Fall Styles",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-4-a.webp',
      imgSrc2: '/images/banner-4-b.webp',
    },
    {
      title: "Customer Favorites",
      subtitle: "Tried, Tested, and Loved by You – Our Top Picks!",
      btnText: "Explore Favorites",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-5-a.webp',
      imgSrc2: '/images/banner-5-b.webp',
    },
  ];

  const mockBottomBarContent = [
    {
      icon: GrValidate,
      title: 'Certified',
      subtitle: 'Legally registered company'
    },
    {
      icon: HiCubeTransparent,
      title: 'Transparent',
      subtitle: 'Hassle-free return policy'
    },
    {
      icon: FaShippingFast,
      title: 'Shipping',
      subtitle: 'Free, fast, and reliable'
    },
    {
      icon: GrSecure,
      title: 'Secure',
      subtitle: 'Trusted marketplace'
    },
  ];

  const mockProductLists: IProductCards[] = [
    {
      _id: 'a2edre23232332023201',
      title: 'Check Tshirts',
      price: 1200,
      quantity: 142,
      prevPrice: 1523,
      reactCount: 25,
      sizes: ['XL', 'XL', 'LG'],
      colors: ['purple', 'red', 'blue'],
      images: ['/images/banner-1-a.webp', '/images/banner-1-b.webp'],
      userIds: ['hacker']

    },
    {
      _id: 'a2edre23232332023202',
      title: 'Joggers Pants',
      price: 999,
      quantity: 142,
      prevPrice: 1000,
      reactCount: 12,
      sizes: ['LG', 'XL', 'MD'],
      colors: ['red', 'green', 'blue'],
      images: ['/images/banner-2-a.webp', '/images/banner-2-b.webp'],
      userIds: ['hacker']
    },
    {
      _id: 'a2edre23232332023203',
      title: 'Bluish Suits',
      price: 2200,
      quantity: 142,
      prevPrice: 5603,
      reactCount: 0,
      sizes: ['XL', '2XL'],
      colors: ['yellow', 'brown', 'blue'],
      images: ['/images/banner-3-a.webp', '/images/banner-3-b.webp'],
      userIds: ['hacker']
    },
    {
      _id: 'a2edre23232332023204',
      title: 'Sporty Trousers',
      price: 2300,
      quantity: 142,
      prevPrice: 3444,
      reactCount: 23,
      sizes: ['SM', 'MD'],
      colors: ['purple', 'red', 'blue'],
      images: ['/images/banner-4-a.webp', '/images/banner-4-b.webp'],
      userIds: ['hacker']
    },
    {
      _id: 'a2edre23232332023205',
      title: 'Himalayan Jacket',
      price: 950,
      quantity: 142,
      prevPrice: 1423,
      reactCount: 12,
      sizes: ['XL', 'LG'],
      colors: ['hue', 'red', 'blue'],
      images: ['/images/banner-5-a.webp', '/images/banner-5-b.webp'],
      userIds: ['hacker']
    },
    {
      _id: 'a2edre23232332023206',
      title: 'Recked White croks',
      price: 1200,
      quantity: 142,
      prevPrice: 1523,
      reactCount: 15,
      sizes: ['XL', 'SM', '2XL'],
      colors: ['purple', 'red', 'blue'],
      images: ['/images/banner-3-b.webp', '/images/banner-4-b.webp'],
      userIds: ['hacker']
    },
  ];


  return (
    <>

      <div className="w-[100vw] h-[85vh] relative flex-center">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full absolute flex-end text bottom-10 top-0 bg-black text-white text-center mb-5 bg-opacity-50 backdrop-blur-sm ">
          <div className="mb-40 px-5 w-full lg:w-[550px] md:w-[550px] flex flex-col items-center gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl mb-4 font-extrabold logoFontFamily">Embark on a Journey</h2>
              <p className="logoFontFamily text-sm">Wrap yourself in a tapestry of dreams, where threads of culture, tradition, and style intertwine. Our clothing is more than just fabric; it's a journey through the mystique of Nepal.</p>
            </div>
            <div className="flex-between gap-3">
              <button className="shopBtn mt-3 text-white bg-black flex-center text-sm">
                SHOP NOW
              </button>
              <button className="shopBtn mt-3 text-black bg-white flex-center text-sm">
                <FaRocket className='text-lg mr-4' />
                EXPLORE US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex-center">
        <div className="py-1 px-3 w-full xl:w-[75vw] flex-center">

          <div className="w-full mt-3 mb-4 flex gap-1">
            {
              mockBottomBarContent?.map((d: any, i: number) => (
                <div key={i} className={`flex border border-l-0 border-b-0 border-t-0 border-r-1 ${++i === mockBottomBarContent?.length ? 'border-r-0' : ''} bg-white flex-col flex-center sm:flex-start sm:flex-row gap-0 sm:gap-2 p sm:py-4 w-full`}>
                  <d.icon  className='text-3xl sm:text-4xl' />
                  <div>
                    <h3 className="hidden sm:flex font-semibold">{d?.title}</h3>
                    <span className="text-sm relative -top-1 hidden sm:block">{d?.subtitle}</span>
                  </div>
                </div>

              ))
            }
          </div>

          <Carousel indicators={false}>
            {
              mockCarouselContent?.map((d: IBanner, i: number) => (
                <Banner
                  key={i}
                  title={d?.title}
                  subtitle={d?.subtitle}
                  btnText={d?.btnText}
                  offerContent={d?.offerContent}
                  imgSrc1={d?.imgSrc1}
                  imgSrc2={d?.imgSrc2}
                />
              ))
            }
          </Carousel>
        </div>
      </div>

      <div className="w-[100vw] flex-center">
        <div className="py-10 px-4 w-full xl:w-[75vw]">
          <h2 className="text-2xl mb-4 font-semibold logoFontFamily">Featured Collections</h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {
              mockProductLists?.map((d: IProductCards, i: number) => (
                <ProductCards
                  key={i}
                  _id={d?._id}
                  title={d?.title}
                  sizes={d?.sizes}
                  colors={d?.colors}
                  price={d?.price}
                  quantity={d?.quantity}
                  prevPrice={d?.prevPrice}
                  reactCount={d?.reactCount}
                  images={d?.images}
                  userIds={d?.userIds}
                />
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}
