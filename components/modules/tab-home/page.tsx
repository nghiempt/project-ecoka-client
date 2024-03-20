"use client";

import React, { useEffect, useState } from "react";
import { NewBlog } from "@/components/common/new-blog";
import { URL } from "@/constant/url";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { ROUTE } from "@/constant/route";
import { FetchData } from "@/fetch/fetch_data";
import { FAKE } from "@/constant/fake";

export default function TabHome({ translate }: { translate: any }) {

  const [products, setProducts] = useState([])

  const renderHomeProduct = (catId: any) => {
    let tmp: any = []
    FAKE?.PRODUCTS?.forEach((item: any) => {
      if (item?.product_category_id.toString() === catId.toString()) {
        tmp = [...tmp, item]
      }
    })
    return tmp?.slice(0, 4)
  }

  const renderImage = (originUrl: any) => {
    if (originUrl === null || originUrl === undefined || originUrl === "") {
      return "https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
    }
    const filename = originUrl.split('/').pop();
    return 'https://ecokav2.devilop.me/api/products/images/' + filename;
  }

  const init = async () => {
    const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    setProducts(fetchProducts)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [products]);

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
      </div>

      <div className="w-3/4 flex justify-center items-center text-center mb-6">
        <h1 className="mt-10 text-[16px] text-[rgb(var(--primary-rgb))] font-medium">{translate("footer-desc")}</h1>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <Link
          href={{
            pathname: ROUTE.COLLECTION,
            query: { category: '1' },
          }}
          className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--quaternary-rgb))]"
        >
          <h1 className="w-full text-center text-[20px] font-bold bg-[rgb(var(--quaternary-rgb))]">{translate('home-home')}</h1>
        </Link>
        <div className="w-5/6 lg:w-full flex grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {renderHomeProduct('1')?.map((item: any, index: any) => (
            <div key={index} className="w-full flex flex-col justify-center items-center">
              <Link
                href={{
                  pathname: ROUTE.PRODUCT,
                  query: { productId: item?.product_id.toString() },
                }}
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 pt-2">
                  <div className="aspect-w-1 aspect-h-1">
                    <img className="object-cover rounded-md" src={item?.product_image_one} alt="Product Image" />
                  </div>
                  <div className="px-6 py-4 h-[48px]">
                    <div className="font-medium lg:text-[18px]">{item?.product_name_vi}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <Link
          href={{
            pathname: ROUTE.COLLECTION,
            query: { category: '3' },
          }}
          className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--secondary-rgb))] text-white"
        >
          <h1 className="w-full text-center text-[20px] font-bold bg-[rgb(var(--secondary-rgb))]">{translate('home-kitchen')}</h1>
        </Link>
        <div className="w-5/6 lg:w-full flex grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {
            renderHomeProduct('3')?.map((item: any, index: any) => {
              return (
                <div key={index} className="w-full flex flex-col justify-center items-center">
                  <Link
                    href={{
                      pathname: ROUTE.PRODUCT,
                      query: { productId: item?.product_id.toString() }
                    }}
                    className="w-full flex flex-col justify-center items-center"
                  >
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 pt-2">
                      <div className="aspect-w-1 aspect-h-1">
                        <img className="object-cover rounded-md" src={item?.product_image_one} alt="Product Image" />
                      </div>
                      <div className="px-6 py-4 h-[48px]">
                        <div className="font-medium lg:text-[18px]">{item?.product_name_vi}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <Link
          href={{
            pathname: ROUTE.COLLECTION,
            query: { category: '5' },
          }}
          className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--quaternary-rgb))]"
        >
          <h1 className="w-full text-center text-[20px] font-bold bg-[rgb(var(--quaternary-rgb))]">{translate('home-furniture')}</h1>
        </Link>
        <div className="w-5/6 lg:w-full flex grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {
            renderHomeProduct('5')?.map((item: any, index: any) => {
              return (
                <div key={index} className="w-full flex flex-col justify-center items-center">
                  <Link
                    href={{
                      pathname: ROUTE.PRODUCT,
                      query: { productId: item?.product_id.toString() }
                    }}
                    className="w-full flex flex-col justify-center items-center"
                  >
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 pt-2">
                      <div className="aspect-w-1 aspect-h-1">
                        <img className="object-cover rounded-md" src={item?.product_image_one} alt="Product Image" />
                      </div>
                      <div className="px-6 py-4 h-[48px]">
                        <div className="font-medium lg:text-[18px]">{item?.product_name_vi}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-lg py-4">
        <Link
          href={{
            pathname: ROUTE.COLLECTION,
            query: { category: '6' },
          }}
          className="w-full text-center py-2 text-[20px] font-bold mb-4 bg-[rgb(var(--secondary-rgb))] text-white"
        >
          <h1 className="w-full text-center text-[20px] font-bold bg-[rgb(var(--secondary-rgb))]">{translate('home-fashion')}</h1>
        </Link>
        <div className="w-5/6 lg:w-full flex grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
          {
            renderHomeProduct('6')?.map((item: any, index: any) => {
              return (
                <div key={index} className="w-full flex flex-col justify-center items-center">
                  <Link
                    href={{
                      pathname: ROUTE.PRODUCT,
                      query: { productId: item?.product_id.toString() }
                    }}
                    className="w-full flex flex-col justify-center items-center"
                  >
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 pt-2">
                      <div className="aspect-w-1 aspect-h-1">
                        <img className="object-cover rounded-md" src={item?.product_image_one} alt="Product Image" />
                      </div>
                      <div className="px-6 py-4 h-[48px]">
                        <div className="font-medium lg:text-[18px]">{item?.product_name_vi}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
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
