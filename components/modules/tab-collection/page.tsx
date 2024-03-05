"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { SubBanner } from "@/components/common/sub-banner";
import React, { useEffect, useState } from "react";
import { CardMedia, CircularProgress, Pagination } from "@mui/material";
import Link from "next/link";
import { limitString } from "@/utils/helper";
import { ROUTE } from "@/constant/route";
import { FetchData } from "@/fetch/fetchdata";
import { useRouter } from 'next/navigation'

export default function TabCollection({ translate }: { translate: any }) {

  const router = useRouter()

  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("1");
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  const changePage = (e: any) => {
    setPage(e.target.textContent);
  };

  const loadDataByPage = (page: number) => {
    const start = (page - 1) * 8;
    const end = page * 8;
    return filterProducts?.slice(start, end);
  };

  const filterByCategory = (productsParam: any, categoryId: any) => {
    let tmp: any = []
    productsParam?.forEach((item: any) => {
      if (item?.category_id.toString() === categoryId.toString()) {
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

  const init = async () => {
    const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    console.log(fetchProducts);
    setProducts(fetchProducts)
    setFilterProducts(filterByCategory(fetchProducts, "1"))
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [page, category, products, filterProducts]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title={translate('collection-banner')} translate={translate} />

      <div className="w-full flex flex-col mt-10 mb-20">

        <div className="mb-10 flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex gap-x-4">
            <button onClick={() => changeCategory("1")} className={`${category === "1" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold  gap-x-4 justify-center items-center`}>
              HOME DECORATION
            </button>
            <button onClick={() => changeCategory("2")} className={`${category === "2" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              KITCHEN
            </button>
          </div>
          <div className="flex gap-x-4">
            <button onClick={() => changeCategory("3")} className={`${category === "3" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              FURNITURE
            </button>
            <button onClick={() => changeCategory("4")} className={`${category === "4" ? 'bg-[rgb(var(--secondary-rgb))] !text-white' : 'bg-gray-100 !text-gray-700'} min-w-[160px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center`}>
              FASHION
            </button>
          </div>
        </div>

        {/* <div className="mb-10 flex justify-center items-center gap-x-2 lg:gap-x-4">
          <h1 className="text-[12px] lg:text-[14px] font-semibold">Category:</h1>
          <button className="bg-[rgb(var(--secondary-rgb))] !text-white text-[11px] lg:text-[12px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            MACRAME DECORATION
          </button>
          <button className="bg-gray-100 !text-gray-700 text-[11px] lg:text-[12px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            HYACINTH DECORATION
          </button>
        </div> */}

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
                      query: { product: JSON.stringify(item) }
                    }}
                    >
                      <CardMedia
                        sx={{ borderRadius: "10px" }}
                        className="h-[360px] lg:h-[300px]"
                        image={item?.product_thumbnail_one}
                        title="card"
                      />
                      <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
                        <div className="font-medium lg:text-[18px] text-justify" style={{ minHeight: '48px' }}>{limitString(translate(item?.product_name) || '', 65)}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>}
            {/* <Pagination count={Math.ceil(products.length / 10)} shape="rounded" className="mt-10" onChange={changePage} /> */}
          </div>
        </div>
      </div>

      <SubBanner isRoundedFull={true} translate={translate} />
    </div>
  );
}
