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
    const start = (page - 1) * 9;
    const end = page * 9;
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
        <div className="w-full flex flex-col lg:flex-row gap-y-2 justify-center items-center pt-4 pb-10">
          <div className="lg:w-1/4">
            <h1 className="text-[22px] font-semibold">{translate('collection-01')}</h1>
          </div>
          <div className="lg:w-3/4 flex items-center">
            <p className="mr-2">{translate('collection-02')}:</p>
            {/* <Chip
              label="Giá: Tăng Dần"
              variant="outlined"
              onDelete={() => { }}
            />
            <div className="ml-2"></div>
            <Chip
              label="Chất Liệu: Lục Bình"
              variant="outlined"
              onDelete={() => { }}
            /> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-start">
          <div className="w-1/4 hidden lg:block">
            <div className="flex flex-col">
              <h1 className="text-[16px] font-semibold">{translate('collection-03')}</h1>
              <div className="ml-2">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={translate('collection-06')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={translate('collection-07')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={translate('collection-08')}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-[16px] font-semibold">{translate('collection-04')}</h1>
              <div className="ml-2">
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={translate('collection-09')} />
                </FormGroup>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-[16px] font-semibold">{translate('collection-05')}</h1>
              <div className="ml-2">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={`${translate('collection-10')} 1.000.000 VND`}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1.000.000 VND - 2.000.000 VND"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="2.000.000 VND - 3.000.000 VND"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="3.000.000 VND - 4.000.000 VND"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={`${translate('collection-11')} 4.000.000 VND`}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 flex flex-col justify-center items-center">
            <div className="lg:w-full flex flex-wrap gap-[20px] justify-center items-center">
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
                      className="h-[180px] lg:h-[350px]"
                      image={item?.product_thumbnail_one}
                      title="card"
                    />
                    <div className="lg:pb-2 pt-4 lg:pt-4" style={{ minHeight: '48px' }}>
                      <div className="font-medium lg:text-[16px]" style={{ minHeight: '48px' }}>{limitString(translate(item?.product_name) || '', 70)}</div>
                    </div>
                    <div className="">
                      <div className="font-bold text-[14px] text-[rgb(var(--primary-rgb))]">
                        {convertStringToMoney(item?.product_price.toString())} VND
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Pagination count={Math.ceil(FAKE.PRODUCTS.length / 10)} shape="rounded" className="mt-10" onChange={changePage} />
          </div>

        </div>
      </div>
      <Service translate={translate} />
      <div className="h-[60px]"></div>
      <ProductPopular translate={translate} />
      <div className="h-[60px]"></div>
      <SubBanner isRoundedFull={true} translate={translate} />
      <div className="h-[60px]"></div>
      <RegisterReceive translate={translate} />
    </div>
  );
}
