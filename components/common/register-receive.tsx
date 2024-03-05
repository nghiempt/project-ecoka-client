"use client";

import React, { useEffect } from "react";
import { URL } from "@/constant/url";
import EmailIcon from "@mui/icons-material/Email";

export const RegisterReceive = ({ translate }: { translate: any }) => {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div
      className="w-full h-[340px] relative text-white flex flex-col justify-center items-center rounded-lg rounded-lg"
      style={{
        backgroundImage: `url(${URL.BANNER_02})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-[24px] lg:text-[40px] font-bold">{translate("register-01")}</h1>
      <h1 className="text-[12px] lg:text-[16px]">
        {translate("register-02")}
      </h1>

      <div className="flex justify-center items-center mt-4">
        <div className="bg-white flex rounded-lg pl-2 pr-10 mr-2">
          <span className="flex items-center pl-1">
            <EmailIcon fontSize="small" sx={{ color: "#000" }} />
          </span>
          <input
            type="text"
            placeholder={translate("register-03")}
            className="pl-2 py-2 w-full bg-white placeholder-gray-400 font-medium text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
          />
        </div>
        <button className="bg-[rgb(var(--tertiary-rgb))] !text-white text-[12px] lg:text-[14px] py-[10px] px-8 rounded-lg font-semibold">
          {translate("register-04")}
        </button>
      </div>
    </div>
  );
};
