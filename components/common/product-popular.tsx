"use client";

import React, { useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CardMedia } from "@mui/material";
import Link from "next/link";
import { FAKE } from "@/constant/fake";
import { convertStringToMoney } from "@/utils/helper";

export const ProductPopular = ({ translate }: { translate: any }) => {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <div>
          <h1 className="text-[20px] lg:text-[24px] text-gray-700 font-bold">
            {translate('popular-01')}
          </h1>
          <h6 className="lg:text-[14px] text-[rgb(var(--primary-rgb))] hidden lg:block">
            {translate('popular-02')}
          </h6>
        </div>
        <Link href={{
          pathname: '/collection'
        }}>
          <button className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center" >
            {translate('popular-03')} <ArrowOutwardIcon className="ml-1" fontSize="small" />
          </button>
        </Link>
      </div>

      <div className="lg:w-full grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 px-4">
        {FAKE.PRODUCTS?.slice(0, 4)?.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
          >
            <Link href={{
              pathname: '/collection/product',
              query: { product: JSON.stringify(item) }
            }}
            >
              <CardMedia
                sx={{ height: 350, borderRadius: "10px" }}
                image={item?.product_thumbnail_one}
                title="card"
              />
              <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
                <div className="font-medium lg:text-[16px]" style={{ minHeight: '48px' }}>{item?.product_name}</div>
              </div>
              <div className="">
                <div className="font-bold lg:text-[14px] text-[rgb(var(--primary-rgb))]">
                  {convertStringToMoney(item?.product_price.toString())} VND
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
