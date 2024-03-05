"use client";

import { Avatar, Divider } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import PortraitIcon from '@mui/icons-material/Portrait';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { URL } from "@/constant/url";
import Link from "next/link";

export default function SignUp({ translate }: { translate: any }) {
  return (
    <div className="lg:w-3/4 flex justify-center items-center">
      <div className="items-center text-center px-6 lg:py-6">
        <div className="flex items-center text-center grid grid-cols-1 lg:grid-cols-10 gap-x-10">
          <div className="hidden lg:block col-span-4 w-full p-6 border border-[5px] border-[rgb(var(--secondary-rgb))] flex justify-center items-center rounded-lg">
            <div
              className="w-full h-[380px]"
              style={{
                backgroundImage: `url(${URL.BANNER_SIGN_UP})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="lg:col-span-6 text-center px-6 lg:px-20 py-10">
            <h1 className="text-[24px] font-bold mb-4">
              {translate("su-01")}
            </h1>
            <h1 className="text-[16px] text-[rgb(var(--primary-rgb))] font-light mb-4">
              {translate("su-02")}
            </h1>
            <div className="flex flex-row justify-center items-center gap-x-4">
              <div className="w-full flex items-start flex-col mt-4">
                <h1 className="text-[16px] mb-2">{translate("su-03")}</h1>
                <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                  <span className="flex items-center pl-1">
                    <PersonOutlineIcon className="px-2" />
                  </span>
                  <input
                    type="text"
                    placeholder={translate("su-04")}
                    className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
              <div className="w-full flex items-start flex-col mt-4">
                <h1 className="text-[16px] mb-2">{translate("su-05")}</h1>
                <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                  <span className="flex items-center pl-1">
                    <PortraitIcon className="px-2" />
                  </span>
                  <input
                    type="text"
                    placeholder={translate("su-06")}
                    className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">{translate("su-07")}</h1>
              <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <EmailOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder={translate("su-08")}
                  className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">{translate("su-09")}</h1>
              <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <LockOpenOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder={translate("su-10")}
                  className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">{translate("su-11")}</h1>
              <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <LockOpenOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder={translate("su-11")}
                  className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="login-button mt-8 mb-5 w-full h-10 bg-[rgb(var(--tertiary-rgb))] rounded-lg font-bold text-[16px]"
              style={{ color: "white" }}
            >
              {translate("su-12")}
            </button>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-[14px] text-[rgb(var(--primary-rgb))] mr-2">
                {translate("su-13")}
              </h1>
              <Link href={{
                pathname: '/sign-in',
              }}>
                <h1
                  className="text-[14px] text-[rgb(var(--tertiary-rgb))] cursor-pointer font-bold"
                >
                  {translate("su-14")}
                </h1></Link>
            </div>
            <>
              <style>{`
                                .semi-divider-with-text::before, .semi-divider-with-text::after {
                                    border-bottom: 2px solid rgb(var(--primary-rgb));
                                }
                        `}</style>
              <Divider>
                <h1 className="text-[12px] text-[rgb(var(--primary-rgb))] font-bold mr-2 ml-2">
                  {translate("su-15")}
                </h1>
              </Divider>
            </>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="span-col-1 mt-8 mb-5 w-full h-10 bg-[rgb(var(--quaternary-rgb))] rounded-lg flex justify-center items-center"
                style={{ color: "black" }}
              >
                <div className="flex">
                  <GoogleIcon />
                  <h1 className="text-[14px] text-[rgb(var(--primary-rgb))] ml-2 font-semibold">
                    {translate("su-16")} Google
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
