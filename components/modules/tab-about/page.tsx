"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { RegisterReceive } from "@/components/common/register-receive";
import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import React from "react";

export default function TabAbout({ translate }: { translate: any }) {
  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      {/* <PreBanner title={translate('about-banner')} translate={translate} /> */}

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
          src={URL.VIDEO_ABOUT}
        />
      </div>

      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="aspect-w-1 aspect-h-1 text-justify">
          <h1 className="text-[22px] lg:text-[32px] font-bold">{translate('about-01')}</h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))] mt-2">
            {translate('about-02')}
          </h1>
          <h1 className="text-[22px] font-bold mb-4 mt-4">
            {translate('about-03')}
          </h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-04')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-05')}
          </h1>
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-md" src="https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg" alt="Product Image" />
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-md" src="https://images2.thanhnien.vn/528068263637045248/2023/10/18/z47955313726042da29c0da7f087866adbd86aac0c367d-16976339415291235375594.jpg" alt="Product Image" />
        </div>
        <div className="aspect-w-1 aspect-h-1 text-justify">
          <h1 className="text-[22px] font-bold mb-4">
            {translate('about-07')}
          </h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-08')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-09')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-10')}
          </h1>
        </div>
      </div>

      <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="aspect-w-1 aspect-h-1 text-justify">
          <h1 className="text-[22px] font-bold mb-4">
            {translate('about-14')}
          </h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-15')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-16')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-17')}
          </h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-18')}
          </h1>
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-19')}
          </h1>
          <br />
          <h1 className="text-[16px] text-[rgb(var(--primary-rgb))]">
            {translate('about-20')}
          </h1>
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-md" src={URL.ABOUT_03} alt="Product Image" />
        </div>
      </div>

      <div className="w-full mt-6 grid grid-cols-2 gap-6">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-md" src={URL.ABOUT_04} alt="Product Image" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-md" src={URL.ABOUT_05} alt="Product Image" />
        </div>
      </div>

      <div className="h-[60px]"></div>
      <RegisterReceive translate={translate} />
    </div>
  );
}
