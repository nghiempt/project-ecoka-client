"use client";

import React, { useEffect } from "react";
import { NewBlog } from "@/components/common/new-blog";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { URL } from "@/constant/url";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function TabHome({ translate }: { translate: any }) {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center lg:px-0">
      
      <div className="w-full relative text-white flex flex-col justify-start items-center lg:rounded-lg">
        <div style={{ position: 'relative', width: '100%', paddingTop: '42.85%' }}>
          <video
            autoPlay
            loop
            muted
            className="lg:rounded-lg"
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
            src={URL.VIDEO}
          />
        </div>
        
        <div className="z-10 flex flex-col justify-center items-center" style={{
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}>
          <h1 className="lg:text-[60px] font-bold">{translate('home-banner-02')}</h1>
          <h1 className="lg:text-[60px] font-bold mb-6 lg:mb-0">{translate('home-banner-03')}</h1>
          <h2 className="hidden lg:block lg:text-[18px] font-bold mt-4">
            {translate('home-banner-04')}
          </h2>
          <h3 className="hidden lg:block lg:text-[18px] font-bold mb-8">
            {translate('home-banner-05')}
          </h3>
          <Link href={{
            pathname: ROUTE.COLLECTION
          }}>
            <button className="bg-white !text-gray-700 text-[10px] lg:text-[15px] py-1 px-2 lg:px-5 rounded-lg font-semibold flex justify-center items-center" >
              {translate('home-banner-06')} <ArrowOutwardIcon className="ml-2" fontSize="small" />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center text-center mb-6">
        <h1 className="mt-10 text-[16px] text-[rgb(var(--primary-rgb))] font-medium">{translate("footer-desc")}</h1>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <h1 className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--quaternary-rgb))]">HOME DECORATION</h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <h1 className="w-full text-center py-2 text-white text-[20px] font-bold mb-4 bg-[rgb(var(--secondary-rgb))]">KITCHEN</h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <h1 className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--quaternary-rgb))]">FURNITURE</h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <h1 className="w-full text-center py-2 text-white text-[20px] font-bold mb-4 bg-[rgb(var(--secondary-rgb))]">FASHION</h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
          <div className="w-2/4 lg:w-1/2 flex flex-col justify-center items-center">
            <div
              className="w-full h-[260px] flex flex-col items-start justify-end border-t-4 border-b-4 border-[rgb(var(--secondary-rgb))] rounded-lg"
              style={{
                backgroundImage: `url(https://ecoka.devilop.me/dev_product.jpg)`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
              <div className="font-medium lg:text-[18px]" style={{ minHeight: '48px' }}>Product Name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <NewBlog translate={translate} />
      </div>

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
    </div>
  );
}
