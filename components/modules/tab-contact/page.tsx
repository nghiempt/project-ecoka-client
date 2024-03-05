"use client";

import { PreBanner } from "@/components/common/pre-banner";
import React from "react";
import CustomMap from "./map";

export default function TabContact({ translate }: { translate: any }) {
  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <PreBanner title="CONTACT" translate={translate} />
      <h1 className="mt-10 text-[18px] text-gray-700 font-bold">Hãy liên hệ với chúng tôi thông qua thông tin bên dưới</h1>
      <div className="flex flex-col lg:flex-row gap-x-10 mt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] flex gap-2">Tên Công Ty: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">Ecoka JSC</h1></h1>
          <h1 className="text-[16px] flex gap-2">Địa chỉ: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">Ấp 2, xã Vĩnh Thuận Đông, huyện Long Mỹ, tỉnh Hậu Giang</h1></h1>
          <h1 className="text-[16px] flex gap-2">Shopee: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">https://shopee.vn/quangchanchan</h1></h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] flex gap-2">Số Điện Thoại: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">0973.998.068</h1></h1>
          <h1 className="text-[16px] flex gap-2">Facebook: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">https://www.facebook.com/ecoka.vn</h1></h1>
          <h1 className="text-[16px] flex gap-2">Lazada: <h1 className="font-semibold text-[rgb(var(--primary-rgb))]">https://lzd.zone/9T3K</h1></h1>
        </div>
      </div>
      <div className="h-[60px]"></div>
      <CustomMap />
    </div>
  );
}
