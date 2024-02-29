"use client";

import React from "react";
import Face5Icon from '@mui/icons-material/Face5';
import HttpsIcon from '@mui/icons-material/Https';

export default function SignInAdmin({handleSignIn}: {handleSignIn: any}) {
  return (
    <div className="w-[400px] border border-[rgb(var(--tertiary-rgb))] text-center p-10 rounded-lg">
      <h1 className="text-[24px] font-bold mb-4">Đăng nhập</h1>
      <h1 className="text-[16px] text-[rgb(var(--primary-rgb))] font-light mb-4">
        Trang quản trị của ECOKA
      </h1>
      <div className="w-full flex items-start flex-col mt-4">
        <h1 className="text-[16px] mb-2">Tên tài khoản</h1>
        <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
          <span className="flex items-center pl-1">
            <Face5Icon className="px-2" />
          </span>
          <input
            type="text"
            placeholder="Nhập tên tài khoản"
            className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
          />
        </div>
      </div>
      <div className="w-full flex items-start flex-col mt-4 mb-6">
        <h1 className="text-[16px] mb-2">Mật khẩu</h1>
        <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
          <span className="flex items-center pl-1">
            <HttpsIcon className="px-2" />
          </span>
          <input
            type="text"
            placeholder="Nhập mật khẩu"
            className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
          />
        </div>
      </div>
      <button
        type="submit"
        className="login-button mt-8 mb-5 w-full h-10 bg-[rgb(var(--tertiary-rgb))] rounded-lg font-bold text-[16px]"
        style={{ color: "white" }}
        onClick={() => handleSignIn('admin', 'admin')}
      >
        ĐĂNG NHẬP
      </button>
    </div>
  );
}
