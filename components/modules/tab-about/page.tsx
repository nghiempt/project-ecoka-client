"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { RegisterReceive } from "@/components/common/register-receive";
import { Service } from "@/components/common/service";
import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import React from "react";

export default function TabAbout({ translate }: { translate: any }) {
  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title={translate('about-banner')} translate={translate}/>
      <div className="w-full items-center text-center py-10 lg:px-40">
        <div>
          <div className="text-center mb-20">
            <h1 className="text-[24px] lg:text-[40px] font-bold">{translate('about-01')}</h1>
            <h1 className="text-[13px] lg:text-[14px] text-[rgb(var(--primary-rgb))] mt-2">
              {translate('about-02')}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-10 mb-16 items-center">
            <div className="lg:col-span-4 lg:w-full lg:h-full border border-[5px] border-[rgb(var(--secondary-rgb))] flex justify-center items-center rounded-lg">
              <Avatar
                alt="avatar"
                src={URL.ECOKA_LOGO_CIRCLE}
                sx={{ width: 140, height: 140 }}
              />
            </div>
            <div className="lg:col-span-6 text-left text-justify mt-6 lg:mt-0 lg:ml-10">
              <h1 className="text-[16px] font-bold mb-4">
                {translate('about-03')}
              </h1>
              <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                {translate('about-04')}
              </h1>
              <br />
              <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                {translate('about-05')}
              </h1>
              <br />
              <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                {translate('about-06')}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-center mt-10">
            <div className="lg:col-span-6 text-left text-justify">
              <div className="mb-10">
                <h1 className="text-[16px] font-bold mb-4">
                  {translate('about-07')}
                </h1>
                <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                  {translate('about-08')}
                </h1>
                <br />
                <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                  {translate('about-09')}
                </h1>
                <br />
                <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                  {translate('about-10')}
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="text-[16px] font-bold mb-4"></h1>
                {translate('about-11')}
                <h1 className="text-[14px] text-[rgb(var(--primary-rgb))]">
                  {translate('about-12')}
                </h1>
                <br />
                <h1 className="text-[16px] text-[rgb(var(--primary-rgb))] font-bold">
                  {translate('about-13')}
                </h1>
              </div>
            </div>
            <div className="lg:col-span-4 lg:w-full lg:h-full border border-[5px] border-[rgb(var(--secondary-rgb))] flex justify-center items-center rounded-lg">
              <Avatar
                alt="avatar"
                src={URL.ECOKA_LOGO_CIRCLE}
                sx={{ width: 140, height: 140 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px]"></div>
      <RegisterReceive translate={translate}/>
      {/* <div className="h-[40px]"></div> */}
      {/* <Service translate={translate} /> */}
    </div>
  );
}
