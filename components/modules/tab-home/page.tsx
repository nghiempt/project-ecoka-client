"use client";

import React, { useEffect } from "react";
import { ProductPopular } from "@/components/common/product-popular";
import { SubBanner } from "@/components/common/sub-banner";
import { NewBlog } from "@/components/common/new-blog";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Service } from "@/components/common/service";
import { URL } from "@/constant/url";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { FAKE } from "@/constant/fake";
import Link from "next/link";

export default function TabHome({ translate }: { translate: any }) {

  const renderAlbumProduct = (index: any) => {
    switch (index) {
      case 0:
        return URL.PRODUCT_THUMBNAL
      case 1:
        return URL.PRODUCT_THUMBNAL
      case 2:
        return URL.PRODUCT_THUMBNAL
      case 3:
        return URL.PRODUCT_THUMBNAL
      default:
        return URL.PRODUCT_THUMBNAL
    }
  }

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <div className="w-full relative text-white flex flex-col justify-start items-center py-10 rounded-lg">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            borderRadius: "10px",
          }}
          src={URL.VIDEO}
        />
        <div className="z-10 flex flex-col justify-center items-center">
          <h1 className="lg:text-[60px] font-bold">{translate('home-banner-01')}</h1>
          <h1 className="lg:text-[60px] font-bold">{translate('home-banner-02')}</h1>
          <h1 className="lg:text-[60px] font-bold">{translate('home-banner-03')}</h1>
          <h2 className="invisible lg:visible lg:text-[18px] font-bold mt-4">
            {translate('home-banner-04')}
          </h2>
          <h3 className="invisible lg:visible lg:text-[18px] font-bold mb-8">
            {translate('home-banner-05')}
          </h3>
          <Link href={{
            pathname: '/collection'
          }}>
            <button className="bg-white !text-gray-700 text-[10px] lg:text-[15px] py-1 px-2 lg:px-5 rounded-lg font-semibold flex justify-center items-center" >
              {translate('home-banner-06')} <ArrowOutwardIcon className="ml-2" fontSize="small" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 p-4 justify-center my-10">
        {FAKE.CATEGORIES?.map(
          (category: any, index: any) => (
            <button
              key={index}
              className="border border-gray-300 rounded-lg px-6 py-2 lg:text-[16px] font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Link href={{
                pathname: '/collection'
              }}>
                {category?.category_name}
              </Link>
            </button>
          )
        )}
      </div>
      <ProductPopular translate={translate} />
      <div className="w-full items-center text-center py-10 my-20">
        <h1 className="text-[20px] lg:text-[24px] text-gray-700 font-bold">
          {translate('reason-01')}
        </h1>
        <div className="flex justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <div className="p-3 rounded-full bg-[rgb(var(--quaternary-rgb))]">
              <LocalShippingOutlinedIcon fontSize="large" />
            </div>
            <h1 className="text-[18px] text-gray-700 font-bold mb-2 mt-4">
              {translate('reason-02')}
            </h1>
            <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('reason-03')}
            </h1>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <div className="p-3 rounded-full bg-[rgb(var(--quaternary-rgb))]">
              <PermIdentityIcon fontSize="large" />
            </div>
            <h1 className="text-[18px] text-gray-700 font-bold mb-2 mt-4">
              {translate('reason-04')}
            </h1>
            <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('reason-05')}
            </h1>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <div className="p-3 rounded-full bg-[rgb(var(--quaternary-rgb))]">
              <StarOutlineIcon fontSize="large" />
            </div>
            <h1 className="text-[18px] text-gray-700 font-bold mb-2 mt-4">
              {translate('reason-06')}
            </h1>
            <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('reason-07')}
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:w-full bg-[#64694C] rounded-tr-lg rounded-tl-lg mt-10">
        <div className="p-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[20px] lg:text-[24px] text-white font-bold">{translate('album-01')}</h1>
              <h6 className="text-[14px] text-white hidden">
                {translate('album-02')}
              </h6>
            </div>
            <Link href={{
              pathname: '/collection'
            }}>
              <button className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center" >
                {translate('album-03')} <ArrowOutwardIcon className="ml-1" fontSize="small" />
              </button>
            </Link>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row overflow-x-auto lg:gap-x-[20px] lg:h-[310px] unshowscrollbar">
            {[...FAKE.CATEGORIES, ...FAKE.CATEGORIES.slice(0,1)]?.map((item: any, index: any) => (
              <div
                key={index}
                className="relative flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg w-[400px] h-[400px] lg:w-[300px] lg:h-[260px]"
                style={{
                  backgroundImage: `url(${renderAlbumProduct(index)})`,
                  backgroundSize: "cover",
                }}
              >
                <button className="ml-4 mb-4 bg-white !text-gray-700 text-[14px] py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg active:shadow-xs transition-shadow duration-200 ease-in-out">
                  {item?.category_name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubBanner isRoundedFull={false} translate={translate} />
      <NewBlog translate={translate} />
      <div className="w-full items-center text-center py-10 mt-10">
        <div className="flex justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E1DEDB] rounded-md p-5">
          <div className="col-span-1 lg:border-r border-[#E1DEDB] pb-10">
            <h1 className="text-[24px] text-gray-700 font-bold mb-[10px] mt-[30px]">
              {translate('contact-01')}
            </h1>
            <h6 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('contact-02')}
            </h6>
            <h6 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('contact-03')}
            </h6>
            <div className="flex justify-center items-center mt-5">
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-10 h-10 mx-2 flex justify-center cursor-pointer items-center">
                <FacebookIcon fontSize="medium" sx={{ color: "#fff" }} />
              </div>
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-10 h-10 mx-2 flex justify-center cursor-pointer items-center">
                <TwitterIcon fontSize="medium" sx={{ color: "#fff" }} />
              </div>
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-10 h-10 mx-2 flex justify-center cursor-pointer items-center">
                <InstagramIcon fontSize="medium" sx={{ color: "#fff" }} />
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-10 pb-10">
            <h1 className="text-[24px] text-gray-700 font-bold mb-[10px] mt-[30px]">
              {translate('contact-04')}
            </h1>
            <h6 className="text-[14px] text-[rgb(var(--primary-rgb))]">
              {translate('contact-05')}
            </h6>
            <div className="flex justify-center items-center mt-5">
              <div className="flex border border-gray-300 rounded-lg pl-2 pr-10 mr-2">
                <span className="flex items-center pl-1">
                  <EmailIcon fontSize="small" />
                </span>
                <input
                  type="text"
                  placeholder={translate('contact-06')}
                  className="pl-2 py-2 w-full placeholder-gray-400 font-medium text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
              <button className="bg-[rgb(var(--tertiary-rgb))] !text-white text-[12px] lg:text-[14px] py-[10px] px-4 lg:px-8 rounded-lg font-semibold">
                {translate('contact-07')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Service translate={translate} />
    </div>
  );
}
