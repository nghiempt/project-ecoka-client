"use client";

import React, { useEffect } from "react";
import { URL } from "@/constant/url";

export const PreBanner = ({ title, translate }: { title: any, translate: any }) => {
  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div
      className="w-full h-[280px] relative text-white flex justify-center items-center rounded-lg"
      style={{
        backgroundImage: `url(${URL.BANNER_01})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-[280px] text-white flex flex-col justify-center items-center rounded-lg bg-gray-600 opacity-60">
        <h1 className="mt-6 lg:mt-0 text-[30px] lg:text-[50px] font-black">{title}</h1>
        <div className="invisible lg:visible flex lg:mt-2">
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">{translate('pre-banner-01')}</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">|</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">{translate('pre-banner-02')}</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">|</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">{translate('pre-banner-03')}</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">|</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">{translate('pre-banner-04')}</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">|</h1>
          <h1 className="text-[12px] lg:text-[16px] font-medium mr-4">Contact</h1>
        </div>
      </div>
    </div>
  );
};
