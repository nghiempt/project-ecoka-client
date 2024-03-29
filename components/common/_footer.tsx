"use client";

import React from "react";
import { Avatar } from "@mui/material";
import { URL } from "@/constant/url";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { STRING } from "@/constant/string";

export default function Footer({ translate }: { translate: any }) {
  return (
    <div className="w-full bg-[rgb(24,21,19)] mt-10 py-6 flex justify-center items-center">
      <div className="w-3/4 flex flex-col">
        <Avatar alt="avatar" src={URL.ECOKA_LOGO_CIRCLE} className="!hidden lg:!block" />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between items-start">
          <div className="w-[400px] lg:w-[600px] mb-8 lg:my-10 lg:my-0">
            <h6 className="text-[14px] text-white px-10 lg:px-0">
              {translate("footer-desc")}
            </h6>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[rgb(47,44,42)] flex border border-gray-500 rounded-lg pl-2 pr-10 mr-2">
              <span className="flex items-center pl-1">
                <EmailIcon className="text-gray-200" />
              </span>
              <input
                type="text"
                placeholder={translate("footer-email")}
                className="pl-2 py-2 w-full bg-[rgb(47,44,42)] placeholder-gray-500 font-medium text-gray-200 outline-none border-transparent focus:border-transparent focus:ring-0"
              />
            </div>
            <button className="bg-[rgb(var(--tertiary-rgb))] !text-white text-[12px] lg:text-[14px] py-[10px] px-6 lg:px-8 rounded-lg font-semibold">
              {translate("footer-register")}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-6">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold mb-2 mt-4">
              {translate("footer-11")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-12")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-13")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-14")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-15")}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold mb-2 mt-4">
              {translate("footer-21")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-22")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-23")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-24")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-25")}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold mb-2 mt-4">
              {translate("footer-31")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-32")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-33")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-34")}
            </h1>
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-2">
              {translate("footer-35")}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold mb-2 mt-4">
              {translate("footer-41")}
            </h1>
            <div className="flex justify-start items-center mt-2">
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-8 h-8 mr-2 flex justify-center items-center cursor-pointer">
                <FacebookIcon className="text-white" />
              </div>
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-8 h-8 mx-2 flex justify-center items-center cursor-pointer">
                <YouTubeIcon className="text-white" />
              </div>
              <div className="bg-[rgb(var(--secondary-rgb))] rounded-xl w-8 h-8 mx-2 flex justify-center items-center cursor-pointer">
                <InstagramIcon className="text-white" />
              </div>
            </div>
            <div className="flex justify-start items-start mb-2 mt-4">
              <EmailOutlinedIcon className="text-white" />
              <h1 className="text-[14px] text-gray-300 font-bold ml-2">{STRING.ECOKA_EMAIL}</h1>
            </div>
            <div className="flex justify-start items-start mb-2 mt-2">
              <TtyOutlinedIcon className="text-white" />
              <h1 className="text-[14px] text-gray-300 font-bold ml-2">{STRING.ECOKA_PHONE}</h1>
            </div>
            <div className="flex justify-start items-start mb-2 mt-2 text-center lg:text-left">
              <FmdGoodOutlinedIcon className="text-white !hidden lg:!block" />
              <h1 className="text-[14px] text-gray-300 font-bold ml-2">{translate("footer-address")}</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center mt-[40px] border-t border-gray-700 pt-10 pb-6">
          <div className="w-full text-white text-[14px] flex items-center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="avatar"
                src={URL.VI_FLAG}
                sx={{ width: 20, height: 20 }}
              />
              <span style={{ marginLeft: 8 }}>{STRING.VN}</span>
            </div>
            <div className="w-[1.5px] h-[16px] bg-gray-700 mx-4"></div>
            <p>{STRING.COPYRIGHT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
