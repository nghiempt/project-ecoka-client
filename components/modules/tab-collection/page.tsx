"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { ProductPopular } from "@/components/common/product-popular";
import { RegisterReceive } from "@/components/common/register-receive";
import { Service } from "@/components/common/service";
import { SubBanner } from "@/components/common/sub-banner";
import React, { useEffect } from "react";
import { CardMedia, Chip, Pagination } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FAKE } from "@/constant/fake";
import Link from "next/link";
import { convertStringToMoney, limitString } from "@/utils/helper";

export default function TabCollection({ translate }: { translate: any }) {

  const [page, setPage] = React.useState(1);

  const changePage = (e: any) => {
    setPage(e.target.textContent);
  };

  const loadDataByPage = (page: number) => {
    const start = (page - 1) * 8;
    const end = page * 8;
    return FAKE.PRODUCTS.slice(start, end);
  };

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [page]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title={translate('collection-banner')} translate={translate} />
      <div className="w-full flex flex-col mt-10 mb-20">

        <div className="mb-10 flex justify-center items-center gap-x-1 lg:gap-x-4">
          <button className="bg-[rgb(var(--secondary-rgb))] !text-white text-[12px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            HOME DECORATION
          </button>
          <button className="bg-gray-100 !text-gray-700 text-[12px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            KITCHEN
          </button>
          <button className="bg-gray-100 !text-gray-700 text-[12px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            FURNITURE
          </button>
          <button className="bg-gray-100 !text-gray-700 text-[12px] lg:text-[16px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            FASHION
          </button>
        </div>

        <div className="mb-10 flex justify-center items-center gap-x-2 lg:gap-x-4">
          <h1 className="text-[12px] lg:text-[14px] font-semibold">Category:</h1>
          <button className="bg-[rgb(var(--secondary-rgb))] !text-white text-[11px] lg:text-[12px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            MACRAME DECORATION
          </button>
          <button className="bg-gray-100 !text-gray-700 text-[11px] lg:text-[12px] py-2 px-2 lg:px-4 rounded-lg font-semibold flex justify-center items-center" >
            HYACINTH DECORATION
          </button>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="lg:w-full flex flex-col justify-center items-center">
            <div className="lg:w-full flex grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center">
              {loadDataByPage(page)?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="cursor-pointer border border-gray-200 p-4 rounded-md"
                  style={{ flex: "25%" }}
                >
                  <Link href={{
                    pathname: '/collection/product',
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
                      <div className="font-medium lg:text-[14px] text-justify" style={{ minHeight: '48px' }}>{limitString(translate(item?.product_name) || '', 65)}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Pagination count={Math.ceil(FAKE.PRODUCTS.length / 10)} shape="rounded" className="mt-10" onChange={changePage} />
          </div>

        </div>
      </div>
      <SubBanner isRoundedFull={true} translate={translate} />
    </div>
  );
}
