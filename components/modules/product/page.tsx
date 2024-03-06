"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Filter7OutlinedIcon from "@mui/icons-material/Filter7Outlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSearchParams } from "next/navigation";
import { convertStringToMoney, increaseMoney } from "@/utils/helper";
import { SubBanner } from "@/components/common/sub-banner";
import { FetchData } from "@/fetch/fetchdata";

export default function Product({ translate }: { translate: any }) {

  const [product, setProduct] = useState<any>(null);
  const [thumbnails, setThumbnails] = useState<any>([]);
  const [currentThumbnail, setCurrentThumbnail] = useState<any>("");

  const searchParams = useSearchParams()

  const init = async () => {
    const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    let foundItem: any = fetchProducts?.find((item: any) => item?.product_id.toString() === (searchParams.get('productId') || '1'));
    setProduct(foundItem)
    let tmp: any = []
    tmp = [...tmp, foundItem?.product_thumbnail_one]
    tmp = [...tmp, foundItem?.product_thumbnail_two]
    tmp = [...tmp, foundItem?.product_thumbnail_three]
    tmp = [...tmp, foundItem?.product_thumbnail_four]
    tmp = [...tmp, foundItem?.product_thumbnail_five]
    tmp = [...tmp, foundItem?.product_thumbnail_six]
    setCurrentThumbnail(foundItem?.product_thumbnail_one)
    setThumbnails(tmp)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [thumbnails, product, currentThumbnail]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title={translate('product-banner')} translate={translate} />
      <div></div>
      <div className="lg:w-full mt-10">
        <div className="lg:w-full flex flex-col lg:flex-row gap-x-10">
          <div className="lg:w-1/2 flex flex-col justify-center items-center mb-10 lg:mb-0">
            {/* <div
              className="w-[400px] h-[400px] lg:w-[512px] lg:h-[512px] rounded-lg"
              style={{
                backgroundImage: `url(${currentThumbnail})`,
                backgroundSize: "cover",
              }}
            ></div> */}

            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-2">
              <div className="aspect-w-1 aspect-h-1">
                <img className="object-cover rounded-md" src={currentThumbnail} alt="Product Image" />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 lg:gap-y-0 lg:gap-x-4">
              {thumbnails?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="w-[72px] h-[72px] rounded-lg cursor-pointer"
                  onClick={() => setCurrentThumbnail(item)}
                  style={{
                    backgroundImage: `url(${item})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[22px] font-bold">
              {translate(product?.product_nameVI)}
            </h1>
            <h1 className="text-[12px] mt-2 mb-4">{translate('product-01')}: {product?.product_descriptionVI}</h1>
            <div className="flex items-center">
              <h1 className="text-[28px] font-bold mr-4">{convertStringToMoney(product?.product_price.toString() || "")} VND</h1>
              <button className="bg-red-500 rounded-lg text-white text-[12px] px-4 py-1">
                {translate('product-02')} 10%
              </button>
            </div>
            <div className="flex mt-4 items-center">
              <h1 className="text-[12px] mr-4">{translate('product-03')}:</h1>
              <button className="bg-[rgb(var(--tertiary-rgb))] rounded-lg text-white text-[12px] px-4 py-1 border border-[rgb(var(--tertiary-rgb))] mr-2">
                {product?.product_id}
              </button>
            </div>
            <div className="flex mt-4 items-center">
              <h1 className="text-[12px] mr-4">{translate('product-05')}:</h1>

              <div className="border border-gray-300 px-1 rounded-lg">
                <button className="w-[40px] text-[20px]">-</button>
                <input type="text" value="1" className="w-[30px] ml-[20px]" />
                <button className="w-[40px] text-[20px]">+</button>
              </div>
            </div>
            <div className="my-4"><Divider /></div>
            <div className="w-full flex justify-center items-center ">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex justifty-center items-center">
                  <VerifiedUserOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">{translate('product-06')}</h1>
                </div>
                <div className="flex justifty-center items-center">
                  <LocalShippingOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">{translate('product-07')}</h1>
                </div>
                <div className="flex justifty-center items-center">
                  <HeadphonesOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">{translate('product-08')}</h1>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex justifty-center items-center">
                  <KeyboardReturnOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    {translate('product-09')}
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <Inventory2OutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    {translate('product-10')}
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <Filter7OutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">{translate('product-11')}</h1>
                </div>
              </div>
            </div>
            <div className="my-4"><Divider /></div>
            <div className="w-full flex gap-x-[4px]">
              <div className="w-1/2 flex flex-col gap-y-[4px]">
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">{translate('product-12')}</h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        {translate('product-13')}
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      {translate('product-14')} 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">{translate('product-15')}: 10/04/2024</h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">{translate('product-16')}: A87TYRT55</h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        {translate('product-17')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">{translate('product-12')}</h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        {translate('product-13')}
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      {translate('product-14')} 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">{translate('product-15')}: 10/04/2024</h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">{translate('product-16')}: A87TYRT55</h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        {translate('product-17')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-y-[4px]">
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">{translate('product-12')}</h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        {translate('product-13')}
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      {translate('product-14')} 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">{translate('product-15')}: 10/04/2024</h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">{translate('product-16')}: A87TYRT55</h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        {translate('product-17')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">{translate('product-12')}</h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        {translate('product-13')}
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      {translate('product-14')} 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">{translate('product-15')}: 10/04/2024</h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">{translate('product-16')}: A87TYRT55</h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        {translate('product-17')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
      <SubBanner isRoundedFull={true} translate={translate} />
    </div>
  );
}
