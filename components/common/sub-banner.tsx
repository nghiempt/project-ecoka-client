"use client";

import React, { useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { URL } from "@/constant/url";
import Link from "next/link";

export const SubBanner = ({ isRoundedFull, translate }: { isRoundedFull: any, translate: any }) => {

  const init = async () => { };
  
  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div
      className={`w-full h-[340px] relative text-white flex flex-col justify-center items-start ${isRoundedFull ? "rounded-lg rounded-lg" : "rounded-br-lg rounded-bl-lg"
        }`}
      style={{
        backgroundImage: `url(${URL.SECONDARY_BANNER})`,
        backgroundSize: "cover",
      }}
    >
      <div className="pl-4 lg:pl-20">
        <h1 className="text-[24px] lg:text-[40px] font-bold">{translate('sub-banner-01')}</h1>
        <h1 className="text-[24px] lg:text-[40px] font-bold">{translate('sub-banner-02')}</h1>
        <Link href={{
          pathname: '/collection'
        }}>
          <button className="bg-white !text-gray-700 text-[12px] lg:text-[15px] py-2 px-5 mt-4 rounded-lg font-semibold flex justify-center items-center" >
            {translate('sub-banner-03')} <ArrowOutwardIcon className="ml-2" fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
};
