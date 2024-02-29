"use client";

import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  CardMedia,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut, useSession } from "next-auth/react";
import { URL } from "@/constant/url";
import LanguageChanger from "../translation/language-changer";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ translate }: { translate: any }) {
  const { data } = useSession();

  useEffect(() => { }, [])

  return (
    <div className="lg:w-3/4 flex justify-between items-center py-10">
      <Link href={{
        pathname: '/'
      }}>
        <CardMedia
          sx={{ width: 140, height: 50, borderRadius: "10px" }}
          image={URL.ECOKA_LOGO_SQUARE}
          className="cursor-pointer"
          title="card"
        />
      </Link>
      <div className={`mx-10 flex gap-x-10`}>
        <Button
          className="!text-[16px] !text-gray-700 !hidden lg:!block"
        >
          <Link href={{
            pathname: '/'
          }}>
            {
              translate('header-tab-home')
            }
          </Link>
        </Button>
        <Button
          className="!text-[16px] !text-gray-700 !hidden lg:!block"
        >
          <Link href={{
            pathname: '/collection'
          }}>
            {
              translate('header-tab-collection')
            }
          </Link>
        </Button>
        <Button
          className="!text-[16px] !text-gray-700 !hidden lg:!block"
        >
          <Link href={{
            pathname: '/about'
          }}>
            {
              translate('header-tab-about')
            }
          </Link>
        </Button>
        <Button
          className="!text-[16px] !text-gray-700 !hidden lg:!block"
        >
          <Link href={{
            pathname: '/blog'
          }}>
            {
              translate('header-tab-blog')
            }
          </Link>
        </Button>
      </div>
      <div className="w-[40px] lg:w-[180px]"></div>
      <div className="flex justity-center items-center">
        <Avatar
          alt="avatar"
          src={translate('lang') === 'vi' ? URL.VN_FLAG : translate('lang') === 'en' ? URL.EN_FLAG : URL.JA_FLAG}
          sx={{ width: 20, height: 20, marginRight: 1 }}
        />{" "}
        <LanguageChanger />
      </div>
      <div className="ml-6 lg:hidden cursor-pointer">
        <MenuIcon />
      </div>
      {data?.user ? (
        <div className="flex justify-center items-center">
          <h1 className="text-[16px] mr-5">Hi, {data?.user?.name}</h1>{" "}
          <div onClick={() => signOut()} className="mr-5 cursor-pointer">
            <LogoutIcon />
          </div>
        </div>
      ) : (
        <Link href={{
          pathname: '/sign-in'
        }}
          className="hidden lg:block"
        >
          <button
            className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center"
          >
            <LoginIcon className="mr-2" fontSize="small" /> {
              translate('header-sign-in')
            }
          </button>
        </Link>
      )}
    </div>
  );
}
