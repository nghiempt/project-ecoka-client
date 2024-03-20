"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { SubBanner } from "@/components/common/sub-banner";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { limitString } from "@/utils/helper";
import { ROUTE } from "@/constant/route";
import { FetchData } from "@/fetch/fetch_data";
import { useRouter, useSearchParams } from 'next/navigation'
import { FAKE } from "@/constant/fake";

export default function TabCollection({ translate }: { translate: any }) {

  const router = useRouter()
  const searchParams = useSearchParams()

  const [category, setCategory] = React.useState("1");
  const [products, setProducts] = useState<any>([])
  const [filterProducts, setFilterProducts] = useState([])

  const filterByCategory = (productsParam: any, categoryId: any) => {
    console.log(productsParam);
    let tmp: any = []
    productsParam?.forEach((item: any) => {
      if (item?.product_category_id.toString() === categoryId.toString()) {
        tmp = [...tmp, item]
      }
    })
    return tmp
  }

  const changeCategory = (categoryId: any) => {
    setCategory(categoryId)
    setFilterProducts(filterByCategory(products, categoryId))
    router.refresh()
  }

  const renderImage = (originUrl: any) => {
    if (originUrl === null || originUrl === undefined || originUrl === "") {
      return "https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
    }
    const filename = originUrl.split('/').pop();
    return 'https://ecokav2.devilop.me/api/products/images/' + filename;
  }

  const renderSelectSubCategory = () => {
    switch (category.toString()) {
      case '1':
        return (
          <select className="cursor-pointer" onChange={(e) => {
            setFilterProducts(filterByCategory(products, e.target.value))
            router.refresh()
          }}>
            <option value="1">MACRAME DECORATION</option>
            <option value="2">HYACINTH DECORATION</option>
          </select>
        )
      case '3':
        return (
          <select className="cursor-pointer" onChange={(e) => {
            setFilterProducts(filterByCategory(products, e.target.value))
            router.refresh()
          }}>
            <option value="3">MACRAME FOR KITCHEN</option>
            <option value="4">HYACINTH FOR KITCHEN</option>
          </select>
        )
      case '5':
        return (
          null
        )
      case '6':
        return (
          <select className="cursor-pointer" onChange={(e) => {
            setFilterProducts(filterByCategory(products, e.target.value))
            router.refresh()
          }}>
            <option value="6">MACRAME FASHION</option>
            <option value="7">HYACINTH FASHION</option>
          </select>
        )
    }
  }

  const init = async () => {
    // const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    setCategory(searchParams.get('category') || '1')
    setProducts(FAKE.PRODUCTS)
    setFilterProducts(filterByCategory(FAKE.PRODUCTS, searchParams.get('category') || '1'))
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [category, products, filterProducts]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title={translate('collection-banner')} translate={translate} />

      <div className="w-full flex flex-col mt-10 mb-20">

        <div className="mb-10 flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex gap-x-4">
            <button onClick={() => changeCategory("1")} className={`${category === "1" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold  gap-x-4 justify-center items-center`}>
              {translate('home-home')}
            </button>
            <button onClick={() => changeCategory("3")} className={`${category === "3" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              {translate('home-kitchen')}
            </button>
          </div>
          <div className="flex gap-x-4">
            <button onClick={() => changeCategory("5")} className={`${category === "5" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              {translate('home-furniture')}
            </button>
            <button onClick={() => changeCategory("6")} className={`${category === "6" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              {translate('home-fashion')}
            </button>
          </div>
        </div>

        <div className="mb-10 flex justify-center items-center gap-x-2 lg:gap-x-4">
          {renderSelectSubCategory()}
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            {products.length <= 0 ? <div className="w-full text-center text-[20px] mt-6"><CircularProgress className="mt-10" /></div> : filterProducts.length === 0 ? <div className="w-full text-center text-[20px] mt-10">No data in this category</div> :
              <div className="w-full flex grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center">
                {filterProducts?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="cursor-pointer border border-gray-200 px-4 pt-4 rounded-md"
                  >
                    <Link href={{
                      pathname: ROUTE.PRODUCT,
                      query: { productId: item?.product_id.toString() }
                    }}
                    >
                      <div className="max-w-sm rounded-lg overflow-hidden p-2">
                        <div className="aspect-w-1 aspect-h-1">
                          <img className="object-cover rounded-md" src={item?.product_image_one} alt="Product Image" />
                        </div>
                      </div>
                      <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
                        <div className="font-medium text-[16px] lg:text-[18px] text-justify" style={{ minHeight: '48px' }}>{limitString(item?.product_name_vi || '', 65)}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>}
          </div>
        </div>
      </div>

      <SubBanner isRoundedFull={true} translate={translate} />
    </div>
  );
}
