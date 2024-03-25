"use client";

import React, { useEffect, useState } from "react";
import { FetchData } from "@/fetch/fetch_data";
import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function TabHome({ translate }: { translate: any }) {

  const [products, setProducts] = useState([])

  const init = async () => {
    const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    setProducts(fetchProducts)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [products]);

  return (
    <div className="w-full">

      {/* header */}
      <div className="w-full bg-[rgb(24,21,19)] flex items-center justify-center">
        <div className="w-2/3 py-6 flex flex-col lg:flex-row items-center justify-end gap-4">
          <h1 className="text-[16px] text-white font-semibold">ECOKA JOINT STOCK COMPANY</h1>
          <div className="flex items-center justify-center gap-4">
            <FacebookIcon style={{ color: '#fff' }} />
            <InstagramIcon style={{ color: '#fff' }} />
            <YouTubeIcon style={{ color: '#fff' }} />
            <ShoppingBagIcon style={{ color: '#fff' }} />
            <Avatar
              alt="avatar"
              src={URL.VI_FLAG}
              sx={{ width: 16, height: 16 }}
            />
            <Avatar
              alt="avatar"
              src={URL.EN_FLAG}
              sx={{ width: 16, height: 16 }}
            />
            <Avatar
              alt="avatar"
              src={URL.JA_FLAG}
              sx={{ width: 16, height: 16 }}
            />
          </div>
        </div>
      </div>

      {/* video */}
      <div className="w-full overflow-hidden">
        <video autoPlay muted loop style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          zIndex: -1
        }}>
          <source src={URL.VIDEO} type="video/mp4" />
        </video>
        <div className="w-full flex items-start justify-center h-screen">
          <div className="w-full text-center p-5 bg-opacity-50">
            <nav className="hidden lg:block w-full mt-2">
              <a href="#" className="inline-block rounded-md text-[20px] text-[rgb(24,21,19)] font-bold px-4 py-2 bg-gray-50 mx-2 bg-opacity-70 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">Home</a>
              <a href="#" className="inline-block rounded-md text-[20px] text-[rgb(24,21,19)] font-bold px-4 py-2 bg-gray-50 mx-2 bg-opacity-70 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">Product</a>
              <a href="#" className="inline-block rounded-md text-[20px] text-[rgb(24,21,19)] font-bold px-4 py-2 bg-gray-50 mx-2 bg-opacity-70 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">About Us</a>
              <a href="#" className="inline-block rounded-md text-[20px] text-[rgb(24,21,19)] font-bold px-4 py-2 bg-gray-50 mx-2 bg-opacity-70 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">Blog</a>
              <a href="#" className="inline-block rounded-md text-[20px] text-[rgb(24,21,19)] font-bold px-4 py-2 bg-gray-50 mx-2 bg-opacity-70 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">Contact</a>
            </nav>
            <div className="w-full flex items-center justify-center my-20">
              <Avatar
                alt="avatar"
                src={URL.ECOKA_LOGO_CIRCLE}
                sx={{ width: 140, height: 140 }}
              />
            </div>
            <h1 className="text-white text-6xl font-bold mb-4">Bring Nature To Your Life</h1>
            <p className="text-white text-lg mb-4">Products made from 100% natural materials such as Water Hyacinth, Rattan, Bamboo, Macrame</p>
          </div>
        </div>
      </div>

      {/* product */}
      <div className="w-full flex flex-col items-center justify-center gap-6 mb-16 mt-[-50px] lg:mt-[0px]">
        <div className="w-3/4 bg-[rgb(var(--primary-rgb))] text-center text-white font-bold text-[20px] rounded-md py-2">HOME DECORATION</div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* product */}
      <div className="w-full bg-[rgb(var(--primary-rgb))] py-10 flex flex-col items-center justify-center gap-6">
        <div className="w-3/4 bg-white text-center text-[rgb(var(--primary-rgb))] font-bold text-[20px] rounded-md py-2">HOME DECORATION</div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-white text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-white text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* product */}
      <div className="w-full flex flex-col items-center justify-center gap-6 mb-16 pt-16">
        <div className="w-3/4 bg-[rgb(var(--primary-rgb))] text-center text-white font-bold text-[20px] rounded-md py-2">HOME DECORATION</div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* product */}
      <div className="w-full bg-[rgb(var(--primary-rgb))] py-10 flex flex-col items-center justify-center gap-6">
        <div className="w-3/4 bg-white text-center text-[rgb(var(--primary-rgb))] font-bold text-[20px] rounded-md py-2">HOME DECORATION</div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-white text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {
            ['', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-2">
                  <img src="https://ecoka-product-home.devilop.me/home%2F02%2F02_1.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-white text-[16px] font-semibold">Product Name</h1>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* blog */}
      <div className="w-full flex flex-col items-center justify-center gap-6 mb-6 pt-10">
        <div className="w-3/4 flex items-center justify-between text-left text-[rgb(24,21,19)] font-bold text-[20px] lg:text-[28px] rounded-md py-2">
          <h1>NEW BLOGS</h1>
          <button className="bg-[rgb(var(--primary-rgb))] !text-white text-[12px] lg:text-[14px] px-4 py-1 lg:py-[10px] lg:px-8 rounded-lg font-semibold">
            See All
          </button>
        </div>
        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            ['', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col items-start justify-center gap-2">
                  <img src="https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg" alt="product" className="rounded-md" />
                  <h1 className="text-[12px] font-medium">28/06/2023</h1>
                  <h1 className="text-[16px] font-semibold">ECOKA shares the journey of lifting the Vietnamese brand on Amazon at FPT University</h1>
                  <h1 className="text-[14px] font-medium bg-[rgb(var(--quaternary-rgb))] rounded-md px-2">Author: Tran My</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
