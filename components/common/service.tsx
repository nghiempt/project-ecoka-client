"use client";

import React, { useEffect } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export const Service = ({ translate }: { translate: any }) => {
  
  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-full">
      <div className="px-10 items-center text-center py-10 grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-0 bg-[#FBFBF4] rounded-lg">
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <LocalShippingOutlinedIcon fontSize="large" />
          </div>
          <h1 className="text-[14px] text-gray-700 font-bold mb-2 mt-4">
            {translate('service-01')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-02')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-03')}
          </h1>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <ReceiptLongOutlinedIcon fontSize="large" />
          </div>
          <h1 className="text-[14px] text-gray-700 font-bold mb-2 mt-4">
            {translate('service-04')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-05')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-06')}
          </h1>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <HeadsetMicOutlinedIcon fontSize="large" />
          </div>
          <h1 className="text-[14px] text-gray-700 font-bold mb-2 mt-4">
            {translate('service-07')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-08')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-09')}
          </h1>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <Inventory2OutlinedIcon fontSize="large" />
          </div>
          <h1 className="text-[14px] text-gray-700 font-bold mb-2 mt-4">
            {translate('service-10')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-11')}
          </h1>
          <h1 className="text-[12px] text-[rgb(var(--primary-rgb))]">
            {translate('service-12')}
          </h1>
        </div>
      </div>
    </div>
  );
};
